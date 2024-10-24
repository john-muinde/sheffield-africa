import { ref, inject } from "vue";
import { useRouter } from "vue-router";

export default function useClients() {
    const clients = ref([]);
    const clientList = ref([]);
    const client = ref({
        name: "",
        phone: "",
        email: "",
        address: "",
        // main_image: "",
        is_published: "",
        description: "",
    });

    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject("$swal");

    const getClients = async (
        page = 1,
        search_id = "",
        search_title = "",
        search_global = "",
        order_column = "created_at",
        order_direction = "desc"
    ) => {
        axios
            .get(
                "/api/clients?page=" +
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
                clients.value = response.data;
            });
    };

    const getClient = async (id) => {
        axios.get("/api/clients/" + id).then((response) => {
            client.value = response.data.data;
        });
    };

    const storeClient = async (client) => {
        console.log(client);
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in client) {
            if (client.hasOwnProperty(item)) {
                serializedPost.append(item, client[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        console.log(serializedPost);

        axios
            .post("/api/clients", serializedPost, config)
            .then((response) => {
                router.push({ name: "clients.create" });
                // Reset the form values
                client.name = null;
                client.phone = null;
                client.email = null;
                client.address = null;
                client.description = null;
                client.main_image = null;
                client.is_published = null;
                swal({
                    icon: "success",
                    title: "Client saved successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const updateClient = async (client) => {
        console.log(client);
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in client) {
            if (client.hasOwnProperty(item)) {
                serializedPost.append(item, client[item]);
            }
        }

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        console.log(serializedPost);

        axios
            .put("/api/clients/" + client.id, client)
            .then((response) => {
                router.push({ name: "clients.index" });
                swal({
                    icon: "success",
                    title: "Client updated successfully",
                });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (isLoading.value = false));
    };

    const deleteClient = async (id) => {
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
                    .delete("/api/clients/" + id)
                    .then((response) => {
                        getClients();
                        router.push({ name: "clients.index" });
                        swal({
                            icon: "success",
                            title: "Client deleted successfully",
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

    const getClientList = async () => {
        axios.get("/api/client-list").then((response) => {
            clientList.value = response.data.data;
        });
    };

    return {
        clientList,
        clients,
        client,
        getClients,
        getClientList,
        getClient,
        storeClient,
        updateClient,
        deleteClient,
        validationErrors,
        isLoading,
    };
}
