import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "../axiosInstance";

export default function useSolutions() {
    const solutions = ref([]);
    const solutionList = ref([]);
    const solution = ref({
        name: "",
        parent_id: "",
        description: "",
        is_published: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getSolutions = async (
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
                "/api/solutions?page=" +
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
                solutions.value = response.data;
            });
    };

    const getSolution = async (id) => {
        axiosInstance.get("/api/solutions/" + id).then((response) => {
            solution.value = response.data.data;
        });
    };

    const storeSolution = async (solution, files) => {
        if (isLoading.value) return;

        console.log(solution);

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();
        const categoryIds = solution.categories.map((category) => category.id);

        serializedPost.append("categories", categoryIds);

        for (let item in solution) {
            if (solution.hasOwnProperty(item)) {
                if (solution.hasOwnProperty(item) && item !== "categories") {
                    serializedPost.append(item, solution[item]);
                }
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axiosInstance
            .post("/api/solutions", serializedPost, config)
            .then((response) => {
                router.push({ name: "solutions.create" });
                // Reset the form values
                solution.name = null;
                solution.solution_category = null;
                solution.description = null;
                solution.is_published = null;
                solution.main_image = null;

                swal({
                    icon: "success",
                    title: "Solution saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateSolution = async (solution, files) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        const categoryIds = solution.categories.map((category) => category.id);

        serializedPost.append("categories", categoryIds);

        for (let item in solution) {
            if (solution.hasOwnProperty(item)) {
                if (solution.hasOwnProperty(item) && item !== "categories") {
                    serializedPost.append(item, solution[item]);
                }
            }
        }

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };

        serializedPost.append("_method", "put");

        console.log(serializedPost);

        await axiosInstance
            .post("/api/solutions/" + solution.id, serializedPost, config)
            .then((response) => {
                router.push({ name: "solutions.index" });
                swal({
                    icon: "success",
                    title: "Solution updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteSolution = async (id) => {
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
                    .delete("/api/solutions/" + id)
                    .then((response) => {
                        getSolutions();
                        router.push({ name: "solutions.index" });
                        swal({
                            icon: "success",
                            title: "Solution deleted successfully",
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

    const deleteSolutionImage = async (id) => {
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
                    .delete("/api/solution-images/" + id)
                    .then((response) => {
                        getSolutions();
                        //router.push({name: 'solutions.index'})
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

    const getSolutionList = async () => {
        axiosInstance.get("/api/solution-list").then((response) => {
            solutionList.value = response.data.data;
        });
    };

    return {
        solutionList,
        solutions,
        solution,
        getSolutions,
        getSolutionList,
        getSolution,
        storeSolution,
        updateSolution,
        deleteSolution,
        deleteSolutionImage,
        validationErrors,
        isLoading,
    };
}
