import { ref, inject } from "vue";
import { useRouter } from "vue-router";

export default function useBlogCategories() {
    const blogCategories = ref([]);
    const blogCategoryList = ref([]);
    const blogCategory = ref({
        name: "",
        // main_image: "",
        is_published: "",
        description: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getBlogCategories = async (
        page = 1,
        search_id = "",
        search_title = "",
        search_global = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        axios
            .get(
                "/api/blogCategories?page=" +
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
                blogCategories.value = response.data;
            });
    };

    const getBlogCategory = async (id) => {
        axios.get("/api/blogCategories/" + id).then((response) => {
            blogCategory.value = response.data.data;
        });
    };

    const storeBlogCategory = async (blogCategory) => {
        console.log(blogCategory);
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in blogCategory) {
            if (blogCategory.hasOwnProperty(item)) {
                serializedPost.append(item, blogCategory[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        console.log(serializedPost);

        axios
            .post("/api/blogCategories", serializedPost, config)
            .then((response) => {
                router.push({ name: "blogCategories.create" });
                // Reset the form values
                blogCategory.name = null;
                blogCategory.description = null;
                blogCategory.main_image = null;
                blogCategory.is_published = null;
                swal({
                    icon: "success",
                    title: "Blog Category saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateBlogCategory = async (blogCategory) => {
        console.log(blogCategory);
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in blogCategory) {
            if (blogCategory.hasOwnProperty(item)) {
                serializedPost.append(item, blogCategory[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        console.log(serializedPost);

        axios
            .put("/api/blogCategories/" + blogCategory.id, blogCategory)
            .then((response) => {
                router.push({ name: "blogCategories.index" });
                swal({
                    icon: "success",
                    title: "Blog Category updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteBlogCategory = async (id) => {
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
                    .delete("/api/blogCategories/" + id)
                    .then((response) => {
                        getBlogCategories();
                        router.push({ name: "blogCategories.index" });
                        swal({
                            icon: "success",
                            title: "Blog Category deleted successfully",
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

    const getBlogCategoryList = async () => {
        axios.get("/api/blogCategory-list").then((response) => {
            blogCategoryList.value = response.data.data;
        });
    };

    return {
        blogCategoryList,
        blogCategories,
        blogCategory,
        getBlogCategories,
        getBlogCategoryList,
        getBlogCategory,
        storeBlogCategory,
        updateBlogCategory,
        deleteBlogCategory,
        validationErrors,
        isLoading,
    };
}
