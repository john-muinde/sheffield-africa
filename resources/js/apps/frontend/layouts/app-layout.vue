<template>
    <div class="the_main_div">
        <!--  BEGIN NAVBAR  -->
        <Navbar v-if="!isHomePage"></Navbar>

        <KitchenMenu v-if="isKitchenPage"> </KitchenMenu>
        <LaundryMenu v-if="isLaundryPage"> </LaundryMenu>
        <ColdRoomMenu v-if="isColdRoomPage"> </ColdRoomMenu>
        <!--  END NAVBAR  -->
        <!--  BEGIN CONTENT AREA  -->
        <router-view />
        <!--  END CONTENT AREA  -->
        <!-- BEGIN FOOTER -->

        <MobileMenu></MobileMenu>
        <Footer></Footer>
        <!-- END FOOTER -->
    </div>
</template>

<script>
export default {
    name: "frontend-layout",
};
</script>

<script setup>
import Navbar from "../components/layout/navbar.vue";
//import NavbarHome from "../components/layout/navbarHome.vue";
import Footer from "../components/layout/footer.vue";
import MobileMenu from "../components/layout/mobile-menu.vue";
import KitchenMenu from "../components/layout/KitchenMenu.vue";
import LaundryMenu from "../components/layout/LaundryMenu.vue";
import ColdRoomMenu from "../components/layout/ColdRoomMenu.vue";

import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isHomePage = computed(() => {
    return route.path === "/";
});

const isKitchenPage = computed(() => {
    return route.path.includes("/kitchen");
});

const isLaundryPage = computed(() => {
    return route.path.includes("/laundry");
});

const isColdRoomPage = computed(() => {
    return route.path.includes("/cold-storage");
});
</script>
