<?php

namespace App\Http\Controllers;

use App\Models\Visitors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Jenssegers\Agent\Agent;
use Stevebauman\Location\Facades\Location;

class VisitorsController extends Controller
{
    public function index()
    {
        return view('admin.visitors');
    }

    public function pixelTracking(Request $request)
    {
        $validate = Validator::make([
            'tracking_id' => $request->query('tracking_id'),
        ], [
            'tracking_id' => 'required',
        ]);

        if ($validate->fails()) {
            return [
                'status' => 'error',
                'message' => 'Tracking ID is required',
            ];
        }

        $agent = new Agent();

        $trackingId = $request->query('tracking_id');
        $isNew = Visitors::where('tracking_id', $trackingId)->count() === 0;

        $ip = request()->getClientIp();
        $isDesktop = $agent->isDesktop();
        $browser = $agent->browser();
        $isRobot = $agent->isRobot();
        $robotName = $isRobot ? $agent->robot() : null;
        $platform = $agent->platform();
        $locationJson = Location::get($ip);

        $newData['tracking_id'] = $trackingId;
        $newData['is_new'] = $isNew;
        $newData['ip'] = $ip;
        $newData['is_desktop'] = $isDesktop;
        $newData['browser'] = $browser;
        $newData['platform'] = $platform;
        $newData['is_robot'] = $isRobot;
        $newData['robot_name'] = $robotName;
        $newData['location'] = $locationJson ? $locationJson->countryName : 'Unknown';

        Visitors::create($newData);

        return [
            'status' => 'success',
            'message' => 'Tracking ID is valid',
        ];
    }
}
