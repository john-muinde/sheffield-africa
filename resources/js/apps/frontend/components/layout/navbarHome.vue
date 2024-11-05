<template>
<header class="header header-6 header-transparent desktop-header">
        <div class="header-middle mt-2">
            <div class="container">
                <div class="header-left">
                    <div
                        class="header-search header-search-extended header-search-visible d-none d-lg-block"
                    >
                        <a href="#" class="search-toggle" role="button"
                            ><i class="icon-search"></i
                        ></a>
                        <form action="#" method="get">
                            <div
                                class="header-search-wrapper search-wrapper-wide searchListMainDiv"
                            >
                                <label for="q" class="sr-only">Search</label>
                                <button class="btn btn-primary" type="submit">
                                    <i class="icon-search"></i>
                                </button>
                                <input
                                    type="search"
                                    v-model="query"
                                    @input="search"
                                    class="form-control"
                                    name="q"
                                    id="query"
                                    autocomplete="off"
                                    placeholder="Search product ..."
                                    required=""
                                />
                                <ul v-if="showResults" class="">
                                    <li
                                        v-for="result in results"
                                        :key="result.id"
                                    >
                                        <router-link
                                            :to="
                                                getProductLink(
                                                    result.id,
                                                    result.name,
                                                    result.model_number,
                                                    result.categories_json[0]
                                                        .parent_name_with_slashes
                                                )
                                            "
                                        >
                                            <img
                                                style="display: inline"
                                                width="28"
                                                :src="
                                                    '/storage/' +
                                                    result.main_image_path
                                                "
                                                class="rounded profile-img"
                                                alt=""
                                            />
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
                        <img
                            src="../../assets/images/logo.png"
                            alt="Sheffield Logo"
                            width="245"
                            height="auto"
                        />
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
                    <div
                        class="header-search header-search-extended header-search-visible d-none d-lg-block"
                    >
                        <a href="#" class="search-toggle" role="button"
                            ><i class="icon-search"></i
                        ></a>
                        <form action="#" method="get">
                            <div
                                class="header-search-wrapper search-wrapper-wide searchListMainDiv"
                            >
                                <label for="q" class="sr-only">Search</label>
                                <button class="btn btn-primary" type="submit">
                                    <i class="icon-search"></i>
                                </button>
                                <input
                                    type="search"
                                    v-model="query"
                                    @input="search"
                                    class="form-control"
                                    name="q"
                                    id="query2"
                                    autocomplete="off"
                                    placeholder="Search product ..."
                                    required=""
                                />
                                <ul v-if="showResults" class="">
                                    <li
                                        v-for="result in results"
                                        :key="result.id"
                                    >
                                        <router-link
                                            :to="
                                                getProductLink(
                                                    result.id,
                                                    result.name,
                                                    result.model_number,
                                                    result.categories_json[0]
                                                        .parent_name_with_slashes
                                                )
                                            "
                                        >
                                            <img
                                                style="display: inline"
                                                width="28"
                                                :src="
                                                    '/storage/' +
                                                    result.main_image_path
                                                "
                                                class="rounded profile-img"
                                                alt=""
                                            />
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
                        <img
                            src="../../assets/images/logo.png"
                            alt="Sheffield Logo"
                            width="245"
                            height="auto"
                        />
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
</template>
<script setup>

import { ref, onMounted, onUnmounted, reactive, nextTick, watch } from "vue";


const query = ref("");
const results = ref([]);
const showResults = ref(false);

const search = async () => {
    if (query.value.length >= 3) {
        try {
            const response = await axios.get(
                `/api/product_search` + `/${query.value}`
            );
            results.value = response.data.data;
            //console.log(results.value);
            showResults.value = true;
            //console.log(showResults.value);
        } catch (error) {
            //console.error(error);
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
      console.log('Before toggle:', bodyClassAdded.value);
      //bodyClassAdded.value = !bodyClassAdded.value;
      document.body.classList.toggle('mmenu-active', bodyClassAdded.value);
 
      
    };

    
    document.addEventListener('DOMContentLoaded', () => {
      document.body.classList.toggle('mmenu-active1', true);
    });

    const handleButtonClick = () => {
      addClassToBody();
    };
</script>