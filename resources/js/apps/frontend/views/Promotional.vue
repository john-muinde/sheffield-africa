<script></script>

<template>
  <div class="page-wrapper">
    <main class="main">
      <div class="container" style="margin-top: 1px">
        <div class="row cat-banner-row">
          <div class="col-xl-2 col-xxl-2 slide-from-right">
            <div class="cat-banner row no-gutters">
              <div class="col-sm-12 col-xl-12 col-xxl-12">
                <div class="banner banner-overlay solution-image">
                  <a href="#">
                    <img src="/assets/images/events/december-promo.jpg" alt="Banner img desc" />
                  </a>
                </div>
                <!-- End .banner -->
              </div>
              <!-- End .col-sm-6 -->
            </div>
            <!-- End .cat-banner -->
          </div>
          <!-- End .col-xl-3 -->
          <div class="col-xl-10 col-xxl-10 mt-1 slide-from-left">
            <div class="row">
              <div
                v-for="solution in mainSolutions"
                :key="solution.id"
                class="col-md-2 col-sm-4 slide-solutions"
              >
                <router-link
                  class="cat-block"
                  :to="getSolutionLink(
                    solution.id,
                    solution.name
                  )
                  "
                >
                  <figure>
                    <span>
                      <img
                        :src="'/storage/' +
                          solution.main_image_path
                        "
                        alt="Category image"
                      />
                    </span>
                  </figure>

                  <h3 class="cat-block-title">
                    {{ solution.name }}
                  </h3>
                  <!-- End .cat-block-title -->
                </router-link>
              </div>

              <!-- End .col-sm-4 col-lg-2 -->
            </div>
          </div>
          <!-- End .col-xl-9 -->
        </div>
        <!-- End .row cat-banner-row -->
      </div>
      <!-- End .container -->
      <!-- End .container-fluid -->
    </main>
    <!-- End .main -->
  </div>
  <!-- End .page-wrapper -->
  <button id="scroll-top" title="Back to Top">
    <i class="icon-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useMeta } from '../../admin/composables/use-meta';

useMeta({
    title: 'Food service equipment',
    description: 'We offer state of the art commercial kitchen equipment at Sheffield africa Ltd',
    keywords: 'Industrial kitchen equipment,commercial oven,commercial kitchen machines and equipment, kitchen equipment kenya, cooking kitchen equipment',
});

const axios = window.axios;

// const mainCategories = ref([]);
const mainSolutions = ref([]);

const fetchMainSolutions = async () => {
    try {
        const response = await axios.get('/api/get-solutions/370', {});
        mainSolutions.value = response.data.data.filter(
            (solution) => Number(solution.is_published) == 1,
        );
    } catch (error) {
        console.error(error);
    }
};

const getSolutionLink = (id, name) => {
    const transformedName = name
        .toLowerCase()
        .replace(/[\s/]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return `/promotional-solutions/solutions/${id}/${transformedName}`;
};

onMounted(async () => {
    //fetchShowrooms();
    fetchMainSolutions();
    await nextTick();
});
</script>

<style></style>

<style>
.cat-banner-row .carousel__prev {
    height: 92% !important;
    color: #8a8a8a !important;
    background-color: #ffffff !important;
    border: .2992px solid !important;
    border-radius: 0 !important;
    top: 49% !important;
}

.cat-banner-row .carousel__next {
    height: 92% !important;
    color: #8a8a8a !important;
    background-color: #ffffff !important;
    border: .2992px solid !important;
    border-radius: 0 !important;
    top: 49% !important;
}
</style>

<style scoped>
.header-left>.category-dropdown {
    pointer-events: none;
}

.theClass1 {
    position: absolute;
    width: 94.8% !important;
}

.megamenu-scrollable {
    overflow-y: auto;
    direction: rtl;
}

.megamenu-container {
    direction: ltr;
}

.megamenu-scrollable::-webkit-scrollbar {
    width: 8px;
}

.megamenu-scrollable::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
}

.megamenu-scrollable::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

.menu-vertical .megamenu {}

.scroll-track {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 16px;
    background-color: #f0f0f0;
}

.scroll-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    cursor: pointer;
    font-size: 16px;
}

.up-arrow {
    border-bottom: 1px solid #ccc;
}

.down-arrow {
    border-top: 1px solid #ccc;
}

.scroll-arrow:hover {
    background-color: #ccc;
    color: #fff;
}

.container {
    margin-top: 20px;
}

.box {
    height: 33px;
    background: #d9d6d6;
    border-radius: 5px;
    margin-bottom: 5px;
    /* max-width: 330px; */
    border: 1px solid #9d9d9d;
}

.box p {
    font-size: 1.1rem;
    color: #012e66;
}

.elements {
    position: relative;
    /*background-image: url(/assets/images/sheffield_stainless_steel_background.jpg);*/
    background-size: cover;
    overflow: hidden;
    margin-bottom: 15px;
}

.slide-solutions a:hover .cat-block-title {

    color: #c02435;

}

@media only screen and (max-width: 768px) {
    .solution-image {
        display: none;
    }
}

.slide-from-left .slide-solutions {
    list-style: none;
    opacity: 0;
    transform: translateX(-100%);
    animation: slideRight 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
}

.slide-from-right {
    opacity: 0;
    transform: translateX(100%);
    animation: slideRight 0.5s ease-in-out forwards;
}

@keyframes slideLeft {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Add a delay for every "n" item */
.slide-from-left .slide-solutions:nth-child(2n) {
    animation-delay: 2ms;
}
</style>
