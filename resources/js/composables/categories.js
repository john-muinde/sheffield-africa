import { ref } from "vue";
import { useRouter } from "vue-router";
import { apiRequest } from "../utils/api";
import { Modal } from "ant-design-vue";

export default function useCategories() {
    const categories = ref([]);
    const categoryList = ref([]);
    const categoryMainList = ref([]);
    const category = ref({
        name: "",
        description: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);

    const getCategories = async (
        page = 1,
        search_id = "",
        search_title = "",
        search_parent_id = "",
        search_global = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        try {
            const response = await apiRequest(
                "get",
                `/api/categories?page=${page}&search_id=${search_id}&search_title=${search_title}&search_parent_id=${search_parent_id}&search_global=${search_global}&order_column=${order_column}&order_direction=${order_direction}`
            );
            categories.value = response;
        } catch (errors) {
            validationErrors.value = errors;
        }
    };

    const getCategory = async (id) => {
        try {
            const response = await apiRequest("get", `/api/categories/${id}`);
            category.value = response;
        } catch (errors) {
            validationErrors.value = errors;
        }
    };

    const storeCategory = async (category) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        try {
            await apiRequest("post", "/api/categories", category);
            router.push({ name: "categories.index" });
            showToast("Category saved successfully", "success");
        } catch (errors) {
            validationErrors.value = errors;
        } finally {
            isLoading.value = false;
        }
    };

    const updateCategory = async (category) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        try {
            await apiRequest("put", `/api/categories/${category.id}`, category);
            router.push({ name: "categories.index" });
            showToast("Category updated successfully", "success");
        } catch (errors) {
            validationErrors.value = errors;
        } finally {
            isLoading.value = false;
        }
    };

    const deleteCategory = async (id) => {
        Modal.confirm({
            title: "Are you sure?",
            content: "You won't be able to revert this action!",
            okText: "Yes, delete it!",
            okType: "danger",
            cancelText: "No, cancel",
            onOk() {
                apiRequest("delete", `/api/categories/${id}`).then(() => {
                    getCategories();
                    router.push({ name: "categories.index" });
                    showToast("Category deleted successfully", "success");
                });
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    };

    const getCategoryList = async () => {
        try {
            const response = await apiRequest("get", "/api/category-list");
            categoryList.value = response;
        } catch (errors) {
            validationErrors.value = errors;
        }
    };

    const getMainCategoryList = async () => {
        try {
            const response = await apiRequest("get", "/api/category-main");
            categoryMainList.value = response;
        } catch (errors) {
            validationErrors.value = errors;
        }
    };

    const getSelectedCategoryList = async (id) => {
        try {
            const response = await apiRequest(
                "get",
                `/api/category-list/${id}`
            );
            categoryList.value = response;
        } catch (errors) {
            validationErrors.value = errors;
        }
    };

    return {
        categoryList,
        categoryMainList,
        categories,
        category,
        getCategories,
        getMainCategoryList,
        getSelectedCategoryList,
        getCategoryList,
        getCategory,
        storeCategory,
        updateCategory,
        deleteCategory,
        validationErrors,
        isLoading,
    };
}
