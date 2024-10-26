import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "../axiosInstance";

export default function useVideos() {
    const videos = ref([]);
    const videoList = ref([]);
    const video = ref({
        name: "",
        parent_id: "",
        description: "",
        is_published: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getVideos = async (
        page = 1,
        search_id = "",
        search_title = "",
        search_parent_id = "",
        search_global = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        axiosInstance
            .get(
                "/api/videos?page=" +
                    page +
                    "&search_id=" +
                    search_id +
                    "&search_title=" +
                    search_title +
                    "&search_parent_id=" +
                    search_parent_id +
                    "&search_global=" +
                    search_global +
                    "&order_column=" +
                    order_column +
                    "&order_direction=" +
                    order_direction
            )
            .then((response) => {
                videos.value = response.data;
            });
    };

    const getVideo = async (id) => {
        axiosInstance.get("/api/videos/" + id).then((response) => {
            video.value = response.data.data;
        });
    };

    const storeVideo = async (video, files) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in video) {
            if (video.hasOwnProperty(item)) {
                if (video.hasOwnProperty(item)) {
                    serializedPost.append(item, video[item]);
                }
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axiosInstance
            .post("/api/videos", serializedPost, config)
            .then((response) => {
                router.push({ name: "videos.create" });
                // Reset the form values
                video.name = null;
                video.content = null;
                video.type = null;
                video.is_published = null;
                video.is_published = null;
                video.shown_in_about_us = null;

                swal({
                    icon: "success",
                    title: "Video saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateVideo = async (video, files) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in video) {
            if (video.hasOwnProperty(item)) {
                if (video.hasOwnProperty(item)) {
                    serializedPost.append(item, video[item]);
                }
            }
        }

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        serializedPost.append("_method", "put");

        console.log(serializedPost);

        await axiosInstance
            .post("/api/videos/" + video.id, serializedPost, config)
            .then((response) => {
                router.push({ name: "videos.index" });
                swal({
                    icon: "success",
                    title: "Video updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteVideo = async (id) => {
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
                    .delete("/api/videos/" + id)
                    .then((response) => {
                        getVideos();
                        router.push({ name: "videos.index" });
                        swal({
                            icon: "success",
                            title: "Video deleted successfully",
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

    const getVideoList = async () => {
        axiosInstance.get("/api/video-list").then((response) => {
            videoList.value = response.data.data;
        });
    };

    return {
        videoList,
        videos,
        video,
        getVideos,
        getVideoList,
        getVideo,
        storeVideo,
        updateVideo,
        deleteVideo,

        validationErrors,
        isLoading,
    };
}
