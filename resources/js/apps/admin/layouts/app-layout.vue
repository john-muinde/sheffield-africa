<template>
    <router-view v-if="!user?.name"></router-view>

    <div v-if="user?.name">
        <!--  BEGIN NAVBAR  -->
        <Header v-if="user?.name"></Header>
        <!--  END NAVBAR  -->

        <!--  BEGIN MAIN CONTAINER  -->
        <div class="main-container" id="container" :class="[
            !$store.state.is_show_sidebar ? 'sidebar-closed sbar-open' : '',
            $store.state.menu_style === 'collapsible-vertical'
                ? 'collapsible-vertical-mobile'
                : '',
        ]">
            <!--  BEGIN OVERLAY  -->
            <div class="search-overlay" :class="{ show: $store.state.is_show_search }" @click="
                $store.commit('toggleSearch', !$store.state.is_show_search)
                "></div>
            <!-- END OVERLAY -->

            <!--  BEGIN SIDEBAR  -->
            <Sidebar v-if="$store.state.is_show_sidebar"></Sidebar>
            <!--  END SIDEBAR  -->

            <!--  BEGIN CONTENT AREA  -->
            <div id="content" class="main-content" @click="handleClickOutside">
                <router-view />

                <!-- BEGIN FOOTER -->
                <Footer></Footer>
                <!-- END FOOTER -->
            </div>
            <!--  END CONTENT AREA  -->

            <!-- BEGIN APP SETTING LAUNCHER -->
            <app-settings />
            <!-- END APP SETTING LAUNCHER -->
        </div>
    </div>
</template>

<script>
export default {
    name: "app-layout",
    mounted() {
        this.addClickOutsideListener();
    },
    beforeUnmount() {
        this.removeClickOutsideListener();
    },
    methods: {
        addClickOutsideListener() {
            this.clickOutsideHandler = (event) => {
                this.handleClickOutside(event);
            };
            document.addEventListener('click', this.clickOutsideHandler);
        },
        removeClickOutsideListener() {
            document.removeEventListener('click', this.clickOutsideHandler);
        },
        handleClickOutside(event) {
            if (
                this.$store.state.is_show_sidebar &&
                !this.$el.contains(event.target) &&
                !event.target.closest('.sidebar') &&
                !event.target.closest('.sidebarCollapse')
            ) {
                this.$store.commit('toggleSideBar', false);
            }
        },
    },
};
</script>

<script setup>
import Header from "../components/layout/header.vue";
import Sidebar from "../components/layout/sidebar.vue";
import Footer from "../components/layout/footer.vue";
import appSettings from "../components/app-settings.vue";

import { useStore } from "vuex";
import useAuth from "@/composables/auth";
import { computed } from "vue";

const store = useStore();
const user = computed(() => store.getters["auth/user"]);
//const { processing, logout } = useAuth();
</script>
