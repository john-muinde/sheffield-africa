<template>
  <div>
    <header class="header header-14 sticky-header fixed custom">
      <div class="header-top header-top-color">
        <div class="container">
          <div class="header-left">
            <a href="tel:+254713777111"><i class="icon-phone"></i>+254 713 777 111</a>

            <a
              class="ml-5"
              href="mailto:info@sheffieldafrica.com"
            ><i class="icon-envelope"></i> info@sheffieldafrica.com</a>
          </div>
          <div class="header-right d-none d-lg-block">
            <ul class="top-menu">
              <li>
                <a href="#">Links</a>
                <ul class="menus">
                  <li :class="{ 'active-li': isKitchenPage }">
                    <router-link to="/commercial-kitchen">
                      <span class="top-icon">
                        <img
                          class="top-menu-icon"
                          src="/assets/images/menu-icons/top-menu/kitchen.png"
                        />
                      </span>
                      KITCHEN
                    </router-link>
                  </li>
                  <li :class="{ 'active-li': isLaundryPage }">
                    <router-link to="/laundry">
                      <span class="top-icon">
                        <img
                          class="top-menu-icon"
                          src="/assets/images/menu-icons/top-menu/laundry.png"
                        />
                      </span>
                      LAUNDRY
                    </router-link>
                  </li>

                  <li :class="{ 'active-li': isColdRoomPage }">
                    <router-link to="/cold-storage">
                      <span class="top-icon">
                        <img
                          class="top-menu-icon"
                          src="/assets/images/menu-icons/top-menu/cold-room.png"
                        />
                      </span>
                      COLD STORAGE
                    </router-link>
                  </li>

                  <li :class="{ 'active-li': isConsultancyDesignPage }">
                    <router-link to="/consultancy-and-Design">
                      <span class="top-icon">
                        <img
                          class="top-menu-icon"
                          src="/assets/images/menu-icons/consultancy-design.png"
                        />
                      </span>
                      Consultancy
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- End .container -->
      </div>
      <!-- End .header-top -->

      <div class="header-middle">
        <div class="container-fluid">
          <div class="row">
            <div class="col-auto col-lg-3 col-xl-3">
              <router-link to="/" class="logo">
                <img
                  src="../../assets/images/logo.png"
                  alt="Sheffield Logo"
                  width="190"
                  height="auto"
                />
              </router-link>
            </div>
            <!-- End .col-xl-3 col-xxl-2 -->

            <div class="col col-lg-9 col-xl-9 header-middle-right">
              <div class="row">
                <div class="col-lg-8 d-none d-lg-block">
                  <div
                    class="header-search header-search-extended header-search-visible header-search-no-radius"
                  >
                    <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
                    <form action="#" method="get">
                      <div class="header-search-wrapper search-wrapper-wide searchListMainDiv">
                        <!-- End .select-custom -->
                        <label for="q" class="sr-only">Search</label>
                        <input
                          id="q"
                          v-model="query"
                          type="search"
                          class="form-control"
                          name="q"
                          placeholder="Search product ..."
                          autocomplete="off"
                          required
                          @input="search"
                        />

                        <ul
                          v-if="showResults"
                          ref="resultsList"
                          class=""
                          @click.self="hideResults"
                        >
                          <li v-for="result in results" :key="result.id">
                            <router-link
                              :to="
                                getProductLink(
                                  result.id,
                                  result.name,
                                  result.model_number,
                                  result.categories_json[0]?.parent_name_with_slashes
                                )
                              "
                            >
                              <img
                                style="display: inline; height: 28px"
                                :src="'/storage/' + result.main_image_path"
                                class="rounded profile-img"
                                alt=""
                              />
                              {{ result.name }}
                            </router-link>
                          </li>
                        </ul>

                        <button class="btn btn-primary" type="submit">
                          <i class="icon-search"></i>
                        </button>
                      </div>
                      <!-- End .header-search-wrapper -->
                    </form>
                  </div>
                  <!-- End .header-search -->
                </div>
                <!-- End .col-xxl-4-5col -->

                <div class="col-lg-4 d-flex justify-content-end align-items-center">
                  <div class="header-dropdown-link">
                    <div class="dropdown compare-dropdown">
                      <router-link
                        to="/my-account"
                        class="dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                        title="Compare Products"
                        aria-label="Compare Products"
                      >
                        <i class="icon-user"></i>
                        <span class="compare-txt">Account</span>
                      </router-link>

                      <div class="dropdown-menu dropdown-menu-right">
                        <ul class="compare-products">
                          <li v-if="!user?.name" class="compare-product login">
                            <router-link to="/login" class="btn-remove">
                              <i class="icon-arrow-right"></i>
                            </router-link>
                            <router-link to="/login">
                              LOG IN
                            </router-link>
                          </li>

                          <li v-if="!user?.name" class="compare-product">
                            <router-link to="/register" class="btn-remove">
                              <i class="icon-arrow-right"></i>
                            </router-link>

                            <h4 class="compare-product-title">
                              <router-link to="/register">
                                REGISTER
                              </router-link>
                            </h4>
                          </li>
                        </ul>

                        <div class="compare-actions">
                          <a
                            href="javascript:void(0)"
                            class="btn btn-outline-primary-2"
                            @click="logout"
                          ><span>Logout</span><i class="icon-long-arrow-right"></i></a>
                        </div>
                      </div>
                      <!-- End .dropdown-menu -->
                    </div>
                    <!-- End .compare-dropdown -->

                    <CartComponent />
                  </div>
                  <!-- End .col-xxl-5col -->
                </div>
                <!-- End .row -->
              </div>
              <!-- End .col-xl-9 col-xxl-10 -->
            </div>
            <!-- End .row -->
          </div>
          <!-- End .container-fluid -->
        </div>
        <!-- End .header-middle -->
        <!-- End .header-bottom -->
      </div>
    </header>
    <!-- End .header -->
    <!-- End .mobile-menu-container -->
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu-overlay"></div>
  <!-- End .mobil-menu-overlay -->

  <div class="mobile-menu-container">
    <div class="mobile-menu-wrapper">
      <span class="mobile-menu-close"><i class="icon-close"></i></span>

      <form action="#" method="get" class="mobile-search">
        <label for="mobile-search" class="sr-only">Search</label>
        <input
          id="mobile-search"
          type="search"
          class="form-control"
          name="mobile-search"
          placeholder="Search in..."
          required
        />
        <button class="btn btn-primary" type="submit">
          <i class="icon-search"></i>
        </button>
      </form>

      <!-- End .mobile-nav -->

      <div class="social-icons">
        <a
          href="https://www.facebook.com/SheffieldAfricaFacilitySolutions"
          class="social-icon"
          target="_blank"
          title="Facebook"
        ><i class="icon-facebook-f"></i></a>
        <a
          href="https://twitter.com/sheffield_afric/"
          class="social-icon"
          target="_blank"
          title="Twitter"
        ><i class="icon-twitter"></i></a>
        <a
          href="https://www.instagram.com/sheffieldafrica/"
          class="social-icon"
          target="_blank"
          title="Instagram"
        ><i class="icon-instagram"></i></a>
        <a
          href="https://www.youtube.com/channel/UCK-oWPdQazenIHndl4zABew"
          class="social-icon"
          target="_blank"
          title="Youtube"
        ><i class="icon-youtube"></i></a>
        <a
          href="https://www.facebook.com/SheffieldAfricaFacilitySolutions"
          class="social-icon"
          target="_blank"
          title="Facebook"
        ><i class="icon-facebook-f"></i></a>
        <a
          href="https://twitter.com/sheffield_afric/"
          class="social-icon"
          target="_blank"
          title="Twitter"
        ><i class="icon-twitter"></i></a>
        <a
          href="https://www.instagram.com/sheffieldafrica/"
          class="social-icon"
          target="_blank"
          title="Instagram"
        ><i class="icon-instagram"></i></a>
        <a
          href="https://www.youtube.com/channel/UCK-oWPdQazenIHndl4zABew"
          class="social-icon"
          target="_blank"
          title="Youtube"
        ><i class="icon-youtube"></i></a>
      </div>
      <!-- End .social-icons -->
    </div>
    <!-- End .mobile-menu-wrapper -->
  </div>
  <!-- End .mobile-menu-container -->
</template>

<script setup>
  import useAuth from '@/composables/auth';
  import { computed, reactive, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import CartComponent from './CartComponent.vue';

  import { useStore } from 'vuex';

  const route = useRoute();
  const store = useStore();

  const isKitchenPage = computed(() => {
    return route.path.includes('/commercial-kitchen');
  });

  const isLaundryPage = computed(() => {
    return route.path.includes('/laundry');
  });

  const isColdRoomPage = computed(() => {
    return route.path.includes('/cold-storage');
  });

  const isConsultancyDesignPage = computed(() => {
    return route.path.includes('/consultancy-and-Design');
  });

  const user = computed(() => store.getters['auth/user']);
  const {  logout } = useAuth();

  const axios = window.axios;

  const categories = reactive([]);

  const fetchCategories = () => {
    axios
      .get('/api/get-sidebar-categories')
      .then((response) => {
        categories.splice(
          0,
          categories.length,
          ...response.data.map((category) => {
            return {
              id: category.id,
              name: `${category.name}`,
              columns: 3,
              slug: category.name.toLowerCase().replace(/\s+/g, '-'),
              subcategories: [
                {
                  id: 1, // You can assign any unique ID for the subcategory

                  items: category.children.map((child) => {
                    return {
                      id: child.id,
                      name: child.name,
                      slug: child.name.toLowerCase().replace(/\s+/g, '-'),
                    };
                  }),
                },
              ],
            };
          }),
        );
      })
      .catch((error) => {
        console.error('Failed to fetch categories:', error);
      });
  };

  onMounted(() => {
    fetchCategories();
  });

  const getProductLink = (id, name, model_number, main_second_parent_cat) => {
    const firstPart = main_second_parent_cat?.split('/')[0];
    // Replace spaces with dashes
    let transformedName = name.replace(/ /g, '-').replace(/\//g, '-');
    // Remove consecutive dashes
    transformedName = transformedName.replace(/-+/g, '-');
    // Remove leading and trailing dashes
    transformedName = transformedName.replace(/^-+|-+$/g, '');
    // Convert to lowercase
    transformedName = transformedName.toLowerCase();

    let transformedModelNumber = model_number.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
    // Remove consecutive dashes
    transformedModelNumber = transformedModelNumber.replace(/-+/g, '-');
    // Remove leading and trailing dashes
    transformedModelNumber = transformedModelNumber.replace(/^-+|-+$/g, '');

    return `/${firstPart}/product/${id}/${transformedName}-${transformedModelNumber}`;
  };

  const query = ref('');
  const results = ref([]);
  const showResults = ref(false);

  const search = async () => {
    if (query.value.length >= 3) {
      try {
        const response = await axios.get('/api/product_search' + `/${query.value}`);
        results.value = response.data.data;
        //
        showResults.value = true;
        //
      } catch (error) {
        console.error(error);
      }
    } else {
      results.value = [];
      showResults.value = false;
    }
  };

  const hideResults = (event) => {
    // Check if the click is outside the ul
    if (!event.target.closest('#resultsList')) {
      showResults.value = false;
    }
  };

  // Add a global click event listener
  document.addEventListener('click', hideResults);
</script>

<style scoped>
  .custom {
    z-index: 1035;
    top: -1px;
  }

  .menu-vertical-browse .megamenu-container {
    border-bottom: Solid 1px #ececec;
  }

  .header-middle {
    background-image: url(/assets/images/sheffield_stainless_steel_background.jpg);
    background-size: cover;
  }

  .header-right li a:hover {
    color: #3d62ad;
  }

  .menus .active-li {
    background-color: #fff !important;
    padding: 5px;
  }

  .menus .active-li a {
    color: #c02434;
    font-weight: 550 !important;
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
    top: 40px;
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

  .searchListMainDiv ul li a {
    color: #666;
  }

  .searchListMainDiv ul li a:hover {
    color: #c02434;
  }

  .searchListMainDiv ul li:last-child {
    border: none;
  }

  .top-menu-icon {
    width: 30px;
    height: 25px;
    padding-right: 10px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
  }

  .active-li .top-menu-icon {
    filter: invert(14%) sepia(97%) saturate(3017%) hue-rotate(342deg) brightness(102%) contrast(87%);
  }

  @media only screen and (max-width: 768px) {
    .cart-txt {
      display: none;
    }
  }
</style>
