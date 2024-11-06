import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "../axiosInstance";

export default function useEvents() {
    const events = ref([]);
    const eventList = ref([]);
    const event = ref({
        name: "",
        // main_image: "",
        is_published: "",
        description: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getEvents = async (
        page = 1,
        search_id = "",
        search_title = "",
        search_global = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        axiosInstance
            .get(
                "/api/events?page=" +
                    page +
                    "&search_id=" +
                    search_id +
                    "&search_title=" +
                    search_title +
                    "&search_global=" +
                    search_global +
                    "&order_column=" +
                    order_column +
                    "&order_direction=" +
                    order_direction
            )
            .then((response) => {
                events.value = response.data;
            });
    };

    const getEvent = async (id) => {
        axiosInstance.get("/api/events/" + id).then((response) => {
            event.value = response.data.data;
        });
    };

    const storeEvent = async (event) => {
        console.log(event);
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in event) {
            if (event.hasOwnProperty(item)) {
                serializedPost.append(item, event[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        console.log(serializedPost);
        const token = localStorage.getItem("token");
        if (token) {
            axiosInstance.defaults.headers.common["Authorization"] =
                "Bearer " + token;
        }
        axiosInstance
            .post("/api/events", serializedPost, config)
            .then((response) => {
                router.push({ name: "events.create" });
                // Reset the form values
                event.name = null;
                event.location = null;
                event.startDate = null;
                event.endDate = null;
                event.description = null;
                event.main_image = null;
                event.is_published = null;
                swal({
                    icon: "success",
                    title: "Event saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateEvent = async (event) => {
        console.log(event);
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in event) {
            if (event.hasOwnProperty(item)) {
                serializedPost.append(item, event[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        console.log(serializedPost);

        axiosInstance
            .put("/api/events/" + event.id, event)
            .then((response) => {
                router.push({ name: "events.index" });
                swal({
                    icon: "success",
                    title: "Event updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteEvent = async (id) => {
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this action!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            confirmButtonColor: "#ef4444",
            timer: 20000,
            timerProgressBar: true,
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance
                    .delete("/api/events/" + id)
                    .then((response) => {
                        getEvents();
                        router.push({ name: "events.index" });
                        swal({
                            icon: "success",
                            title: "Event deleted successfully",
                        });
                    })
                    .catch((error) => {
                        swal({
                            icon: "error",
                            title: "Something went wrong",
                        });
                    });
            }
        });
    };

    const getEventList = async () => {
        axiosInstance.get("/api/event-list").then((response) => {
            eventList.value = response.data.data;
        });
    };

    return {
        eventList,
        events,
        event,
        getEvents,
        getEventList,
        getEvent,
        storeEvent,
        updateEvent,
        deleteEvent,
        validationErrors,
        isLoading,
    };
}
