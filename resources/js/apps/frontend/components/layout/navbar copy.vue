<template>
  <div>
    <header class="header header-14">
      <div class="header-top header-top-color">
        <div class="container">
          <div class="header-left">
            <a href="tel:+254713777111"
              ><i class="icon-phone"></i>+254 713 777 111</a
            >

            <a class="ml-5" href="mailto:info@sheffieldafrica.com"
              ><i class="icon-envelope"></i> info@sheffieldafrica.com</a
            >
          </div>
          <!-- End .header-left -->

          <div class="header-right d-none d-lg-block">
            <ul class="top-menu">
              <li>
                <a href="#">Links</a>
                <ul class="menus">
                  <!-- <div class="header-dropdown">
                      <a href="#">USD</a>
                      <div class="header-menu">
                        <ul>
                          <li><a href="#">Eur</a></li>
                          <li><a href="#">Usd</a></li>
                        </ul>
                      </div>

                    </div> -->
                  <!-- End .header-dropdown -->

                  <li>
                    <a href="#">What is New</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Concepts</a>
                  </li>
                  <li class="login" v-if="!user?.name">
                    <router-link to="/login">
                      LOG IN </router-link>
                  </li>

                  <li class="login" v-if="!user?.name">
                    <router-link to="/register">
                      REGISTER</router-link>
                  </li>

                  <!-- <li v-if="user?.name" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ user.name }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><router-link class="dropdown-item" to="/admin">Admin</router-link></li>
                            <li><router-link to="/admin/posts" class="dropdown-item">Post</router-link></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a></li>
                        </ul>
                    </li> -->

                    <li v-if="user?.name">
                      <div class="header-dropdown" v-if="user?.name">
                          <router-link to="/my-account">{{ user.name }}</router-link>
                          <div class="header-menu">
                              <ul>
                                  <li><router-link class="dropdown-item" to="/my-account">My Account</router-link></li>
                                  <li><hr class="dropdown-divider"></li>
                                  <li><router-link to="/admin/posts" class="dropdown-item">Wishlist</router-link></li>
                                  <li><hr class="dropdown-divider"></li>
                                  <li><router-link to="/admin/posts" class="dropdown-item">Change Password</router-link></li>
                                  <li><hr class="dropdown-divider"></li>
                                  <li><a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a></li>
                              </ul>
                          </div><!-- End .header-menu -->
                      </div>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- End .top-menu -->
          </div>
          <!-- End .header-right -->

          <div class="header-right d-block d-lg-none">
            <ul class="top-menu">

              <li class="login" v-if="!user?.name">
                <router-link to="/login">
                  LOG IN
                </router-link>
              </li>

              <li class="register" v-if="!user?.name">
                <router-link to="/register">
                  REGISTER
                </router-link>
              </li>

            </ul>
            <!-- End .top-menu -->
          </div>
          <!-- End .header-right -->
        </div>
        <!-- End .container -->
      </div>
      <!-- End .header-top -->

      <div class="header-middle">
        <div class="container-fluid">
          <div class="row">
            <div class="col-auto col-lg-3 col-xl-3">
              <button class="mobile-menu-toggler">
                <span class="sr-only">Toggle mobile menu</span>
                <i class="icon-bars"></i>
              </button>

              <router-link to="/" class="logo"
                      >
                <img
                  src="../../assets/images/logo.png"
                  alt="Molla Logo"
                  width="210"
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
                    <a href="#" class="search-toggle" role="button"
                      ><i class="icon-search"></i
                    ></a>
                    <form action="#" method="get">
                      <div class="header-search-wrapper search-wrapper-wide">
                        <!-- End .select-custom -->
                        <label for="q" class="sr-only">Search</label>
                        <input
                          type="search"
                          class="form-control"
                          name="q"
                          id="q"
                          placeholder="Search product ..."
                          required
                        />

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

                <div
                  class="col-lg-4 d-flex justify-content-end align-items-center"
                >
                  <div class="header-dropdown-link">
                    <div class="dropdown compare-dropdown">
                      <router-link
                        to="/myaccount"
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
                          <li class="compare-product">
                            <a href="#" class="btn-remove"
                              ><i class="icon-arrow-right"></i
                            ></a>
                            <h4 class="compare-product-title">
                              <a href="product.html">My Account</a>
                            </h4>
                          </li>
                          <li class="compare-product">
                            <a href="#" class="btn-remove"
                              ><i class="icon-arrow-right"></i
                            ></a>
                            <h4 class="compare-product-title">
                              <a href="product.html">My Orders</a>
                            </h4>
                          </li>
                        </ul>

                        <div class="compare-actions">
                          <a href="#" class="btn btn-outline-primary-2"
                            ><span>Logout</span
                            ><i class="icon-long-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                      <!-- End .dropdown-menu -->
                    </div>
                    <!-- End .compare-dropdown -->

                    <router-link to="/wishlist" class="wishlist-link">
                      <i class="icon-heart-o"></i>
                      <span class="wishlist-count">3</span>
                      <span class="wishlist-txt">Wishlist</span>
                    </router-link>

                    <div class="dropdown cart-dropdown">
                      <router-link
                        to="/cart"
                        class="dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                      >
                        <i class="icon-shopping-cart"></i>
                        <span class="cart-count">2</span>
                        <span class="cart-txt">Cart</span>
                      </router-link>

                      <div class="dropdown-menu dropdown-menu-right">
                        <div class="dropdown-cart-products">
                          <div class="product">
                            <!--  <div class="product-cart-details">
                              <h4 class="product-title">
                                <a href="product.html"
                                  >Beige knitted elastic runner shoes</a
                                >
                              </h4>

                              <span class="cart-product-info">
                                <span class="cart-product-qty">1</span>
                                x $84.00
                              </span>
                            </div>

                            <figure class="product-image-container">
                              <a href="product.html" class="product-image">
                                <img
                                  src="../assets/images/products/cart/product-1.jpg"
                                  alt="product"
                                />
                              </a>
                            </figure>
                            <a
                              href="#"
                              class="btn-remove"
                              title="Remove Product"
                              ><i class="icon-close"></i
                            ></a> -->
                          </div>
                          <!-- End .product -->

                          <div class="product">
                            <!-- <div class="product-cart-details">
                              <h4 class="product-title">
                                <a href="product.html"
                                  >Blue utility pinafore denim dress</a
                                >
                              </h4>

                              <span class="cart-product-info">
                                <span class="cart-product-qty">1</span>
                                x $76.00
                              </span>
                            </div>


                            <figure class="product-image-container">
                              <a href="product.html" class="product-image">
                                <img
                                  src="../assets/images/products/cart/product-2.jpg"
                                  alt="product"
                                />
                              </a>
                            </figure>
                            <a
                              href="#"
                              class="btn-remove"
                              title="Remove Product"
                              ><i class="icon-close"></i
                            ></a> -->
                          </div>
                          <!-- End .product -->
                        </div>
                        <!-- End .cart-product -->

                        <div class="dropdown-cart-total">
                          <span>Total</span>

                          <span class="cart-total-price">$3000.00</span>
                        </div>
                        <!-- End .dropdown-cart-total -->

                        <div class="dropdown-cart-action">
                          <router-link to="/cart" class="btn btn-primary"
                            >View Cart</router-link
                          >
                          <router-link
                            to="/checkout"
                            class="btn btn-outline-primary-2"
                            ><span>Checkout</span
                            ><i class="icon-long-arrow-right"></i
                          ></router-link>
                        </div>
                        <!-- End .dropdown-cart-total -->
                      </div>
                      <!-- End .dropdown-menu -->
                    </div>
                    <!-- End .cart-dropdown -->
                  </div>
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

      <div class="header-bottom sticky-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-auto col-lg-3 col-xl-3 header-left">
              <div
                class="dropdown category-dropdown"
                data-visible="true"
              >
                <a
                  href="#"
                  class="dropdown-toggle"
                  style="background-color: #21409a; color: #fff"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Browse Categories"
                  
                >
                  Browse Categories
                </a>

                <div class="dropdown-menu">
                  <nav class="side-nav">
                    <ul class="menu-vertical sf-arrows menu-vertical-browse">
                      
                      <li class="megamenu-container" v-for="(category, index) in categories" :key="index">
                      <router-link :to="'/category/' + category.id + '/' + category.slug" class="sf-with-ul"><i class="icon-sheffield-icon"></i>{{ category.name }}</router-link>
                      <div class="megamenu">
                        <div class="row no-gutters">
                          <template v-for="subcategory in category.subcategories" :key="subcategory.id">
                            <template v-if="subcategory.columns === 2 || !subcategory.columns">
                              <template v-for="column in 2" :key="column">
                                <div class="col-md-4">
                                  <ul>
                                    <template v-for="(item, itemIndex) in getSubset(subcategory.items, column, 2)" :key="itemIndex">
                                      <li>
                                        <router-link :to="'/category/' + item.id + '/' + item.slug">{{ item.name }}</router-link>
                                      </li>
                                    </template>
                                  </ul>
                                </div>
                              </template>
                            </template>
                            <template v-else-if="subcategory.columns === 3">
                              <template v-for="column in 3" :key="column">
                                <div class="col-md-3">
                                  <ul>
                                    <template v-for="(item, itemIndex) in getSubset(subcategory.items, column, 3)" :key="itemIndex">
                                      <li>
                                        <router-link :to="'/category/' + item.id + '/' + item.slug">{{ item.name }}</router-link>
                                      </li>
                                    </template>
                                  </ul>
                                </div>
                              </template>
                            </template>
                            <template v-else-if="subcategory.columns === 1">
                              <div class="col-md-8">
                                <ul>
                                  <li v-for="(item, itemIndex) in subcategory.items" :key="itemIndex">
                                    <router-link :to="'/category/' + item.id + '/' + item.slug">{{ item.name }}</router-link>
                                  </li>
                                </ul>
                              </div>
                            </template>
                          </template>

                          
                          <div class="col-md-4">
                            <div class="banner banner-overlay">
                              <a href="category.html" class="banner banner-menu">
                                <img src="../../assets/images/demos/demo-13/menu/banner-1.jpg" alt="Banner" />
                              </a>
                            </div>
                          </div> 
                         
                        </div>
                      </div>
                    </li>
                    </ul>
                    <!-- End .menu-vertical -->
                  </nav>
                  <!-- End .side-nav -->
                </div>
                <!-- End .dropdown-menu -->
              </div>
              <!-- End .category-dropdown -->
            </div>
            <!-- End .col-xl-3 col-xxl-2 -->

            <div
              class="col col-lg-9 col-xl-9 header-center"
              style="background-color: #c02434"
            >
              <nav class="main-nav">
                <ul class="menu sf-arrows">
                  <li class="megamenu-container active">
                    <router-link to="/" class="sf-with-ul"
                      >Home</router-link>
                  </li>
                  <li>
                    <a href="#" class="sf-with-ul">Kitchen</a>

                    <div class="megamenu megamenu-md">
                      <div class="row no-gutters">
                        <div class="col-md-12">
                          <div class="menu-col">
                            <div class="row">
                              <div class="col-md-4">
                                <!-- <div class="menu-title">Shop with sidebar</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Bar Solution</a></li>
                                  <li><a href="#">Bakery & Patisseries</a></li>
                                  <li><a href="#">Cold Room Solutions</a></li>
                                  <li><a href="#">Food Kiosk</a></li>
                                  <li>
                                    <a href="#">Commercial Mobile Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->

                              <div class="col-md-4">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Retail & Supermarkets</a></li>
                                  <li>
                                    <a href="#">Buffet & Severy Solutions</a>
                                  </li>
                                  <li><a href="#">Canteen Solutions</a></li>
                                  <li>
                                    <a href="#">Commercial Kitchen Solutions</a>
                                  </li>
                                  <li><a href="#">Health Care Solutions</a></li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->

                              <div class="col-md-4">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Outdoor Kitchens</a></li>
                                  <li>
                                    <a href="#">Staniless Steel Fabrications</a>
                                  </li>
                                  <li><a href="#">Butchery Solutions</a></li>
                                  <li><a href="#">Coffee Shops</a></li>
                                  <li>
                                    <a href="#">Fire Suppression Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->
                            </div>
                            <!-- End .row -->
                          </div>
                          <!-- End .menu-col -->
                        </div>
                        <!-- End .col-md-8 -->
                      </div>
                      <!-- End .row -->
                      <div class="row menu-banners">
                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/1.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->

                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/2.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->

                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/3.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->
                      </div>
                    </div>
                    <!-- End .megamenu megamenu-md -->
                  </li>
                  <li>
                    <a href="category.html" class="sf-with-ul">Cold Room</a>

                    <div class="megamenu megamenu-md">
                      <div class="row no-gutters">
                        <div class="col-md-12">
                          <div class="menu-col">
                            <div class="row">
                              <div class="col-md-4">
                                <!-- <div class="menu-title">Shop with sidebar</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Bar Solution</a></li>
                                  <li><a href="#">Bakery & Patisseries</a></li>
                                  <li><a href="#">Cold Room Solutions</a></li>
                                  <li><a href="#">Food Kiosk</a></li>
                                  <li>
                                    <a href="#">Commercial Mobile Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->

                              <div class="col-md-4">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Retail & Supermarkets</a></li>
                                  <li>
                                    <a href="#">Buffet & Severy Solutions</a>
                                  </li>
                                  <li><a href="#">Canteen Solutions</a></li>
                                  <li>
                                    <a href="#">Commercial Kitchen Solutions</a>
                                  </li>
                                  <li><a href="#">Health Care Solutions</a></li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->

                              <div class="col-md-4">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Outdoor Kitchens</a></li>
                                  <li>
                                    <a href="#">Staniless Steel Fabrications</a>
                                  </li>
                                  <li><a href="#">Butchery Solutions</a></li>
                                  <li><a href="#">Coffee Shops</a></li>
                                  <li>
                                    <a href="#">Fire Suppression Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->
                            </div>
                            <!-- End .row -->
                          </div>
                          <!-- End .menu-col -->
                        </div>
                        <!-- End .col-md-8 -->
                      </div>
                      <!-- End .row -->
                      <div class="row menu-banners">
                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/1.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->

                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/2.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->

                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/3.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->
                      </div>
                    </div>
                    <!-- End .megamenu megamenu-md -->
                  </li>
                  <li>
                    <a href="category.html" class="sf-with-ul">Laundry</a>

                    <div class="megamenu megamenu-md">
                      <div class="row no-gutters">
                        <div class="col-md-12">
                          <div class="menu-col">
                            <div class="row">
                              <div class="col-md-4">
                                <!-- <div class="menu-title">Shop with sidebar</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Bar Solution</a></li>
                                  <li><a href="#">Bakery & Patisseries</a></li>
                                  <li><a href="#">Cold Room Solutions</a></li>
                                  <li><a href="#">Food Kiosk</a></li>
                                  <li>
                                    <a href="#">Commercial Mobile Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->

                              <div class="col-md-4">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Retail & Supermarkets</a></li>
                                  <li>
                                    <a href="#">Buffet & Severy Solutions</a>
                                  </li>
                                  <li><a href="#">Canteen Solutions</a></li>
                                  <li>
                                    <a href="#">Commercial Kitchen Solutions</a>
                                  </li>
                                  <li><a href="#">Health Care Solutions</a></li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->

                              <div class="col-md-4">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Outdoor Kitchens</a></li>
                                  <li>
                                    <a href="#">Staniless Steel Fabrications</a>
                                  </li>
                                  <li><a href="#">Butchery Solutions</a></li>
                                  <li><a href="#">Coffee Shops</a></li>
                                  <li>
                                    <a href="#">Fire Suppression Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->
                            </div>
                            <!-- End .row -->
                          </div>
                          <!-- End .menu-col -->
                        </div>
                        <!-- End .col-md-8 -->
                      </div>
                      <!-- End .row -->
                      <div class="row menu-banners">
                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/1.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->

                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/2.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->

                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/3.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->
                      </div>
                    </div>
                    <!-- End .megamenu megamenu-md -->
                  </li>
                  <li>
                    <a href="category.html" class="sf-with-ul">Health Care</a>

                    <div class="megamenu megamenu-md">
                      <div class="row no-gutters">
                        <div class="col-md-12">
                          <div class="menu-col">
                            <div class="row">
                              <div class="col-md-4">
                                <!-- <div class="menu-title">Shop with sidebar</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Bar Solution</a></li>
                                  <li><a href="#">Bakery & Patisseries</a></li>
                                  <li><a href="#">Cold Room Solutions</a></li>
                                  <li><a href="#">Food Kiosk</a></li>
                                  <li>
                                    <a href="#">Commercial Mobile Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->

                              <div class="col-md-4">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Retail & Supermarkets</a></li>
                                  <li>
                                    <a href="#">Buffet & Severy Solutions</a>
                                  </li>
                                  <li><a href="#">Canteen Solutions</a></li>
                                  <li>
                                    <a href="#">Commercial Kitchen Solutions</a>
                                  </li>
                                  <li><a href="#">Health Care Solutions</a></li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->

                              <div class="col-md-4">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Outdoor Kitchens</a></li>
                                  <li>
                                    <a href="#">Staniless Steel Fabrications</a>
                                  </li>
                                  <li><a href="#">Butchery Solutions</a></li>
                                  <li><a href="#">Coffee Shops</a></li>
                                  <li>
                                    <a href="#">Fire Suppression Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-4 -->
                            </div>
                            <!-- End .row -->
                          </div>
                          <!-- End .menu-col -->
                        </div>
                        <!-- End .col-md-8 -->
                      </div>
                      <!-- End .row -->
                      <div class="row menu-banners">
                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/1.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->

                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/2.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->

                        <div class="col-md-4">
                          <div class="banner">
                            <a href="#">
                              <img
                                src="../../assets/images/demos/demo-13/menu/3.jpg"
                                alt="image"
                              />
                            </a>
                          </div>
                          <!-- End .banner -->
                        </div>
                        <!-- End .col-md-4 -->
                      </div>
                    </div>
                    <!-- End .megamenu megamenu-md -->
                  </li>
                  <li>
                    <a href="category.html" class="sf-with-ul">Solutions</a>

                    <div class="megamenu megamenu-md right-aligned">
                      <div class="row no-gutters">
                        <div class="col-md-12">
                          <div class="menu-col">
                            <div class="row">
                              <div class="col-md-3">
                                <!-- <div class="menu-title">Shop with sidebar</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Bar Solution</a></li>
                                  <li><a href="#">Bakery & Patisseries</a></li>
                                  <li><a href="#">Cold Room Solutions</a></li>
                                  <li><a href="#">Food Kiosk</a></li>
                                  <li>
                                    <a href="#">Commercial Mobile Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-3 -->

                              <div class="col-md-3">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Retail & Supermarkets</a></li>
                                  <li>
                                    <a href="#">Buffet & Severy Solutions</a>
                                  </li>
                                  <li><a href="#">Canteen Solutions</a></li>
                                  <li>
                                    <a href="#">Commercial Kitchen Solutions</a>
                                  </li>
                                  <li><a href="#">Health Care Solutions</a></li>
                                </ul>
                              </div>
                              <!-- End .col-md-3 -->

                              <div class="col-md-3">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Outdoor Kitchens</a></li>
                                  <li>
                                    <a href="#">Staniless Steel Fabrications</a>
                                  </li>
                                  <li><a href="#">Butchery Solutions</a></li>
                                  <li><a href="#">Coffee Shops</a></li>
                                  <li>
                                    <a href="#">Fire Suppression Solutions</a>
                                  </li>
                                </ul>
                              </div>
                              <!-- End .col-md-3 -->

                              <div class="col-md-3">
                                <!-- <div class="menu-title">Product Category</div> -->
                                <!-- End .menu-title -->
                                <ul>
                                  <li><a href="#">Laundry Solutions</a></li>
                                  <li>
                                    <a href="#">Quick Service Restaurants</a>
                                  </li>
                                  <li><a href="#">Concept Design Build</a></li>
                                </ul>
                              </div>
                              <!-- End .col-md-3 -->
                            </div>
                            <!-- End .row -->
                          </div>
                          <!-- End .menu-col -->
                        </div>
                        <!-- End .col-md-8 -->
                      </div>
                      <!-- End .row -->
                    </div>
                    <!-- End .megamenu megamenu-md -->
                  </li>
                  <li>
                    <a href="product.html" >Projects</a>

                   <!--  <div class="megamenu megamenu-sm">
                      <div class="row no-gutters">
                        <div class="col-md-6">
                          <div class="menu-col">
                            <div class="menu-title">Project Details</div>
                           
                            <ul>
                              <li><a href="product.html">Default</a></li>
                              <li>
                                <a href="product-centered.html">Centered</a>
                              </li>
                              <li>
                                <a href="product-extended.html"
                                  ><span
                                    >Extended Info<span class="tip tip-new"
                                      >New</span
                                    ></span
                                  ></a
                                >
                              </li>
                              <li>
                                <a href="product-gallery.html">Gallery</a>
                              </li>
                              <li>
                                <a href="product-sticky.html">Sticky Info</a>
                              </li>
                              <li>
                                <a href="product-sidebar.html"
                                  >Boxed With Sidebar</a
                                >
                              </li>
                              <li>
                                <a href="product-fullwidth.html">Full Width</a>
                              </li>
                              <li>
                                <a href="product-masonry.html"
                                  >Masonry Sticky Info</a
                                >
                              </li>
                            </ul>
                          </div>
                      
                        </div>
                       

                        <div class="col-md-6">
                          <div class="banner banner-overlay">
                            <a href="category.html">
                              <img
                                src="../../assets/images/menu/banner-2.jpg"
                                alt="Banner"
                              />

                              <div class="banner-content banner-content-bottom">
                                <div class="banner-title text-white">
                                  New Trends<br /><span
                                    ><strong>spring 2019</strong></span
                                  >
                                </div>
                                
                              </div>
                             
                            </a>
                          </div>
                         
                        </div>
                       
                      </div>
                      
                    </div> -->
                    
                  </li>
                  <li class="ml-1">
                    <a href="#" >Events & Expo</a>
                  </li>
                  <li class="ml-1">
                    <a href="blog.html">Promotions</a>
                  </li>
                  <li>
                    <router-link to="/about" class="sf-with-ul"
                      >About Us</router-link
                    >

                    <ul class="right-aligned">
                      <li><a href="/about-us/who-we-are">Who we are</a></li>
                      <li><a href="/about-us/how-we-work">How we work</a></li>
                      <li><a href="/about-us/company-culture">Company culture</a></li>
                      <li><a href="/about-us/csr">CSR</a></li>
                      <li><a href="/about-us/sheffield-advantage">Sheffield Advantage</a></li>
                      <li><a href="/about-us/our-leadership">Our Leadership</a></li>
                      <li><a href="/about-us/our-location-and-facilities">Our Location & Facilities</a></li>
                    </ul>
                  </li>
                </ul>
                <!-- End .menu -->
              </nav>
              <!-- End .main-nav -->
            </div>
            <!-- End .col-xl-9 col-xxl-10 -->
          </div>
          <!-- End .row -->
        </div>
        <!-- End .container-fluid -->
      </div>
      <!-- End .header-bottom -->
    </header>
    <!-- End .header -->
  </div>
</template>

<script setup>
import { useStore} from "vuex";
import useAuth from "@/composables/auth";
import { computed, reactive, ref, onMounted } from "vue";


const store = useStore();
const user = computed(() => store.getters["auth/user"])
const { processing, logout } = useAuth();


const categories = reactive([]);

    
    const fetchCategories = () => {
      axios.get('/api/get-sidebar-categories')
        .then(response => {
          categories.splice(0, categories.length, ...response.data.map(category => {
            return {
              id: category.id,
              name: `${category.name}`,
              columns: 3,
              slug: category.name.toLowerCase().replace(/\s+/g, '-'),
              subcategories: [
                {
                  id: 1, // You can assign any unique ID for the subcategory
                 
                  items: category.children.map(child => {
                    return {
                      id: child.id,
                      name: child.name,
                      slug: child.name.toLowerCase().replace(/\s+/g, '-')
                    };
                  })
                }
              ]
            };
          }));
        })
        .catch(error => {
          console.error('Failed to fetch categories:', error);
        });
    };

    

    

    onMounted(() => {
      fetchCategories();
    });

    const getSubset = (items, columnIndex, totalColumns) => {
      const subsetSize = Math.ceil(items.length / totalColumns);
      const startIndex = (columnIndex - 1) * subsetSize;
      const endIndex = startIndex + subsetSize;
      return items.slice(startIndex, endIndex);
    }
</script>

<style scoped>
  .menu-vertical-browse .megamenu-container {
    border-bottom: Solid 1px #ececec;
  }
</style>
