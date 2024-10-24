<template>
    <main class="main">
        <!-- <div
      class="page-header text-center"
      style="background-image: url('assets/images/page-header-bg.jpg')"
    >
      <div class="container">
        <h1 class="page-title">About us<span>Pages</span></h1>
      </div>

    </div> -->
        <!-- End .page-header -->
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">HOME</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        About us
                    </li>
                </ol>
            </div>
            <!-- End .container -->
        </nav>
        <!-- End .breadcrumb-nav -->

        <div class="page-content pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about-text">
                            <div class="headings">
                                <h3 class="heading text-primary">About Us</h3>
                                <h4 class="sub-heading">Who We Are</h4>
                            </div>
                            <!-- End .title text-center mb-2 -->

                            <div class="row">
                                <div class="col-md-6">
                                    <p>
                                        Sheffield Steel Systems Limited was
                                        founded in 2003 and has expanded over
                                        the years to become East Africa’s
                                        leading solution and service provider
                                        for Commercial Kitchen, Laundry and Cold
                                        Storage Solutions with a niche in
                                        Stainless Steel Fabrication and
                                        Customization. A Kenyan company with
                                        presence in Uganda and Rwanda and
                                        project executions across the continent
                                        from Ethiopia, Burundi, South Sudan,
                                        Nigeria to Congo as we keep venturing
                                        into new territories. A Pan African
                                        company focused on providing solutions
                                        built to last in Africa.
                                    </p>

                                    <h4 class="sub-heading mt-4">Culture</h4>

                                    <p>
                                        At Sheffield we work in a collaborative
                                        work culture with an open door policy
                                        that encourages interaction and
                                        emphasizes our value for collective team
                                        work dynamics. The culture blend comes
                                        in through the inspirational leaders who
                                        are always willing to take risks that
                                        will benefit the organization. Being a
                                        company that thrives on new ideas in
                                        both product and concept design,
                                        Sheffield’s environment encourages open
                                        minded, innovative and driven employees.
                                    </p>
                                </div>

                                <div class="col-md-6">
                                    <div
                                        class="embed-responsive embed-responsive-16by9"
                                    >
                                        <iframe
                                            class="embed-responsive-item"
                                            src="https://www.youtube.com/embed/YvhZ9lOAnSc?rel=0"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End .about-text -->
                    </div>
                    <!-- End .col-lg-10 offset-1 -->
                </div>
                <!-- End .row -->
                <div
                    class="icon-boxes-container"
                    style="
                        background-image: url('/src/assets/images/sheffield_stainless_steel_background.jpg');
                    "
                ></div>
                <!-- End .icon-boxes-container -->
            </div>
            <!-- End .container -->

            <div class="mb-2"></div>
            <!-- End .mb-2 -->

            <div class="container mt-0">
                <div
                    class="row text-center icon-boxes-container"
                    :style="{
                        backgroundImage:
                            'url(/assets/images/sheffield_stainless_steel_background.jpg)',
                    }"
                >
                    <div class="col counter_col">
                        <i
                            class="fa fa-user text-primary"
                            style="font-size: 3.5rem"
                        ></i>
                        <h3 class="count-to text-primary mb-0">
                            {{ projectsCount }}+
                        </h3>
                        <p>Projects</p>
                    </div>
                    <div class="col counter_col">
                        <i
                            class="fa fa-star text-primary"
                            style="font-size: 3.5rem"
                        ></i>
                        <h3 class="count-to text-primary mb-0">
                            {{ conceptsCount }}+
                        </h3>
                        <p>Innovative Concepts</p>
                    </div>
                    <div class="col counter_col">
                        <i
                            class="fa fa-coffee text-primary"
                            style="font-size: 3.5rem"
                        ></i>
                        <h3 class="count-to text-primary mb-0">
                            {{ trainingdemosCount }}+
                        </h3>
                        <p>Training Demos</p>
                    </div>
                    <div class="col counter_col">
                        <i
                            class="far fa-chart-bar text-primary"
                            style="font-size: 3.5rem"
                        ></i>
                        <h3 class="count-to text-primary mb-0">
                            {{ yearsCount }}+
                        </h3>
                        <p>Years’ Experience</p>
                    </div>

                    <div class="col counter_col">
                        <i
                            class="far fa-chart-bar text-primary"
                            style="font-size: 3.5rem"
                        ></i>
                        <h3 class="count-to text-primary mb-0">
                            {{ stopCount }}
                        </h3>
                        <p>Stop Shop Solution</p>
                    </div>
                </div>
            </div>

            <div class="container-fluid pb-4 pt-5">
                <div class="headings">
                    <h3 class="heading text-primary">Our Showrooms</h3>
                    <h4 class="sub-heading">Welcome to Sheffield showrooms</h4>
                </div>

                <div class="row justify-content-left">
                    <div
                        class="col-sm-6 col-lg-3"
                        v-for="showroom in showrooms"
                        :key="showroom.id"
                    >
                        <article class="entry entry-grid">
                            <figure class="entry-media">
                                <router-link
                                    :to="
                                        getShowroomLink(
                                            showroom.id,
                                            showroom.name
                                        )
                                    "
                                >
                                    <img
                                        style="aspect-ratio: 3 / 2"
                                        :src="
                                            '/storage/' +
                                            showroom.main_image_path
                                        "
                                        alt="image desc"
                                    />
                                </router-link>
                            </figure>
                            <!-- End .entry-media -->

                            <div class="entry-body text-center pt-1">
                                <h2 class="entry-title">
                                    <router-link
                                        :to="
                                            getShowroomLink(
                                                showroom.id,
                                                showroom.name
                                            )
                                        "
                                        >{{ showroom.name }}</router-link
                                    >
                                </h2>
                                <!-- End .entry-title -->

                                <div class="entry-content">
                                    <p>
                                        <span>
                                            <i
                                                style="color: rgb(223, 31, 49)"
                                                class="icon-phone"
                                            ></i>
                                            <b>
                                                <a
                                                    style="
                                                        color: #777;
                                                        text-decoration: none;
                                                    "
                                                    onmouseover="this.style.color='#c02434'"
                                                    onmouseout="this.style.color='#777'"
                                                    class="text-grey pl-3"
                                                    :href="
                                                        'tel:' +
                                                        showroom.phone_number1
                                                    "
                                                    >{{
                                                        showroom.phone_number1
                                                    }}</a
                                                >,

                                                <a
                                                    style="
                                                        color: #777;
                                                        text-decoration: none;
                                                    "
                                                    onmouseover="this.style.color='#c02434'"
                                                    onmouseout="this.style.color='#777'"
                                                    class="text-grey"
                                                    :href="
                                                        'tel:' +
                                                        showroom.phone_number2
                                                    "
                                                    >{{
                                                        showroom.phone_number2
                                                    }}</a
                                                >
                                            </b> </span
                                        ><br />
                                        <span>
                                            <i
                                                style="color: rgb(223, 31, 49)"
                                                class="icon-envelope"
                                            ></i>
                                            <b>
                                                <a
                                                    style="
                                                        color: #777;
                                                        text-decoration: none;
                                                    "
                                                    onmouseover="this.style.color='#c02434'"
                                                    onmouseout="this.style.color='#777'"
                                                    class="text-grey pl-3"
                                                    :href="
                                                        'mailto:' +
                                                        showroom.email
                                                    "
                                                    >{{ showroom.email }}
                                                </a>
                                            </b> </span
                                        ><br />
                                        {{ showroom.location }}
                                    </p>

                                    <router-link
                                        :to="
                                            getShowroomLink(
                                                showroom.id,
                                                showroom.name
                                            )
                                        "
                                        class="btn btn-outline-primary"
                                        ><span>View More</span
                                        ><i class="icon-long-arrow-right"></i
                                    ></router-link>
                                </div>
                                <!-- End .entry-content -->
                            </div>
                            <!-- End .entry-body -->
                        </article>
                        <!-- End .entry -->
                    </div>
                    <!-- End .col-lg-3 -->
                </div>
                <!-- End .row -->
            </div>
            <!-- End .container-fluid -->

            <div class="container pb-4">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="headings">
                            <h3 class="heading text-primary">Our Clients</h3>
                            <h4 class="sub-heading">
                                Partnering with Industry Leaders
                            </h4>
                        </div>
                        <!-- End .brands-text -->

                        <div class="row justify-content-center">
                            <div class="col-xl-12 col-xxl-12 mt-2">
                                <carousel
                                    ref="scrollableContainerCarosel"
                                    @load="adjustTheClass1Height"
                                    :breakpoints="breakpoints"
                                    class="carousel-wrapper owl-full carousel-equal-height carousel-with-shadow"
                                    :autoplay="2000"
                                    :wrap-around="false"
                                    :pauseAutoplayOnHover="true"
                                >
                                    <slide
                                        v-for="(item, index) in clientList"
                                        :key="index"
                                    >
                                        <div class="product text-center">
                                            <figure class="product-media">
                                                <!-- <span class="product-label label-sale">Sale</span> -->
                                                <!-- <router-link :to=""> -->

                                                <img
                                                    :src="
                                                        '/storage/' +
                                                        item.main_image_path
                                                    "
                                                    v-lazy:src="
                                                        '/storage/' +
                                                        item.main_image_path
                                                    "
                                                    alt="Client image"
                                                    class="product-image"
                                                />
                                                <!--  </router-link> -->
                                            </figure>
                                            <!-- End .product-media -->
                                        </div>
                                        <!-- End .product -->
                                    </slide>

                                    <template #addons>
                                        <Navigation />
                                    </template> </carousel
                                ><!-- End .owl-carousel -->
                            </div>
                            <!-- End .col-xl-9 -->
                        </div>
                        <!-- End .row cat-banner-row -->

                        <!-- End .brands-display -->
                    </div>
                    <!-- End .col-lg-10 offset-lg-1 -->
                </div>
                <!-- End .row -->
            </div>
            <!-- End .container -->

            <div
                class="container-fluid"
                :style="{
                    backgroundImage:
                        'url(/assets/images/sheffield_stainless_steel_background.jpg)',
                }"
            >
                >
                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                            <span class="icon-box-icon text-dark">
                                <i class="icon-rocket"></i>
                            </span>
                            <div class="icon-box-content">
                                <h3 class="icon-box-title">Shipping</h3>
                                <!-- End .icon-box-title -->
                                <p>Choose your prefferd shipping method</p>
                            </div>
                            <!-- End .icon-box-content -->
                        </div>
                        <!-- End .icon-box -->
                    </div>
                    <!-- End .col-sm-6 col-lg-3 -->

                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                            <span class="icon-box-icon text-dark">
                                <i class="icon-rotate-left"></i>
                            </span>

                            <div class="icon-box-content">
                                <h3 class="icon-box-title">30 Days Return</h3>
                                <!-- End .icon-box-title -->
                                <p>
                                    Simply return it within 30 days for an
                                    exchange
                                </p>
                            </div>
                            <!-- End .icon-box-content -->
                        </div>
                        <!-- End .icon-box -->
                    </div>
                    <!-- End .col-sm-6 col-lg-3 -->

                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                            <span class="icon-box-icon text-dark">
                                <i class="icon-info-circle"></i>
                            </span>

                            <div class="icon-box-content">
                                <h3 class="icon-box-title">Payment Secure</h3>
                                <!-- End .icon-box-title -->
                                <p>Contact us 24 hours a day, 7 days a week</p>
                            </div>
                            <!-- End .icon-box-content -->
                        </div>
                        <!-- End .icon-box -->
                    </div>
                    <!-- End .col-sm-6 col-lg-3 -->

                    <div class="col-sm-6 col-lg-3">
                        <div class="icon-box icon-box-side">
                            <span class="icon-box-icon text-dark">
                                <i class="icon-life-ring"></i>
                            </span>

                            <div class="icon-box-content">
                                <h3 class="icon-box-title">24X7 Support</h3>
                                <!-- End .icon-box-title -->
                                <p>Contact us 24 hours a day, 7 days a week</p>
                            </div>
                            <!-- End .icon-box-content -->
                        </div>
                        <!-- End .icon-box -->
                    </div>
                    <!-- End .col-sm-6 col-lg-3 -->
                </div>
                <!-- End .row -->
            </div>
            <!-- End .container-fluid -->

            <div class="container-fluid banner-blogs mt-5">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <article
                                            class="entry entry-grid text-center"
                                        >
                                            <figure class="entry-media">
                                                <a href="single.html">
                                                    <img
                                                        src="../assets/images/banners/about_us.jpg"
                                                        alt="image desc"
                                                    />
                                                </a>
                                            </figure>
                                            <!-- End .entry-media -->

                                            <div class="entry-body">
                                                <h2 class="entry-title">
                                                    <a href="single.html"
                                                        >ABOUT US</a
                                                    >
                                                </h2>
                                                <!-- End .entry-title -->

                                                <div class="entry-content">
                                                    <p>
                                                        Sheffield Steel Systems
                                                        Limited was founded in
                                                        2003 and has expanded
                                                        over the years to become
                                                        East Africa’s leading
                                                        solution and service
                                                        provider for Commercial
                                                        Kitchen, Laundry and
                                                        Cold Storage Solutions
                                                        with a niche in
                                                        Stainless Steel
                                                        Fabrication and
                                                        Customization.
                                                    </p>
                                                    <a
                                                        href="#"
                                                        class="read-more"
                                                        >Continue Reading</a
                                                    >
                                                </div>
                                                <!-- End .entry-content -->
                                            </div>
                                            <!-- End .entry-body -->
                                        </article>
                                        <!-- End .entry -->
                                    </div>

                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <article
                                            class="entry entry-grid text-center"
                                        >
                                            <figure class="entry-media">
                                                <a href="single.html">
                                                    <img
                                                        src="../assets/images/banners/about_projects2.jpg"
                                                        alt="image desc"
                                                    />
                                                </a>
                                            </figure>
                                            <!-- End .entry-media -->

                                            <div class="entry-body">
                                                <h2 class="entry-title">
                                                    <a href="single.html"
                                                        >PROJECTS</a
                                                    >
                                                </h2>
                                                <!-- End .entry-title -->

                                                <div class="entry-content">
                                                    <p>
                                                        We have successfully
                                                        designed, installed and
                                                        commissioned projects
                                                        across a range of
                                                        segments including
                                                        hospitality industries -
                                                        hotels, restaurants,
                                                        catering (HORECA);
                                                        institutions, bakeries,
                                                        corporates, cold chain,
                                                        food processing,
                                                        healthcare amongst
                                                        others.
                                                    </p>
                                                    <a
                                                        href="#"
                                                        class="read-more"
                                                        >Continue Reading</a
                                                    >
                                                </div>
                                                <!-- End .entry-content -->
                                            </div>
                                            <!-- End .entry-body -->
                                        </article>
                                        <!-- End .entry -->
                                    </div>

                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <article
                                            class="entry entry-grid text-center"
                                        >
                                            <figure class="entry-media">
                                                <a href="single.html">
                                                    <img
                                                        src="../assets/images/banners/design-sheffield.jpg"
                                                        alt="image desc"
                                                    />
                                                </a>
                                            </figure>
                                            <!-- End .entry-media -->

                                            <div class="entry-body">
                                                <h2 class="entry-title">
                                                    <a href="single.html"
                                                        >DESIGN & DEVELOPMENT
                                                    </a>
                                                </h2>
                                                <!-- End .entry-title -->

                                                <div class="entry-content">
                                                    <p>
                                                        Understanding our
                                                        clients’ concept and
                                                        space requirements is
                                                        key. We will conduct a
                                                        site assessment and our
                                                        in-house team of AutoCAD
                                                        engineers will design
                                                        the equipment layout
                                                        which includes 2D, 3D,
                                                        Elevations, Isometrics
                                                        and Service layouts for
                                                        a model view of your end
                                                        solution and product.
                                                    </p>
                                                    <a
                                                        href="#"
                                                        class="read-more"
                                                        >Continue Reading</a
                                                    >
                                                </div>
                                                <!-- End .entry-content -->
                                            </div>
                                            <!-- End .entry-body -->
                                        </article>
                                        <!-- End .entry -->
                                    </div>

                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <article
                                            class="entry entry-grid text-center"
                                        >
                                            <figure class="entry-media">
                                                <a href="single.html">
                                                    <img
                                                        src="../assets/images/banners/csr-sheffield.jpg"
                                                        alt="image desc"
                                                    />
                                                </a>
                                            </figure>
                                            <!-- End .entry-media -->

                                            <div class="entry-body">
                                                <h2 class="entry-title">
                                                    <a href="single.html"
                                                        >SHEFFIELD CSR</a
                                                    >
                                                </h2>
                                                <!-- End .entry-title -->

                                                <div class="entry-content">
                                                    <p>
                                                        Since inception
                                                        Sheffield Africa has
                                                        been in the fore front
                                                        in commitment to achieve
                                                        corporate social
                                                        responsibility. To
                                                        underline our deep
                                                        commitment to making a
                                                        difference in people’s
                                                        lives, we are guided by
                                                        an existing policy that
                                                        drives initiatives
                                                        focusing on Education,
                                                        Employment, Health,
                                                        Community Development &
                                                        Environmental
                                                        Sustainability.
                                                    </p>
                                                    <a
                                                        href="#"
                                                        class="read-more"
                                                        >Continue Reading</a
                                                    >
                                                </div>
                                                <!-- End .entry-content -->
                                            </div>
                                            <!-- End .entry-body -->
                                        </article>
                                        <!-- End .entry -->
                                    </div>
                                </div>
                                <!-- End .row -->
                            </div>
                            <!-- End .col-lg-3 col-xxl-4-5col -->

                            <!-- End .col-lg-3 col-xxl-2 -->
                        </div>
                        <!-- End .mb-5 -->
                    </div>
                    <!-- End .col-lg-9 col-xxl-10 -->
                </div>
                <!-- End .row -->
            </div>
            <!-- End .container-fluid -->
        </div>
        <!-- End .page-content -->
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, nextTick, watch } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

const projectsCount = ref(0);
const conceptsCount = ref(0);
const trainingdemosCount = ref(0);
const yearsCount = ref(0);
const stopCount = ref(0);

const dataCounter = [
    { count: 10000, ref: projectsCount },
    { count: 2000, ref: conceptsCount },
    { count: 1500, ref: trainingdemosCount },
    { count: 20, ref: yearsCount },
    { count: 1, ref: stopCount },
];

const duration = 3000;

onMounted(() => {
    animateCounters();
});

const animateCounters = () => {
    const interval = 50;

    dataCounter.forEach((counter) => {
        const { count, ref } = counter;
        const step = Math.ceil(count / (duration / interval));
        let current = 0;

        const intervalId = setInterval(() => {
            current += step;
            if (current >= count) {
                current = count;
                clearInterval(intervalId);
            }
            ref.value = current;
        }, interval);
    });
};

const breakpoints = {
    0: {
        itemsToShow: 1,
        snapAlign: "start",
    },
    480: {
        itemsToShow: 1,
        snapAlign: "start",
    },
    768: {
        itemsToShow: 3,
        snapAlign: "start",
    },
    992: {
        itemsToShow: 6,
        snapAlign: "start",
    },
    1200: {
        itemsToShow: 6,
        snapAlign: "start",
    },
    1360: {
        itemsToShow: 8,
        snapAlign: "start",
    },
    1600: {
        itemsToShow: 8,
        snapAlign: "start",
    },
};

const clientList = ref([]);
const fetchClientList = async () => {
    try {
        const response = await axios.get("/api/get-clients-home", {});

        clientList.value = response.data.data;

        console.log(clientList.value);
    } catch (error) {
        console.error(error);
    }
};

const getShowroomLink = (id, name) => {
    let transformedName = name.replace(/ /g, "-");
    transformedName = transformedName.replace(/-+/g, "-");
    transformedName = transformedName.replace(/^-+|-+$/g, "");
    transformedName = transformedName.toLowerCase();

    return `/showroom/${id}/${transformedName}`;
};

//showrooms

const showrooms = ref([]);

// Fetch products based on the current page
const fetchShowrooms = async () => {
    try {
        const response = await axios.get("/api/get-showrooms", {});
        showrooms.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

onMounted(async () => {
    fetchClientList();
    fetchShowrooms();
});
</script>

<style scoped>
.counter_col h3 {
    font-size: 5rem;
}

.counter_col p {
    color: #0e0f10;
    font-weight: 400;
    font-size: 2rem;
}

@media only screen and (max-width: 768px) {
    .icon-boxes-container {
        display: flex;
        flex-direction: column;
    }

    .counter_col {
        margin-top: 4rem;
    }

    .counter_col h3 {
        font-size: 3.5rem;
    }

    .counter_col p {
        font-size: 1.5rem;
    }
}
</style>
