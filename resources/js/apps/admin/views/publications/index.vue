<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:;">Publications</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <span>View Publications</span>
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
                                <h3><b>View Publications</b></h3>
                            </div>
                        </div>
                    </div>
                    <div class="custom-table">
                        <CustomDataTable :columns="columns" :data="publications" :options="tableOptions">
                            <template #publication_file="{ cellData }">
                                <a class="btn btn-primary" :href="'/storage/' + cellData
                                    " target="_blank">View file</a>
                            </template>

                            <template #is_published="{ cellData }">
                                <span v-if="cellData === 1" class="badge badge-success inv-status">Published</span>

                                <span v-else class="badge badge-danger inv-status">Not
                                    Published</span>
                            </template>

                            <template #actions="{ rowData }">
                                <!-- v-if="can('category-edit')"  -->

                                <button @click="navigateToEdit(rowData.id)" class="badge bg-info"
                                    data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-edit-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </button>

                                <!--  v-if="can('category-delete')" -->

                                <button href="javascript:;" @click.prevent="
                                    deletePublication(rowData.id)
                                    " class="ms-2 badge bg-danger" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-trash">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                        </path>
                                    </svg>
                                </button>
                            </template>
                        </CustomDataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useRouter } from 'vue-router';

import CustomDataTable from '@/Components/CustomDataTable.vue';

import { useMeta } from "../../composables/use-meta";
useMeta({ title: "View Blogs" });

import usePublications from "@/composables/publications";

const { publications, getPublications, deletePublication } = usePublications();

const router = useRouter();

const navigateToEdit = (id) => {
    router.push({ name: 'publications.edit', params: { id } });
};

onMounted(() => {
    getPublications();
});


const columns = [
    { data: 'name', title: 'Name' },
    { data: 'publication_file', title: 'File' },
    { data: 'type', title: 'Type' },
    { data: 'is_published', title: 'Published' },
    { data: 'created_at', title: 'Created Date' },
    { title: 'Actions' }
]

const tableOptions = {
    order: [[4, "desc"]],
    columnDefs: [
        { data: null, targets: -1, orderable: false, searchable: false, render: '#actions' },
        { data: 'is_published', targets: 3, render: '#is_published' },
        { data: 'publication_file', targets: 1, render: '#publication_file' },
    ],
};
</script>
