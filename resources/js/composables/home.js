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

    const validationErrors = ref({});

    const getStats = async () => {
        try {
            const queryParameters = new URLSearchParams();
            queryParameters.append("start_date", dates.value.start_date);
            queryParameters.append("end_date", dates.value.end_date);
            const response = await apiRequest("get", `/api/dashboard-stats`);
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
