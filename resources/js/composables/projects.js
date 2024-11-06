import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import axiosInstance from "../axiosInstance";

export default function useProjects() {
    const projects = ref([]);
    const projectList = ref([]);
    const project = ref({
        name: "",
        parent_id: "",
        description: "",
        is_published: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getProjects = async (
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
                "/api/projects?page=" +
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
                projects.value = response.data;
            });
    };

    const getProject = async (id) => {
        axiosInstance.get("/api/projects/" + id).then((response) => {
            project.value = response.data.data;
        });
    };

    const storeProject = async (project, files) => {
        if (isLoading.value) return;

        console.log(project);

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();
        // const clientIds = project.clients.map(client => client.id);

        // serializedPost.append('clients', clientIds);

        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            serializedPost.append("project_gallery[" + i + "]", file);
        }

        for (let item in project) {
            if (project.hasOwnProperty(item)) {
                if (project.hasOwnProperty(item)) {
                    serializedPost.append(item, project[item]);
                }
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        console.log(serializedPost);

        axiosInstance
            .post("/api/projects", serializedPost, config)
            .then((response) => {
                router.push({ name: "projects.create" });
                // Reset the form values
                project.name = null;
                project.client = null;
                project.content = null;
                project.is_published = null;
                project.main_image = null;
                project.project_gallery = null;

                swal({
                    icon: "success",
                    title: "Project saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateProject = async (project, files) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        // const clientIds = project.clients.map(client => client.id);

        console.log(serializedPost);

        // serializedPost.append('clients', clientIds);

        if (files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                let file = files[i];
                serializedPost.append("project_gallery[" + i + "]", file);
            }
        }

        // for (let item in project) {
        //     if (project.hasOwnProperty(item)) {
        //         if (project.hasOwnProperty(item) && item !== 'clients') {
        //             serializedPost.append(item, project[item])
        //         }
        //     }
        // }

        for (let item in project) {
            if (project.hasOwnProperty(item) && item !== "clients") {
                let value = project[item];
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
            .post("/api/projects/" + project.id, serializedPost, config)
            .then((response) => {
                router.push({ name: "projects.index" });
                swal({
                    icon: "success",
                    title: "Project updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteProject = async (id) => {
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
                    .delete("/api/projects/" + id)
                    .then((response) => {
                        getProjects();
                        router.push({ name: "projects.index" });
                        swal({
                            icon: "success",
                            title: "Project deleted successfully",
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

    const deleteProjectImage = async (id) => {
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
                    .delete("/api/project-images/" + id)
                    .then((response) => {
                        getProjects();
                        //router.push({name: 'projects.index'})
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

    const getProjectList = async () => {
        axiosInstance.get("/api/project-list").then((response) => {
            projectList.value = response.data.data;
        });
    };

    return {
        projectList,
        projects,
        project,
        getProjects,
        getProjectList,
        getProject,
        storeProject,
        updateProject,
        deleteProject,
        deleteProjectImage,
        validationErrors,
        isLoading,
    };
}
