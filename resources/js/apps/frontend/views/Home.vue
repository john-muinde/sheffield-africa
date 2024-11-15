<script></script>

<style></style>

<template>
    <header class="header header-6 header-transparent desktop-header">
        <div class="header-middle mt-2">
            <div class="container">
                <div class="header-left">
                    <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
                        <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                        <form action="#" method="get">
                            <div class="header-search-wrapper search-wrapper-wide searchListMainDiv">
                                <label for="q" class="sr-only">Search</label>
                                <button class="btn btn-primary" type="submit">
                                    <i class="icon-search"></i>
                                </button>
                                <input type="search" v-model="query" @input="search" class="form-control" name="q"
                                    autocomplete="off" placeholder="Search product ..." required="" />
                                <ul v-if="showResults" style="width: 370px;">

                                    <div v-if="searchLoading" class="form-control">
                                        Loading...
                                    </div>

                                    <div v-if="!results.length && !searchLoading" class="form-control">
                                        No results found
                                    </div>

                                    <li v-else v-for="result in results" :key="result.id">
                                        <router-link :to="getProductLink(
                                            result.id,
                                            result.name,
                                            result.model_number,
                                            result.categories_json[0]
                                                .parent_name_with_slashes
                                        )
                                            ">
                                            <img style="display: inline" width="28" :src="'/storage/' +
                                                result.main_image_path
                                                " class="rounded profile-img" alt="" />
                                            {{ result.name }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- End .header-search-wrapper -->
                        </form>
                    </div>
                    <!-- End .header-search -->
                </div>
                <div class="header-center">
                    <router-link to="/" class="logo">
                        <img class="zoom-image" src="../assets/images/logo.png" alt="Sheffield Logo" width="245"
                            height="auto" />
                    </router-link>
                </div>
                <!-- End .header-left -->

                <div class="header-right">
                    <!-- <a class="header_phone" href="tel:+254713777111">+254 713 777 111</a> -->
                    <!-- <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        ><i
                            class="icon-telegram-plane"
                            style="font-size: 40px"
                        ></i>
                        Contact Us</a
                    > -->
                    <div class="dropdown cart-dropdown" style="color: black !important;">
                        <router-link to="/request-for-quote" class="dropdown-toggle" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                            <i class="icon-shopping-cart"></i>
                            <span class="cart-count">{{
                                cartItems.length
                                }}</span>
                            <span class="cart-txt">Cart</span>
                        </router-link>

                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="dropdown-cart-products">
                                <div class="product" v-for="(
                                                            item, index
                                                        ) in cartItems" :key="index">
                                    <div class="product-cart-details">
                                        <h4 class="product-title">
                                            {{ item.name }}
                                        </h4>

                                        <span class="cart-product-info">
                                            <span class="cart-product-qty">Qty :
                                                {{
                                                    item.quantity
                                                }}</span>
                                        </span>
                                    </div>

                                    <figure class="product-image-container">
                                        <a href="product.html" class="product-image">
                                            <img :src="'/storage/' +
                                                item.main_image_path
                                                " alt="product" />
                                        </a>
                                    </figure>
                                    <button type="button" class="btn-remove" @click="
                                        removeFromCart(
                                            index
                                        )
                                        " title="Remove Product">
                                        <i class="icon-close"></i>
                                    </button>
                                </div>
                                <!-- End .product -->

                                <!-- End .product -->
                            </div>
                            <!-- End .cart-product -->

                            <!--  <div class="dropdown-cart-total">
                                                <span>Total</span>

                                                <span class="cart-total-price">$3000.00</span>
                                                </div> -->
                            <!-- End .dropdown-cart-total -->

                            <div class="dropdown-cart-action">
                                <router-link to="/request-for-quote" class="btn btn-primary mt-2 float-right">Request
                                    for
                                    Quote
                                </router-link>
                            </div>
                            <!-- End .dropdown-cart-total -->
                        </div>
                        <!-- End .dropdown-menu -->
                    </div>

                    <button @click="handleButtonClick" class="mobile-menu-toggler">
                        <span class="sr-only">Toggle mobile menu</span>
                        <i class="icon-bars"></i>
                    </button>
                </div>
            </div>
            <!-- End .container -->
        </div>
        <!-- End .header-middle -->
    </header>

    <header class="header header-6 mobile-header">
        <div class="header-middle">
            <div class="container">
                <div class="header-left">
                    <div class="header-search header-search-extended header-search-visible d-none d-lg-block">
                        <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                        <form action="#" method="get">
                            <div class="header-search-wrapper search-wrapper-wide searchListMainDiv">
                                <label for="q" class="sr-only">Search</label>
                                <button class="btn btn-primary" type="submit">
                                    <i class="icon-search"></i>
                                </button>
                                <input type="search" v-model="query" @input="search" class="form-control" name="q"
                                    id="q" autocomplete="off" placeholder="Search product ..." required="" />
                                <ul v-if="showResults" class="">
                                    <li v-for="result in results" :key="result.id">
                                        <router-link :to="getProductLink(
                                            result.id,
                                            result.name,
                                            result.model_number,
                                            result.categories_json[0]
                                                .parent_name_with_slashes
                                        )
                                            ">
                                            <img style="display: inline" width="28" :src="'/storage/' +
                                                result.main_image_path
                                                " class="rounded profile-img" alt="" />
                                            {{ result.name }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <!-- End .header-search-wrapper -->
                        </form>
                    </div>
                    <!-- End .header-search -->
                </div>
                <div class="header-center">
                    <router-link to="/" class="logo">
                        <img src="../assets/images/logo.png" alt="Sheffield Logo" width="245" height="auto" />
                    </router-link>
                </div>
                <!-- End .header-left -->

                <div class="header-right">
                    <!-- <a class="header_phone" href="tel:+254713777111">+254 713 777 111</a> -->
                    <button @click="addClassToBody" id="mobile-menu-toggler" class="mobile-menu-toggler">
                        <span class="sr-only">Toggle mobile menu</span>
                        <i class="icon-bars"></i>
                    </button>
                </div>
            </div>
            <!-- End .container -->
        </div>
        <!-- End .header-middle -->
    </header>

    <!-- <div class="video-container">
        <video autoplay="" muted="" loop="" id="myVideo">
            <source src="/assets/videos/sheffield_website_video.mp4" type="video/mp4">
        </video>
        <div class="overlay"></div>
    </div> -->

    <div class="page-wrapper">
        <main class="main1 container">

            <div class="justify-content-center mt-4 home-design">
                <router-link class="home-first home-section home-section-cat" to="/about-us/sheffield-advantage" as="a">
                    <div class="home-section-white">
                        <img src="assets/images/homepage/sheffield_engineer.jpg" />
                    </div>
                </router-link>

                <router-link class="home-cold-storage home-section home-section-cat" to="cold-storage" as="a">
                    <div class="home-section-white">
                        <img src="assets/images/homepage/cold_storage_home.jpg" alt="Commercial Cold Storage" />
                    </div>
                </router-link>

                <router-link class="home-kitchen home-section home-section-cat" to="/commercial-kitchen" as="a">
                    <div class="home-section-white">
                        <img src="assets/images/homepage/food_service_equipment.jpg"
                            alt="Commercial Food Service Equipment" />
                    </div>
                </router-link>

                <router-link class="home-laundry home-section home-section-cat" to="/laundry" as="a">
                    <div class="home-section-white">
                        <img src="assets/images/homepage/laundry_and_cleaning.jpg"
                            alt="Commercial Laundry and Cleaning" />
                    </div>
                </router-link>

                <router-link class="home-last home-section home-section-cat" to="/projects" as="a">
                    <div class="home-section-white">
                        <img src="assets/images/homepage/female_worker.jpg" />
                    </div>
                </router-link>
            </div>

            <div class="justify-content-center mt-4 home-design-mobile">
                <router-link class="home-kitchen home-section home-section-cat" to="/commercial-kitchen" as="a">
                    <div class="home-section-white">
                        <img src="assets/images/homepage/food_service_equipment.jpg"
                            alt="Commercial Food Service Equipment" />
                    </div>
                </router-link>

                <router-link class="home-cold-storage home-section home-section-cat" to="cold-storage" as="a">
                    <div class="home-section-white">
                        <img src="assets/images/homepage/cold_storage_home.jpg" alt="Commercial Cold Storage" />
                    </div>
                </router-link>

                <router-link class="home-laundry home-section home-section-cat" to="/laundry" as="a">
                    <div class="home-section-white">
                        <img src="assets/images/homepage/laundry_and_cleaning.jpg"
                            alt="Commercial Laundry and Cleaning" />
                    </div>
                </router-link>
            </div>

            <template v-if="promotionProducts.length">
                <div class="container-fluid">
                    <div class="d-flex align-items-center mt-1 row" style="min-height: 500px !important;">
                        <div class="image-container col-xl-3 col-lg-4 col-md-12 mb-md-4" style="height: 100%">
                            <div class="promo-image-wrapper">
                                <img src="/assets/images/events/november-promo.png" alt="Promotion Banner"
                                    class="img img-fluid contain promo-image" style="height: 100%; width: 90%;">
                            </div>
                        </div>

                        <!-- Products Section -->
                        <div class="col-xl-9 col-lg-8 col-md-12" style="height: 100%;">
                            <!-- Animated Date Banner -->
                            <div class="row d-flex justify-content-between">
                                <div class="bg-danger d-flex justify-content-between text-uppercase fw-bold p-1 col-xl-9 pr-2"
                                    style="color: white; border-radius: 4px; position: relative; overflow: hidden; font-weight: bold;">
                                    <span>
                                        Pizzeria NOVEMBER PROMOTIONS
                                    </span>
                                    <span>
                                        VALID 1ST - 30TH NOVEMBER, 2024
                                    </span>
                                </div>
                                <div
                                    class="view-all-slide align-items-center justify-content-center h-100 d-none d-lg-flex col-3">
                                    <router-link to="/promotional-solutions/371/nov-1-nov-31-2024-promotions"
                                        class="btn btn-dark btn-md view-all-button">
                                        View All Products
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            class="ms-2" width="16" height="16">
                                            <path d="M12 2L10.59 3.41 17.17 10H2v2h15.17l-6.58 6.59L12 22l10-10z" />
                                        </svg>
                                    </router-link>
                                </div>
                            </div>

                            <hr class="divider">

                            <h3 class="text-start mb-4" style="font-style: italic;">
                                Pizzeria Solutions
                            </h3>

                            <!-- Enhanced Swiper Carousel -->
                            <swiper :slides-per-view="slidesPerView" :space-between="20" :navigation="true"
                                :modules="[Navigation, Pagination, Autoplay]" :pagination="{
                                    clickable: true,
                                    dynamicBullets: true
                                }" :autoplay="{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }" :slides-per-group="slidesPerView" @swiper="onSwiper" class="products-container">
                                <swiper-slide v-for="product in promotionProducts" :key="product.id">
                                    <ProductCard :product="product" />

                                </swiper-slide>
                            </swiper>
                            <!-- Mobile View All Button -->
                            <div class="d-md-none text-center mt-4">
                                <router-link to="/promotional-solutions/371/nov-1-nov-31-2024-promotions"
                                    class="btn btn-dark btn-block">
                                    View All Products
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </main>
        <!-- End .main -->
    </div>
    <!-- End .page-wrapper -->

    <template v-if="showPopup">
        <div class="popup-advert">
            <div class="popup-content">
                <img src="/assets/images/events/november-promo.png" alt="Rotobake Ovens Solutions" class="popup-image"
                    style="  width: 100%; min-height: 480px;" />
                <div class="button-group row">
                    <button @click="dismissPopup" class="btn btn-primary btn-footer col-4">
                        Cancel
                    </button>
                    <button @click="viewProduct('/promotional-solutions/371/nov-1-nov-31-2024-promotions')"
                        class="btn btn-secondary btn-footer col-4">
                        View
                    </button>
                </div>
            </div>
        </div>
    </template>

</template>

<script setup>
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ref, onMounted, onBeforeUnmount, computed } from "vue";

import { useMeta } from "../../admin/composables/use-meta";
import ProductCard from '@/Components/ProductCard.vue';

import { useRoute, useRouter } from 'vue-router';


useMeta({
    title: "Home",
    description:
        "We offer commercial kitchen, laundry, cold room & stainless steel fabricated solutions",
    keywords: "Commercial Kitchen, Commercial laundry, Commercial Cold room",
});

import { useStore } from "vuex"; // Import the store

const router = useRouter();

const store = useStore();

const cartItems = store.state.cart.cartItems;

const removeFromCart = (index) => {
    store.dispatch("cart/removeFromCart", index);
};

const swiperInstance = ref(null)

const slidesPerView = computed(() => {
    const width = window.innerWidth
    if (width < 576) return 1 // Mobile
    if (width < 768) return 2 // Tablet
    if (width < 992) return 2 // Small desktop
    if (width < 1200) return 3 // Medium desktop
    return 4 // Large desktop
})



const onSwiper = (swiper) => {
    swiperInstance.value = swiper
}

// Responsive handling
const handleResize = () => {
    if (swiperInstance.value) {
        swiperInstance.value.params.slidesPerView = slidesPerView.value
        swiperInstance.value.update()
    }
}


const query = ref("");
const results = ref([]);
const showResults = ref(false);
const searchLoading = ref(false);
const showPopup = ref(false);

const search = async () => {
    if (query.value.trim().length) {
        showResults.value = true;
        searchLoading.value = true;
        try {
            const response = await axios.get(
                `/api/product_search` + `/${query.value}`
            );
            results.value = response.data.data;
            //console.log(results.value);
            showResults.value = true;
            //console.log(showResults.value);
        } catch (error) {
            console.error(error);
        } finally {
            searchLoading.value = false;
        }
    } else {
        results.value = [];
        showResults.value = false;
    }
};

const bodyClassAdded = ref(true);

// Function to toggle the class on document.body
const addClassToBody = () => {
    console.log("clicked");
    console.log("Before toggle:", bodyClassAdded.value);

    const targetElement = document.querySelector(".the_main_div");
    targetElement.classList.add("mmenu-active");
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.toggle("mmenu-active1", true);
});

const handleButtonClick = () => {
    addClassToBody();
};

// Function to dismiss the popup
const dismissPopup = () => {
    showPopup.value = false;
    // localStorage.setItem("popupDismissed", "true");
};

const promotionId = ref('');
const promotionProducts = ref([]);

const fetchProducts = async () => {
    try {
        const response = await axios.get(
            "/api/get-products",
            {
                params: {
                    category_id: promotionId.value,
                    per_page: 30,
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            },

        );

        if (!response.data.products) {
            return;
        }

        // promotionProducts.value = [
        //     {
        //         "id": 1139,
        //         "name": "SPIRAL MIXER 80 LITRES/25KG",
        //         "brand": "5",
        //         "model_number": "BM-25",
        //         "sku": "IMG/PAS/00155",
        //         "quantity": "0",
        //         "cost_price": "850000.00",
        //         "retail_price": "680000.00",
        //         "weight": 0,
        //         "length": 1065,
        //         "width": 1130,
        //         "height": 630,
        //         "short_description": "<p>SPIRAL MIXER 80 LITRES/25KG</p><p>IMG/PAS/00155</p>",
        //         "description": "<p>Commercial 25KG 80L Kitchen Spiral Mixer and Dough Mixer</p><p>High quality motor inside, super silent.</p><p>SS 304 bowl and hook.</p><p>Overload and leakage-protection function.</p><p>Double speed, Double direction.</p><p>Double timer control</p>",
        //         "terms_of_operation": "null",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2024-11-11T12:07:30.000000Z",
        //         "updated_at": "2024-11-11T12:09:57.000000Z",
        //         "main_image_path": "uploads/1731326850_1721994958__gallery_SPIRAL.MIX.BM25_50_70_catalog__002___005_-removebg-preview.png",
        //         "document_path": null,
        //         "technical_specification": "<ul><li>Model: HM-25</li><li>Capacity: 80 L</li><li>Max Kneading Capacity: 25 KG</li><li>Mixing Speed: 245/122 RPM</li><li>Power: 4.4 kW</li><li>Voltage: 380V</li><li>Size: 1065X603X1130 MM</li><li>Weight: 332 KG</li></ul>",
        //         "order_index": null,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 1139
        //         },
        //         "product_brand": {
        //             "id": 5,
        //             "name": "H-KITCHEN",
        //             "description": "H-KITCHEN",
        //             "created_by": 1,
        //             "created_at": "2023-06-12T21:00:00.000000Z",
        //             "updated_at": "2023-08-30T09:44:18.000000Z",
        //             "main_image_path": "uploads/1693399457__brand_h-kitchen.jpg",
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 1039,
        //         "name": "SPIRAL MIXER 130 LITRES/50KG",
        //         "brand": "5",
        //         "model_number": "BM-50",
        //         "sku": "IMG/PAS/00157",
        //         "quantity": "0",
        //         "cost_price": "1237500.00",
        //         "retail_price": "990000.00",
        //         "weight": 0,
        //         "length": 794,
        //         "width": 520,
        //         "height": 1033,
        //         "short_description": "<p>SPIRAL MIXER 130 LITRES/50KG BM-50</p>",
        //         "description": "<p>Commercial 50KG 130L Kitchen Spiral Mixer and Dough Mixer</p><p>High quality motor inside, super silent.</p><p>SS 304 bowl and hook.</p><p>Overload and leakage-protection function.</p><p>Double speed, Double direction.</p><p>Double timer control</p>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2024-07-26T11:55:58.000000Z",
        //         "updated_at": "2024-11-11T10:13:57.000000Z",
        //         "main_image_path": "uploads/1721994958_SPIRAL.MIX.BM25_50_70_catalog__002___005_-removebg-preview.png",
        //         "document_path": null,
        //         "technical_specification": "<p>Model&nbsp;&nbsp;BM 50</p><p>Voltage (v)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;220/380</p><p>Power (kw)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.3</p><p>Speed ( rpm)&nbsp;&nbsp;&nbsp;&nbsp;245/122</p><p>Bowl volume (l) 130</p><p>Max kneading&nbsp;capacity (kg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50</p><p>Dimension (mm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;794x520x1033</p><p>Transmission mode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;belt</p>",
        //         "order_index": null,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 1039
        //         },
        //         "product_brand": {
        //             "id": 5,
        //             "name": "H-KITCHEN",
        //             "description": "H-KITCHEN",
        //             "created_by": 1,
        //             "created_at": "2023-06-12T21:00:00.000000Z",
        //             "updated_at": "2023-08-30T09:44:18.000000Z",
        //             "main_image_path": "uploads/1693399457__brand_h-kitchen.jpg",
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 1040,
        //         "name": "SPIRAL MIXER 200 LITRES/50KG",
        //         "brand": "5",
        //         "model_number": "BM-75",
        //         "sku": "IMG/PAS/00156",
        //         "quantity": "0",
        //         "cost_price": "1562500.00",
        //         "retail_price": "1250000.00",
        //         "weight": 0,
        //         "length": 1065,
        //         "width": 630,
        //         "height": 1130,
        //         "short_description": "<p>SPIRAL MIXER 200 LITRES/50KG</p>",
        //         "description": "<p>Commercial 50KG 200L Kitchen Spiral Mixer and Dough Mixer</p><p>High quality motor inside, super silent.</p><p>SS 304 bowl and hook.</p><p>Overload and leakage-protection function.</p><p>Double speed, Double direction.</p><p>Double timer control</p>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2024-07-26T12:15:18.000000Z",
        //         "updated_at": "2024-11-11T10:14:33.000000Z",
        //         "main_image_path": "uploads/1721996118_SPIRAL.MIX.BM25_50_70_catalog__002___005_-removebg-preview.png",
        //         "document_path": null,
        //         "technical_specification": "<p>Model&nbsp;&nbsp;BM 75&nbsp;&nbsp;</p><p>Voltage (v)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;220/380&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Power (kw)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Speed ( rpm)&nbsp;&nbsp;&nbsp;&nbsp;225/112</p><p>Dimensions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1065x630x1130</p><p>Bowl volume (l) 200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Max kneading&nbsp;capacity (kg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;75&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Transmission mode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;belt</p>",
        //         "order_index": null,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 1040
        //         },
        //         "product_brand": {
        //             "id": 5,
        //             "name": "H-KITCHEN",
        //             "description": "H-KITCHEN",
        //             "created_by": 1,
        //             "created_at": "2023-06-12T21:00:00.000000Z",
        //             "updated_at": "2023-08-30T09:44:18.000000Z",
        //             "main_image_path": "uploads/1693399457__brand_h-kitchen.jpg",
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 1132,
        //         "name": "CAKE MIXER PLANETARY 30 LITRES H-KITCHEN",
        //         "brand": "5",
        //         "model_number": "B30GA",
        //         "sku": "IMG/PAS/00145",
        //         "quantity": "0",
        //         "cost_price": "325000.00",
        //         "retail_price": "260000.00",
        //         "weight": 0,
        //         "length": 100,
        //         "width": 100,
        //         "height": 100,
        //         "short_description": "<p>CAKE MIXER PLANETARY 30 LITRES H-KITCHEN</p><p>IMG/PAS/00145</p>",
        //         "description": "<p>Bakery machinery Capacity 30 Litres</p><p>3 Attachments. Hook,whip and beater.</p><p>Transmission: Wide-faced hardened alloy steel helical gears fully sealed in transmission lubricant with heavy-duty ball bearings and clutch combine for highly dependable quiet operation.</p><p>Motor cooling system.</p><p>Safety Guard.</p><p>Moisture-resistant switches.</p><p>Thermal Protected motor.</p><p>Cast base construction.</p><p>Silver metallic finish using epoxy powder coat enamel for easy cleaning.</p>",
        //         "terms_of_operation": "null",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2024-10-22T09:40:35.000000Z",
        //         "updated_at": "2024-11-11T10:15:14.000000Z",
        //         "main_image_path": "uploads/1729590035_planetary-mixer-30-ltrs-1000x1000.jpeg",
        //         "document_path": null,
        //         "technical_specification": "<p>Bakery machinery - Capacity 30 Litres</p><p>Powerful 1100 Watt Motor 240v 50Hz 10amp plug.</p><p>Weight: 95 kg.</p><p>3-Speed gear box 197317 &amp; 462rpm.</p>",
        //         "order_index": null,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 1132
        //         },
        //         "product_brand": {
        //             "id": 5,
        //             "name": "H-KITCHEN",
        //             "description": "H-KITCHEN",
        //             "created_by": 1,
        //             "created_at": "2023-06-12T21:00:00.000000Z",
        //             "updated_at": "2023-08-30T09:44:18.000000Z",
        //             "main_image_path": "uploads/1693399457__brand_h-kitchen.jpg",
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 717,
        //         "name": "SPIRAL DOUGH MIXER \tIBT 20L",
        //         "brand": "63",
        //         "model_number": "IBT 20L",
        //         "sku": "IMG/PAS/00012",
        //         "quantity": "0",
        //         "cost_price": "287500.00",
        //         "retail_price": "244375.00",
        //         "weight": 0,
        //         "length": 385,
        //         "width": 415,
        //         "height": 795,
        //         "short_description": "<p><strong>ITEM NO. IMG/PAS/00012</strong></p><p><strong>MODEL NO.&nbsp;&nbsp;IBT 20L</strong></p>",
        //         "description": "<ul><li>Spiral Mixer;&nbsp;Ideal equipment for pizzerias, pastry- shops, bakeries and families.</li><li>Shape of the spiral allows obtaining a perfectly mixed dough in few minutes.</li><li>The bowl, the spiral, the central column and the protection grid are made of stainless steel.</li><li>The gearbox is particulary silent as it is made of oil bath gearmotor.</li><li>All the equipment are equipped with dough-breaker.</li><li>The mixers can be equipped with a singlephase motor or a three phases one.</li><li>On request, two speeds are available on three-phases motors.</li><li>Dough weight 17kgs,</li><li>Capacity 22 liters,</li><li>Dough/hour&nbsp;56kgs,&nbsp;</li><li>Bowl diametre 36cm,</li><li>Power supply 230 | 400V,</li><li>Single-phase motor power 230Volts,&nbsp;</li><li>Three-phase motor power 400 volts,&nbsp;</li><li>Net weight 65kgs</li></ul>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2023-09-15T15:50:32.000000Z",
        //         "updated_at": "2024-11-11T10:08:00.000000Z",
        //         "main_image_path": "uploads/1694803832_IBT 20-60 LITRES.jpg",
        //         "document_path": null,
        //         "technical_specification": "<ul><li>LENGTH: 385MM</li><li>WIDTH:\t415MM</li><li>HEIGHT: 795MM</li><li>VOLTAGE: 230 | 400V</li><li>CAPACITY:\t22L</li><li>OUTPUT:\t56 KG/HOUR</li></ul>",
        //         "order_index": 1,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 717
        //         },
        //         "product_brand": {
        //             "id": 63,
        //             "name": "PRISMA FOOD",
        //             "description": "PRISMA FOOD",
        //             "created_by": null,
        //             "created_at": "2023-09-15T15:04:26.000000Z",
        //             "updated_at": "2023-09-15T15:44:30.000000Z",
        //             "main_image_path": null,
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 727,
        //         "name": "PLANETARY SPIRAL DOUGH MIXER HK B7",
        //         "brand": "5",
        //         "model_number": "HK B7",
        //         "sku": "ITEM NO. - IMG/PAS/00102",
        //         "quantity": "0",
        //         "cost_price": "95000.00",
        //         "retail_price": "76000.00",
        //         "weight": 0,
        //         "length": 400,
        //         "width": 250,
        //         "height": 419,
        //         "short_description": "<p><strong>ITEM NO. - IMG/PAS/00102</strong></p><p><strong>MODEL NO. -&nbsp;HK B7</strong></p>",
        //         "description": "<ul><li>Bakery machinery 7 LTR;</li><li>Highly efficient, compact &amp; space saving.</li><li>Reliable &amp; efficient operation.</li><li>Attractive &amp; easy to clean.</li><li>Finished in metallic gray&nbsp;&nbsp;Stainless Steel bowl, beater, hook, and wire whip included</li><li>A sturdy hand lever on the body column raises and lowers the bowl as well as locking in place at the top and bottom positions&nbsp;</li><li>Grease packed lubrication.</li><li>Bowl Capacity&nbsp;&nbsp;7.5 L.</li><li>Power 325W/220-240/50Hz.</li><li>Speed (R/Min)&nbsp;: Whisk 917</li><li>Beater&nbsp;147&nbsp;Mix dough Cap.&nbsp;&nbsp;</li><li>5 Kg&nbsp;&nbsp;Mix dough Cap.&nbsp;50% water</li></ul>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2023-09-15T17:27:45.000000Z",
        //         "updated_at": "2024-11-11T11:48:14.000000Z",
        //         "main_image_path": "uploads/1694809664_B7.jpg",
        //         "document_path": null,
        //         "technical_specification": "<ul><li>LENGTH: 400 MM</li><li>WIDTH:\t250 MM</li><li>HEIGHT: 410 MM</li><li>VOLTAGE: 220-240/50Hz</li><li>POWER RATING: 325 W</li><li>CAPACITY:\t7.5 L</li></ul>",
        //         "order_index": 1,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 727
        //         },
        //         "product_brand": {
        //             "id": 5,
        //             "name": "H-KITCHEN",
        //             "description": "H-KITCHEN",
        //             "created_by": 1,
        //             "created_at": "2023-06-12T21:00:00.000000Z",
        //             "updated_at": "2023-08-30T09:44:18.000000Z",
        //             "main_image_path": "uploads/1693399457__brand_h-kitchen.jpg",
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 1093,
        //         "name": "PORTABLE ELECTRIC SINGLE DECK-PIZZA OVEN",
        //         "brand": "77",
        //         "model_number": "CG-P340A",
        //         "sku": "IMG/OVE/00199",
        //         "quantity": "0",
        //         "cost_price": "56350.00",
        //         "retail_price": "45080.00",
        //         "weight": 0,
        //         "length": 400,
        //         "width": 425,
        //         "height": 475,
        //         "short_description": "<p>PORTABLE ELECTRIC SINGLE DECK-PIZZA OVEN&nbsp;</p>",
        //         "description": "<p>Commercial&nbsp;Portable&nbsp;Countertop&nbsp;Electric Pizza Oven</p><p>Stainless Steel Double Layer with 12 inch Pizza Stone</p><p>Made of stainless steel material, durable in use.</p><p>The pizza oven has a flexible design, and it is sturdy and durable.</p><p>Ergonomic handle, comfortable to hold, portable, strong, and durable.</p>",
        //         "terms_of_operation": "<p>2000W</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2024-08-28T06:51:19.000000Z",
        //         "updated_at": "2024-11-11T07:49:28.000000Z",
        //         "main_image_path": "uploads/1724827879_images.jpeg",
        //         "document_path": null,
        //         "technical_specification": "<p>Electric 12'' Pizza oven</p><p>Voltage 220V</p><p>Power 800W</p><p>Package Weight:14.1kg</p>",
        //         "order_index": 2,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 1093
        //         },
        //         "product_brand": {
        //             "id": 77,
        //             "name": "DIQIAN",
        //             "description": "DIQIAN",
        //             "created_by": null,
        //             "created_at": "2024-08-28T06:52:16.000000Z",
        //             "updated_at": "2024-08-28T06:52:16.000000Z",
        //             "main_image_path": "uploads/1724827936__brand_The Sheffield Green Solutions Logo_Transparent.png",
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 718,
        //         "name": "SPIRAL DOUGH MIXER IBT 30L",
        //         "brand": "63",
        //         "model_number": "IBT 30L",
        //         "sku": "ITEM NO. IMG/PAS/00013",
        //         "quantity": "0",
        //         "cost_price": "316250.00",
        //         "retail_price": "268812.50",
        //         "weight": 0,
        //         "length": 424,
        //         "width": 735,
        //         "height": 805,
        //         "short_description": "<p><strong>ITEM NO. IMG/PAS/00013</strong></p><p><strong>MODEL NO.&nbsp;&nbsp;IBT 30L</strong></p>",
        //         "description": "<ul><li>30 Lt Spiral Mixer;&nbsp;Ideal equipment for pizzerias, pastry- shops, bakeries and families.</li><li>Shape of the spiral allows obtaining a perfectly mixed dough in few minutes.</li><li>The bowl, the spiral, the central column and the protection grid are made of stainless steel.</li><li>The gearbox is particulary silent as it is made of oil bath gearmotor.</li><li>All the equipment are equipped with dough-breaker.</li><li>The mixers can be equipped with a singlephase motor or a three phases one.</li><li>On request, two speeds are available on three-phases motors.</li><li>Dough weight 25kgs,</li><li>Capacity 32 liters,</li><li>Dough/hour&nbsp;88 kgs,&nbsp;</li><li>Bowl diametre 40 cm,</li><li>Power supply 230 | 400V,</li><li>Single-phase motor power 230Volts,&nbsp;</li><li>Three-phase motor power 400 volts,&nbsp;</li><li>Net weight 86.6kgs</li></ul>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2023-09-15T15:54:29.000000Z",
        //         "updated_at": "2024-11-11T10:08:39.000000Z",
        //         "main_image_path": "uploads/1694804069_IBT 20-60 LITRES.jpg",
        //         "document_path": null,
        //         "technical_specification": "<ul><li>LENGTH: 424MM</li><li>WIDTH:\t735MM</li><li>HEIGHT: 805MM</li><li>VOLTAGE: 230 | 400V</li><li>CAPACITY:\t32L</li><li>OUTPUT:\t88KG/HOUR</li></ul>",
        //         "order_index": 2,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 718
        //         },
        //         "product_brand": {
        //             "id": 63,
        //             "name": "PRISMA FOOD",
        //             "description": "PRISMA FOOD",
        //             "created_by": null,
        //             "created_at": "2023-09-15T15:04:26.000000Z",
        //             "updated_at": "2023-09-15T15:44:30.000000Z",
        //             "main_image_path": null,
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 725,
        //         "name": "PLANETARY  DOUGH MIXER B10GA",
        //         "brand": "5",
        //         "model_number": "B10GA",
        //         "sku": "IMG/PAS/00103",
        //         "quantity": "0",
        //         "cost_price": "165000.00",
        //         "retail_price": "132000.00",
        //         "weight": 0,
        //         "length": 430,
        //         "width": 420,
        //         "height": 690,
        //         "short_description": "<p><strong>ITEM NO. - IMG/PAS/00103</strong></p><p><strong>MODEL NO. -&nbsp;B10GA</strong></p>",
        //         "description": "<ul><li>Bakery machinery 10LTR; 10 Litre capacity&nbsp;</li><li>Powerful 1100 Watt Motor 240v 50Hz 10amp plug.</li><li>Weight: 62 kg.</li><li>3-Speed gear box 244, 148 &amp; 480rpm.</li><li>3 Attachments. Hook, whisk and beater.</li><li>Transmission: Wide-faced, hardened alloy steel, helical gears fully sealed in transmission lubricant with heavy-duty ball bearings and clutch combine for highly dependable, quiet operation.</li><li>Motor cooling system.</li><li>Safety Guard.</li><li>Moisture resistant switches.&nbsp;</li><li>Thermal Protected motor.</li><li>Cast base construction.</li><li>Silver metallic finish using epoxy powder coat enamel for easy cleaning.&nbsp;</li></ul>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2023-09-15T17:13:03.000000Z",
        //         "updated_at": "2024-11-11T10:16:04.000000Z",
        //         "main_image_path": "uploads/1694808783_B10GFA.jpg",
        //         "document_path": null,
        //         "technical_specification": "<ul><li>LENGTH: 430MM</li><li>WIDTH:\t420MM</li><li>HEIGHT: 690MM</li><li>VOLTAGE: 240v 50Hz&nbsp;</li><li>RPM:\t480RPM</li><li>ATTACHMENTS:\tHOOK, WHISK &amp; BEATER</li></ul>",
        //         "order_index": 2,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 725
        //         },
        //         "product_brand": {
        //             "id": 5,
        //             "name": "H-KITCHEN",
        //             "description": "H-KITCHEN",
        //             "created_by": 1,
        //             "created_at": "2023-06-12T21:00:00.000000Z",
        //             "updated_at": "2023-08-30T09:44:18.000000Z",
        //             "main_image_path": "uploads/1693399457__brand_h-kitchen.jpg",
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 719,
        //         "name": "SPIRAL DOUGH MIXER IBT 40L",
        //         "brand": "63",
        //         "model_number": "IBT 40L",
        //         "sku": "IMG/PAS/00014",
        //         "quantity": "0",
        //         "cost_price": "402500.00",
        //         "retail_price": "342125.00",
        //         "weight": 0,
        //         "length": 480,
        //         "width": 805,
        //         "height": 828,
        //         "short_description": "<p><strong>ITEM NO. IMG/PAS/00014&nbsp;</strong></p><p><strong>MODEL NO.&nbsp;&nbsp;IBT 40L</strong></p>",
        //         "description": "<ul><li>40 Lt Spiral Mixer;&nbsp;&nbsp;Ideal equipment for pizzerias, pastry- shops, bakeries and families.</li><li>Shape of the spiral allows obtaining a perfectly mixed dough in few minutes.</li><li>The bowl, the spiral, the central column and the protection grid are made of stainless steel.</li><li>The gearbox is particulary silent as it is made of oil bath gearmotor.</li><li>All the equipment are equipped with dough-breaker.</li><li>The mixers can be equipped with a singlephase motor or a three phases one.</li><li>On request, two speeds are available on three-phases motors.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li>PowerSupply(V) 230/1/50.</li><li>Motor power (Kw) 1.1.</li><li>Capacity (Ltr) 40.</li><li>Dough/hr (kg) 112.</li><li>Ideal equipment for pizzerias, pastry- shops, bakeries and families.</li><li>Single-phase motor power KW 1.1 .</li><li>Three-phase motor power KW 1.1.</li><li>Volume m3 0,4.&nbsp;</li><li>Gross weight 108 KGS</li></ul>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2023-09-15T15:58:31.000000Z",
        //         "updated_at": "2024-11-11T10:09:13.000000Z",
        //         "main_image_path": "uploads/1695166568_IBT 20-60 LITRES.jpg",
        //         "document_path": null,
        //         "technical_specification": "<ul><li>LENGTH: 480 MM</li><li>WIDTH:\t805 MM</li><li>HEIGHT: 828 MM</li><li>VOLTAGE: (V) 230/1/50.&nbsp;</li><li>CAPACITY:\t41 L</li><li>OUTPUT:\t112 KG/HR</li></ul>",
        //         "order_index": 3,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 719
        //         },
        //         "product_brand": {
        //             "id": 63,
        //             "name": "PRISMA FOOD",
        //             "description": "PRISMA FOOD",
        //             "created_by": null,
        //             "created_at": "2023-09-15T15:04:26.000000Z",
        //             "updated_at": "2023-09-15T15:44:30.000000Z",
        //             "main_image_path": null,
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 726,
        //         "name": "PLANETARY DOUGH MIXER B20GA",
        //         "brand": "5",
        //         "model_number": "B20GA",
        //         "sku": "IMG/PAS/00101",
        //         "quantity": "0",
        //         "cost_price": "225000.00",
        //         "retail_price": "180000.00",
        //         "weight": 0,
        //         "length": 880,
        //         "width": 530,
        //         "height": 460,
        //         "short_description": "<p><strong>ITEM NO. - IMG/PAS/00101</strong></p><p><strong>MODEL NO. -&nbsp;B20GA&nbsp;</strong></p>",
        //         "description": "<ul><li>Bakery machinery 20LTR; 20 Litre capacity&nbsp;</li><li>Powerful 1100 Watt Motor 240v 50Hz 10amp plug.</li><li>Weight: 95kg.</li><li>3-Speed gear box 197,317 &amp; 462rpm. 3</li><li>Attachments. Hook, whisk and beater.</li><li>Transmission: Wide-faced, hardened alloy steel, helical gears fully sealed in transmission lubricant with heavy-duty ball bearings and clutch combine for highly dependable, quiet operation.</li><li>Motor cooling system.</li><li>Safety Guard.</li><li>Moisture resistant switches.&nbsp;</li><li>Thermal Protected motor.</li><li>Cast base construction.</li><li>Silver metallic finish using epoxy powder coat enamel for easy cleaning.&nbsp;</li></ul>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2023-09-15T17:18:56.000000Z",
        //         "updated_at": "2024-11-11T10:16:44.000000Z",
        //         "main_image_path": "uploads/1698332755_B20GA .jpg",
        //         "document_path": null,
        //         "technical_specification": "<ul><li>LENGTH: 880mm</li><li>WIDTH:\t530mm</li><li>HEIGHT: 460mm</li><li>VOLTAGE: 240v 50Hz&nbsp;</li><li>RPM:\t462RPM</li><li>ATTACHMENTS:\tHOOK, WHISK &amp; BEATER</li></ul>",
        //         "order_index": 3,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 726
        //         },
        //         "product_brand": {
        //             "id": 5,
        //             "name": "H-KITCHEN",
        //             "description": "H-KITCHEN",
        //             "created_by": 1,
        //             "created_at": "2023-06-12T21:00:00.000000Z",
        //             "updated_at": "2023-08-30T09:44:18.000000Z",
        //             "main_image_path": "uploads/1693399457__brand_h-kitchen.jpg",
        //             "is_published": 1
        //         }
        //     },
        //     {
        //         "id": 688,
        //         "name": "1 DECK ELECTRIC PIZZA OVEN",
        //         "brand": "58",
        //         "model_number": "Basic 1/50 Vetro",
        //         "sku": "IMG/OVE/00017",
        //         "quantity": "0",
        //         "cost_price": "215625.00",
        //         "retail_price": "172500.00",
        //         "weight": 0,
        //         "length": 915,
        //         "width": 690,
        //         "height": 355,
        //         "short_description": "<p><strong>ITEM NO. - IMG/OVE/00017</strong></p><p><strong>MODEL NO. - Basic 1/50 Vetro</strong></p>",
        //         "description": "<ul><li>1 deck Electric Pizza Oven;&nbsp;</li><li>Internal&nbsp;Dimension (mm) 620x500x120.</li><li>Temperature (ºC) 50 - 500.</li><li>Power Supply (V) 230/1/50&nbsp;</li><li>Motor power (Kw) 5</li><li>Capacity (Pcs) 4 per cycle</li><li>Cooking surface in refractory stones</li><li>Sheathed heating elements</li><li>Internal lighting</li><li>Rock wool insulation</li><li>Standard power supply is 400 Volt three-phases + neutral.</li></ul>",
        //         "terms_of_operation": "<p>null</p>",
        //         "is_published": 1,
        //         "created_by": null,
        //         "created_at": "2023-09-14T21:42:16.000000Z",
        //         "updated_at": "2024-11-11T07:50:13.000000Z",
        //         "main_image_path": "uploads/1694738536_BASIC 150.png",
        //         "document_path": null,
        //         "technical_specification": "<ul><li>LENGTH: 915MM</li><li>WIDTH:\t690MM</li><li>HEIGHT: 355MM</li><li>VOLTAGE(V): 230/1/50</li><li>WATTAGE: 5 Kw</li><li>CAPACITY:\t4 PCS PER CYCLE</li></ul>",
        //         "order_index": 4,
        //         "focus_keyword": null,
        //         "meta_description": null,
        //         "main_image_alt_attribute": null,
        //         "pivot": {
        //             "category_id": 371,
        //             "product_id": 688
        //         },
        //         "product_brand": {
        //             "id": 58,
        //             "name": "PRISMA",
        //             "description": "PRISMA",
        //             "created_by": null,
        //             "created_at": "2023-09-14T21:34:41.000000Z",
        //             "updated_at": "2023-09-14T21:34:41.000000Z",
        //             "main_image_path": null,
        //             "is_published": 1
        //         }
        //     }
        // ];

        promotionProducts.value = response.data.products.data;

        promotionProducts.value = promotionProducts.value.map((product) => {
            if (convertToNumber(product.cost_price) <= 0) {
                product.cost_price = convertToNumber(product.retail_price);
            }

            if (convertToNumber(product.cost_price) <= 0) {
                return null;
            }

            return {
                ...product,
                cost_price: convertToNumber(product.cost_price),
                retail_price: convertToNumber(product.retail_price),
            };
        }).filter((product) => product !== null);

        //console.log(promotionProducts)
    } catch (error) {
        console.error(error);
    }
};

const convertToNumber = (value) => {
    let num = Number(value);
    return isNaN(num) ? 0 : num;
};


onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})


onMounted(() => {
    // const popupDismissed = localStorage.getItem("popupDismissed");
    window.addEventListener('resize', handleResize)
    const popupDismissed = false;
    if (!popupDismissed) {
        showPopup.value = true;
    }

    promotionId.value = 371;

    // Initial fetch of products
    fetchProducts();
});

const viewProduct = (route = null) => {
    if (route) {
        router.push(route);
        return;
    }
    window.open("https://forms.gle/as8SvN2SNTKxSbKA9", "_blank");
};

</script>



<style>
/* Swiper Navigation Enhancements */
.swiper-button-next,
.swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.9);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.swiper-button-next:after,
.swiper-button-prev:after {
    font-size: 18px !important;
    color: #333;
}

.swiper-pagination-bullet {
    transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
    background: #dc3545 !important;
    transform: scale(1.2);
}
</style>

<style scoped>
.cat-banner-row .carousel__prev {
    height: 92% !important;
    color: #8a8a8a !important;
    background-color: #ffffff !important;
    border: 0.3px solid !important;
    border-radius: 0 !important;
    top: 49% !important;
}

.cat-banner-row .carousel__next {
    height: 92% !important;
    color: #8a8a8a !important;
    background-color: #ffffff !important;
    border: 0.3px solid !important;
    border-radius: 0 !important;
    top: 49% !important;
}

.count-to {
    font-weight: 650;
}

@media (min-width: 992px) {
    .home_page_category .col-lg-4 {
        -ms-flex: 0 0 30.333333%;
        flex: 0 0 30.333333%;
        max-width: 30.333333%;
    }
}

.header_phone {
    font-size: 20px !important;
    font-weight: 700 !important;
    color: #3e5cac !important;
}

#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -15;
}

.video-container {
    position: relative;
    display: inline-block;
}

.overlay {
    position: fixed;
    z-index: -12;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    pointer-events: none;
}

.app {
    position: fixed;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
}

.banner img {
    position: relative;
    z-index: -10;
}

.cta-border {
    margin-left: 0px !important;
    background-color: transparent;
}

.header-transparent {
    background-color: transparent;
}

/*My home modal*/
.row.vertical-divider {
    overflow: hidden;
}

.row.vertical-divider>div[class^="col-"] {
    padding-bottom: 100px;
    margin-bottom: -100px;
    border-left: 2px solid #ec1f25;
    border-right: 2px solid #ec1f25;
}

.row.vertical-divider div[class^="col-"]:first-child {
    border-left: none;
}

.row.vertical-divider div[class^="col-"]:last-child {
    border-right: none;
}

.modal-dialog {
    max-width: 95%;
}

.modal-content {
    background-color: #ffffffe8;
}

.modal-header {
    border-bottom: transparent;
}

.popup-form label {
    font-weight: 550;
    color: #000;
}

.searchListMainDiv {
    min-width: 40%;
    margin: 0 1rem;
}

.searchListMainDiv h1 {
    margin-bottom: 1rem;
}

.searchListMainDiv ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 0.5rem;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    border: 1px solid rgb(255, 255, 255);
    max-height: 250px;
    overflow-y: auto;
    position: absolute;
    top: 30px;
    z-index: 1200;
    background-color: #fff;
    width: 100%;
}

.searchListMainDiv ul::-webkit-scrollbar {
    width: 5px;
}

.searchListMainDiv ul::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #ddd;
    border-radius: 10px;
}

.searchListMainDiv ul::-webkit-scrollbar-thumb {
    background: rgb(183, 183, 183);
    border-radius: 10px;
}

.searchListMainDiv ul::-webkit-scrollbar-thumb:hover {
    background: #a2a2a2;
}

.searchListMainDiv ul li {
    padding: 1.2rem 10px;
    font-size: 13.5px;
    font-weight: 500;
    line-height: 1.3rem;
    border-bottom: 1px solid #ddd;
    color: #333;
    cursor: pointer;
    overflow-wrap: break-word;
}

.searchListMainDiv ul li:last-child {
    border: none;
}

.home-section {
    opacity: 0;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
}

.home-last {
    animation-name: slideFromLeft;
}

.home-laundry {
    animation-name: slideFromBottom;
}

.home-cold-storage {
    animation-name: slideFromBottom;
}

.home-first {
    animation-name: slideFromRight;
}

.home-kitchen {
    animation-name: slideFromTop;
}

@keyframes slideFromLeft {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideFromBottom {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideFromTop {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideFromRight {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.home-design-mobile {
    display: none;
}

.home-design {
    display: flex;
    width: 140%;
    margin-left: -20%;
}

.home-section-white {
    margin: 0.8%;
    border: 15px solid #ffffff;
    border-radius: 50%;
    background-color: #ffffff;
}

.home-section img {
    background: transparent;
    display: block;
    box-shadow: 0 0 20px 1px #000;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.home-kitchen {
    z-index: 10;
    position: relative;
    width: 23%;
    height: 23%;
    padding: 1.3%;
    border-radius: 50%;
    background: linear-gradient(172deg, #c02434 13.87%, transparent 22.27%),
        linear-gradient(349deg, #c02434 11.34%, transparent 23.95%);
}

.home-laundry {
    z-index: 9;
    margin-left: -6%;
    margin-top: -2%;
    position: relative;
    width: 20%;
    height: 20%;
    padding: 1.3%;
    border-radius: 50%;
    background: linear-gradient(187deg, #72b433 22.71%, transparent 30.89%),
        linear-gradient(358deg, #72b433 7.34%, transparent 12.02%);
}

.home-cold-storage {
    margin-right: -6%;
    margin-top: 4%;
    position: relative;
    width: 22%;
    height: 22%;
    padding: 1.3%;
    border-radius: 50%;
    background: linear-gradient(185deg, #304296 5.36%, transparent 12.61%),
        linear-gradient(21deg, #304296 27.73%, transparent 39.5%);
}

.home-first {
    margin-right: -6%;
    position: relative;
    width: 14%;
    height: 14%;
    padding: 0.6%;
    border-radius: 50%;
    background: linear-gradient(172deg, #656565 25.21%, transparent 45.8%),
        linear-gradient(71deg, #656565 11.34%, transparent 42.02%);
}

.home-last {
    margin-top: 6%;
    margin-left: -6%;
    position: relative;
    width: 14%;
    height: 14%;
    padding: 0.6%;
    border-radius: 50%;
    background: linear-gradient(234deg, #656565 26.71%, transparent 36.89%),
        linear-gradient(330deg, #656565 29.34%, transparent 42.02%);
}

.home-section-cat img:hover {
    box-shadow: 0 0 14px 5px #262626;
    z-index: 11;
}

.home-section-cat:hover {
    z-index: 11;
}

.home-section-cat .home-section-white:hover {
    margin: 0.1%;
    border: 8px solid #ffffff;
}

.mobile-header {
    display: none;
}

.desktop-header .mobile-menu-toggler {
    padding-top: 1.9rem;
    font-size: 4.6rem;
}

.desktop-header .icon-bars:before {
    color: #333;
}

/* mobile screens */

@media only screen and (max-width: 768px) {
    .home-design {
        display: none;
    }

    .home-design-mobile {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-left: 0%;
        margin-top: 1px !important;
    }

    .home-first {
        display: none;
    }

    .home-last {
        display: none;
    }

    .home-kitchen {
        z-index: 10;
        margin-right: 0%;
        margin-left: 0%;
        margin-top: 4%;
        position: relative;
        padding: 3.3%;
        width: 90%;
        height: 90%;
        background: linear-gradient(147deg, #c02434 36.97%, transparent 54.62%),
            linear-gradient(261deg, #c02434 11.34%, transparent 23.95%);
    }

    .home-cold-storage {
        z-index: 11;
        margin-right: 0%;
        margin-left: 0%;
        position: relative;
        padding: 3.3%;
        width: 90%;
        height: 90%;
        margin-top: -30%;
        background: linear-gradient(269deg, #3b5dac 5.36%, transparent 15.13%),
            linear-gradient(92deg, #3b5dac 7.14%, transparent 15.97%);
    }

    .home-laundry {
        z-index: 12;
        margin-right: 0%;
        margin-left: 0%;
        position: relative;
        padding: 3.3%;
        width: 90%;
        height: 90%;
        margin-top: -30%;
        background: linear-gradient(71deg, #72b433 22.71%, transparent 30.89%),
            linear-gradient(316deg, #72b433 36.55%, transparent 50%);
    }

    .desktop-header {
        display: none;
    }

    .mobile-header {
        display: block;
        background-image: url("../assets/images/sheffield_stainless_steel_background.jpg");
    }

    .mobile-menu-toggler {
        margin-left: 2rem;
        font-size: 3.5rem;
        color: #333;
    }

    .home-cold-storage {
        animation-name: slideFromLeft;
    }

    .cta-title {
        font-size: 1.54rem;
    }

    .my-footer-li {
        margin-left: 29px;
    }

    .my-footer-li i {
        font-size: 22px;
        margin-right: 15px;
        color: #c02434;
        margin-left: -34px;
    }
}

.desktop-header {
    margin-top: -110px;
}

/* Tablet screens */

@media only screen and (min-width: 769px) and (max-width: 1025px) {
    .home-design {
        margin-top: 1px !important;
    }

    .home-first {
        display: none;
    }

    .home-last {
        display: none;
    }

    .home-kitchen {
        margin-top: 4%;
        position: relative;
        width: 32%;
        height: 32%;
        background: linear-gradient(181deg, #c02434 7.14%, transparent 15.55%),
            linear-gradient(358deg, #c02434 10.5%, transparent 21.01%);
    }

    .home-laundry {
        margin-left: -9%;
        margin-top: 4%;
        position: relative;
        width: 29%;
        height: 29%;
        background: linear-gradient(215deg, #72b433 25.21%, transparent 42.44%),
            linear-gradient(320deg, #72b433 27.31%, transparent 42.86%);
    }

    .home-cold-storage {
        margin-right: -9%;
        margin-top: 4%;
        position: relative;
        width: 29%;
        height: 29%;
        background: linear-gradient(134deg, #3b5dac 28.15%, transparent 50%),
            linear-gradient(29deg, #3b5dac 27.73%, transparent 39.5%);
    }
}

.button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}

.popup-advert {
    position: fixed;
    /* Use fixed positioning */
    top: 0;
    /* Align to the top of the viewport */
    left: 0;
    /* Align to the left of the viewport */
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent background */
    display: flex;
    /* Use flexbox to center the content */
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
    z-index: 1000;
    /* High z-index to stay on top */
}

.popup-content {
    background: white;
    /* Background for the popup content */
    padding: 20px;
    /* Padding */
    border-radius: 8px;
    /* Rounded corners */
    text-align: center;
    /* Center text */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    /* Optional shadow for depth */
    max-width: 500px;
    /* Maximum width for the popup */
    width: 90%;
    /* Full width up to max-width */
}

.popup-image {
    max-width: 100%;
    /* Ensure the image is responsive */
    height: auto;
    /* Keep the aspect ratio */
    border-radius: 8px;
    /* Optional rounded corners for the image */
}
</style>
