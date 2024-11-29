<template>
  <!-- Mobile Menu -->
  <div class="mobile-menu-overlay" @click="closeMenu"></div>
  <!-- End .mobil-menu-overlay -->

  <div class="mobile-menu-container" :class="{ 'active': isMenuActive }">
    <div class="mobile-menu-wrapper">
      <span class="mobile-menu-close mobile-menu-toggler" @click="toggleMenu">
        <i class="icon-close"></i>
      </span>

      <ul class="nav nav-pills-mobile" role="tablist">
        <li class="nav-item">
          <a
            id="mobile-menu-link"
            class="nav-link active"
            data-toggle="tab"
            href="#mobile-menu-tab"
            role="tab"
            aria-controls="mobile-menu-tab"
            aria-selected="true"
          >Menu</a>
        </li>
        <li class="nav-item">
          <a
            id="mobile-cats-link"
            class="nav-link"
            data-toggle="tab"
            href="#mobile-cats-tab"
            role="tab"
            aria-controls="mobile-cats-tab"
            aria-selected="false"
          >Solutions</a>
        </li>
      </ul>

      <div class="tab-content">
        <div
          id="mobile-menu-tab"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="mobile-menu-link"
        >
          <nav class="mobile-nav">
            <ul class="mobile-menu">
              <li class="active">
                <router-link to="/" @click.native="closeMenu">
                  Home
                </router-link>
              </li>
              <li>
                <router-link to="/commercial-kitchen">
                  Kitchen
                </router-link>
                <ul>
                  <li v-for="category in mainKitchenCategories" :key="category.id">
                    <router-link
                      :to="getKitchenCategoryLink(
                        category.id,
                        category.name
                      )"
                      @click.native="closeMenu"
                    >
                      {{ category.name }}
                    </router-link>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/laundry" class="sf-with-ul">
                  LAUNDRY & FLOOR CLEANING
                </router-link>
                <ul>
                  <li v-for="category in mainLaundryCategories" :key="category.id">
                    <router-link
                      :to="getLaundryCategoryLink(
                        category.id,
                        category.name
                      )"
                      @click.native="closeMenu"
                    >
                      {{ category.name }}
                    </router-link>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/cold-storage" class="sf-with-ul">
                  Cold Storage
                </router-link>
                <ul>
                  <li v-for="category in mainColdRoomCategories" :key="category.id">
                    <router-link
                      :to="getColdRoomCategoryLink(
                        category.id,
                        category.name
                      )"
                      @click.native="closeMenu"
                    >
                      {{ category.name }}
                    </router-link>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/promotional-solutions">
                  Promotions
                </router-link>
                <ul>
                  <li v-for="category in mainPromotionalCategories" :key="category.id">
                    <router-link
                      :to="getPromotionalCategoryLink(
                        category.id,
                        category.name
                      )"
                      @click.native="closeMenu"
                    >
                      {{ category.name }}
                    </router-link>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/consultancy-and-design" class="sf-with-ul" @click.native="closeMenu">
                  Consultancy & Design
                </router-link>
              </li>
              <li>
                <router-link to="/about-us" class="sf-with-ul" @click.native="closeMenu">
                  About Us
                </router-link>
              </li>

              <li>
                <router-link
                  to="/about-us/sheffield-advantage"
                  class="sf-with-ul"
                  @click.native="closeMenu"
                >
                  Sheffield
                  Advantages
                </router-link>
              </li>
              <li>
                <router-link to="/projects" class="sf-with-ul" @click.native="closeMenu">
                  Project References
                </router-link>
              </li>

              <li>
                <router-link to="/events" class="sf-with-ul" @click.native="closeMenu">
                  Events
                </router-link>
              </li>
              <li>
                <router-link to="/careers" class="sf-with-ul" @click.native="closeMenu">
                  Careers
                </router-link>
              </li>
              <li>
                <router-link to="/faq" class="sf-with-ul" @click.native="closeMenu">
                  FAQ
                </router-link>
              </li>
              <li>
                <router-link to="/media" class="sf-with-ul" @click.native="closeMenu">
                  Media Center
                </router-link>
              </li>
              <li>
                <router-link to="/contact-us" class="sf-with-ul" @click.native="closeMenu">
                  Contact us
                </router-link>
              </li>
            </ul>
          </nav>
          <!-- End .mobile-nav -->
        </div>
        <!-- .End .tab-pane -->
        <div
          id="mobile-cats-tab"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="mobile-cats-link"
        >
          <nav class="mobile-cats-nav">
            <ul class="mobile-menu">
              <li>
                <router-link to="/commercial-kitchen">
                  KITCHEN SOLUTIONS
                </router-link>
                <ul>
                  <li v-for="solution in mainKitchenSolutions" :key="solution.id">
                    <router-link
                      :to="getSolutionKitchenLink(
                        solution.id,
                        solution.name
                      )"
                      @click.native="closeMenu"
                    >
                      {{ solution.name }}
                    </router-link>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/laundry">
                  LAUNDRY & FLOOR CLEANING SOLUTIONS
                </router-link>
                <ul>
                  <li v-for="solution in mainLaundrySolutions" :key="solution.id">
                    <router-link
                      :to="getSolutionLaundryLink(
                        solution.id,
                        solution.name
                      )"
                      @click.native="closeMenu"
                    >
                      {{ solution.name }}
                    </router-link>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/cold-storage">
                  COLD STORAGE SOLUTIONS
                </router-link>
                <ul>
                  <li v-for="solution in mainColdRoomSolutions" :key="solution.id">
                    <router-link
                      :to="getSolutionColdRoomLink(
                        solution.id,
                        solution.name
                      )"
                      @click.native="closeMenu"
                    >
                      {{ solution.name }}
                    </router-link>
                  </li>
                </ul>
              </li>

              <li>
                <router-link to="/promotional-solutions">
                  PROMOTIONAL SOLUTIONS
                </router-link>
                <ul>
                  <li v-for="solution in mainPromotionalSolutions" :key="solution.id">
                    <router-link
                      :to="getSolutionPromotionalLink(
                        solution.id,
                        solution.name
                      )"
                      @click.native="closeMenu"
                    >
                      {{ solution.name }}
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <!-- End .mobile-cats-nav -->
        </div>
        <!-- .End .tab-pane -->
      </div>
      <!-- End .tab-content -->
    </div>
    <!-- End .mobile-menu-wrapper -->
  </div>
  <!-- End .mobile-menu-container -->

  <!-- Sign in / Register Modal -->
  <div
    id="signin-modal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="icon-close"></i></span>
          </button>

          <div class="form-box">
            <div class="form-tab">
              <ul class="nav nav-pills nav-fill" role="tablist">
                <li class="nav-item">
                  <a
                    id="signin-tab"
                    class="nav-link active"
                    data-toggle="tab"
                    href="#signin"
                    role="tab"
                    aria-controls="signin"
                    aria-selected="true"
                  >Sign In</a>
                </li>
                <li class="nav-item">
                  <a
                    id="register-tab"
                    class="nav-link"
                    data-toggle="tab"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="false"
                  >Register</a>
                </li>
              </ul>
              <div id="tab-content-5" class="tab-content">
                <div
                  id="signin"
                  class="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="signin-tab"
                >
                  <form action="#">
                    <div class="form-group">
                      <label for="singin-email">Username or email address
                        *</label>
                      <input
                        id="singin-email"
                        type="text"
                        class="form-control"
                        name="singin-email"
                        required
                      />
                    </div>
                    <!-- End .form-group -->

                    <div class="form-group">
                      <label for="singin-password">Password *</label>
                      <input
                        id="singin-password"
                        type="password"
                        class="form-control"
                        name="singin-password"
                        required
                      />
                    </div>
                    <!-- End .form-group -->

                    <div class="form-footer">
                      <button type="submit" class="btn btn-outline-primary-2">
                        <span>LOG IN</span>
                        <i class="icon-long-arrow-right"></i>
                      </button>

                      <div class="custom-control custom-checkbox">
                        <input
                          id="signin-remember"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="signin-remember">Remember
                          Me</label>
                      </div>
                      <!-- End .custom-checkbox -->

                      <a href="#" class="forgot-link">Forgot Your Password?</a>
                    </div>
                    <!-- End .form-footer -->
                  </form>

                  <!-- End .form-choice -->
                </div>
                <!-- .End .tab-pane -->
                <div
                  id="register"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form action="#">
                    <div class="form-group">
                      <label for="register-email">Your email address *</label>
                      <input
                        id="register-email"
                        type="email"
                        class="form-control"
                        name="register-email"
                        required
                      />
                    </div>
                    <!-- End .form-group -->

                    <div class="form-group">
                      <label for="register-password">Password *</label>
                      <input
                        id="register-password"
                        type="password"
                        class="form-control"
                        name="register-password"
                        required
                      />
                    </div>
                    <!-- End .form-group -->

                    <div class="form-footer">
                      <button type="submit" class="btn btn-outline-primary-2">
                        <span>SIGN UP</span>
                        <i class="icon-long-arrow-right"></i>
                      </button>

                      <div class="custom-control custom-checkbox">
                        <input
                          id="register-policy"
                          type="checkbox"
                          class="custom-control-input"
                          required
                        />
                        <label class="custom-control-label" for="register-policy">I agree to the
                          <a href="#">privacy policy</a>
                          *</label>
                      </div>
                      <!-- End .custom-checkbox -->
                    </div>
                    <!-- End .form-footer -->
                  </form>

                  <!-- End .form-choice -->
                </div>
                <!-- .End .tab-pane -->
              </div>
              <!-- End .tab-content -->
            </div>
            <!-- End .form-tab -->
          </div>
          <!-- End .form-box -->
        </div>
        <!-- End .modal-body -->
      </div>
      <!-- End .modal-content -->
    </div>
    <!-- End .modal-dialog -->
  </div>
  <!-- End .modal -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';

const isMenuActive = ref(false);

const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
    document.body.classList.toggle('mmenu-active', isMenuActive.value);
    const targetElement = document.querySelector('.the_main_div');
    targetElement.classList.toggle('mmenu-active');
};

const closeMenu = () => {
    isMenuActive.value = false;
    document.body.classList.remove('mmenu-active');
    const targetElement = document.querySelector('.the_main_div');
    targetElement.classList.remove('mmenu-active');
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

const handleClickOutside = (event) => {
    if (!event.target.closest('.mobile-menu') && isMenuActive.value) {
        closeMenu();
    }
};

const mainKitchenSolutions = ref([]);
const mainLaundrySolutions = ref([]);
const mainColdRoomSolutions = ref([]);
const mainPromotionalSolutions = ref([]);

const mainKitchenCategories = ref([]);
const mainLaundryCategories = ref([]);
const mainColdRoomCategories = ref([]);
const mainPromotionalCategories = ref([]);

const fetchData = async (url, stateVariable) => {
    try {
        const response = await axios.get(url);
        stateVariable.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
};

const generateLink = (basePath, id, name) => {
    const transformedName = name
        .toLowerCase()
        // remove any previous hyphens
        .replace(/-/g, ' ')
        .replace(/[\s/]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return `${basePath}/${id}/${transformedName}`;
};

const fetchMainKitchenSolutions = () => fetchData('/api/get-solutions/21', mainKitchenSolutions);
const fetchMainLaundrySolutions = () => fetchData('/api/get-solutions/247', mainLaundrySolutions);
const fetchMainColdRoomSolutions = () => fetchData('/api/get-solutions/301', mainColdRoomSolutions);
const fetchMainPromotionalSolutions = () => fetchData('/api/get-solutions/370', mainPromotionalSolutions);

const getSolutionKitchenLink = (id, name) => generateLink('/kitchen/solutions', id, name);
const getSolutionLaundryLink = (id, name) => generateLink('/laundry/solutions', id, name);
const getSolutionColdRoomLink = (id, name) => generateLink('/cold-storage/solutions', id, name);
const getSolutionPromotionalLink = (id, name) => generateLink('/promotional-solutions', id, name);

const fetchMainKitchenCategories = () => fetchData('/api/get-main-categories/21', mainKitchenCategories);
const fetchMainLaundryCategories = () => fetchData('/api/get-main-categories/247', mainLaundryCategories);
const fetchMainColdRoomCategories = () => fetchData('/api/get-main-categories/301', mainColdRoomCategories);
const fetchMainPromotionalCategories = () => fetchData('/api/get-main-categories/370', mainPromotionalCategories);

const getKitchenCategoryLink = (id, name) => generateLink('/kitchen', id, name);
const getLaundryCategoryLink = (id, name) => generateLink('/laundry', id, name);
const getColdRoomCategoryLink = (id, name) => generateLink('/cold-storage', id, name);
const getPromotionalCategoryLink = (id, name) => generateLink('/promotional-solutions', id, name);

onMounted(() => {
    fetchMainKitchenSolutions();
    fetchMainLaundrySolutions();
    fetchMainColdRoomSolutions();
    fetchMainPromotionalSolutions();


    fetchMainKitchenCategories();
    fetchMainLaundryCategories();
    fetchMainColdRoomCategories();
    fetchMainPromotionalCategories();
});
</script>


<style scoped>
.social-icons {
    justify-content: center;
    margin-left: 10px;
}

.social-icon {
    width: 4.5rem;
    height: 4.5rem;
}

.side_bar_title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 3px;
    background: #ff5400;
}


.social-icon img {
    filter: invert(22%) sepia(49%) saturate(4151%) hue-rotate(338deg) brightness(82%) contrast(93%);
}

.social-icon:hover {
    background-color: #c02434 !important;
}

.social-icon:hover img {
    filter: invert(99%) sepia(0%) saturate(2%) hue-rotate(132deg) brightness(111%) contrast(101%);
}
</style>
