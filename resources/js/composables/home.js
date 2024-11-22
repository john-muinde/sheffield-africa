import { ref } from "vue";
import { apiRequest } from "../utils/api";
import moment from "moment/moment";

export default function useStats() {
    const stats = ref([]);
    const dates = ref({
        label: "This Week",
        start_date: moment().startOf("week").format("YYYY-MM-DD"),
        end_date: moment().endOf("week").format("YYYY-MM-DD"),
    });

    const period = (start_date, end_date) => {
        // if difference of days is 6, then it is a week, else it is a month, else it is a year
        const start = moment(start_date);
        const end = moment(end_date);
        const days = end.diff(start, "days");
        if (days <= 0) return "day";
        if (days <= 7) return "week";
        if (days <= 31) return "month";
        return "year";
    };

    const validationErrors = ref({});

    const getStats = async () => {
        try {
            console.log("Loading data with...", dates.value);
            const queryParameters = new URLSearchParams();
            queryParameters.append(
                "period",
                period(dates.value.start_date, dates.value.end_date)
            );
            queryParameters.append("start_date", dates.value.start_date);
            queryParameters.append("end_date", dates.value.end_date);
            const url = `/api/dashboard-stats?${queryParameters.toString()}`;
            console.log("URL", url);
            const response = await apiRequest("get", url);
            stats.value = response;
            return response;
        } catch (errors) {
            validationErrors.value = errors;
        }
    };

    const datePickerOnChange = (obj) => {
        if (!obj) return;
        dates.value = obj;
    };

    return {
        getStats,
        datePickerOnChange,
        stats,
        dates,
    };
}
