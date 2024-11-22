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
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlStatistics" class="btn dropdown-toggle btn-icon-only"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-more-horizontal">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlStatistics">
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">View</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">Download</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                                                (e) => e.is_new == 1
                                            ).length
                                        }}
                                    </p>
                                </div>
                                <apex-chart v-if="returningVisitorsOptions" height="58" type="line"
                                    :options="returningVisitorsOptions" :series="returningVisitorsSeries"></apex-chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-expenses">
                    <div class="widget-heading">
                        <h5>Total Visitors</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlExpenses" class="btn dropdown-toggle btn-icon-only"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-more-horizontal">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlExpenses">
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">This Week</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">Last Week</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">Last Month</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="widget-content">
                        <p class="value">
                            {{ stats.visitors?.length }}
                            <span>( {{ dates.label }})</span>
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
                <div class="widget widget-total-balance">
                    <div class="widget-content">
                        <div class="account-box">
                            <div class="info">
                                <div class="inv-title">
                                    <h5>Total Balance</h5>
                                </div>
                                <div class="inv-balance-info">
                                    <p class="inv-balance">$ 41,741.42</p>
                                    <span class="inv-stats balance-credited">+ 2453</span>
                                </div>
                            </div>
                            <div class="acc-action">
                                <div>
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-plus">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </a>
                                    <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-credit-card">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg>
                                    </a>
                                </div>
                                <a href="javascript:void(0);">Upgrade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-unique-visitors">
                    <div class="widget-heading">
                        <h5>Unique Visitors</h5>
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlVisitors" class="btn dropdown-toggle btn-icon-only"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-more-horizontal">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlVisitors">
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">View</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">Update</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">Download</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                        <div class="task-action">
                            <div class="dropdown btn-group">
                                <a href="javascript:;" id="ddlActivity" class="btn dropdown-toggle btn-icon-only"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-more-horizontal">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="ddlActivity">
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">View All</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="dropdown-item">Mark as Read</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="widget-content">
                        <div class="w-shadow-top"></div>
                        <perfect-scrollbar class="mt-container mx-auto">
                            <div class="timeline-line">
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>
                                                New project created :
                                                <a href="javscript:void(0);"><span>[Cork Admin
                                                        Template]</span></a>
                                            </h5>
                                        </div>
                                        <p>27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-mail">
                                                <path
                                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                </path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>
                                                Mail sent to
                                                <a href="javascript:void(0);">HR</a>
                                                and
                                                <a href="javascript:void(0);">Admin</a>
                                            </h5>
                                        </div>
                                        <p>28 Feb, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>Server Logs Updated</h5>
                                        </div>
                                        <p>27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>
                                                Task Completed :
                                                <a href="javscript:void(0);"><span>[Backup Files
                                                        EOD]</span></a>
                                            </h5>
                                        </div>
                                        <p>01 Mar, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-file">
                                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z">
                                                </path>
                                                <polyline points="13 2 13 9 20 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>
                                                Documents Submitted from
                                                <a href="javascript:void(0);">Sara</a>
                                            </h5>
                                            <span></span>
                                        </div>
                                        <p>10 Mar, 2020</p>
                                    </div>
                                </div>
                                <div class="item-timeline">
                                    <div class="t-dot">
                                        <div class="t-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-server">
                                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                                <line x1="6" y1="6" x2="6" y2="6"></line>
                                                <line x1="6" y1="18" x2="6" y2="18"></line>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="t-content">
                                        <div class="t-uppercontent">
                                            <h5>
                                                Server rebooted successfully
                                            </h5>
                                            <span></span>
                                        </div>
                                        <p>06 Apr, 2020</p>
                                    </div>
                                </div>
                            </div>
                        </perfect-scrollbar>
                        <div class="w-shadow-bottom"></div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div class="widget widget-visitor-by-browser">
                    <div class="widget-heading">
                        <h5>Visitors by Platform</h5>
                    </div>
                    <div class="widget-content">
                        <div v-for="platform in platforms" class="browser-list">
                            <div class="w-icon icon-fill-primary" v-html="platform.icon"></div>
                            <div class="w-browser-details">
                                <div class="w-browser-info">
                                    <h6>{{ platform.name }}</h6>
                                    <p class="browser-count">{{ (platform.count / stats.visitors?.length) * 100 }}%</p>
                                </div>
                                <div class="w-browser-stats">
                                    <div class="progress">
                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100"
                                            :aria-valuenow="((platform.count / stats.visitors?.length) * 100)"
                                            class="progress-bar bg-gradient-primary"
                                            :style="{ width: ((platform.count / stats.visitors?.length) * 100) + '%' }"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="row widget-statistic">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                        <div class="widget">
                            <div class="widget-heading">
                                <div class="w-title">
                                    <div class="w-icon icon-fill-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-users">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="w-value">31.6K</p>
                                        <h5>Followers</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content">
                                <div class="w-chart">
                                    <apex-chart v-if="followersOptions" height="160" type="area"
                                        :options="followersOptions" :series="followersSeries"></apex-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                        <div class="widget">
                            <div class="widget-heading">
                                <div class="w-title">
                                    <div class="w-icon icon-fill-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-link">
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71">
                                            </path>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="w-value">1,900</p>
                                        <h5>Referral</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content">
                                <div class="w-chart">
                                    <apex-chart v-if="referralOptions" height="160" type="area"
                                        :options="referralOptions" :series="referralSeries"></apex-chart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                        <div class="widget">
                            <div class="widget-heading">
                                <div class="w-title">
                                    <div class="w-icon icon-fill-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-message-circle">
                                            <path
                                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="w-value">18.2%</p>
                                        <h5>Engagement</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content">
                                <div class="w-chart">
                                    <apex-chart v-if="engagementOptions" height="160" type="area"
                                        :options="engagementOptions" :series="engagementSeries"></apex-chart>
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
</style>
<script setup>
import "../assets/sass/widgets/widgets.scss";
import { ref, computed, onMounted } from 'vue';
import { useStore } from "vuex";
import { Modal } from "ant-design-vue";
import ApexChart from "vue3-apexcharts";

import useStats from "@/composables/home";
import dayjs from "dayjs";

const { getStats, dates, stats, loading, datePickerOnChange } = useStats();

import { useMeta } from "../composables/use-meta";
useMeta({ title: "Widgets" });

const store = useStore();

import moment from 'moment';

const platformIcons = {
    Chrome: `
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
    // Add more platform icons as needed
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

    console.log(obj);

    datePickerOnChange(obj);
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
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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

const followersSeries = ref([{ name: "Sales", data: [] }]);
const followersOptions = computed(() => generateChartOptions("#c02434", store.state.is_dark_mode, {
    yaxis: { min: 0, show: false },
    fill: store.state.is_dark_mode ? { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } } : {},
}));

const referralSeries = ref([{ name: "Sales", data: [] }]);
const referralOptions = computed(() => generateChartOptions("#e7515a", store.state.is_dark_mode, {
    yaxis: { min: 0, show: false },
    fill: store.state.is_dark_mode ? { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } } : {},
}));

const engagementSeries = ref([{ name: "Sales", data: [] }]);
const engagementOptions = computed(() => generateChartOptions("#1abc9c", store.state.is_dark_mode, {
    yaxis: { min: 0, show: false },
    fill: store.state.is_dark_mode ? { type: "gradient", gradient: { type: "vertical", shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } } : {},
}));

const fetchStatisticsData = async () => {
    // Simulate an API call to fetch statistics data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                newVistorsData: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25],
                returningVisitorsData: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69],
                uniqueVisitorData: {
                    newVisitors: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
                    returningVisitors: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
                },
                followersData: [38, 60, 38, 52, 36, 40, 28],
                referralData: [60, 28, 52, 38, 40, 36, 38],
                engagementData: [28, 50, 36, 60, 38, 52, 38],
            });
        }, 1000);
    });
};

onMounted(async () => {
    const newData = await getStats();
    console.log(newData);
    const data = await fetchStatisticsData();

    newVistorsSeries.value[0].data = newData.series.datasets[0].data;
    returningVisitorsSeries.value[0].data = newData.series.datasets[1].data;
    uniqueVisitorSeries.value[0].data = newData.series.datasets[0].data;
    uniqueVisitorSeries.value[1].data = newData.series.datasets[1].data;


    followersSeries.value[0].data = data.followersData;
    referralSeries.value[0].data = data.referralData;
    engagementSeries.value[0].data = data.engagementData;
});
</script>
