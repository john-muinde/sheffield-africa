<template>
  <div class="container">
    <div class="row elements categories">
      <div v-for="category in mainCategories" :key="category.id" class="col-xs-3 col-sm-4 col-md-2 white-bg">
        <router-link class="element-type" :to="getCategoryLink(category.id, category.name, 1)">
          <div class="element box">
            <p>
              <img
                class="menu-icon"
                :src="`/assets/images/menu-icons/${formattedName(category.name)}.png`"
              />{{ category.name
              }}
            </p>
          </div>
        </router-link>
      </div>

      <div class="col-xs-3 col-sm-4 col-md-2 white-bg">
        <router-link class="element-type router-link-active active" to="/consultancy-and-design">
          <div class="element box box2 box3">
            <p>
              <img class="menu-icon" src="/assets/images/menu-icons/consultancy-design.png" />Consultancy &
              Design
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="mobile-categories">
    <button
      id="menu1"
      class="btn btn-default dropdown-toggle button !max-w-md"
      type="button"
      data-toggle="dropdown"
    >
      BROWSE CATEGORIES <span class="caret"></span>
    </button>
    <ul class="dropdown-menu browse-categories mobile-menu" role="menu" aria-labelledby="menu1">
      <li v-for="category in mainCategories" :key="category.id" role="presentation">
        <router-link class="element-type" :to="getCategoryLink(category.id, category.name, 1)">
          <div class="sf-with-ul">
            <p class="category">
              <img
                class="mobile-menu-icon"
                :src="`/assets/images/menu-icons/${formattedName(category.name)}.png`"
              /> {{ category.name
              }}
            </p>
          </div>
        </router-link>
      </li>

      <li role="presentation">
        <router-link class="element-type" to="/consultancy-and-design">
          <div class="sf-with-ul">
            <p class="category">
              <img
                class="mobile-menu-icon"
                src="/assets/images/menu-icons/consultancy-design.png"
              /> Consultancy & Design
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const mainCategories = ref([]);
const mainSolutions = ref([]);

// Fetch products based on the current page
const fetchMainCategories = async () => {
    try {
        const response = await axios.get('/api/get-main-categories/301', {});
        mainCategories.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
};

const getCategoryLink = (id, name, page) => {
    let transformedName = name.replace(/ /g, '-').replace(/\//g, '-');
    // Remove consecutive dashes
    transformedName = transformedName.replace(/-+/g, '-');
    // Remove leading and trailing dashes
    transformedName = transformedName.replace(/^-+|-+$/g, '');
    // Convert to lowercase
    transformedName = transformedName.toLowerCase();

    return `/cold-storage/${id}/${transformedName}`;
};

onMounted(async () => {
    fetchMainCategories();
});

const formattedName = (category_name) => {
    return category_name.toLowerCase().replace(/\s/g, '-');
};

const route = useRoute();
const linkClass = computed(() => {
    const generatedLink = getCategoryLink(
        props.category.id,
        props.category.name,
        1,
    );
    const currentPath = route.path;
    return currentPath.includes(generatedLink)
        ? 'element-type-active'
        : 'element-type';
});
</script>

<style scoped>
/* Make columns equal width and more flexible */
.row.elements.categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

/* Remove original column classes or override them */
.col-xs-3,
.col-sm-4,
.col-md-2 {
    width: 100%;
    max-width: 100%;
}

/* Style the cards */
.element.box {
    width: 100%;
    padding: 1rem;
}

/* Style the content */
.element p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: clamp(12px, 1vw, 16px);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* Ensure images don't overflow */
.menu-icon {
    width: auto;
    height: 20px;
    flex-shrink: 0;
}

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
    background: #3d62ad;
    border-radius: 5px;
    margin-bottom: 5px;
    /* max-width: 330px; */
    border: 1px solid #9d9d9d;
}

.box3 {
    border: 3.5px dotted #3d62ad !important;
}

.box p {
    font-size: 1.15rem;
    color: #ffffff;
}

.router-link-active .box p {
    color: #3d62ad;
}

.router-link-active .box {
    background-color: #ffffff;
    border: 2.2px solid #3d62ad;
}

.elements {
    position: relative;
    /*background-image: url(/assets/images/sheffield_stainless_steel_background.jpg);*/
    background-size: cover;
    overflow: hidden;
    margin-bottom: 15px;
}

.mobile-categories {
    display: none;
    margin-top: -2rem;
}

.box .menu-icon {
    width: 15.5%;
    padding-left: 8px;
    padding-right: 8px;
    display: inline-block;
    filter: brightness(0.9) invert(1) sepia(0) hue-rotate(0deg) saturate(0);
}

.router-link-active .box .menu-icon {

    filter: invert(39%) sepia(7%) saturate(6402%) hue-rotate(185deg) brightness(88%) contrast(83%);
}

.mobile-menu-icon {
    width: 35px;
    padding-left: 5px;
    padding-right: 10px;
    display: inline-block;
    filter: brightness(0.9) invert(1) sepia(0) hue-rotate(0deg) saturate(0);
}

@media only screen and (max-width: 768px) {
    .button {
        width: 100%;
        background: #3d62ad;
        color: #fff;
    }

    .browse-categories {
        width: 97%;
        padding: 0px;
        background-color: #3d62ad;
        border-radius: 0px;
    }

    .categories {
        display: none;
    }

    .category {
        color: #fff;
        font-size: 12px;
        font-weight: 500;
    }

    .mobile-categories .btn {
        font-weight: 600;
    }

    .mobile-menu li a {
        padding: 5px;
    }

    .mobile-categories {
        display: flex;
    }
}

@media (max-width: 1367px) {

    .box p {

        font-size: 1rem;

    }
}
</style>
