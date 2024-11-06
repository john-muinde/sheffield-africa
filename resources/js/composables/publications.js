import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "../axiosInstance";

export default function usePublications() {
    const publications = ref([]);
    const publicationList = ref([]);
    const publication = ref({
        name: "",
        parent_id: "",
        description: "",
        is_published: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getPublications = async (
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
                "/api/publications?page=" +
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
                publications.value = response.data;
            });
    };

    const getPublication = async (id) => {
        axiosInstance.get("/api/publications/" + id).then((response) => {
            publication.value = response.data.data;
        });
    };

    const storePublication = async (publication, files) => {
        if (isLoading.value) return;

        console.log(publication);

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in publication) {
            if (publication.hasOwnProperty(item)) {
                if (publication.hasOwnProperty(item)) {
                    serializedPost.append(item, publication[item]);
                }
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axiosInstance
            .post("/api/publications", serializedPost, config)
            .then((response) => {
                router.push({ name: "publications.create" });
                // Reset the form values
                publication.name = null;
                publication.content = null;
                publication.type = null;
                publication.is_published = null;
                publication.main_image = null;

                swal({
                    icon: "success",
                    title: "Publication saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updatePublication = async (publication, files) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in publication) {
            if (publication.hasOwnProperty(item)) {
                if (publication.hasOwnProperty(item)) {
                    serializedPost.append(item, publication[item]);
                }
            }
        }

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        serializedPost.append("_method", "put");

        console.log(serializedPost);

        await axiosInstance
            .post("/api/publications/" + publication.id, serializedPost, config)
            .then((response) => {
                router.push({ name: "publications.index" });
                swal({
                    icon: "success",
                    title: "Publication updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deletePublication = async (id) => {
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
                    .delete("/api/publications/" + id)
                    .then((response) => {
                        getPublications();
                        router.push({ name: "publications.index" });
                        swal({
                            icon: "success",
                            title: "Publication deleted successfully",
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

    const getPublicationList = async () => {
        axiosInstance.get("/api/publication-list").then((response) => {
            publicationList.value = response.data.data;
        });
    };

    return {
        publicationList,
        publications,
        publication,
        getPublications,
        getPublicationList,
        getPublication,
        storePublication,
        updatePublication,
        deletePublication,

        validationErrors,
        isLoading,
    };
}
