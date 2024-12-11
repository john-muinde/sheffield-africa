import { ref } from 'vue';
import { apiRequest } from '../utils/api';
import { Modal } from 'ant-design-vue';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export default function useStats() {
    const stats = ref([]);
    const dates = ref({
        label: 'This Week',
        start_date: dayjs().startOf('week').format('YYYY-MM-DD'),
        end_date: dayjs().endOf('week').format('YYYY-MM-DD'),
    });

    const period = (start_date, end_date) => {
        // if difference of days is 6, then it is a week, else it is a month, else it is a year
        const start = dayjs(start_date);
        const end = dayjs(end_date);
        const days = end.diff(start, 'days');
        if (days <= 0) return 'day';
        if (days <= 7) return 'week';
        if (days <= 31) return 'month';
        return 'year';
    };

    const validationErrors = ref({});

    const getStats = async () => {
        try {
            const queryParameters = new URLSearchParams();
            queryParameters.append(
                'period',
                period(dates.value.start_date, dates.value.end_date),
            );
            queryParameters.append('start_date', dates.value.start_date);
            queryParameters.append('end_date', dates.value.end_date);
            const url = `/api/dashboard-stats?${queryParameters.toString()}`;
            const response = await apiRequest('get', url);
            stats.value = response;
            console.log(stats.value);
            return response;
        } catch (errors) {
            validationErrors.value = errors;
        }
    };

    const datePickerOnChange = (datesDayjs, datesStrings) => {
        if (!datesDayjs || !datesStrings || !datesStrings.length) return null;

        let label = presetRanges.find(
            (range) =>
                range.value[0].isSame(datesDayjs[0], 'day') &&
                range.value[1].isSame(datesDayjs[1], 'day'),
        );

        if (!label) {
            label = {
                label: `${dayjs(datesDayjs[0]).format(
                    'MMM D, YYYY',
                )} - ${dayjs(datesDayjs[1]).format('MMM D, YYYY')}`,
            };
        }

        dates.value = {
            label: label.label,
            start_date: datesStrings[0],
            end_date: datesStrings[1],
        };

        getStats();
    };

    const presetRanges = [
        { label: 'Today', value: [dayjs(), dayjs()] },
        {
            label: 'Yesterday',
            value: [dayjs().subtract(1, 'day'), dayjs().subtract(1, 'day')],
        },
        {
            label: 'This Week',
            value: [dayjs().startOf('week'), dayjs().endOf('week')],
        },
        {
            label: 'Last 7 Days',
            value: [dayjs().subtract(7, 'day'), dayjs()],
        },
        {
            label: 'This Month',
            value: [dayjs().startOf('month'), dayjs().endOf('month')],
        },
        {
            label: 'Last Month',
            value: [
                dayjs().subtract(1, 'months').startOf('month'),
                dayjs().subtract(1, 'months').endOf('month'),
            ],
        },
        {
            label: 'This Year',
            value: [dayjs().startOf('year'), dayjs().endOf('year')],
        },
        {
            label: 'Last Year',
            value: [
                dayjs().subtract(1, 'year').startOf('year'),
                dayjs().subtract(1, 'year').endOf('year'),
            ],
        },
    ];

    const showResetConfirm = () => {
        Modal.confirm({
            title: 'Do you want to reset the date filters?',
            content: `This will reset the date range to ${dates.value.label}`,
            onOk() {
                datePickerOnChange(
                    [dayjs().startOf('week'), dayjs().endOf('week')],
                    [
                        dayjs().startOf('week').format('YYYY-MM-DD'),
                        dayjs().endOf('week').format('YYYY-MM-DD'),
                    ],
                );
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    return {
        getStats,
        showResetConfirm,
        datePickerOnChange,
        presetRanges,
        stats,
        dates,
    };
}
