<template>
  <main class="main">
    <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
      <div class="container d-flex align-items-center">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">HOME</router-link>
          </li>

          <li
            class="breadcrumb-item"
            v-if="
              product.categories_json &&
              product.categories_json.length > 0 &&
              product.categories_json[0].parent_name_with_slashes
            "
          >
            <router-link
              :to="
                getCategoryMainLinkTop(
                  product.categories_json[0].parent_name_with_slashes
                )
              "
              >{{
                getCategoryMainLinkTopName(
                  product.categories_json[0].parent_name_with_slashes
                )
              }}</router-link
            >
          </li>

          <li class="breadcrumb-item">
            <router-link
              v-for="category in product.categories_json"
              :key="category.id"
              :to="
                getCategoryLink(
                  category.id,
                  category.name,
                  1,
                  product.categories_json[0].parent_name_with_slashes
                )
              "
              >{{ category.name }}</router-link
            >
          </li>

          <li class="breadcrumb-item active" aria-current="page">
            {{ product.name }}
          </li>
        </ol>
      </div>
    </nav>
    <div class="page-content mt-0">
      <div class="container">
        <div class="product-details-top">
          <div class="row">
            <div class="col-md-5">
              <div class="product-gallery">
                <figure class="product-main-image">
                  <img
                    id="product-zoom"
                    :src="'/storage/' + mainImage"
                    :data-zoom-image="'/storage/' + mainImage"
                    :alt="product.name"
                    @click="showMultiple"
                    style="
                      display: grid;
                      max-width: 100%;
                      max-height: 350px;
                      min-height: 350px;
                      height: auto;
                      margin-left: auto;
                      margin-right: auto;
                      width: auto;
                    "
                  />

                  <a
                    href="#"
                    @click="showMultiple"
                    id="btn-product-gallery"
                    class="btn-product-gallery"
                  >
                    <i class="icon-arrows"></i>
                  </a>
                </figure>
                <!-- End .product-main-image -->

                <div>
                  <!--  <button @click="showSingle">Show single picture.</button> -->
                  <!--  <button @click="showMultiple">Show a group of pictures.</button> -->

                  <!-- all props & events -->
                  <vue-easy-lightbox
                    escDisabled
                    :visible="visible"
                    :imgs="imgs"
                    :index="indexRef"
                    @hide="handleHide"
                  ></vue-easy-lightbox>
                </div>

                <div id="product-zoom-gallery" class="product-image-gallery max-col-6">
                  <a
                    v-for="(image, index) in product.product_images"
                    :key="image.id"
                    :class="['product-gallery-item', { active: index === activeIndex }]"
                    @mouseover="changeMainImage(image.name, index)"
                    :data-image="'/storage/' + image.name"
                    :data-zoom-image="'/storage/' + image.name"
                  >
                    <img :src="'/storage/' + image.name" :alt="product.name" />
                  </a>
                </div>
                <!-- End .product-image-gallery -->
              </div>
              <!-- End .product-gallery -->
            </div>
            <!-- End .col-lg-7 -->

            <div class="col-md-7">
              <div class="product-details">
                <h3 class="header text-primary" style="">
                  {{ product.name }}
                </h3>
                <!-- End .product-title -->

                <!-- <div class="ratings-container">
                  <div class="ratings">
                    <div class="ratings-val" style="width: 80%"></div>

                  </div>

                  <a
                    class="ratings-text"
                    href="#product-review-link"
                    id="review-link"
                    >( 2 Reviews )</a
                  >
                </div> -->
                <!-- End .rating-container -->

                <div class="short_description" v-html="product.short_description"></div>
                <p class="">
                  <span>Brand : </span>

                  {{ product.brand_name }}
                </p>
                <span>Category : </span>

                <router-link
                  style="font-weight: 500"
                  v-for="category in product.categories_json"
                  :key="category.id"
                  :to="
                    getCategoryLink(
                      category.id,
                      category.name,
                      1,
                      product.categories_json[0].parent_name_with_slashes
                    )
                  "
                  >{{ category.name }}</router-link
                >

                <div class="qr_section" v-if="qrCodeDataUrl">
                  <small class="mb-1">Product QR</small>
                  <img style="width: 120px" :src="qrCodeDataUrl" alt="QR Code" />
                </div>


                <div class="product-details-action product-details-sheffield mt-2">
                  <button
                    type="button"
                    @click="addToCart(product)"
                    class="btn-product btn-cart"
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>

                <!-- End .product-price -->

                <!-- <div class="product-content">
                  <div ></div>
                </div> -->
                <!-- End .product-content -->

                <div class="product-details-tab mt-2">
                  <ul
                    class="nav nav-pills justify-content-left mobile-description"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="product-desc-link"
                        data-toggle="tab"
                        href="#product-desc-tab"
                        role="tab"
                        aria-controls="product-desc-tab"
                        aria-selected="false"
                        >Description</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="product-info-link"
                        data-toggle="tab"
                        href="#product-info-tab"
                        role="tab"
                        aria-controls="product-info-tab"
                        aria-selected="false"
                        >Technical Specifications</a
                      >
                    </li>
                    <!-- <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                id="product-shipping-link"
                                                data-toggle="tab"
                                                href="#product-shipping-tab"
                                                role="tab"
                                                aria-controls="product-shipping-tab"
                                                aria-selected="true"
                                                >Terms of Operations</a
                                            >
                                        </li> -->
                  </ul>
                  <div class="tab-content">
                    <div
                      class="tab-pane fade active show"
                      id="product-desc-tab"
                      role="tabpanel"
                      aria-labelledby="product-desc-link"
                    >
                      <div class="product-desc-content">
                        <div v-html="product.description"></div>
                      </div>
                      <!-- End .product-desc-content -->
                    </div>
                    <!-- .End .tab-pane -->
                    <div
                      class="tab-pane fade"
                      id="product-info-tab"
                      role="tabpanel"
                      aria-labelledby="product-info-link"
                    >
                      <div class="product-desc-content">
                        <div v-html="product.technical_specification"></div>
                        <!-- <a
                                                    v-if="product.document_path"
                                                    :href="
                                                        '/storage/' +
                                                        product.document_path
                                                    "
                                                    target="_blank"
                                                    class="btn btn-warning"
                                                    >Download Technical Document
                                                    <i
                                                        class="icon-long-arrow-right"
                                                    ></i
                                                ></a> -->
                      </div>
                      <!-- End .product-desc-content -->
                    </div>
                    <!-- .End .tab-pane -->
                    <!-- <div
                                            class="tab-pane fade"
                                            id="product-shipping-tab"
                                            role="tabpanel"
                                            aria-labelledby="product-shipping-link"
                                        >
                                            <div class="product-desc-content">
                                                <div
                                                    v-html="
                                                        product.terms_of_operation
                                                    "
                                                ></div>
                                            </div>
                                            
                                        </div> -->
                    <!-- .End .tab-pane -->
                  </div>
                  <!-- End .tab-content -->
                </div>

                <!-- <div class="product-details-footer">
                                    <div class="product-cat"></div>
                                   
                                    <div class="social-icons social-icons-sm">
                                        <span class="social-label">Share:</span>
                                        <a
                                            href="#"
                                            class="social-icon"
                                            title="Facebook"
                                            target="_blank"
                                            ><i class="icon-facebook-f"></i
                                        ></a>
                                        <a
                                            href="#"
                                            class="social-icon"
                                            title="Twitter"
                                            target="_blank"
                                            ><i class="icon-twitter"></i
                                        ></a>
                                        <a
                                            href="#"
                                            class="social-icon"
                                            title="Instagram"
                                            target="_blank"
                                            ><i class="icon-instagram"></i
                                        ></a>
                                        <a
                                            href="#"
                                            class="social-icon"
                                            title="Pinterest"
                                            target="_blank"
                                            ><i class="icon-pinterest"></i
                                        ></a>
                                    </div>
                                </div> -->

                <!-- End .product-details-footer -->
              </div>
              <!-- End .product-details -->
            </div>
            <!-- End .col-md-6 -->
          </div>
          <!-- End .row -->
        </div>
        <!-- End .product-details-top -->
      </div>
      <!-- End .container -->
    </div>
    <!-- End .page-content -->
  </main>

  <!-- <div class="sticky-bar">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <figure class="product-media">
            <a href="#">
              <img
                style="height: 40px"
                :src="'/storage/' + mainImage"
                :alt="product.name"
              />
            </a>
          </figure>
        
          <h4 class="product-title">
            <a href="product.html">{{ product.name }}</a>
          </h4>
         
        </div>
        <div class="col-6 justify-content-end">
         

          <div class="product-details-action">
            <router-link :to="'/enquiry/product/' + product_id" class="btn btn-primary"
              ><span>Enquire Product</span><i class="icon-long-arrow-right"></i
            ></router-link>
          </div>
          
        </div>
        
      </div>
    
    </div>
   
  </div> -->
</template>

<script setup>
import { ref, computed, watch, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import VueEasyLightbox from "vue-easy-lightbox";
import QRCode from "qrcode-generator";
import { useStore } from "vuex"; // Import the store

const store = useStore();

import { useMeta } from "../../admin/composables/use-meta";

const addToCart = (product) => {
  const toast = window.Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 4000,
    padding: "2em",
  });
  toast.fire({
    icon: "success",
    title: "Item added to cart",
    padding: "2em",
    customClass: {
      title: "swal-title-class",
    },
  });
  store.dispatch("cart/addToCart", product);
};

const route = useRoute();
const currentRoute = ref(route);

const product = ref([]);
const product_id = ref(route.params.id ? parseInt(route.params.id) : 1);

const formatTextHeader = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Fetch products based on the current page
const fetchProduct = async () => {
  try {
    const response = await axios.get("/api/get-product", {
      params: {
        product_id: product_id.value,
      },
    });
    product.value = response.data.data;

    useMeta({ title: formatTextHeader(product.value.name) + " | Product" });
  } catch (error) {
    console.error(error);
  }
};

const imgs = ref([]);
const rootUrl = window.location.protocol + "//" + window.location.host;

const showSingle = () => {
  imgs.value =
    "https://media.istockphoto.com/id/1189903200/photo/red-generic-sedan-car-isolated-on-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=uRu3o_h5FVljLQHS9z0oyz-XjXzzXN_YkyGXwhdMrjs=";
  show();
};

const showMultiple = async () => {
  console.log(rootUrl);
  imgs.value = product.value.product_images.map(
    (item) => rootUrl + "/storage/" + item.name
  );
  show();
};

const visible = ref(false);
const indexRef = ref(0);
const show = () => {
  indexRef.value = 2;
  visible.value = true;
};

const handleHide = () => {
  visible.value = false;
};

const getProductLink = (id, name, model_number) => {
  // Replace spaces with dashes
  let transformedName = name.replace(/ /g, "-");
  // Remove consecutive dashes
  transformedName = transformedName.replace(/-+/g, "-");
  // Remove leading and trailing dashes
  transformedName = transformedName.replace(/^-+|-+$/g, "");
  // Convert to lowercase
  transformedName = transformedName.toLowerCase();

  let transformedModelNumber = model_number.toLowerCase();

  return `/product/${id}/${transformedName}-${transformedModelNumber}`;
};

const getCategoryLink = (id, name, page, main_cat_parent) => {
  //Replace spaces with dashes
  let transformedName = name.replace(/ /g, "-");
  // Remove consecutive dashes
  transformedName = transformedName.replace(/-+/g, "-");
  // Remove leading and trailing dashes
  transformedName = transformedName.replace(/^-+|-+$/g, "");
  // Convert to lowercase
  transformedName = transformedName.toLowerCase();

  let parts = main_cat_parent.split("/");
  parts = parts[0];

  return `/${parts}/${id}/${transformedName}/page/${page}`;
};

const getCategoryMainLinkTop = (name) => {
  let parts = name.split("/");
  parts = parts[0];
  return "/" + parts;
};

const getCategoryMainLinkTopName = (name) => {
  let parts = name.split("/");
  parts = parts[0];
  parts = parts.toUpperCase();
  return parts;
};

const qrCodeDataUrl = ref(null);
const currentUrl = ref("");

const generateQRCode = (currentUrl) => {
  // Clear previous QR code
  qrCodeDataUrl.value = null;

  // Generate new QR code
  const typeNumber = 0;
  const errorCorrectionLevel = "L";
  const qr = QRCode(typeNumber, errorCorrectionLevel);
  qr.addData(currentUrl.value);
  qr.make();

  // Set QR code data URL
  qrCodeDataUrl.value = qr.createDataURL();
};

// const renderAsRawHTML = (html) => {
//     return { __html: html };
// };

// Initial fetch of products
onMounted(() => {
  fetchProduct();
  currentUrl.value = window.location.href;
  generateQRCode(currentUrl);
});

const mainImage = ref("");
const activeIndex = ref(0);

const changeMainImage = (imageName, index) => {
  mainImage.value = imageName;
  activeIndex.value = index;
};

watch(product, () => {
  if (product.value.product_images.length > 0) {
    mainImage.value = product.value.product_images[0].name;
  }
});

watchEffect(() => {
  const params = route.params; // Access the route parameters
  const query = route.query; // Access the query parameters

  if (params.id !== "" && product_id.value !== params.id) {
    product_id.value = params.id ? parseInt(params.id) : 1;

    fetchProduct();
    generateQRCode(currentUrl);
  }
});
</script>

<style>
.product-item {
  margin-bottom: 20px;
}
.short_description p strong {
  font-weight: 300 !important;
}

.qr_section {
  position: absolute;
  right: 30px;
  top: 40px;
}

.product-details .short_description {
  width: 80%;
}

.product-details-sheffield .btn-cart {
  color: #ffffff !important;
}

.product-details-sheffield .btn-cart:hover {
  color: #ffffff !important;
  background-color: #304296 !important;
  border-color: #304296 !important;
}

.product-details-sheffield .btn-cart:focus {
  color: #ffffff !important;
  background-color: #c02434 !important;
  border-color: #c02434 !important;
}

.product-details-sheffield .btn-cart:hover span, .product-details-sheffield .btn-cart:focus span {
  color: #ffffff !important;
}

.swal2-popup.swal2-toast .swal2-title {
  font-size: 1.5rem !important;
}

.swal2-container.swal2-bottom-end > .swal2-popup {
  background-color: #c02434;
}

.swal2-popup.swal2-toast .swal2-title {
  color: #ffffff;
}

@media only screen and (max-width: 768px) {
  .header {
    font-size: 18px;
  }
  .mobile-description {
    display: block;
  }
  a.nav-item {
    font-size: 68px;
  }

  .breadcrumb-item {
    font-size: 12px;
  }
  .nav-link > a {
    font-size: 1rem;
  }

  .product-details-tab .nav.nav-pills .nav-link {
    font-size: 1.3rem;
    font-weight: 500;
  }
}
</style>
