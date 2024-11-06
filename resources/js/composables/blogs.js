import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "../axiosInstance";

export default function useBlogs() {
    const blogs = ref([]);
    const blogList = ref([]);
    const blog = ref({
        name: "",
        parent_id: "",
        description: "",
        is_published: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getBlogs = async (
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
                "/api/blogs?page=" +
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
                blogs.value = response.data;
            });
    };

    const getBlog = async (id) => {
        axiosInstance.get("/api/blogs/" + id).then((response) => {
            blog.value = response.data.data;
        });
    };

    const storeBlog = async (blog, files) => {
        if (isLoading.value) return;

        console.log(blog);

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();
        const categoryIds = blog.categories.map((category) => category.id);

        serializedPost.append("categories", categoryIds);

        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            serializedPost.append("blog_gallery[" + i + "]", file);
        }

        for (let item in blog) {
            if (blog.hasOwnProperty(item)) {
                if (blog.hasOwnProperty(item) && item !== "categories") {
                    serializedPost.append(item, blog[item]);
                }
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axiosInstance
            .post("/api/blogs", serializedPost, config)
            .then((response) => {
                router.push({ name: "blogs.create" });
                // Reset the form values
                blog.name = null;
                blog.description = null;
                blog.parent_id = null;
                blog.is_published = null;
                blog.model_number = null;
                blog.sku = null;
                blog.quantity = null;
                blog.cost_price = null;
                blog.retail_price = null;
                blog.weight = null;
                blog.length = null;
                blog.width = null;
                blog.height = null;
                blog.short_description = null;
                blog.technical_specification = null;
                blog.terms_of_operation = null;
                blog.main_image = null;
                blog.blog_gallery = null;
                blog.document = null;

                swal({
                    icon: "success",
                    title: "Blog saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateBlog = async (blog, files) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        const categoryIds = blog.categories.map((category) => category.id);

        console.log(serializedPost);

        serializedPost.append("categories", categoryIds);

        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                let file = files[i];
                serializedPost.append("blog_gallery[" + i + "]", file);
            }
        }
        // }

        for (let item in blog) {
            if (blog.hasOwnProperty(item) && item !== "categories") {
                let value = blog[item];
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

        await axiosInstance
            .post("/api/blogs/" + blog.id, serializedPost, config)
            .then((response) => {
                router.push({ name: "blogs.index" });
                swal({
                    icon: "success",
                    title: "Blog updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteBlog = async (id) => {
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
                    .delete("/api/blogs/" + id)
                    .then((response) => {
                        getBlogs();
                        router.push({ name: "blogs.index" });
                        swal({
                            icon: "success",
                            title: "Blog deleted successfully",
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

    const deleteBlogImage = async (id) => {
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
                    .delete("/api/blog-images/" + id)
                    .then((response) => {
                        getBlogs();
                        //router.push({name: 'blogs.index'})
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

    const getBlogList = async () => {
        axiosInstance.get("/api/blog-list").then((response) => {
            blogList.value = response.data.data;
        });
    };

    return {
        blogList,
        blogs,
        blog,
        getBlogs,
        getBlogList,
        getBlog,
        storeBlog,
        updateBlog,
        deleteBlog,
        deleteBlogImage,
        validationErrors,
        isLoading,
    };
}
