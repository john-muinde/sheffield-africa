<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:;">Brands</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <span>View Brands</span>
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
                                <h3><b>View Brands</b></h3>
                            </div>
                        </div>
                    </div>

                    <div class="custom-table">
                        <v-client-table :data="tableData" :columns="columns" :options="table_option" ref="tableData">
                            <template #brand_image="props">
                                <img :src="'/storage/' + props.row.main_image_path" class="rounded profile-img"
                                    alt="avatar" />
                            </template>
                            <template #is_published="props">
                                <span v-if="props.row.is_published === 1"
                                    class="badge badge-success inv-status">Published</span>
                                <span v-if="props.row.is_published !== 1" class="badge badge-danger inv-status">Not
                                    Published</span>
                            </template>

                            <template #actions="props">
                                <router-link :to="{ name: 'brands.edit', params: { id: props.row.id } }"
                                    class="badge bg-info" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-edit-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </router-link>

                                <a href="javascript:;" @click.prevent="deleteBrand(props.row.id)"
                                    class="ms-2 badge bg-danger" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-trash">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                        </path>
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
import { ref, onMounted, computed } from "vue";
import { useMeta } from "../../composables/use-meta";
useMeta({ title: "View Brands" });

import useBrands from "@/composables/brands";

const { brands, getBrands, deleteBrand } = useBrands();


const tableData = computed(() => {
    return Array.isArray(brands.value) ? brands.value : [];
});

onMounted(() => {
    getBrands();
});

const columns = ref([
    "id",
    "brand_image",
    "name",
    "description",
    "is_published",
    "created_at",
    "actions",
]);

const table_option = ref({
    skin: "table table-hover table-striped",
    columnsClasses: { actions: "actions text-center" },
    sortable: ["id", "name", "is_published"],
    sortIcon: {
        base: "sort-icon-none",
        up: "sort-icon-asc",
        down: "sort-icon-desc",
    },
    resizableColumns: false,
    pagination: {
        enabled: false
    },
    filterByColumn: false,
    filterable: false,
});
</script>
