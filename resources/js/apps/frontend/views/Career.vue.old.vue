<template>
    <main class="main">

        <div class="page-content pg-white">

            <div class="container">

                 <div class="page-content pg-white">

            <div class="mb-lg-5">        

                <div class="container">
                    <div class="row no-margin">

                        <div class="col-lg-12 justify-content-center mt-1">

                            <h2 class="about-us-title">Careers at Sheffield</h2><!-- End .title -->
                            <p class="lead about-us-lead text-primary mb-1">We a are searching for talents in the following fields</p>

                            <div class="row mt-3 graduate-intake hex-section-career">

                                <div class="col-lg-12">

                                    <div class="grid">
                                        <ul id="hexGrid">
                                          <li class="hex">
                                            <div class="hexIn">
                                              <div class="hexLink">
                                                <div class='img' style='background-image:url(assets/images/welding.jpg);'></div>
                                                
                                                <span id="demo2">Technical</span>
                                              </div>
                                            </div>
                                          </li>
                                            
                                          
                                          <li class="hex">
                                            <div class="hexIn">
                                              <div class="hexLink" >
                                                <div class='img' style='background-image: url(/assets/images/human_resource.jpg);'></div>
                                                <span id="demo2">Admin</span>
                                              </div>
                                            </div>
                                          </li>
                                         
                                          <li class="hex">
                                            <div class="hexIn">
                                              <div class="hexLink" >
                                                <div class='img' style='background-image: url(assets/images/our_staff.jpg);'></div>
                                                <span id="demo2">Engineering</span>
                                              </div>
                                            </div>
                                          </li>
                                          <li class="hex">
                                            <div class="hexIn">
                                              <div class="hexLink" >
                                             <div class='img' style='background-image: url(assets/images/homepage/sheffield_engineer.jpg);'></div>
                                                <span id="demo2">Design</span>
                                              </div>
                                            </div>
                                          </li>

                                          <li class="hex">
                                            <div class="hexIn">
                                              <div class="hexLink" >
                                             <div class='img' style='background-image: url(/assets/images/sales_and_marketing.jpg);'></div>
                                                <span id="demo2">Sales & Marketing</span>
                                              </div>
                                            </div>
                                          </li>

                                        
                                          
                                        </ul>

                                    </div>
                                </div>

                            </div>

                            
                            
                        </div>
                    </div>
                </div>




            </div>
        </div>

                <div class="page-content pg-white who-we-are-section">

                    <div class="overlay"></div>

                    <div class="pt-5 pb-2">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">

                                        <div class="col-lg-6 who-we-are">

                                            <h2 class="our-history-title">What we are looking for</h2>
                                            <p class="lead about-us-lead text-primary mb-1">A Workplace That
Gives You More</p>
                                            <p class="who-we-are-p">Sheffield Africa is an equal opportunity employer with opportunities to guide your career. We are always sourcing for problem solvers and creative thinkers from engineers to sales and marketing personnel.
Put your talents to use where opportunities are limitless and every day makes a difference. Whether you’re an experienced professional or a recent graduate, working with Sheffield Africa will be a rewarding experience that will grow your career.
 </p>

                                            <br>

                                            <h5 class="mt-2">Benefits</h5>

                                            <ul class="graduate-trainee-program">
                                                <li><i class="icon-check"></i> Transformative experience throughout the career journey</li>
                                                <li><i class="icon-check"></i> Diverse & inclusive working environment</li>
                                                <li><i class="icon-check"></i> Opportunity to impact on client experience through innovative solutions</li>
                                                <li><i class="icon-check"></i> We support your growth & learning opportunities</li>
                                                <li><i class="icon-check"></i> Strong mentorship under experienced industry leaders</li>
                                            </ul>

                                           
                                        </div>

                                         <!-- <div class="col-lg-5 offset-lg-1">
                                            <div class="about-images">
                                                <img style="margin-left: -10%; margin-top: 10%;" src="/assets/images/sheffield_career.jpg" alt="" class="about-img-front">
                                                <img style="margin-top: 0%; margin-right:-15%" src="/assets/images/career_page.jpg" alt="" class="about-img-back">
                                            </div>
                                        </div> -->
                                        
                                    </div>
                                    
                                </div>
                                
                            </div><!-- End .row -->
                        </div><!-- End .container -->
                    </div>

                </div>

                

            </div>

        </div>


       
      

        <div class="page-content pg-white graduate-trainee-program-section">

            <div class="mb-lg-8">
                <div class="container">
                    <div class="row no-margin">
                        <div class="col-md-10 offset-lg-1">  

                            <div class="cuture-image">

                                <img class="" src="/assets/images/about-us/our-culture.jpg">


                                <div class="culture-text-box">

                                    <h2 class="about-us-title">Graduate Trainee Program</h2><!-- End .title -->
                                    <p class="lead about-us-lead text-primary mb-1">Start up your career with us</p>

                                    <h5 class="mt-2">We are looking for</h5>
                                    <ul class="graduate-trainee-program">
                                        <li><i class="icon-check"></i> Fresh Graduates & Post-Graduates</li>
                                        <li><i class="icon-check"></i> Proactive, passionate & creative individuals</li>
                                        <li><i class="icon-check"></i> Inteligent, ambitious & confident minds</li>
                                    </ul>

                                    <router-link class="btn btn-primary btn-round mt-4" to="/contact-us"><b>Contact Us</b></router-link>
                                    
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
            </div>

            
        </div>



       


    </main>

</template>

<script setup>

import { ref, onMounted, onUnmounted, onBeforeUnmount, reactive, nextTick, watch } from "vue";

import { useMeta } from "../../admin/composables/use-meta";
useMeta({ title: "Career" });

</script>

<style >

.hex-section-career .hex1 {
  background: red;
  -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}

    .about-us-title {
        position: relative;
        display: inline-block;
        color: #c02434;
        font-size: 3.9rem;
        font-weight: 600;
    }

    .about-us-title:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        margin-top: 10px;
        margin-left: 4px;
        width: 70%;
        height: 2px;
        background: #c02434;
    }

    .about-us-lead {
        font-size: 1.6rem !important;
        color: #304296 !important;
    }

    .about-us-p {
        font-size: 1.5rem !important;
        font-weight: 450;
    }

    .who-we-are-section {
        background-image: url('/assets/images/about-us/who-we-are/who-we-are-background.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        position: relative;
        width: 100%;
        /*height: 100vh;*/
    }

    .overlay {
        position: absolute !important;
        background-color: rgb(255 255 255 / 89%) !important;
    }

    .our-history-title{
        position:relative;
        display:inline-block;
        color: #c02434;
        font-size: 3.9rem;
        font-weight: 600;
    }

    .our-history-title:after {
        content:'';
        position:absolute;
        left:0; right:0;
        top:100%;
        margin-top:10px;    
        margin-left: 4px;
        width: 70%;
        height: 2px;
        background:#c02434;
    }

    .about-us-lead {
        font-size: 1.6rem !important;
        color: #304296 !important;
    }

    .about-us-p {
        font-size: 1.5rem !important;
        font-weight: 450;
    }

    .cuture-image {

    width: 100%;
}

.cuture-image img {

    width: 100%;
    
}

.our-culture {
    border-top: 6px solid #323030;
    border-bottom: 6px solid #323030;
    padding-bottom: 0rem;
}

.culture-text-box {
    position: absolute; 
    top: 14%;
    right: 7%;
    background: rgba(255, 255, 255, 0.93);
    padding-top: 50px; 
    padding-bottom: 50px; 
    padding-right: 30px;  
    padding-left: 30px; 
    max-width: 45%; 
    z-index: 1; 
    border-radius: 6%;
}



.our-culture-p {
    font-size: 1.5rem !important;
    font-weight: 450;
}

.graduate-trainee-program {
    margin-left: 30px;
}

.graduate-trainee-program i {
    color: #c02434;
    padding-right: 10px;
}

.graduate-intake .text {
    background-color: #c02434;
    justify-content: center;
    display: grid;
}

.graduate-intake span {
    color: #ffffff;
    font-weight:450;
    font-size: 1.5rem;
    padding-top: 5px;
    padding-bottom: 5px;
}

.graduate-intake .image {
    border-radius: 15px;
}

.graduate-intake .image {
    border-radius: 15px;
    overflow: hidden;

}

.graduate-trainee-program-section {
    padding-bottom: 5px;
}


@media (max-width: 1200px) {

    .cuture-image > img {
        display: none;
    }

    .culture-text-box {
        position: relative;
        top: 20%;
        right: 7%;
        background: rgba(255, 255, 255, 0.93);
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 30px;
        padding-left: 30px;
        max-width: 35%;
        z-index: 1;
        border-radius: 6%;
    }

    .culture-text-box {
        position: relative;
        /* top: 20%; */
        right: 5%;
        left: 5%;
        background: rgba(255, 255, 255, 0.79);
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 30px;
        padding-left: 30px;
        max-width: 90%;
        z-index: 1;
        margin-top: 60px;
        margin-bottom: 60px;
        border-radius: 30px;
    }

    

    .graduate-trainee-program-section {
        background-image: url(/assets/images/about-us/our-culture.jpg);
    }

}

@media (max-width: 767px) {
    .cuture-image > img {
        display: none;
    }

    .culture-text-box {
        position: relative;
        top: 20%;
        right: 7%;
        background: rgba(255, 255, 255, 0.93);
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 30px;
        padding-left: 30px;
        max-width: 35%;
        z-index: 1;
        border-radius: 6%;
    }

    .culture-text-box {
        position: relative;
        /* top: 20%; */
        right: 5%;
        left: 5%;
        background: rgba(255, 255, 255, 0.79);
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 30px;
        padding-left: 30px;
        max-width: 90%;
        z-index: 1;
        margin-top: 60px;
        margin-bottom: 60px;
        border-radius: 30px;
    }

    .graduate-trainee-program-section {
        background-image: url(/assets/images/about-us/our-culture.jpg);
    }

    .col {
        flex-basis: max-content !important;
    }

}


#hexGrid {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
  font-family: sans-serif;
  list-style-type: none;
}

.hex {
  position: relative;
  visibility:hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
  transition: all 0.5s;
  backface-visibility: hidden;
  will-change: transform;
  transition: all 0.5s;
}
.hex::after{
  content:'';
  display:block;
  padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
}
.hexIn{
  position: absolute;
  width:96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin: 2%;
  overflow: hidden;
  visibility: hidden;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
      -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
          transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    transition: all 0.5s;
}
.hexIn * {
  position: absolute;
  visibility: visible;
  outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
    display:block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
        -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
            transform: skewY(-30deg) rotate3d(0,0,1,60deg);
}




/*** HEX CONTENT **********************************************************************/
#hexGrid .hex img {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
}

#hexGrid .hex h1, .hex span {
  width: 100%;
  /*padding: 5%;*/
  box-sizing:border-box;
  font-weight: 300;
  opacity: 1;
}

#hexGrid #demo1 {
  color: #F5CE95;
  text-transform: capitalize;
    text-align: center;
  bottom: 50%;
  padding-top:50%;
  font-size: 1.5em;
  z-index: 1;
}
#hexGrid .hex h1:before, #hexGrid .hex h1:after {
  display: inline-block;
  margin: 0 0.5em;
  width: 0.25em;
  height: 0.03em;
  background: #ffffff;
  content: '';
  vertical-align: middle;
  transition: all 0.3s;
  text-align:center;
}

#hexGrid #demo2 {
    top: 75%;
    text-align: center;
    text-transform: uppercase;
    background-color: #c02434cc;
    font-weight: 550;
    font-size: 1.5rem;
    left: 0;    
}

#hexGrid .img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

#hexGrid .hex video{
  width: 100%;
  object-fit: cover;
  position: absolute !important;
  z-index: 0;
}

#hexGrid .img:before, #hexGrid .img:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  opacity: 0;
  transition: opacity 0.5s;
}
#hexGrid .img:before {
  background: rgba(22, 103, 137, 0.3)
}
#hexGrid .img:after {
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5), transparent);
}

/*** HOVER EFFECT  **********************************************************************/



#hexGrid .hexLink:hover h1, #hexGrid .hexLink:focus h1,
#hexGrid .hexLink:hover p, #hexGrid .hexLink:focus p{
opacity:1;
transition: 0.8s;
}


.hexIn:hover .img:before,
.hexIn:hover .img:after,
.hexIn:hover .hexLink {
  opacity: 1;
}


/*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
@media (min-width:1201px) { /* <- 5-4  hexagons per row */
  #hexGrid{
    padding-bottom: 7.4%;
    font-size: 14px;
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+4){ /* first hexagon of even rows */
    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width:901px) { /* <- 4-3  hexagons per row */
  #hexGrid{
    padding-bottom: 5.5%;
    font-size: 13px;
  }
  .hex {
    width: 25%; /* = 100 / 4 */
  }
  .hex:nth-child(7n+5){ /* first hexagon of even rows */
    margin-left:12.5%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 900px) and (min-width:601px) { /* <- 3-2  hexagons per row */
  #hexGrid{
    padding-bottom: 7.4%;
    font-size: 14px;
  }
  .hex {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex:nth-child(5n+4){ /* first hexagon of even rows */
    margin-left:16.666%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 600px) { /* <- 2-1  hexagons per row */
  #hexGrid{
    padding-bottom: 11.2%;
    font-size: 12px;
  }
  .hex {
    width: 50%; /* = 100 / 3 */
  }
  .hex:nth-child(3n+3){ /* first hexagon of even rows */
    margin-left:25%;  /* = width of .hex / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
    #hexGrid {
        font-size: 8px;
    }
  

  
 
}


</style>