import { ref, inject } from "vue";
import { useRouter } from "vue-router";

export default function useGallery() {
    const gallerys = ref([]);
    const galleryList = ref([]);
    const gallery = ref({
        name: "",
        description: "",
        is_published: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getGallerys = async (
        page = 1,
        search_id = "",
        search_title = "",
        search_global = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        axios
            .get(
                "/api/gallerys?page=" +
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
                gallerys.value = response.data;
            });
    };

    const getGallery = async (id) => {
        axios.get("/api/gallerys/" + id).then((response) => {
            gallery.value = response.data.data;
        });
    };

    const storeGallery = async (gallery, files) => {
        if (isLoading.value) return;

        console.log(gallery);

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            serializedPost.append("gallery_gallery[" + i + "]", file);
        }

        for (let item in gallery) {
            if (gallery.hasOwnProperty(item)) {
                serializedPost.append(item, gallery[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axios
            .post("/api/gallerys", serializedPost, config)
            .then((response) => {
                router.push({ name: "gallerys.create" });
                // Reset the form values
                gallery.name = null;
                gallery.gallery_introduction = null;
                gallery.company_involvement = null;
                gallery.collaborations_and_partnership = null;
                gallery.main_image = null;
                gallery.gallery_gallery = null;

                swal({
                    icon: "success",
                    title: "Gallery saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateGallery = async (gallery, files) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                let file = files[i];
                serializedPost.append("gallery_gallery[" + i + "]", file);
            }
        }

        // for (let item in gallery) {
        //     if (gallery.hasOwnProperty(item)) {
        //         if (gallery.hasOwnProperty(item) && item !== 'categories') {
        //             serializedPost.append(item, gallery[item])
        //         }
        //     }
        // }

        for (let item in gallery) {
            if (gallery.hasOwnProperty(item) && item !== "categories") {
                let value = gallery[item];
                if (
                    value === null &&
                    (item === "weight" ||
                        item === "length" ||
                        item === "height" ||
                        item === "width" ||
                        item === "quantity" ||
                        item === "cost_price" ||
                        item === "retail_price")
                ) {
                    value = 0;
                }
                serializedPost.append(item, value);
            }
        }

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        serializedPost.append("_method", "put");

        console.log(serializedPost);

        await axios
            .post("/api/gallerys/" + gallery.id, serializedPost, config)
            .then((response) => {
                router.push({ name: "gallerys.index" });
                swal({
                    icon: "success",
                    title: "Gallery updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteGallery = async (id) => {
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
                axios
                    .delete("/api/gallerys/" + id)
                    .then((response) => {
                        getGallerys();
                        router.push({ name: "gallerys.index" });
                        swal({
                            icon: "success",
                            title: "Gallery deleted successfully",
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

    const deleteGalleryImage = async (id) => {
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
                axios
                    .delete("/api/gallery-images/" + id)
                    .then((response) => {
                        getGallerys();
                        //router.push({name: 'gallerys.index'})
                        router.go(0);
                        swal({
                            icon: "success",
                            title: "Image deleted successfully",
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

    const getGalleryList = async () => {
        axios.get("/api/gallery-list").then((response) => {
            galleryList.value = response.data.data;
        });
    };

    return {
        galleryList,
        gallerys,
        gallery,
        getGallerys,
        getGalleryList,
        getGallery,
        storeGallery,
        updateGallery,
        deleteGallery,
        deleteGalleryImage,
        validationErrors,
        isLoading,
    };
}
