import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "../axiosInstance";

export default function useNewss() {
    const allNews = ref([]);
    const newsList = ref([]);
    const news = ref({
        name: "",
        type: "",
        content: "",
        is_published: "",
        main_image_path: "",
        file_path: "",
        url: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getNewss = async (
        page = 1,
        search_id = "",
        search_title = "",
        search_global = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        axiosInstance
            .get(
                "/api/news?page=" +
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
                allNews.value = response.data;
            });
    };

    const getNews = async (id) => {
        axiosInstance.get("/api/news/" + id).then((response) => {
            news.value = response.data.data;
        });
    };

    const storeNews = async (news) => {
        console.log(news);
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in news) {
            if (news.hasOwnProperty(item)) {
                serializedPost.append(item, news[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        console.log(serializedPost);

        axiosInstance
            .post("/api/news", serializedPost, config)
            .then((response) => {
                router.push({ name: "news.create" });
                // Reset the form values
                news.name = null;
                news.description = null;
                news.main_image_path = null;
                news.is_published = null;
                news.video = null;
                swal({
                    icon: "success",
                    title: "News saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateNews = async (news) => {
        console.log(news);
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in news) {
            if (news.hasOwnProperty(item)) {
                serializedPost.append(item, news[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        serializedPost.append("_method", "put");

        console.log(serializedPost);

        axiosInstance
            .post("/api/news/" + news.id, serializedPost, config)
            .then((response) => {
                router.push({ name: "news.index" });
                swal({
                    icon: "success",
                    title: "News updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteNews = async (id) => {
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
                    .delete("/api/news/" + id)
                    .then((response) => {
                        getNewss();
                        router.push({ name: "news.index" });
                        swal({
                            icon: "success",
                            title: "News deleted successfully",
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

    const getNewsList = async () => {
        axiosInstance.get("/api/news-list").then((response) => {
            newsList.value = response.data.data;
        });
    };

    return {
        newsList,
        newss,
        news,
        getNewss,
        getNewsList,
        getNews,
        storeNews,
        updateNews,
        deleteNews,
        validationErrors,
        isLoading,
    };
}
