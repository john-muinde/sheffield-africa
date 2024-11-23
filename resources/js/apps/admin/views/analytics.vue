<template>
    <div class="layout-px-spacing dash_2">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:;">Dashboard</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <span>Sales</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav flex-row ms-auto">
                <li class="nav-item more-dropdown">
                    <div class="dropdown custom-dropdown-icon">
                        <a href="javascript:;" class="nav-link dropdown-toggle" id="ddlSettings"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span>Settings</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-chevron-down">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlSettings">
                            <li>
                                <a class="dropdown-item" data-value="Settings" href="javascript:void(0);">Settings</a>
                            </li>
                            <li>
                                <a class="dropdown-item" data-value="Mail" href="javascript:void(0);">Mail</a>
                            </li>
                            <li>
                                <a class="dropdown-item" data-value="Print" href="javascript:void(0);">Print</a>
                            </li>
                            <li>
                                <a class="dropdown-item" data-value="Download" href="javascript:void(0);">Download</a>
                            </li>
                            <li>
                                <a class="dropdown-item" data-value="Share" href="javascript:void(0);">Share</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-unique-visitors">
                    <div class="widget-content flex justify-between p-2">
                        <div class="">
                            <a-range-picker :bordered="false" :defaultValue="[
                                dayjs(dates.start_date),
                                dayjs(dates.end_date),
                            ]" :presets="presetRanges" @change="handleDatesAndLabels" />
                            ({{ dates.label }})
                        </div>
                        <a-space>
                            <a-button type="primary" danger :disabled="loading" @click="showResetConfirm">
                                Reset All Stats
                            </a-button>
                            <a-button type="primary" :disabled="loading" @click="loadData">
                                Refresh
                            </a-button>
                        </a-space>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-statistics">
                    <div class="widget-heading">
                        <h5>Visitors</h5>
                    </div>
                    <div class="widget-content">
                        <div class="row">
                            <div class="col-6">
                                <div class="w-detail">
                                    <p class="w-title">New Visitors</p>
                                    <p class="w-stats">
                                        {{
                                            stats.visitors?.filter(
                                                (e) => e.is_new == 1
                                            ).length
                                        }}
                                    </p>
                                </div>
                                <apex-chart v-if="newVistorsOptions && !loading" height="58" type="line"
                                    :options="newVistorsOptions" :series="newVistorsSeries"></apex-chart>
                            </div>
                            <div class="col-6">
                                <div class="w-detail">
                                    <p class="w-title">Returning Visitors</p>
                                    <p class="w-stats">
                                        {{
                                            stats.visitors?.filter(
                                                (e) => e.is_new == 0
                                            ).length
                                        }}
                                    </p>
                                </div>
                                <apex-chart v-if="returningVisitorsOptions" height="58" type="line"
                                    :options="returningVisitorsOptions" :series="returningVisitorsSeries">
                                </apex-chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-expenses">
                    <div class="widget-heading">
                        <h5 class="mb-4">Total Visitors</h5>
                    </div>

                    <div class="widget-content">
                        <p class="value">
                            {{ stats.visitors?.length }}
                            <span>({{ dates.label }})</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-trending-up">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                        </p>
                        <div class="w-progress-stats">
                            <div class="progress">
                                <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="57"
                                    class="progress-bar bg-gradient-secondary" style="width: 57%"></div>
                            </div>
                            <div class="w-icon">57%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-active-log">
                    <div class="widget-heading">
                        <h5>Recent Visits</h5>
                    </div>

                    <div class="widget-content">
                        <div class="w-shadow-top"></div>
                        <perfect-scrollbar style="height:200px" :options="{ suppressScrollX: true }">
                            <div class="accordion accordion-flush" id="visitorAccordion">
                                <div v-for="(visitorData, index) in stats?.visitor_details"
                                    :key="visitorData.visitor.tracking_id" class="accordion-item border-b">
                                    <h2 class="accordion-header" :id="'heading' + index">
                                        <button class="accordion-button collapsed p-4 bg-transparent" type="button"
                                            data-bs-toggle="collapse" :data-bs-target="'#collapse' + index"
                                            aria-expanded="false" :aria-controls="'collapse' + index">
                                            <div class="flex flex-col w-full">
                                                <div class="flex items-center  mb-1">
                                                    <span class="font-semibold">{{ visitorData.visitor.location
                                                        }}</span>
                                                    <span class="text-sm ml-2"
                                                        :class="visitorData.visitor.is_new ? 'text-success' : 'text-info'">
                                                        {{ visitorData.visitor.is_new ? 'New' : 'Returning' }}
                                                    </span>
                                                </div>
                                                <div class="flex items-center text-sm text-gray-600">
                                                    <span>{{ visitorData.visitor.platform }} - {{
                                                        visitorData.visitor.browser
                                                    }}</span>
                                                </div>
                                            </div>
                                        </button>
                                    </h2>
                                    <div :id="'collapse' + index" class="accordion-collapse collapse"
                                        :aria-labelledby="'heading' + index" data-bs-parent="#visitorAccordion">
                                        <div class="accordion-body p-4 bg-gray-50">
                                            <!-- Visit Timeline -->
                                            <div class="timeline-small">
                                                <div v-for="(visit, vIndex) in visitorData.visits" :key="vIndex"
                                                    class="timeline-container position-relative mb-3 pb-1">
                                                    <div class="timeline-content">
                                                        <div class="d-flex justify-content-between mb-1">
                                                            <span class="font-medium text-sm">
                                                                {{ new Date(visit.timestamp).toLocaleString() }}
                                                            </span>
                                                        </div>
                                                        <div v-if="visit.url" class="text-sm text-gray-600 break-all">
                                                            <a :href="visit.url" target="_blank"
                                                                class="text-primary hover:underline">
                                                                {{ visit.url }}
                                                            </a>
                                                        </div>
                                                        <div class="text-xs text-gray-500 mt-1">
                                                            {{ visit.platform }} - {{ visit.browser }} | {{
                                                                visit.location }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </perfect-scrollbar>
                    </div>
                </div>
            </div>

            <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-unique-visitors">
                    <div class="widget-heading">
                        <h5>Unique Visitors</h5>
                    </div>

                    <div class="widget-content">
                        <apex-chart v-if="uniqueVisitorOptions" height="350" type="bar" :options="uniqueVisitorOptions"
                            :series="uniqueVisitorSeries"></apex-chart>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-active-log">
                    <div class="widget-heading">
                        <h5>Activity Log</h5>
                    </div>

                    <div class="widget-content">
                        <div class="w-shadow-top"></div>
                        <perfect-scrollbar class="mt-container mx-auto">
                            <div class="timeline-line">
                                <div v-for="activity in activities" :key="activity.timestamp" class="item-timeline">
                                    <div class="t-dot">
                                        <div :class="getActivityColor(activity.type)">
                                            <component :is="getActivityIcon(activity.type)" />
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>
                                                {{ getActivityTitle(activity) }}
                                                <template v-if="activity.data.email">
                                                    <a :href="'mailto:' + activity.data.email">{{ activity.data.email
                                                        }}</a>
                                                </template>
                                            </h5>
                                        </div>
                                        <p>{{ formatDate(activity.timestamp) }}</p>
                                        <p v-if="activity.data.message" class="text-sm text-gray-600">
                                            {{ activity.data.message }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </perfect-scrollbar>
                        <div class="w-shadow-bottom"></div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-active-log widget-visitor-by-browser">
                    <div class="widget-heading">
                        <h5>Visitors by platform</h5>
                    </div>

                    <div class="widget-content">
                        <div class="w-shadow-top"></div>
                        <div v-for="platform in platforms" class="browser-list">
                            <div class="w-icon icon-fill-primary" v-html="platform.icon"></div>
                            <div class="w-browser-details">
                                <div class="w-browser-info">
                                    <h6>{{ platform.name }}</h6>
                                    <p class="browser-count">{{ ((platform.count / stats.visitors?.length) *
                                        100)?.toFixed(2) }}%
                                    </p>
                                </div>
                                <div class="w-browser-stats">
                                    <div class="progress">
                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100"
                                            :aria-valuenow="((platform.count / stats.visitors?.length) * 100)"
                                            class="progress-bar bg-gradient-primary"
                                            :style="{ width: ((platform.count / stats.visitors?.length) * 100) + '%' }">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.timeline-line {
    position: relative;
    padding: 20px 0;
}

.item-timeline {
    display: flex;
    margin-bottom: 20px;
}

.t-dot {
    position: relative;
    margin-right: 20px;
    min-width: 40px;
}

.t-dot>div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.t-primary {
    background-color: #4361ee;
}

.t-secondary {
    background-color: #805dca;
}

.t-success {
    background-color: #1abc9c;
}

.t-warning {
    background-color: #e2a03f;
}

.t-dark {
    background-color: #3b3f5c;
}

.t-content {
    flex-grow: 1;
}

.t-content h5 {
    margin: 0 0 5px;
    font-size: 16px;
    font-weight: 600;
}

.t-content a {
    color: #4361ee;
    text-decoration: none;
}

.t-content a:hover {
    text-decoration: underline;
}

.t-content p {
    margin: 0;
    color: #888ea8;
    font-size: 12px;
}

.w-shadow-top,
.w-shadow-bottom {
    height: 10px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), transparent);
}

.w-shadow-bottom {
    transform: rotate(180deg);
}

.collapse {
    visibility: unset;
}

.timeline-small::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background: #e5e7eb;
}

.timeline-container::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 6px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #e5e7eb;
}

.timeline-content {
    margin-left: 20px;
}

.accordion-button:not(.collapsed) {
    background-color: rgba(67, 97, 238, 0.05);
    color: inherit;
    box-shadow: none;
}

.accordion-button:focus {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.125);
}

.accordion-button::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
}

input[disabled],
select[disabled],
textarea[disabled],
input[readonly],
select[readonly],
textarea[readonly] {
    cursor: text;
    background-color: unset !important;
    color: #bfc9d4;
}

.widget-total-balance {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.account-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.accordion-button {
    padding: 10px 15px;
    background-color: #f8f9fa;
}

.accordion-body {
    padding: 15px;
}

.acc-action {
    display: flex;
    align-items: center;
    gap: 10px;
}

.acc-action a {
    text-decoration: none;
    color: inherit;
}
</style>

<script setup>
import "../assets/sass/widgets/widgets.scss";
import { ref, computed, onMounted, nextTick } from 'vue';
import { useStore } from "vuex";
import { Modal } from "ant-design-vue";
import ApexChart from "vue3-apexcharts";

import useStats from "@/composables/home";
import dayjs from "dayjs";

const { getStats, dates, stats, loading, datePickerOnChange } = useStats();

import {
    Mail,
    Plus,
    Check,
    File,
    Server,
    MessageSquare,
    Phone,
    ShoppingCart
} from 'lucide-vue-next';

import { useMeta } from "../composables/use-meta";
useMeta({ title: "Widgets" });

const store = useStore();

import moment from 'moment';


const activities = computed(() => stats.value?.activities || [])

// Icon mapping based on activity type
const activityIcons = {
    quote_request: ShoppingCart,
    contact_us: MessageSquare,
    phone_call: Phone,
    email_sent: Mail,
    default: Plus
}

// Color mapping based on activity type
const activityColors = {
    quote_request: 't-primary',
    contact_us: 't-success',
    phone_call: 't-warning',
    email_sent: 't-secondary',
    default: 't-dark'
}

// Title mapping based on activity type
const activityTitles = {
    quote_request: 'New Quote Request',
    contact_us: 'Contact Form Submission',
    phone_call: 'Phone Call Received',
    email_sent: 'Email Communication',
    default: 'Activity Recorded'
}

const getActivityIcon = (type) => {
    return activityIcons[type] || activityIcons.default
}

const getActivityColor = (type) => {
    return activityColors[type] || activityColors.default
}

const getActivityTitle = (activity) => {
    const title = activityTitles[activity.type] || activityTitles.default
    if (activity.data.items_count) {
        return `${title} (${activity.data.items_count} items)`
    }
    return title
}

const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}


const platformIcons = {
    Windows: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chrome">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="21.17" y1="8" x2="12" y2="8"></line>
            <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
            <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
        </svg>
    `,
    Safari: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
    `,
    AndroidOS: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18"></line>
        </svg>
    `,
    Others: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
    `,
};

const platforms = computed(() => {
    return stats.value.visitors?.reduce((acc, curr) => {
        const platform = acc.find(e => e.name == curr.platform);
        if (platform) {
            platform.count++;
        } else {
            acc.push({
                name: curr.platform,
                count: 1,
                desktop: curr.is_desktop == 1,
                icon: platformIcons[curr.platform] || platformIcons.Others,
            });
        }
        return acc;
    }, []);
});

const handleDatesAndLabels = (dates, datesStrings) => {
    if (!dates || !datesStrings || !datesStrings.length) return null;

    let label = presetRanges.find((range) => range.value[0] == dates[0] && range.value[1] == dates[1]);

    if (!label) {
        label = {
            label: `${moment(dates[0]).format("MMM D, YYYY")} - ${moment(dates[1]).format("MMM D, YYYY")}`,
        };
    }

    const obj = {
        label: label.label,
        start_date: datesStrings[0],
        end_date: datesStrings[1],
    };

    datePickerOnChange(obj);
    loadData();
}

const presetRanges = [
    {
        label: 'Today',
        value: [moment(), moment()]
    },
    {
        label: 'Yesterday',
        value: [moment().subtract(1, 'day'), moment().subtract(1, 'day')]
    },
    {
        label: 'This Week',
        value: [moment().startOf('week'), moment().endOf('week')]
    },
    {
        label: 'Last 7 Days',
        value: [moment().subtract(7, 'day'), moment()]
    },
    {
        label: 'This Month',
        value: [moment().startOf('month'), moment().endOf('month')]
    },
    {
        label: 'Last Month',
        value: [
            moment().subtract(1, 'months').startOf('month'),
            moment().subtract(1, 'months').endOf('month')
        ]
    },
    {
        label: 'This Year',
        value: [moment().startOf('year'), moment().endOf('year')]
    },
    {
        label: 'Last Year',
        value: [
            moment().subtract(1, 'year').startOf('year'),
            moment().subtract(1, 'year').endOf('year')
        ]
    }
];

const showResetConfirm = () => {
    Modal.confirm({
        title: 'Do you want to reset the date filters?',
        content: `This will reset the date range to ${dates.value.label}`,
        onOk() {
            handleDatesAndLabels([moment().startOf('week'), moment().endOf('week')], [moment().startOf('week').format('YYYY-MM-DD'), moment().endOf('week').format('YYYY-MM-DD')]);
        },
        onCancel() {
            console.log('Cancel');
        },
    });
};

const loadData = async () => {
    await fetchStatisticsData();
};

const newVistorsSeries = ref([{ data: [] }]);
const newVistorsOptions = computed(() => generateChartOptions("#009688", store.state.is_dark_mode));

const returningVisitorsSeries = ref([{ data: [] }]);
const returningVisitorsOptions = computed(() => generateChartOptions("#e2a03f", store.state.is_dark_mode, {
    dropShadow: { enabled: true, top: 1, left: 1, blur: 2, color: "#e2a03f", opacity: 0.7 },
}));

const uniqueVisitorSeries = ref([
    { name: "New Visitors", data: [] },
    { name: "Returning Visitors", data: [] },
]);

const uniqueVisitorOptions = computed(() => {
    const isDark = store.state.is_dark_mode;

    return {
        chart: { toolbar: { show: false } },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ["transparent"] },
        colors: ["#5c1ac3", "#ffbb44"],
        dropShadow: { enabled: true, opacity: 0.3, blur: 1, left: 1, top: 1, color: "#515365" },
        plotOptions: { bar: { horizontal: false, columnWidth: "55%", borderRadius: 10 } },
        legend: { position: "bottom", horizontalAlign: "center", fontSize: "14px", markers: { width: 12, height: 12 }, itemMargin: { horizontal: 0, vertical: 8 } },
        grid: { borderColor: isDark ? "#191e3a" : "#e0e6ed" },
        xaxis: {
            categories: stats.value?.series?.labels || [],
            axisBorder: { show: true, color: isDark ? "#3b3f5c" : "#e0e6ed" },
        },
        yaxis: {
            tickAmount: 6,
        },
        fill: {
            type: "gradient",
            gradient: { shade: isDark ? "dark" : "light", type: "vertical", shadeIntensity: 0.3, inverseColors: false, opacityFrom: 1, opacityTo: 0.8, stops: [0, 100] },
        },
        tooltip: {
            theme: isDark ? "dark" : "light",
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
    };
});

const generateChartOptions = (color, isDark, additionalOptions = {}) => {
    return {
        chart: { sparkline: { enabled: true }, dropShadow: { enabled: true, top: 3, left: 1, blur: 3, color, opacity: 0.7 } },
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 0 },
        colors: [color],
        grid: { padding: { top: 0, bottom: 0, left: 0 } },
        tooltip: {
            theme: isDark ? "dark" : "light",
            x: { show: false },
            y: {
                title: {
                    formatter: function () {
                        return "";
                    },
                },
            },
        },
        responsive: [{ breakPoint: 576, options: { chart: { height: 95 }, grid: { padding: { top: 45, bottom: 0, left: 0 } } } }],
        ...additionalOptions,
    };
};

const fetchStatisticsData = async () => {

    const newData = await getStats();
    console.log(newData);

    newVistorsSeries.value[0].data = newData.series.datasets[0].data;
    returningVisitorsSeries.value[0].data = newData.series.datasets[1].data;
    uniqueVisitorSeries.value[0].data = newData.series.datasets[0].data;
    uniqueVisitorSeries.value[1].data = newData.series.datasets[1].data;
};

onMounted(async () => {
    await fetchStatisticsData();
    if (typeof bootstrap !== 'undefined') {
        nextTick(() => {
            const accordionElements = document.querySelectorAll('.accordion-collapse');
            accordionElements.forEach(element => {
                new bootstrap.Collapse(element, {
                    toggle: false
                });
            });
        });
    }
});
</script>
