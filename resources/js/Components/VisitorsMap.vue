<template>
    <div class="widget widget-active-log widget-visitor-by-browser">
        <div class="widget-heading">
            <h5>Visitors by Country</h5>
        </div>

        <div class="widget-content">
            <div class="flex gap-4">
                <!-- Map Container -->
                <div class="w-2/3">
                    <div class="w-shadow-top"></div>
                    <div id="map" style="min-height: 400px;"></div>
                </div>

                <!-- Countries List -->
                <div class="w-1/3 overflow-auto" style="max-height: 400px;">
                    <div class="grid gap-2">
                        <div v-for="country in sortedCountries" :key="country.code"
                            class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                            <img :src="`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`"
                                :alt="country.name" class="mr-2 w-6 h-4 object-cover rounded-sm" />
                            <span class="flex-1">{{ country.name }}</span>
                            <span class="font-semibold">{{ country.count }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from "vuex";
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world-merc';
import 'jsvectormap/src/scss/jsvectormap.scss';
import { countries as countriesData } from 'countries-list';
import { getCountryCodeByName } from '@/utils';

const props = defineProps({
    visitors: {
        type: Array,
        default: () => [],
    }
});

const store = useStore();
const map = ref(null);

// Process countries data
const processedCountries = computed(() => {
    return props.visitors.reduce((acc, visitor) => {
        let countryCode = visitor.location.split('-').pop().trim();
        let countryName = visitor.location;

        if (!countriesData[countryCode]) {
            countryCode = getCountryCodeByName(countryName) || 'XX';
        }

        if (!acc[countryCode]) {
            acc[countryCode] = {
                code: countryCode,
                name: countryName,
                count: 0
            };
        }
        acc[countryCode].count++;
        return acc;
    }, {});
});

// Sorted countries for the list
const sortedCountries = computed(() => {
    return Object.values(processedCountries.value)
        .sort((a, b) => b.count - a.count);
});

// Prepare data for the map
const mapData = computed(() => {
    const values = {};
    Object.entries(processedCountries.value).forEach(([code, data]) => {
        values[code] = data.count;
    });
    return values;
});

// Generate markers for the map
const mapMarkers = computed(() => {
    return Object.values(processedCountries.value).map(country => {
        const coords = countriesData[country.code]?.coords || [0, 0];
        return {
            name: `${country.name}: ${country.count} visitors`,
            coords: coords
        };
    });
});

// Initialize and update map
const initMap = () => {
    const isDarkMode = store.state.is_dark_mode;
    const primaryColor = isDarkMode ? '#009688' : '#1b55e2';
    const secondaryColor = isDarkMode ? '#1b2e4b' : '#c2d5ff';

    map.value = new jsVectorMap({
        selector: '#map',
        map: 'world_merc',
        backgroundColor: 'transparent',
        markers: mapMarkers.value,
        series: {
            regions: [{
                values: mapData.value,
                scale: [secondaryColor, primaryColor],
                normalizeFunction: 'polynomial'
            }]
        },
        labels: {
            markers: {
                render: (marker) => marker.name
            }
        },
        regionStyle: {
            initial: {
                fill: isDarkMode ? '#1b2e4b' : '#e0e6ed',
                stroke: isDarkMode ? '#3b3f5c' : '#fff',
                strokeWidth: 0.5,
            },
            hover: {
                fill: primaryColor,
                cursor: 'pointer'
            }
        },
        markerStyle: {
            initial: {
                fill: primaryColor,
                stroke: isDarkMode ? '#1b2e4b' : '#fff'
            }
        },
        onRegionTipShow: function (event, label, code) {
            const country = processedCountries.value[code];
            if (country) {
                label.html(`
            <div class="map-tooltip">
              <strong>${country.name}</strong><br/>
              ${country.count} visitor${country.count !== 1 ? 's' : ''}
            </div>
          `);
            }
        }
    });
};

// Watch for theme changes
watch(() => store.state.is_dark_mode, () => {
    if (map.value) {
        map.value.destroy();
        initMap();
    }
});

onMounted(() => {
    initMap();
});
</script>

<style scoped>
.map-tooltip {
    background-color: var(--tooltip-bg, rgba(0, 0, 0, 0.8));
    color: var(--tooltip-color, white);
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
}

:deep(.jvm-tooltip) {
    background-color: transparent;
    border: none;
    padding: 0;
}
</style>
