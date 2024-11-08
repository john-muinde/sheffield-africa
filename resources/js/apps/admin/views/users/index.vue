<template>
  <div class="layout-px-spacing">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Users</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>View Users</span>
                </li>
              </ol>
            </nav>
          </div>
        </li>
      </ul>
    </teleport>

    <div class="row layout-top-spacing">
      <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
        <div class="panel br-6 p-0">
          <div class="panel-heading pb-0">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                <h3><b>View Users</b></h3>
              </div>
            </div>
          </div>

          <div class="custom-table">
            <v-client-table :data="users" :columns="columns" :options="table_option">
              <template #actions="props">
                <router-link :to="{ name: 'users.edit', params: { id: props.row.id } }" class="badge bg-info"
                  data-bs-toggle="tooltip" data-bs-placement="top">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-edit-2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </router-link>

                <a href="javascript:;" @click.prevent="confirmDeleteUser(props.row.id)" class="ms-2 badge bg-danger"
                  data-bs-toggle="tooltip" data-bs-placement="top">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-trash">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </a>
              </template>
            </v-client-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "ant-design-vue";
import useUsers from "@/composables/users";
import { useMeta } from "../../composables/use-meta";

useMeta({ title: "View User" });

const { users, getUsers, deleteUser } = useUsers();

onMounted(() => {
  getUsers();
});


const columns = ref([
  "id",
  "name",
  "email",
  "created_at",
  "actions",
]);

const table_option = ref({
  perPage: 10,
  perPageValues: [5, 10, 20, 50],
  skin: "table table-hover table-striped",
  columnsClasses: { actions: "actions text-center" },
  pagination: { nav: "scroll", chunk: 5 },
  texts: {
    count: "Showing {from} to {to} of {count}",
    filter: "",
    filterPlaceholder: "Search...",
    limit: "Results:",
  },
  sortable: ["id", "name", "is_published"],
  sortIcon: {
    base: "sort-icon-none",
    up: "sort-icon-asc",
    down: "sort-icon-desc",
  },
  resizableColumns: false,
});

const confirmDeleteUser = (id) => {
  Modal.confirm({
    title: "Are you sure?",
    content: "You won't be able to revert this action!",
    okText: "Yes, delete it!",
    okType: "danger",
    cancelText: "No, cancel",
    onOk() {
      deleteUser(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};
</script>