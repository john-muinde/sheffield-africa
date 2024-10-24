<template>
    <div>
        <main class="main">
  

            <div class="page-content">
                <div class="container">
                	<div class="row">

                        <div class="col-lg-10 offset-lg-1 blog-page">

                            <h2 class="about-us-title"><router-link to="/media/blogs">Blogs</router-link></h2><!-- End .title -->
                            <p class="lead about-us-lead text-primary mb-3 mt-2">{{ blog.name }}</p>

                            <div class="row">

                        		<div class="col-lg-9">
                                    <article class="entry single-entry">
                                        <figure class="entry-media">
                                            <img :src="'/storage/' + blog.main_image_path" :alt="blog.name">
                                        </figure><!-- End .entry-media -->

                                        <div class="entry-body">
                                            <!-- <div class="entry-meta">
                                                <span class="entry-author">
                                                    by <a href="#">John Doe</a>
                                                </span>
                                                <span class="meta-separator">|</span>
                                                <a href="#">Nov 22, 2018</a>
                                                <span class="meta-separator">|</span>
                                                <a href="#">2 Comments</a>
                                            </div>

                                            <h2 class="entry-title">
                                                Cras ornare tristique elit.
                                            </h2>

                                            <div class="entry-cats">
                                                in <a href="#">Lifestyle</a>,
                                                <a href="#">Shopping</a>
                                            </div> -->

                                            <div class="entry-content editor-content" v-html="blog.content">
                                               

                                              


                                             
                                            </div><!-- End .entry-content -->

                                            <div class="entry-footer row no-gutters flex-column flex-md-row">
                                                

                                                <!-- <div class="col-md-auto mt-2 mt-md-0">
                                                    <div class="social-icons social-icons-color">
                                                        <span class="social-label">Share this post:</span>
                                                        <a href="#" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                                        <a href="#" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                                        <a href="#" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
                                                        <a href="#" class="social-icon social-linkedin" title="Linkedin" target="_blank"><i class="icon-linkedin"></i></a>
                                                    </div>
                                                </div> -->
                                            </div><!-- End .entry-footer row no-gutters -->
                                        </div><!-- End .entry-body -->

                                        
                                    </article><!-- End .entry -->

                                 
                                   
                        		</div><!-- End .col-lg-9 -->

                        		<aside class="col-lg-3">
                        			<div class="sidebar ml-2">
                        				<!-- <div class="widget widget-search">
                                            <h3 class="widget-title">Search</h3>

                                            <form action="#">
                                                <label for="ws" class="sr-only">Search in blog</label>
                                                <input type="search" class="form-control" name="ws" id="ws" placeholder="Search in blog" required>
                                                <button type="submit" class="btn"><i class="icon-search"></i><span class="sr-only">Search</span></button>
                                            </form>
                        				</div> -->

                                        <div class="widget widget-cats">

                                            <router-link style="color: #fff; font-weight: 500; font-size: 2rem;" class="btn btn-primary" to="/media/blogs"> Go to Blogs</router-link>
                                            <!-- <h3 class="widget-title">Media</h3>

                                            <ul>

                                                <li>
                                                    <router-link to="/media/blogs"> Blogs</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/media/brochures-and-newsletters"> Brochures & Newsletters</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/media/videos"> Videos</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/media/gallery"> Gallery</router-link>
                                                </li>

                                                <li>
                                                    <router-link to="/media/in-the-news"> In the News </router-link>
                                                </li>
                                            </ul> -->
                                        </div><!-- End .widget -->

                                        <div class="widget">
                                            <h3 class="widget-title">Popular Posts</h3><!-- End .widget-title -->

                                            <ul class="posts-list">
                                                <li  v-for="blog in other_blogs" :key="blog.id">
                                                    <figure>
                                                         <router-link :to="getBlogLink(blog.id, blog.name)">
                                                           <img :src="'/storage/' + blog.main_image_path" :alt="blog.name">
                                                        </router-link>
                                                    </figure>

                                                    <div>
                                                        
                                                        <h4> 
                                                            <router-link :to="getBlogLink(blog.id, blog.name)">
                                                            {{ blog.name }}
                                                            </router-link>
                                                        </h4>
                                                    </div>
                                                </li>
                                                
                                            </ul><!-- End .posts-list -->
                                        </div><!-- End .widget -->

                                        
                                     
                                      
                        			</div><!-- End .sidebar sidebar-shop -->
                        		</aside><!-- End .col-lg-3 -->
                            </div>
                            
                        </div>
                	</div><!-- End .row -->
                </div><!-- End .container -->
            </div><!-- End .page-content -->
        </main>
    </div>
</template>

<script setup>
    import { ref, computed, watch, onMounted, onUnmounted, watchEffect } from 'vue';

    import { useRoute } from "vue-router";

    import { useMeta } from "../../admin/composables/use-meta";
    useMeta({ title: "Blog Details" });

    const route = useRoute()
    const currentRoute = ref(route);
      
     
    const blog = ref([]);
    const other_blogs = ref([]);
    const blog_id = ref(route.params.id ? parseInt(route.params.id) : 1);

      // Fetch showrooms based on the current page
    const fetchBlog = async () => {

        try {
          const response = await axios.get('/api/get-blog-details', {
            params: {
              blog_id: blog_id.value,
            },
          });
          blog.value = response.data.blog;
          other_blogs.value = response.data.other_blogs;
          useMeta({ title: blog.value.name + " | Blog" });
        } catch (error) {
          console.error(error);
        }
    };

    const getBlogLink = (id, name) => {
        let transformedName = name.replace(/ /g, '-').replace(/\//g, '-');
        transformedName = transformedName.replace(/-+/g, '-');
        transformedName = transformedName.replace(/^-+|-+$/g, '');
        transformedName = transformedName.toLowerCase();

        return `/media/blogs/${id}/${transformedName}`;
     };


    // Initial fetch of showrooms
    onMounted(() => {
        fetchBlog();

    });


    watchEffect(() => {
        const params = route.params; // Access the route parameters
        const query = route.query; // Access the query parameters

        if( params.id !== "" && blog_id.value !== params.id ){
           
            blog_id.value = params.id ? parseInt(params.id) : 1;

            fetchBlog();

        }
    });
</script>

<style>
 .blog-page .about-us-lead {
    font-size: 2.2rem !important;
 }

 .blog-page .editor-content p {
    color: #555 !important;
    margin-bottom: 1.5rem !important;
    font-size: 1.5rem;
    font-weight: 400;
 }

 .blog-page .editor-content p em {
    color: #9b9b9b;
    font-size: 1.45rem;
 }

 .blog-page .editor-content ul li {
    position: relative;
    margin-bottom: 0.1rem;
    color: #555 !important;
    font-size: 1.5rem;
    font-weight: 400;
}

.posts-list li {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
}


</style>
