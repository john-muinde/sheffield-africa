<template>
    <div>
        <main class="main">
            <div class="page-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h2 class="about-us-title">Blogs</h2>
                            <!-- End .title -->
                            <router-link
                                to="/media"
                                class="btn btn-primary btn-round btn-shadow float-right"
                                ><i class="icon-long-arrow-left"></i
                                ><span>Back to Media Center</span></router-link
                            >
                            <p class="lead about-us-lead text-primary mb-3">
                                In-Depth Insights
                            </p>
                            <div
                                v-if="loading"
                                class="text-center w-100 my-4 text-green-600 font-semibold"
                            >
                                <i class="fas fa-spinner fa-spin"></i> Loading
                                blog posts...
                            </div>
                            <div v-else class="row blogs-main-page-section">
                                <div
                                    class="entry-item col-sm-6 col-lg-4"
                                    v-for="product in displayedProducts"
                                    :key="product.id"
                                >
                                    <article class="entry entry-grid">
                                        <figure
                                            class="entry-media entry-gallery"
                                        >
                                            <router-link
                                                :to="
                                                    getBlogLink(
                                                        product.id,
                                                        product.name
                                                    )
                                                "
                                            >
                                                <img
                                                    :src="
                                                        '/storage/' +
                                                        product.main_image_path
                                                    "
                                                    v-lazy:src="
                                                        '/storage/' +
                                                        product.main_image_path
                                                    "
                                                    alt="image desc"
                                                />
                                            </router-link>
                                        </figure>
                                        <!-- End .entry-media -->

                                        <div class="entry-body">
                                            <h2 class="entry-title">
                                                <router-link
                                                    class="text-primary"
                                                    :to="
                                                        getBlogLink(
                                                            product.id,
                                                            product.name
                                                        )
                                                    "
                                                    >{{
                                                        getBlogParagraph(
                                                            product.name
                                                        )
                                                    }}</router-link
                                                >
                                            </h2>
                                            <!-- End .entry-title -->

                                            <div class="entry-content">
                                                <div class="mb-2">
                                                    {{
                                                        getFirstParagraph(
                                                            product.content
                                                        )
                                                    }}
                                                </div>
                                                <router-link
                                                    class="btn btn-primary"
                                                    :to="
                                                        getBlogLink(
                                                            product.id,
                                                            product.name
                                                        )
                                                    "
                                                >
                                                    Read More
                                                    <i
                                                        class="icon-long-arrow-right"
                                                    ></i>
                                                </router-link>
                                            </div>
                                        </div>
                                        <!-- End .entry-body -->
                                    </article>
                                    <!-- End .entry -->
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <nav aria-label="Page navigation">
                                        <ul
                                            class="pagination justify-content-center"
                                        >
                                            <li
                                                class="page-item"
                                                :class="{
                                                    disabled: currentPage === 1,
                                                }"
                                            >
                                                <router-link
                                                    class="page-link page-link-prev"
                                                    :to="
                                                        getBlogPageLink(
                                                            currentPage - 1
                                                        )
                                                    "
                                                    aria-label="Previous"
                                                    tabindex="-1"
                                                    aria-disabled="true"
                                                    @click="goToPreviousPage"
                                                >
                                                    <span aria-hidden="true"
                                                        ><i
                                                            class="icon-long-arrow-left"
                                                        ></i
                                                    ></span>
                                                    Prev
                                                </router-link>
                                            </li>
                                            <li
                                                class="page-item"
                                                v-for="page in generatePageLinks"
                                                :key="page"
                                                :class="{
                                                    active:
                                                        page === currentPage,
                                                }"
                                            >
                                                <template
                                                    v-if="isInteger(page)"
                                                >
                                                    <router-link
                                                        class="page-link"
                                                        :to="
                                                            getBlogPageLink(
                                                                page
                                                            )
                                                        "
                                                        @click="
                                                            goToThisPage(page)
                                                        "
                                                    >
                                                        {{ page }}
                                                    </router-link>
                                                </template>
                                            </li>
                                            <li class="page-item-total">
                                                of {{ totalPages }}
                                            </li>
                                            <li
                                                class="page-item"
                                                :class="{
                                                    disabled:
                                                        currentPage ===
                                                        totalPages,
                                                }"
                                            >
                                                <router-link
                                                    class="page-link page-link-next"
                                                    :to="
                                                        getBlogPageLink(
                                                            currentPage + 1
                                                        )
                                                    "
                                                    aria-label="Next"
                                                    @click="goToNextPage"
                                                >
                                                    Next
                                                    <span aria-hidden="true"
                                                        ><i
                                                            class="icon-long-arrow-right"
                                                        ></i
                                                    ></span>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End .row -->
                </div>
                <!-- End .container -->
            </div>
            <!-- End .page-content -->
        </main>
        <!-- End .main -->
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, watchEffect } from "vue";
// import axios from "axios";
import { useRoute } from "vue-router";
import { useMeta } from "../../admin/composables/use-meta";

useMeta({ title: "Blogs | Media Center" });

const route = useRoute();
const currentRoute = ref(route);

const currentPage = ref(route.params.page ? parseInt(route.params.page) : 1);
const perPage = ref(9);
const totalProducts = ref(0);
const products = ref([]);
const totalCountperPage = ref(0);
const category_id = ref(route.params.id ? parseInt(route.params.id) : 1);
const categories = ref([]);
const other_blogs = ref([]);
const the_category = ref([]);

const checkedCategories = ref([]);
const mainCategorySelected = ref([]);
const checkedBrands = ref([]);
const selectedSortOption = ref("");
const loading = ref(false);

// Fetch products based on the current page
const fetchProducts = async () => {
    loading.value = true;
    try {
        const response = await axios.get("/api/get-blogs", {
            params: {
                page: currentPage.value,
                per_page: perPage.value,
                category_id: category_id.value,
            },
        });
        products.value = response.data.data;
        totalProducts.value = response.data.total;

        console.log(totalProducts.value);
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

const fetchBlogSidebar = async () => {
    try {
        const response = await axios.get("/api/get-blog-sidebar", {});
        //blog.value = response.data.blog;
        other_blogs.value = response.data.other_blogs;
    } catch (error) {
        console.error(error);
    }
};

const getBlogLink = (id, name) => {
    let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
    transformedName = transformedName.replace(/-+/g, "-");
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    transformedName = transformedName.toLowerCase();

    return `/media/blogs/${id}/${transformedName}`;
};

const getBlogPageLink = (page) => {
    return `/media/blogs/page/${page}`;
};

// Determine the total number of pages
const totalPages = computed(() => {
    return Math.ceil(totalProducts.value / perPage.value);
});

// Displayed products based on the current page
const displayedProducts = ref([]);

// Go to the previous page
const goToPreviousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

// Go to the next page
const goToNextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const goToThisPage = (page) => {
    currentPage.value = page;
};

const updateDisplayedProducts = () => {
    const startIndex = 0;
    displayedProducts.value = products.value;
};

const isInteger = (value) => {
    return Number.isInteger(value);
};

// Generate the page links
const generatePageLinks = computed(() => {
    const pageLinks = [];
    const maxVisiblePages = 5; // Maximum number of visible page links

    // Add previous link
    if (currentPage.value > 1) {
        pageLinks.push("Prev");
    }

    // Add current page and surrounding pages
    let startPage = Math.max(
        1,
        currentPage.value - Math.floor(maxVisiblePages / 2)
    );
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages.value);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let page = startPage; page <= endPage; page++) {
        pageLinks.push(page);
    }

    // Add next link
    if (currentPage.value < totalPages.value) {
        pageLinks.push("Next");
    }

    return pageLinks;
});

const getFirstParagraph = (content) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;

    const paragraphs = tempElement.querySelectorAll("p");

    for (const paragraph of paragraphs) {
        const textContent = paragraph.textContent.trim();
        if (textContent.length > 50) {
            if (textContent.length > 150) {
                return textContent.slice(0, 180) + "...";
            } else {
                return textContent;
            }
        }
    }

    return "";
};

const getBlogParagraph = (content) => {
    if (content.length > 5) {
        if (content.length > 35) {
            return content.slice(0, 35) + "...";
        } else {
            return content;
        }
    }

    return "";
};

// Initial fetch of products
onMounted(() => {
    fetchProducts();
    fetchBlogSidebar();
});

// Watch for changes in the currentPage and fetch products accordingly
watch(currentPage, fetchProducts);

// Watch for changes in the products and update displayedProducts
watch(products, updateDisplayedProducts);

watchEffect(() => {
    const params = route.params; // Access the route parameters
    const query = route.query; // Access the query parameters

    if (params.id !== "" && category_id !== params.id) {
        currentPage.value = 1;

        category_id.value = params.id ? parseInt(params.id) : 1;

        if (params.page !== "" && currentPage !== params.page) {
            currentPage.value = params.page ? parseInt(params.page) : 1;
        }

        // Call a method or update component data based on the new route

        fetchProducts();
        //console.log("test "+the_cat_name.value);
    }
});
</script>

<style scoped>
@media screen and (min-width: 768px) {
    .blogs .entry-list .entry-media {
        max-height: 190px;
        overflow: hidden;
    }

    .blogs .entry-title {
        font-size: 2.3rem;
    }
}

.posts-list li {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
}

.blogs-main-page-section .entry-gallery a {
    padding-bottom: 70.67%;
    overflow: hidden;
}

.blogs-main-page-section .entry-media img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.blogs-main-page-section .entry-grid .entry-media {
    margin-bottom: 1.4rem;
    box-shadow: 0px -2px 8px 2px #646060;
}
</style>
