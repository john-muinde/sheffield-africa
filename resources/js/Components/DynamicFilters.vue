<!-- DynamicFilter.vue -->
<template>
    <div v-if="uniqueValues.length" class="filter-wrapper mb-4">
        <h4 class="filter-title">{{ formatTitle(filterColumn) }}</h4>
        <div class="filter-options">
            <label v-for="value in uniqueValues" :key="value" class="filter-option">
                <input type="checkbox" :value="value" v-model="selectedFilters" @change="handleFilterChange" />
                <span class="filter-label">{{ value }}</span>
                <span class="filter-count">({{ getCount(value) }})</span>
            </label>
        </div>
    </div>
</template>
<style scoped>
.filter-wrapper {
    padding: 1rem;
    border: 1px solid #eee;
    border-radius: 0.5rem;
}

.filter-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.filter-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.filter-label {
    font-size: 0.9rem;
}

.filter-count {
    font-size: 0.8rem;
    color: #666;
}
</style>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    filterColumn: {
        type: String,
        required: true
    },
    dataRef: {
        type: Object,  // This will be the ref containing the data to filter
        required: true
    }
});

// Local state for selected filters
const selectedFilters = ref([]);

// Compute unique values from the items array for the specified column
const uniqueValues = computed(() => {
    if (!props.items?.length || !props.filterColumn) return [];
    return [...new Set(props.items
        .map(item => item[props.filterColumn])
        .filter(Boolean))]
        .sort();
});

// Get count of items for each filter value
const getCount = (value) => {
    return props.items.filter(item => item[props.filterColumn] === value).length;
};

// Format the column name for display
const formatTitle = (column) => {
    return column
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Handle filter changes
const handleFilterChange = () => {
    if (selectedFilters.value.length === 0) {
        // If no filters selected, show all items
        props.dataRef.value = props.items;
    } else {
        // Filter items based on selected values
        props.dataRef.value = props.items.filter(item =>
            selectedFilters.value.includes(item[props.filterColumn])
        );
    }
};

// Reset filters when items change
watch(() => props.items, () => {
    selectedFilters.value = [];
    props.dataRef.value = props.items;
}, { deep: true });
</script>
