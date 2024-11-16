<!-- NewsView.vue -->
<template>
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-12">
                <div class="page-header mb-4">
                    <h3 class="fw-bold">View In the News</h3>
                </div>

                <CustomDataTable :columns="columns" :data="tableData" :options="tableOptions">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>File</th>
                            <th>Status</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </CustomDataTable>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { format } from 'date-fns';
import CustomDataTable from '@/Components/CustomDataTable.vue';
import useNews from "@/composables/news";

const { getNews, allNews, deleteNews } = useNews();
const tableData = ref([]);

const columns = [
    {
        data: 'name',
        title: 'Title',
    },
    {
        data: 'file_path',
        title: 'File',
        render: (data: string) => {
            return `<a href="/storage/${data}" target="_blank" class="text-primary">View File</a>`;
        }
    },
    {
        data: 'is_published',
        title: 'Status',
        render: (data: boolean) => {
            return data
                ? '<span class="badge bg-success">Published</span>'
                : '<span class="badge bg-danger">Draft</span>';
        }
    },
    {
        data: 'created_at',
        title: 'Created Date',
        render: (data: string) => {
            return format(new Date(data), 'MMM dd, yyyy');
        }
    },
    {
        data: 'id',
        title: 'Actions',
        orderable: false,
        searchable: false,
        render: (data: number) => {
            return `
            <router-link :to="{
                                    name: 'events.edit',
                                    params: { id: props.row.id },
                                }" class="badge bg-info" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-edit-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </router-link>
            <button class="btn btn-sm btn-danger delete-btn" data-id="${data}">
                        <i class="fas fa-trash"></i>
                    </button>`;
        }
    }
];

const tableOptions = ref({
    order: [[3, 'desc']],
    drawCallback: function (settings: any) {
        const table = settings.oInstance.api();
        table.rows().nodes().each((row: HTMLElement) => {
            const deleteBtn = row.querySelector('.delete-btn');
            if (deleteBtn) {
                deleteBtn.addEventListener('click', async (e: Event) => {
                    const id = (e.target as HTMLElement).getAttribute('data-id');
                    await deleteNews(parseInt(id));
                });
            }
        });
    }
});

const fetchData = async () => {
    try {
        await getNews();
        tableData.value = Array.isArray(allNews.value) ? allNews.value : [];
    } catch (error) {
        console.error('Failed to fetch news:', error);
    }
};

onMounted(() => {
    fetchData();
});
</script>
