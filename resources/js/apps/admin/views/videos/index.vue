<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Videos</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>View Videos</span></li>
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
                                <h3><b>View Videos</b></h3>
                            </div>
                        </div>
                    </div>
                    <div class="custom-table">
                        <v-client-table :data="videos" :columns="columns" :options="table_option">
                            <template #name="props">
                                <span>{{ props.row.name }}</span>
                            </template>

                            <template #file_path="props">
                                <a v-if="props.row.type === 'Upload'" class="btn btn-primary"
                                    :href="'/storage/' + props.row.file_path" target="_blank">View file</a>
                                <a v-else-if="props.row.type === 'Youtube Url'" class="btn btn-primary"
                                    :href="props.row.video_url" target="_blank">View link</a>
                            </template>

                            <template #is_published="props">
                                <span v-if="props.row.is_published === 1"
                                    class="badge badge-success inv-status">Published</span>
                                <span v-if="props.row.is_published !== 1" class="badge badge-danger inv-status">Not
                                    Published</span>
                            </template>
                            <template #actions="props">
                                <!-- v-if="can('category-edit')"  -->
                                <router-link :to="{ name: 'videos.edit', params: { id: props.row.id } }"
                                    class="badge bg-info" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-edit-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </router-link>

                                <!--  v-if="can('category-delete')" -->
                                <a href="javascript:;" @click.prevent="deleteVideo(props.row.id)"
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
import { ref, onMounted } from "vue";
import { useMeta } from "../../composables/use-meta";
useMeta({ title: "View Videos" });

import useVideos from "@/composables/videos";

const { videos, getVideos, deleteVideo } = useVideos();

onMounted(() => {
    getVideos();
});

const columns = ref(["name", "file_path", "type", "is_published", "created_at", "actions"]);

const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50, 100, 500, 1000],
    skin: "table table-hover table-striped",
    columnsClasses: { actions: "actions text-center" },
    pagination: { nav: "scroll", chunk: 5 },
    texts: {
        count: "Showing {from} to {to} of {count}",
        filter: "",
        filterPlaceholder: "Search...",
        limit: "Results:",
    },
    sortable: ["name", "is_published"],
    sortIcon: {
        base: "sort-icon-none",
        up: "sort-icon-asc",
        down: "sort-icon-desc",
    },
    resizableColumns: false,
});
</script>
