<template>
  <div>
    <main class="main">

      <div class="page-content">
        <div class="container">
          <div class="row">

            <div class="col-lg-10 offset-lg-1 media-video">

              <h2 class="about-us-title">Videos</h2><!-- End .title -->
              <router-link to="/media" class="btn btn-primary btn-round btn-shadow float-right"><i
                  class="icon-long-arrow-left"></i><span>Back to Media Center</span></router-link>
              <p class="lead about-us-lead text-primary mb-3">Explore our videos</p>

              <div class="row">

                <div class="col-lg-9 video-content-container">

                  <div class="video-player">
                    <video controls src="/assets/images/about-us/video/iCombi.mp4" ref="videoPlayer" loop></video>
                    <!-- i removed controls attribute in the above to remove the play pause buttons -->
                  </div>

                </div>

                <aside class="col-lg-3 video-player-list">

                  <div class="widget widget-cats">

                    <h3 class="widget-title"><b>Video List</b></h3>



                    <ul class="ul-pdf-view-videos">
                      <li v-for="video in videos" :key="video.id">

                        <div class="play-button">
                          <label :for="'checkbox' + video.id" class="label-play"
                            @click="playVideo('/storage/' + video.file_path, 'checkbox' + video.id)">
                            <div class="play_pause_icon play"></div>
                          </label>
                          <input class="checkbox-play" type="checkbox" :id="'checkbox' + video.id">
                        </div>

                        <span>
                          {{ video.name }}
                        </span>
                        <!--  </a> -->
                      </li>
                    </ul>

                  </div><!-- End .widget -->

                </aside>




              </div>

            </div>


          </div><!-- End .row -->
        </div><!-- End .container -->
      </div><!-- End .page-content -->
    </main><!-- End .main -->
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, watchEffect } from 'vue';
// import axios from "axios";
import { useRoute } from "vue-router";
import { useMeta } from "../../admin/composables/use-meta";

useMeta({ title: "Videos | Media Center" });


const route = useRoute()
const currentRoute = ref(route);

const blogs = ref([]);
const brochures = ref([]);
const newsletters = ref([]);
const videos = ref([]);




// Fetch products based on the current page
const fetchMediaCenter = async () => {

  try {
    const response = await axios.get('/api/get-media-center-videos', {

    });

    videos.value = response.data.videos;

    if (videos.value.length > 0) {
      setTimeout(() => {
        playVideo('/storage/' + videos.value[0].file_path, 'checkbox' + videos.value[0].id);
      }, 1000);
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchMediaCenter();
});



//video

////////////////

const selectedVideoUrl = ref('');
const videoPlayer = ref(null);

const videoBasePath = window.location.origin; //laravel base path


const isVideoPaused = (videoUrl) => {
  return videoPlayer.value.src !== videoUrl || videoPlayer.value.paused;
};




const playVideo = (videoUrl, checkboxId) => {

  //console.log("checkboxId:"+checkboxId);

  const videoButtons = document.querySelectorAll('.play-button');

  // Loop through each 'video-button' element
  videoButtons.forEach((videoButton) => {
    // Find the checkbox within each 'video-button' element
    const checkbox = videoButton.querySelector('.checkbox-play');

    // Disable the checkbox
    if (checkbox) {
      checkbox.checked = false;
    }
  });




  const fullNewVideoURL = videoBasePath + videoUrl;

  if (videoPlayer.value.src === fullNewVideoURL) {
    if (!isVideoPaused(fullNewVideoURL)) {
      videoPlayer.value.pause();

      const checkbox = document.getElementById(checkboxId);
      if (checkbox) {
        checkbox.checked = true;
      }

    } else {
      videoPlayer.value.play();

      const checkbox = document.getElementById(checkboxId);
      if (checkbox) {
        checkbox.checked = false;
      }

    }

  } else {

    videoPlayer.value.src = videoUrl;
    videoPlayer.value.play();

    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
      checkbox.checked = false;
    }

  }


};


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

.media-video .video-player video {

  width: 100%;
}




.media-video .play-button {
  position: relative;
}

.media-video .checkbox-play {
  opacity: 0;
  position: absolute;
  pointer-events: none;
}

.media-video .label-play {
  display: grid;
  border: none;
  background-color: #c02434;
  --w: 38px;
  width: var(--w);
  height: var(--w);
  border-radius: 50%;
  place-items: center;
  cursor: pointer;
}

.media-video .play_pause_icon {
  --w: 50%;
  width: var(--w);
  height: var(--w);
  background: white;
  translate: 0 0;
  transition: all 0.2s ease-in-out;
}

.media-video .play {
  clip-path: polygon(20% 0,
      20% 100%,
      90% 50%,
      90% 50%,
      90% 50%,
      90% 50%,
      90% 50%,
      90% 50%,
      90% 50%);
  translate: 6% 0;
}

/*
    .play-button:has(input:checked) .play_pause_icon,
    .pause {
      clip-path: polygon(
        0 0,
        0 100%,
        33.33% 100%,
        33.33% 0,
        66.66% 0,
        100% 0,
        100% 100%,
        66.66% 100%,
        66.66% 0
      );
      translate: 0 0;
    }

    .play-2 {
      clip-path: polygon(
        20% 0,
        20% 100%,
        35% 90%,
        35% 90%,
        35% 90%,
        90% 50%,
        35% 10%,
        35% 10%,
        35% 10%
      );
      translate: 6% 0;
    }
    */

/* Play button styles */
.play-button:has(input:checked) .play_pause_icon,
.pause {
  clip-path: polygon(0 0,
      0 100%,
      33.33% 100%,
      33.33% 0,
      66.66% 0,
      100% 0,
      100% 100%,
      66.66% 100%,
      66.66% 0);
  transform: translate(0, 0);
}

.play-button:not(:has(input:checked)) .play_pause_icon {
  clip-path: polygon(20% 0,
      20% 100%,
      35% 90%,
      35% 90%,
      35% 90%,
      90% 50%,
      35% 10%,
      35% 10%,
      35% 10%);
  transform: translate(6%, 0);
}

.play-button:has(input:checked) .label-play {
  background-color: #304296;
  box-shadow: 4px 4px 14px #525252 !important;
  border: 2px solid #fff;
}




.media-video .video-button {
  border: 1.9px solid #eeeeee;
  margin-bottom: 1.8rem;
  box-shadow: 1px 2px 11px #a9a9a9;
  background-color: #ffffff;
  margin-left: 20px;
  margin-right: 20px;
}

.media-video .play-button {

  width: 20%;
  display: inline-block;
  position: relative;
  margin-top: 0%;
  margin-left: 0%;

}

.media-video.video-logo {
  width: 65%;
  display: inline-block;
  margin-left: 20%;


}

.ul-pdf-view-videos li {
  display: flex;
  /*border: 1px solid #cccccc; */
  padding: 15px;
  align-items: center;
}

.ul-pdf-view-videos li span {
  font-size: 1.53rem;
  font-weight: 600;
  line-height: 1.8rem;
  margin-left: 10px;
}

.ul-pdf-view-videos {

  padding-right: 10px;
  padding-left: 10px;
  max-height: 100vh;
  overflow-y: auto;
  background-color: #f2efef;
  padding-top: 20px;
  padding-bottom: 20px;
}

.ul-pdf-view-videos::-webkit-scrollbar {
  width: 9px;
  /* Adjust the width as needed */
}

.ul-pdf-view-videos::-webkit-scrollbar-thumb {
  background-color: #888;
  /* Color of the scrollbar thumb */
}

.ul-pdf-view-videos::-webkit-scrollbar-track {
  background-color: #eee;
  /* Color of the scrollbar track */
}

.video-content-container .video-player {

  align-items: center;
}
</style>
