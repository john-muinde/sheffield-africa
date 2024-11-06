import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "../axiosInstance";

export default function useProducts() {
    const products = ref([]);
    const productList = ref([]);
    const product = ref({
        name: "",
        parent_id: "",
        description: "",
        is_published: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getProducts = async (
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
                "/api/products?page=" +
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
                products.value = response.data;
            });
    };

    const getProduct = async (id) => {
        axiosInstance.get("/api/products/" + id).then((response) => {
            product.value = response.data.data;
        });
    };

    const storeProduct = async (product, files) => {
        console.log(product);
        if (isLoading.value) return;

        console.log(product);

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();
        const categoryIds = product.categories.map((category) => category.id);

        serializedPost.append("categories", categoryIds);

        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            serializedPost.append("product_gallery[" + i + "]", file);
        }

        for (let item in product) {
            if (product.hasOwnProperty(item)) {
                if (product.hasOwnProperty(item) && item !== "categories") {
                    serializedPost.append(item, product[item]);
                }
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axiosInstance
            .post("/api/products", serializedPost, config)
            .then((response) => {
                router.push({ name: "products.create" });
                // Reset the form values
                product.name = null;
                product.description = null;
                product.parent_id = null;
                product.is_published = null;
                product.model_number = null;
                product.sku = null;
                product.quantity = null;
                product.cost_price = null;
                product.retail_price = null;
                product.weight = null;
                product.length = null;
                product.width = null;
                product.height = null;
                product.short_description = null;
                product.technical_specification = null;
                product.terms_of_operation = null;
                product.main_image = null;
                product.product_gallery = null;
                product.document = null;

                swal({
                    icon: "success",
                    title: "Product saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateProduct = async (product, files) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        const categoryIds = product.categories.map((category) => category.id);

        console.log(serializedPost);

        serializedPost.append("categories", categoryIds);

        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                let file = files[i];
                serializedPost.append("product_gallery[" + i + "]", file);
            }
        }

        // for (let item in product) {
        //     if (product.hasOwnProperty(item)) {
        //         if (product.hasOwnProperty(item) && item !== 'categories') {
        //             serializedPost.append(item, product[item])
        //         }
        //     }
        // }

        for (let item in product) {
            if (product.hasOwnProperty(item) && item !== "categories") {
                let value = product[item];
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
            .post("/api/products/" + product.id, serializedPost, config)
            .then((response) => {
                router.push({ name: "products.index" });
                swal({
                    icon: "success",
                    title: "Product updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteProduct = async (id) => {
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
                    .delete("/api/products/" + id)
                    .then((response) => {
                        getProducts();
                        router.push({ name: "products.index" });
                        swal({
                            icon: "success",
                            title: "Product deleted successfully",
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

    const deleteProductImage = async (id) => {
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
                    .delete("/api/product-images/" + id)
                    .then((response) => {
                        getProducts();
                        //router.push({name: 'products.index'})
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

    const getProductList = async () => {
        axiosInstance.get("/api/product-list").then((response) => {
            productList.value = response.data.data;
        });
    };

    return {
        productList,
        products,
        product,
        getProducts,
        getProductList,
        getProduct,
        storeProduct,
        updateProduct,
        deleteProduct,
        deleteProductImage,
        validationErrors,
        isLoading,
    };
}
