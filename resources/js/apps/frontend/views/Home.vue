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
                                    Quote</router-link>

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
                        <!-- Promo Image Section with zoom effect -->
                        <div class="image-container col-xl-3 col-lg-4 col-md-12 mb-md-4" style="height: 100%">
                            <div class="promo-image-wrapper">
                                <img src="/assets/images/events/november-promo.png" alt="Promotion Banner"
                                    class="img img-fluid contain promo-image" style="height: 100%; width: 90%;">
                            </div>
                        </div>

                        <!-- Products Section -->
                        <div class="col-xl-9 col-lg-8 col-md-12" style="height: 100%">
                            <!-- Animated Date Banner -->
                            <div class="bg-danger text-xl-right text-center text-uppercase fw-bold p-1"
                                style="color: white; border-radius: 4px; position: relative; overflow: hidden; font-weight: bold;">
                                VALID 1ST - 30TH NOVEMBER, 2024
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
                                }" @swiper="onSwiper" class="products-container">
                                <swiper-slide v-for="product in promotionProducts" :key="product.id">
                                    <div class="own-product position-relative px-2 h-100"
                                        style="border-radius: 12px; transition: all 0.3s ease;">
                                        <!-- Product Image with loading skeleton -->
                                        <div class="product-image-container" style="flex: 2;">
                                            <router-link
                                                :to="getProductLink(product.id, product.name, product.model_number)"
                                                class="d-flex justify-content-center align-items-center mt-2">
                                                <div class="image-skeleton" v-if="!imageLoaded"></div>
                                                <img v-lazy="'/storage/' + product.main_image_path" :alt="product.name"
                                                    class="img img-fluid product-image"
                                                    style="object-fit: contain; width: 80%; border-radius: 10px;"
                                                    @load="imageLoaded = true">
                                            </router-link>
                                        </div>

                                        <!-- Product Details with improved spacing -->
                                        <div class="d-flex py-4 product-details"
                                            style="flex: 1; flex-direction: column;">
                                            <!-- Product Name with ellipsis -->
                                            <span class="text-start"
                                                style=" margin-bottom: 8px; color: black; font-weight: bold;">
                                                {{ product.name }}
                                            </span>

                                            <!-- Description with ellipsis -->
                                            <span class="text-start text-muted product-description"
                                                style="font-size: 1.1rem; margin-bottom: 12px;">
                                                {{ product.description }}
                                            </span>

                                            <!-- Pricing Section -->
                                            <div class="pricing-section">
                                                <!-- Original Price -->
                                                <span class="fw-bold text-center text-muted"
                                                    style="text-decoration: line-through; font-size: 1.4rem; font-weight: bold;">
                                                    KES {{ formatPrice(product.price || 56350.00) }}
                                                </span>

                                                <!-- Savings Badge -->
                                                <span class="savings-badge"
                                                    style="position: absolute; right: 10px; top: 10px;">
                                                    Save {{ calculateDiscount(product.price, product.discounted_price)
                                                    }}%
                                                </span>

                                                <!-- Discounted Price with animation -->
                                                <div class="price-tag bg-danger fw-bold text-uppercase"
                                                    style="width: 80%; color: white; text-align: center; border-radius: 10px; margin: 10px auto;">
                                                    KES {{ formatPrice(product.discounted_price || 45080.00) }}
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Enhanced Add to Cart Button -->
                                        <div class="product-action-image">
                                            <button @click="addToCart(product)" class="btn-product btn-cart"
                                                :class="{ 'adding': isAdding }" @mouseenter="showTooltip = true"
                                                @mouseleave="showTooltip = false">
                                                <span class="btn-text">{{ addToCartText }}</span>
                                                <div class="btn-loading-icon" v-if="isAdding">
                                                    <span class="spinner"></span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </swiper-slide>

                                <!-- Empty slide for "View All" button -->
                                <swiper-slide>
                                    <div class="view-all-slide d-flex align-items-center justify-content-center h-100 d-block"
                                        style="margin-top: 45%">
                                        <router-link to="/products" class="btn btn-dark btn-lg view-all-button">
                                            View All Products
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="ms-2" width="16" height="16">
                                                <path d="M12 2L10.59 3.41 17.17 10H2v2h15.17l-6.58 6.59L12 22l10-10z" />
                                            </svg>
                                        </router-link>
                                    </div>
                                </swiper-slide>
                            </swiper>

                            <!-- Mobile View All Button -->
                            <div class="d-md-none text-center mt-4">
                                <router-link to="/products" class="btn btn-dark btn-block">
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
                <img src="/images/adverts/commercial-kitchen-coldroom-optimized-2.webp" alt="Rotobake Ovens Solutions"
                    class="popup-image" style="min-height: 460px;" />
                <div class="button-group">
                    <button @click="dismissPopup" class="btn btn-primary btn-footer mr-5">
                        Cancel
                    </button>
                    <button @click="viewProduct" class="btn btn-secondary btn-footer ml-5">
                        View
                    </button>
                </div>
            </div>
        </div>
    </template>

    <button id="scroll-top" title="Back to Top">
        <i class="icon-arrow-up"></i>
    </button>
</template>

<script setup>
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useRouter } from "vue-router";

import { useMeta } from "../../admin/composables/use-meta";
useMeta({
    title: "Home",
    description:
        "We offer commercial kitchen, laundry, cold room & stainless steel fabricated solutions",
    keywords: "Commercial Kitchen, Commercial laundry, Commercial Cold room",
});

import { useStore } from "vuex"; // Import the store

const store = useStore();

const imageLoaded = ref(false)
const isAdding = ref(false)
const showTooltip = ref(false)
const swiperInstance = ref(null)

const slidesPerView = computed(() => {
    const width = window.innerWidth
    if (width < 576) return 1 // Mobile
    if (width < 768) return 2 // Tablet
    if (width < 992) return 2 // Small desktop
    if (width < 1200) return 3 // Medium desktop
    return 4 // Large desktop
})

const addToCartText = computed(() => {
    return isAdding.value ? 'Adding...' : 'Add to Cart'
})

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE').format(price)
}

const calculateDiscount = (original, discounted) => {
    if (!original || !discounted) return 0
    return Math.round(((original - discounted) / original) * 100)
}

// const getProductLink = (id, name, modelNumber) => {
//     return {
//         name: 'product-details',
//         params: {
//             id,
//             slug: `${name}-${modelNumber}`.toLowerCase().replace(/\s+/g, '-')
//         }
//     }
// }

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

const addToCart = (product) => {
    if (isAdding.value) return;
    isAdding.value = true
    try {
        const toast = window.Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 4000,
            padding: "2em",
        });
        store.dispatch("cart/addToCart", product);
        toast.fire({
            icon: "success",
            title: "Item added to cart",
            padding: "2em",
            customClass: {
                title: "swal-title-class",
            },
        });
    } catch (error) {
        console.error(error)
        toast.fire({
            icon: "error",
            title: "Failed to add item to cart",
            padding: "2em",
            customClass: {
                title: "swal-title-class",
            },
        });
    } finally {
        isAdding.value = false
    }
}

const cartItems = store.state.cart.cartItems;

const removeFromCart = (index) => {
    store.dispatch("cart/removeFromCart", index);
};

const getProductLink = (id, name, model_number, main_second_parent_cat) => {
    // Replace spaces with dashes
    let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
    // Remove consecutive dashes
    transformedName = transformedName.replace(/-+/g, "-");
    // Remove leading and trailing dashes
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    // Convert to lowercase
    transformedName = transformedName.toLowerCase();

    let transformedModelNumber = model_number
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/\//g, "-");
    // Remove consecutive dashes
    transformedModelNumber = transformedModelNumber.replace(/-+/g, "-");
    // Remove leading and trailing dashes
    transformedModelNumber = transformedModelNumber.replace(/^-+|-+$/g, "");

    return `/kitchen/product/${id}/${transformedName}-${transformedModelNumber}`;
};

const query = ref("");
const results = ref([]);
const showResults = ref(false);
const searchLoading = ref(false);
const showPopup = ref(false);
const router = useRouter();

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
    //bodyClassAdded.value = !bodyClassAdded.value;
    //document.body.classList.toggle('mmenu-active', bodyClassAdded.value);
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.toggle("mmenu-active1", true);
    //document.body.classList.toggle('mmenu-active', false);
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
            "/api/get-promotion-products",
            {
                params: {
                    promotion_id: promotionId.value,
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            },

        );

        if (!response.data.products) {
            return;
        }

        promotionProducts.value = response.data.products.data;

        //console.log(promotionProducts)
    } catch (error) {
        console.error(error);
    }
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

    promotionId.value = 12;

    // Initial fetch of products
    // fetchProducts();
    // promotionProducts.value = [
    //     {
    //         id: 1,
    //         name: 'Electric Pizza Oven',
    //         description: 'Single Deck',
    //         solution_category: 18,
    //         main_image_path: '1.jpeg',
    //         is_published: true,
    //         model_number: '89-HJ',
    //         product_brand: {
    //             name: 'Hello'
    //         },
    //         categories_json: [
    //             {
    //                 parent_name_with_slashes: 'trial'
    //             }
    //         ],
    //         solutionCategories: null,
    //         the_category: null,
    //         the_category_name: null,
    //         created_at: '12/12/2024'
    //     },
    //     {
    //         id: 2,
    //         name: 'Gas Pizza Oven',
    //         description: 'Single Deck',
    //         solution_category: 18,
    //         main_image_path: '2.jpg',
    //         model_number: '89-HI',
    //         product_brand: {
    //             name: 'Hello'
    //         },
    //         categories_json: [
    //             {
    //                 parent_name_with_slashes: 'name'
    //             }
    //         ],
    //         is_published: true,
    //         product_categories_json: null,
    //         solutionCategories: null,
    //         the_category: null,
    //         the_category_name: null,
    //         created_at: '12/12/2024'
    //     },
    //     {
    //         id: 3,
    //         name: 'Electric Pizza Oven',
    //         description: 'Double Deck',
    //         solution_category: 18,
    //         main_image_path: '3.jpeg',
    //         is_published: true,
    //         model_number: '89-HK',
    //         product_brand: {
    //             name: 'Hello'
    //         },
    //         categories_json: [
    //             {
    //                 parent_name_with_slashes: 'name'
    //             }
    //         ],
    //         product_categories_json: null,
    //         solutionCategories: null,
    //         the_category: null,
    //         the_category_name: null,
    //         created_at: '12/12/2024'
    //     },

    //     {
    //         id: 4,
    //         name: 'Electric Pizza Oven',
    //         description: 'Double Deck',
    //         solution_category: 18,
    //         main_image_path: '3.jpeg',
    //         is_published: true,
    //         model_number: '89-HK',
    //         product_brand: {
    //             name: 'Hello'
    //         },
    //         categories_json: [
    //             {
    //                 parent_name_with_slashes: 'name'
    //             }
    //         ],
    //         product_categories_json: null,
    //         solutionCategories: null,
    //         the_category: null,
    //         the_category_name: null,
    //         created_at: '12/12/2024'
    //     },

    // ];
});

const viewProduct = () => {
    window.open("https://forms.gle/as8SvN2SNTKxSbKA9", "_blank");
};


</script>

<style>
/* Enhanced Animations and Styling */
.promo-image-wrapper {
    overflow: hidden;
    border-radius: 12px;
}

.promo-image {
    transition: transform 0.5s ease;
}

.promo-image-wrapper:hover .promo-image {
    transform: scale(1.05);
}

/* Banner animation */
.banner-animate {
    position: relative;
}

.banner-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%);
    animation: shine 3s infinite;
}

@keyframes shine {
    to {
        left: 200%;
    }
}

/* Product Card Enhancements */
.own-product {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.own-product:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

/* Product Image */
.product-image-container {
    position: relative;
    overflow: hidden;
}

.image-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    height: 200px;
    border-radius: 10px;
}

@keyframes loading {
    to {
        background-position: -200% 0;
    }
}

/* Enhanced Add to Cart Button */
.product-action-image {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.95);
    width: 50%;
    border-radius: 10px;
    margin: auto;
    z-index: 10;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(50%);
}

.btn-product span,
.btn-product {
    color: #c02434 !important;
}

.btn-product {

    background: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.btn-product:hover {
    background: #f8f9fa;
}

.btn-product.adding {
    pointer-events: none;
    opacity: 0.8;
}

/* Loading Spinner */
.spinner {
    width: 20px;
    height: 20px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #dc3545;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Price Tag Animation */
.price-tag {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.price-tag:hover {
    transform: scale(1.05);
}

/* Savings Badge */
.savings-badge {
    background: #28a745;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
}

/* Quick View Button */
.quick-view-button {
    position: absolute;
    top: 10px;
    left: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.own-product:hover .quick-view-button {
    opacity: 1;
}

/* View All Button */
.view-all-button {
    transition: all 0.3s ease;
}

.view-all-button:hover {
    transform: translateX(5px);
}

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

/* Responsive Adjustments */
@media (max-width: 768px) {
    .product-action-image {
        width: 70%;
    }

    .own-product {
        margin-bottom: 20px;
    }

    .quick-view-button {
        opacity: 1;
    }
}
</style>

<style>
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

.product-image {
    height: auto !important;
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
