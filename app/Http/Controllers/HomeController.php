<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Post;
use App\Models\User;
use App\Models\Visitors;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('home');
    }

    /**
     * Get statistics with time series data
     *
     * @return array
     */
    public function getStats()
    {
        $period = request()->query('period', 'year'); // day, week, month, year

        // Set default date ranges based on period
        switch ($period) {
            case 'year':
                $start_date = Carbon::now()->startOfYear();
                $end_date = Carbon::now()->endOfYear();
                break;
            case 'month':
                $start_date = Carbon::now()->startOfMonth();
                $end_date = Carbon::now()->endOfMonth();
                break;
            case 'week':
                $start_date = Carbon::now()->startOfWeek();
                $end_date = Carbon::now()->endOfWeek();
                break;
            default: // day
                $start_date = Carbon::now()->startOfDay();
                $end_date = Carbon::now()->endOfDay();
                break;
        }

        // Override defaults if dates are provided
        $start_date = request()->query('start_date') ? Carbon::parse(request()->query('start_date')) : $start_date;
        $end_date = request()->query('end_date') ? Carbon::parse(request()->query('end_date')) : $end_date;

        // Configure grouping based on period
        $grouping = $this->getGroupingConfig($period);

        // Generate date periods
        $dates = [];
        $current = clone $start_date;
        while ($current <= $end_date) {
            $dates[] = $current->format($grouping['date_format']);
            $current->add($grouping['interval_period'], $grouping['interval_value']);
        }

        // Get visitors time series data
        $visitors_data = Visitors::select(
            DB::raw("DATE_FORMAT(created_at, '{$grouping['sql_format']}') as date"),
            DB::raw('COUNT(DISTINCT CASE WHEN is_new = 1 THEN tracking_id END) as new_visitors'),
            DB::raw('COUNT(DISTINCT CASE WHEN is_new = 0 THEN tracking_id END) as returning_visitors')
        )
            ->whereBetween('created_at', [$start_date, $end_date])
            ->groupBy(DB::raw("DATE_FORMAT(created_at, '{$grouping['sql_format']}')"))
            ->get()
            ->keyBy('date');

        // Format series data
        $new_visitors_data = [];
        $returning_visitors_data = [];
        $labels = [];

        foreach ($dates as $date) {
            $carbon_date = Carbon::createFromFormat($grouping['date_format'], $date);
            $labels[] = $carbon_date->format($grouping['label_format']);
            $new_visitors_data[] = isset($visitors_data[$date]) ? (int)$visitors_data[$date]->new_visitors : 0;
            $returning_visitors_data[] = isset($visitors_data[$date]) ? (int)$visitors_data[$date]->returning_visitors : 0;
        }

        // Get other stats with date range
        $stats = [
            'period' => $period,
            'date_range' => [
                'start' => $start_date->format('Y-m-d'),
                'end' => $end_date->format('Y-m-d')
            ],
            'total_clients' => Client::count(),
            'total_admins' => User::where('role', 1)->count(),
            'visitors' => Visitors::whereBetween('created_at', [$start_date, $end_date])
                ->select('tracking_id', 'is_new', 'platform', 'browser', 'is_desktop', 'location')
                ->distinct()
                ->get()
                ->unique(function ($item) {
                    return $item['tracking_id'] . '-' . $item['is_new'];
                }),
            'total_posts' => Post::whereBetween('created_at', [$start_date, $end_date])->count(),
            'series' => [
                'labels' => $labels,
                'datasets' => [
                    [
                        'name' => 'New Visitors',
                        'data' => $new_visitors_data
                    ],
                    [
                        'name' => 'Returning Visitors',
                        'data' => $returning_visitors_data
                    ]
                ]
            ]
        ];

        return $stats;
    }

    /**
     * Get grouping configuration based on period
     *
     * @param string $period
     * @return array
     */
    private function getGroupingConfig($period)
    {
        switch ($period) {
            case 'year':
                return [
                    'sql_format' => '%Y-%m',
                    'date_format' => 'Y-m',
                    'label_format' => 'M',
                    'interval_period' => 'month',
                    'interval_value' => 1
                ];
            case 'month':
                return [
                    'sql_format' => '%Y-%m-%d',
                    'date_format' => 'Y-m-d',
                    'label_format' => 'j',  // Day of the month without leading zeros
                    'interval_period' => 'day',
                    'interval_value' => 1
                ];
            case 'week':
                return [
                    'sql_format' => '%Y-%m-%d',
                    'date_format' => 'Y-m-d',
                    'label_format' => 'D',  // Mon, Tue, etc.
                    'interval_period' => 'day',
                    'interval_value' => 1
                ];
            default: // day
                return [
                    'sql_format' => '%Y-%m-%d %H:00',
                    'date_format' => 'Y-m-d H:00',
                    'label_format' => 'H:i',
                    'interval_period' => 'hour',
                    'interval_value' => 1
                ];
        }
    }
}
