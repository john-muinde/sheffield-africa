<template>
    <!-- Mobile Menu -->
    <div class="mobile-menu-overlay"></div>
    <!-- End .mobil-menu-overlay -->

    <div class="mobile-menu-container">
        <div class="mobile-menu-wrapper">
            <span class="mobile-menu-close"><i class="icon-close"></i></span>

            <!--  <form action="#" method="get" class="mobile-search">
                <label for="mobile-search" class="sr-only">Search</label>
                <input
                    type="search"
                    class="form-control"
                    name="mobile-search"
                    id="mobile-search"
                    placeholder="Search in..."
                    required
                />
                <button class="btn btn-primary" type="submit">
                    <i class="icon-search"></i>
                </button>
            </form> -->

            <ul class="nav nav-pills-mobile" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab"
                        role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab"
                        aria-controls="mobile-cats-tab" aria-selected="false">Solutions</a>
                </li>
            </ul>

            <div class="tab-content">
                <div class="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel"
                    aria-labelledby="mobile-menu-link">
                    <nav class="mobile-nav">
                        <ul class="mobile-menu">
                            <li class="active">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/commercial-kitchen">Kitchen</router-link>
                                <ul>
                                    <li v-for="category in mainKitchenCategories" :key="category.id">
                                        <router-link :to="getKitchenCategoryLink(
                                            category.id,
                                            category.name
                                        )">{{ category.name }}</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <router-link to="/laundry" class="sf-with-ul">LAUNDRY & FLOOR CLEANING</router-link>
                                <ul>
                                    <li v-for="category in mainLaundryCategories" :key="category.id">
                                        <router-link :to="getLaundryCategoryLink(
                                            category.id,
                                            category.name
                                        )">{{ category.name }}</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <router-link to="/cold-storage" class="sf-with-ul">Cold Storage</router-link>
                                <ul>
                                    <li v-for="category in mainColdRoomCategories" :key="category.id">
                                        <router-link :to="getColdRoomCategoryLink(
                                            category.id,
                                            category.name
                                        )">{{ category.name }}</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <router-link to="/consultancy-and-design" class="sf-with-ul">
                                    Consultancy & Design
                                </router-link>

                            </li>
                            <li>
                                <router-link to="/about-us" class="sf-with-ul">About Us</router-link>
                            </li>

                            <li>
                                <router-link to="/about-us/sheffield-advantage" class="sf-with-ul">Sheffield
                                    Advantages</router-link>
                            </li>
                            <li>
                                <router-link to="/projects" class="sf-with-ul">Project References</router-link>
                            </li>

                            <li>
                                <router-link to="/events" class="sf-with-ul">Events</router-link>
                            </li>
                            <li>
                                <router-link to="/careers" class="sf-with-ul">Careers</router-link>
                            </li>
                            <li>
                                <router-link to="/faq" class="sf-with-ul">FAQ</router-link>
                            </li>
                            <li>
                                <router-link to="/media" class="sf-with-ul">Media Center</router-link>
                            </li>
                            <li>
                                <router-link to="/contact-us" class="sf-with-ul">Contact us</router-link>
                            </li>
                        </ul>
                    </nav>
                    <!-- End .mobile-nav -->
                </div>
                <!-- .End .tab-pane -->
                <div class="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                    <nav class="mobile-cats-nav">
                        <ul class="mobile-menu">
                            <li>
                                <router-link to="/commercial-kitchen">KITCHEN SOLUTIONS</router-link>
                                <ul>

                                    <li v-for="solution in mainKitchenSolutions" :key="solution.id">

                                        <router-link :to="getSolutionKitchenLink(
                                            solution.id,
                                            solution.name
                                        )">{{ solution.name }}</router-link>

                                    </li>

                                </ul>
                            </li>

                            <li>
                                <router-link to="/laundry">LAUNDRY & FLOOR CLEANING SOLUTIONS</router-link>
                                <ul>
                                    <li v-for="solution in mainLaundrySolutions" :key="solution.id">
                                        <router-link :to="getSolutionLaundryLink(
                                            solution.id,
                                            solution.name
                                        )">{{ solution.name }}</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <router-link to="/cold-storage">COLD STORAGE SOLUTIONS</router-link>
                                <ul>
                                    <li v-for="solution in mainColdRoomSolutions" :key="solution.id">
                                        <router-link :to="getSolutionColdRoomLink(
                                            solution.id,
                                            solution.name
                                        )">{{ solution.name }}</router-link>
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

            <!-- <div>

                <h3 class="side_bar_title">Social Media</h3>

            </div> -->

            <!-- <div class="social-icons">
                <div class="container">
                    <div class="row">
                        <a href="https://www.facebook.com/SheffieldAfricaFacilitySolutions" style="border: 0.1rem solid #c02434;" class="social-icon mt-1" target="_blank" title="Facebook">
                        <img src="/assets/images/social-icons/facebook.png">
                      </a>
                      <a href="https://www.instagram.com/sheffieldafrica/" style="border: 0.1rem solid #c02434;" class="social-icon mt-1" target="_blank" title="Instagram">
                        <img src="/assets/images/social-icons/instagram.png">
                      </a>
                      <a href="https://www.threads.net/@sheffieldafrica" style="border: 0.1rem solid #c02434;" class="social-icon mt-1" target="_blank" title="Threads">
                        <img src="/assets/images/social-icons/threads.png">
                      </a>
                      <a href="https://wa.me/+254114838130?text=Hello%20Sheffield, I need assistance in " style="border: 0.1rem solid #c02434;" class="social-icon mt-1" target="_blank" title="WhatsApp">
                        <img src="/assets/images/social-icons/whatsapp.png">
                      </a>
                      
                    </div>
                    <div class="row">
                        <a href="https://twitter.com/sheffield_afric/" style="border: 0.1rem solid #c02434;" class="social-icon mt-1" target="_blank" title="X">
                        <img src="/assets/images/social-icons/x.png">
                      </a>
                      <a href="https://www.linkedin.com/company/sheffield-steel-systems-ltd/mycompany" style="border: 0.1rem solid #c02434;" class="social-icon mt-1" target="_blank" title="Linkedin">
                        <img src="/assets/images/social-icons/linkedin.png">
                      </a>
                      <a href="https://www.youtube.com/channel/UCK-oWPdQazenIHndl4zABew" style="border: 0.1rem solid #c02434;" class="social-icon mt-1" target="_blank" title="Youtube">
                        <img src="/assets/images/social-icons/youtube.png">
                      </a>
                      <a href="http://tiktok.com/@sheffieldafrica" style="border: 0.1rem solid #c02434;" class="social-icon mt-1" target="_blank" title="TikTok">
                        <img src="/assets/images/social-icons/tiktok.png">
                      </a>
                    </div>
                </div>
            </div> -->
            <!-- End .social-icons -->
        </div>
        <!-- End .mobile-menu-wrapper -->
    </div>
    <!-- End .mobile-menu-container -->

    <!-- Sign in / Register Modal -->
    <div class="modal fade" id="signin-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="icon-close"></i></span>
                    </button>

                    <div class="form-box">
                        <div class="form-tab">
                            <ul class="nav nav-pills nav-fill" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="signin-tab" data-toggle="tab" href="#signin"
                                        role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab"
                                        aria-controls="register" aria-selected="false">Register</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="tab-content-5">
                                <div class="tab-pane fade show active" id="signin" role="tabpanel"
                                    aria-labelledby="signin-tab">
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="singin-email">Username or email address
                                                *</label>
                                            <input type="text" class="form-control" id="singin-email"
                                                name="singin-email" required />
                                        </div>
                                        <!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="singin-password">Password *</label>
                                            <input type="password" class="form-control" id="singin-password"
                                                name="singin-password" required />
                                        </div>
                                        <!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>LOG IN</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>

                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input"
                                                    id="signin-remember" />
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
                                <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="register-email">Your email address *</label>
                                            <input type="email" class="form-control" id="register-email"
                                                name="register-email" required />
                                        </div>
                                        <!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="register-password">Password *</label>
                                            <input type="password" class="form-control" id="register-password"
                                                name="register-password" required />
                                        </div>
                                        <!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>SIGN UP</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>

                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="register-policy"
                                                    required />
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
import { ref, onMounted, onUnmounted, reactive, nextTick, watch } from "vue";
import axios from "axios";

const mainKitchenSolutions = ref([]);
const mainLaundrySolutions = ref([]);
const mainColdRoomSolutions = ref([]);
const mainKitchenCategories = ref([]);
const mainLaundryCategories = ref([]);
const mainColdRoomCategories = ref([]);

const fetchMainKitchenSolutions = async () => {
    try {
        const response = await axios.get("/api/get-solutions/21", {});
        mainKitchenSolutions.value = response.data.data;
        console.log("the menu");
    } catch (error) {
        console.error(error);
    }
};

const getSolutionKitchenLink = (id, name) => {
    let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
    transformedName = transformedName.replace(/-+/g, "-");
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    transformedName = transformedName.toLowerCase();

    return `/kitchen/solutions/${id}/${transformedName}`;
};


const fetchMainLaundrySolutions = async () => {
    try {
        const response = await axios.get("/api/get-solutions/247", {});
        mainLaundrySolutions.value = response.data.data;

    } catch (error) {
        console.error(error);
    }
};

const getSolutionLaundryLink = (id, name) => {
    let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
    transformedName = transformedName.replace(/-+/g, "-");
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    transformedName = transformedName.toLowerCase();

    return `/laundry/solutions/${id}/${transformedName}`;
};

const fetchMainColdRoomSolutions = async () => {
    try {
        const response = await axios.get("/api/get-solutions/301", {});
        mainColdRoomSolutions.value = response.data.data;

    } catch (error) {
        console.error(error);
    }
};

const getSolutionColdRoomLink = (id, name) => {
    let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
    transformedName = transformedName.replace(/-+/g, "-");
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    transformedName = transformedName.toLowerCase();

    return `/cold-storage/solutions/${id}/${transformedName}`;
};

//////////////////////////////////////////////



// Fetch products based on the current page
const fetchMainKitchenCategories = async () => {
    try {
        const response = await axios.get("/api/get-main-categories/21", {});
        mainKitchenCategories.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
};

const getKitchenCategoryLink = (id, name, page) => {
    let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
    // Remove consecutive dashes
    transformedName = transformedName.replace(/-+/g, "-");
    // Remove leading and trailing dashes
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    // Convert to lowercase
    transformedName = transformedName.toLowerCase();

    return `/kitchen/${id}/${transformedName}`;
};

// Fetch products based on the current page
const fetchMainLaundryCategories = async () => {
    try {
        const response = await axios.get("/api/get-main-categories/247", {});
        mainLaundryCategories.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
};

const getLaundryCategoryLink = (id, name, page) => {
    let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
    // Remove consecutive dashes
    transformedName = transformedName.replace(/-+/g, "-");
    // Remove leading and trailing dashes
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    // Convert to lowercase
    transformedName = transformedName.toLowerCase();

    return `/laundry/${id}/${transformedName}`;
};

// Fetch products based on the current page
const fetchMainColdRoomCategories = async () => {
    try {
        const response = await axios.get("/api/get-main-categories/301", {});
        mainColdRoomCategories.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
};

const getColdRoomCategoryLink = (id, name, page) => {
    let transformedName = name.replace(/ /g, "-").replace(/\//g, "-");
    // Remove consecutive dashes
    transformedName = transformedName.replace(/-+/g, "-");
    // Remove leading and trailing dashes
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    // Convert to lowercase
    transformedName = transformedName.toLowerCase();

    return `/cold-storage/${id}/${transformedName}`;
};

onMounted(() => {

    fetchMainKitchenSolutions();
    fetchMainLaundrySolutions();
    fetchMainColdRoomSolutions();
    fetchMainKitchenCategories();
    fetchMainLaundryCategories();
    fetchMainColdRoomCategories();

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
