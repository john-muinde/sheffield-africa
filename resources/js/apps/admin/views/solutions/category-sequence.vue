<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Solutions</a></li>
                                
                                <li class="breadcrumb-item active" aria-current="page"><span>Update Solution Category Sequence</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="panel-heading pb-0">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h3><b> View Category Sequence  </b></h3>
                            </div>
                        </div>
                    </div>





                   <div class="panel-body">

                        <div class="row">

                            <div class="form-group col-md-1">
                                <label for="post-category" class="form-label">Per Page</label>
                                <select v-model="category.perPage" id="perpage"  class="form-control form-select select">

                                    <option selected value="20">20</option>
                                    <option value="60">60</option>
                                    <option value="100">100</option>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                    <option value="10000">10000</option>
                                    
                                </select>

                            </div>  

                            <div class="form-group col-md-3" style="display:none;">
                                <label for="post-category" class="form-label">Segment</label>
                                
                                <multiselect
                                  v-model="category.main_category"
                                  :options="categoryMainList"
                                  :reduce="category => category.id"
                                  :searchable="true"
                                  :preselect-first="true"
                                  track-by="name"
                                  label="name"
                                  placeholder="Choose Segment ..."
                                  selected-label=""
                                  select-label=""
                                  deselect-label=""
                                ></multiselect>
                            </div>

                            <div class="form-group col-md-3" style="display:none;">
                                <label for="post-category" class="form-label">Main Category</label>

                                 <multiselect 
                                    v-model="category.filter_category_id" 
                                    :options="categoryList" 
                                    :reduce="category => category.id" 
                                    :searchable="true" 
                                    :preselect-first="true" 
                                    track-by="id" 
                                    label="name" 
                                    placeholder="Choose Category (Optional) ..." 
                                    selected-label="" 
                                    select-label="" 
                                    deselect-label="">
                                        
                                 </multiselect>

                            </div>    

                            <div class="form-group offset-md-6 col-md-5 ">
                                <!-- <label for="post-name">Search</label>
                                <input v-model="category.search" id="post-name" type="text" class="form-control" placeholder="Search ..." /> -->

                                <!-- <div class="text-danger mt-1">
                                    {{ errors.name }}
                                </div>
                                <div class="text-danger mt-1">
                                    <div v-for="message in validationErrors?.name">
                                        {{ message }}
                                    </div>
                                </div> -->
                            </div>

                        </div>


                            <div class="table-responsive">

                                


                                    <table role="table" aria-busy="false" aria-colcount="5" class="table table-striped table-bordered" id="__BVID__415">
                                        <thead role="rowgroup">
                                            <tr role="row">
                                                <th role="columnheader" scope="col" aria-colindex="0"><div></div></th>
                                                
                                                <th role="columnheader" scope="col" aria-colindex="1"><div>Name</div></th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody role="rowgroup">

                                            <draggable id="left-lovehandles" class="drag-drop" group="drag_handle" handle=".handle" ghost-class="gu-transit" drag-class="el-drag-ex-5" v-model="displayedProducts" :animation="200" @start="onDragStart" @end="onDragEnd">

                                       

                                            <tr v-for="the_category in displayedProducts"  :key="category.id" role="row" class="">

                                                <td aria-colindex="0" class="handle" >
                                                    <div>
                                                        <span ><i class="far fa-clone"></i></span>
                                                    </div>
                                                </td>

                                             
                                                
                                                <td aria-colindex="1" role="cell">{{ the_category.category.name }}</td>

                                               

                                             
                                            </tr>
                                           
                                            </draggable>
                                        </tbody>
                                    </table>

                                
                            </div>


                           

                        </div>

                   
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
   
    import { ref, reactive, computed, watch, onMounted, watchEffect } from 'vue';

    import "../../assets/sass/scrollspyNav.scss";
    import "../../assets/sass/drag-drop/drag-drop.css";
    import "../../assets/sass/font-icons/fontawesome/css/regular.css";
    import "../../assets/sass/font-icons/fontawesome/css/fontawesome.css";
    import { VueDraggableNext as draggable } from "vue-draggable-next";

    import { useRoute } from "vue-router";

    import highlight from "../../components/plugins/highlight.vue";

    import { useMeta } from "../../composables/use-meta";
    useMeta({ title: "View Solutions" });

    // import useCategories from "@/composables/categories";
    import {useAbility} from '@casl/vue'

    import { useForm, useField, defineRule } from "vee-validate";

    import useCategories from "@/composables/categories";

    import Multiselect from "@suadelabs/vue3-multiselect";
    import "@suadelabs/vue3-multiselect/dist/vue3-multiselect.css";

    // const {solutions, getSolutions, deleteSolution} = useSolutions()




    const { getCategoryList, categoryList, getMainCategoryList, categoryMainList, getSelectedCategoryList } = useCategories();
    

    
    
    const route = useRoute()
    const currentRoute = ref(route);

    const currentPage = ref(route.params.page ? parseInt(route.params.page) : 1);

    const solution_id = ref(route.params.id ? parseInt(route.params.id) : 0);
    //const perPage = ref(20);
    const totalProducts = ref(0);
    const totalCountperPage = ref(0);
    const category_id = ref(route.params.id ? parseInt(route.params.id) : 1);
    const categories = ref([]);
   // const the_category = ref([]);
    const the_solution = ref([]);

    const { value: perPage } = useField('perPage', null, { initialValue: '20' });
    const { value: filter_category_id } = useField('filter_category_id', null, { initialValue: '' });
    const { value: main_category } = useField('main_category', null, { initialValue: '' });
    const { value: search } = useField('search', null, { initialValue: '' });


    const category = reactive({      
        perPage,
        filter_category_id,
        main_category,
        search
    })

    // Fetch products based on the current page
    const fetchProducts = async () => {

        try {

            if (category.main_category == "") {
                category.perPage = 10000;
            }

            console.log(solution_id);

            const response = await axios.get('/api/get-solutions-categories', {
                params: {
                    page: currentPage.value,
                    per_page: category.perPage,
                    category_id: category_id.value,
                    mainCategory: category.main_category.id,
                    solution_id: solution_id.value,
                    search: category.search,
                },
            });
    
            // totalProducts.value = response.data.categories.total;
            // totalCountperPage.value = response.data.categories.data.length;
            categories.value = response.data.categories;
            the_solution.value = response.data.the_solution;



    

        } catch (error) {
            console.error(error);
        }
  };



  // Determine the total number of pages
  // const totalPages = computed(() => {
  //   return Math.ceil(totalProducts.value / perPage.value);
  // });

  // Displayed products based on the current page
  const displayedProducts = ref([]);

  // Go to the previous page
  // const goToPreviousPage = () => {
  //   if (currentPage.value > 1) {
  //     currentPage.value--;
      
  //   }
  // };

  // // Go to the next page
  // const goToNextPage = () => {
  //   if (currentPage.value < totalPages.value) {
  //     currentPage.value++;
     
  //   }
  // };

  // const goToThisPage = (page) => {

  //   currentPage.value = page;

  // };


  // Update displayedProducts based on the current page and products
  const updateDisplayedProducts = () => {
    const startIndex = 0;
    displayedProducts.value = categories.value.slice(startIndex, startIndex + perPage.value);
    
  };

  const isInteger = (value) => {
    return Number.isInteger(value);
  }

  // Generate the page links
  const generatePageLinks = computed(() => {
    const pageLinks = [];
    const maxVisiblePages = 5; // Maximum number of visible page links

    // Add previous link
    if (currentPage.value > 1) {
      pageLinks.push('Prev');
    }

    // Add current page and surrounding pages
    let startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages.value);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let page = startPage; page <= endPage; page++) {
      pageLinks.push(page);
    }

    // Add next link
    if (currentPage.value < totalPages.value) {
      pageLinks.push('Next');
    }

    return pageLinks;
  });



  const getCategoryLink = (id, page) => {
    


    return `/admin/solutions/page/${page}`;
  };

  // Initial fetch of products
  onMounted(() => {
    fetchProducts();
    //getMainCategoryList();
  });

  // Watch for changes in the currentPage and fetch products accordingly
  watch(currentPage, fetchProducts);

  

  watch(main_category, (newValue) => {
      //console.log('Solution object:', newValue.solution_category.id);
     if (main_category) {
        const selectedCategoryId = category.main_category.id;

            category.filter_category_id = null;

            const selectedCategoryList = getSelectedCategoryList(selectedCategoryId);
            //solution.categories = selectedCategoryList; //
        
      }
    });

  watch(category, updateDisplayedProducts);

  watch(main_category, updateDisplayedProducts);

  watch(filter_category_id, updateDisplayedProducts);

  // Watch for changes in the products and update displayedProducts
  watch(categories, updateDisplayedProducts);

  watchEffect(() => {
      const params = route.params; // Access the route parameters
      const query = route.query; // Access the query parameters

      if( params.id !== '' && category_id !== params.id ){

         currentPage.value = 1;
         category_id.value = params.id ? parseInt(params.id) : 1;

         if( params.page !== '' && currentPage !== params.page ){
            currentPage.value = params.page ? parseInt(params.page) : 1;
         }

         // Call a method or update component data based on the new route
         fetchProducts();

      }
  });


  const updateDatabaseOrder = async (formData) => {

    try {
        // Make a POST request using Axios
        const response = await axios.post('/api/solutions-categories-update-order', { data: formData });

    } catch (error) {
        // Handle errors
        console.error('Error saving data:', error);
    }

  }


  const onDragStart = () => {
      // Reset the order property for each category when dragging starts
      displayedProducts.value.forEach(category => {
        category.order = null; // You can set it to any initial value you prefer
      });
  };

    // Function called when the dragging operation ends
  const onDragEnd = (event) => {
      // Get the new order of items
      
      const newOrder = displayedProducts.value.map(category => category.id);

      console.log(newOrder);

      // // Update the database for each item with its new order
      
      updateDatabaseOrder(newOrder);
      

      // // Optionally, update the displayedProducts array with the new order
      // displayedProducts.value.forEach(category => {
      //   const index = newOrder.indexOf(category.id);
      //   category.order = index + 1;
      // });
  };

</script>


<style>

    #left-lovehandles {
        display: contents !important;
    }

    #left-lovehandles td {
        padding-left: 5px;
    }

    #left-lovehandles td i {
        color: #c02434;
    }

</style>


