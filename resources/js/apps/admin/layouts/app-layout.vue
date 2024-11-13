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
            <Sidebar v-if="$store.state.is_show_sidebar" ref="sidebarRef"></Sidebar>
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

<script setup>
import Header from "../components/layout/header.vue";
import Sidebar from "../components/layout/sidebar.vue";
import Footer from "../components/layout/footer.vue";
import appSettings from "../components/app-settings.vue";

import { useStore } from "vuex";
import { computed, onMounted, onBeforeUnmount, ref } from "vue";

const sidebarRef = ref(null);

const store = useStore();
const user = computed(() => store.getters["auth/user"]);
//const { processing, logout } = useAuth();

const handleClickOutside = (event) => {
    if (
        store.state.is_show_sidebar &&
        !sidebarRef.value.$el.contains(event.target)
    ) {
        console.log(store.state.is_show_sidebar);
        if (event.target.closest('.sidebarCollapse')) {
            return;
        }
        // if on mobile device
        if (window.innerWidth < 992) {
            store.commit('toggleSideBar', false);
        }
    }
}

onMounted(() => {
    const clickOutsideHandler = (event) => {
        handleClickOutside(event);
    };
    document.addEventListener('click', clickOutsideHandler);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', clickOutsideHandler);
});
</script>
