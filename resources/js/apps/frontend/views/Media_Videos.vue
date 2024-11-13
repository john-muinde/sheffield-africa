<template>
    <div>
      <main class="main">
        <div class="page-content">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 offset-lg-1 media-video">
                <h2 class="about-us-title">Videos</h2>
                <router-link to="/media" class="btn btn-primary btn-round btn-shadow float-right">
                  <i class="icon-long-arrow-left"></i><span>Back to Media Center</span>
                </router-link>
                <p class="lead about-us-lead text-primary mb-3">Explore our videos</p>
                <div class="row">
                  <div class="col-lg-9 video-content-container">
                    <div class="video-player">
                      <video controls ref="videoPlayer" loop muted>
                        <!-- Video will autoplay when muted -->
                      </video>
                      <!-- If YouTube video, it will be loaded via iframe -->
                      <iframe
                        v-if="isYouTubeVideo"
                        :src="youtubeEmbedUrl"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>

                  <aside class="col-lg-3 video-player-list">
                    <div class="widget widget-cats">
                      <h3 class="widget-title"><b>Video List</b></h3>
                      <ul class="ul-pdf-view-videos">
                        <li v-for="video in videos" :key="video.id">
                          <div class="play-button">
                            <label
                              :for="'checkbox' + video.id"
                              class="label-play"
                              @click="playVideo(videoSrc(video), 'checkbox' + video.id, video.type == 'Upload')"
                              ref="videoCheckBox"
                            >
                              <div class="play_pause_icon play"></div>
                            </label>
                            <input class="checkbox-play" type="checkbox" :id="'checkbox' + video.id" />
                          </div>
                          <span>{{ video.name }} ({{ video.type }})</span>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import axios from 'axios';

  // Videos array
  const videos = ref([]);
  const videoPlayer = ref(null);

  // Flag for YouTube iframe
  const isYouTubeVideo = ref(false);
  const youtubeEmbedUrl = ref('');

  // Fetch video data
  const fetchMediaCenter = async () => {
    try {
      const response = await axios.get('/api/get-media-center-videos');
      videos.value = response.data.videos;
      autoplayFirstVideo(); // Autoplay the first video after fetching
    } catch (error) {
      console.error(error);
    }
  };

  // Video source function
  const videoSrc = (video) => {
    if (video) {
      if (video.type === 'Upload') {
        return `/storage/${video.file_path}`;
      } else {
        return `https://www.youtube.com/embed/${video.video_url.split('/').pop()}`;
      }
    }
    return '';
  };

  // Autoplay the first video
  const autoplayFirstVideo = () => {
    nextTick(() => {
      if (videos.value.length > 0 && videoPlayer.value) {
        const firstVideo = videoSrc(videos.value[0]);
        videoPlayer.value.src = firstVideo;
        videoPlayer.value.muted = true; // Mute video for autoplay
        videoPlayer.value.play();
        // Check if it's a YouTube video and set the flag
        if (firstVideo.includes('youtube.com')) {
          isYouTubeVideo.value = true;
          youtubeEmbedUrl.value = firstVideo + '?autoplay=1'; // Enable autoplay for YouTube embed
        } else {
          isYouTubeVideo.value = false;
        }
      }
    });
  };

  onMounted(() => {
    fetchMediaCenter(); // Fetch the videos when the component mounts
  });

  const videoBasePath = window.location.origin; // Laravel base path

  // Check if the video is paused
  const isVideoPaused = (videoUrl) => {
    return videoPlayer.value.src !== videoUrl || videoPlayer.value.paused;
  };

  // Play selected video
  const playVideo = (videoUrl, checkboxId, file = true) => {
    const videoButtons = document.querySelectorAll('.play-button');
    videoButtons.forEach((videoButton) => {
      const checkbox = videoButton.querySelector('.checkbox-play');
      if (checkbox) {
        checkbox.checked = false;
      }
    });

    let fullNewVideoURL = file ? videoBasePath + videoUrl : videoUrl;

    if (videoPlayer.value.src === fullNewVideoURL) {
      if (!isVideoPaused(fullNewVideoURL)) {
        videoPlayer.value.pause();
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) checkbox.checked = true;
      } else {
        videoPlayer.value.play();
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) checkbox.checked = false;
      }
    } else {
      videoPlayer.value.src = fullNewVideoURL;
      videoPlayer.value.play();
      const checkbox = document.getElementById(checkboxId);
      if (checkbox) checkbox.checked = false;
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
    clip-path: polygon(20% 0, 20% 100%, 90% 50%, 90% 50%, 90% 50%, 90% 50%, 90% 50%, 90% 50%);
    translate: 6% 0;
  }

  /* Play button styles */
  .play-button:has(input:checked) .play_pause_icon,
  .pause {
    clip-path: polygon(0 0, 0 100%, 33.33% 100%, 33.33% 0, 66.66% 0, 100% 0, 100% 100%, 66.66% 100%, 66.66% 0);
    transform: translate(0, 0);
  }

  .play-button:not(:has(input:checked)) .play_pause_icon {
    clip-path: polygon(20% 0, 20% 100%, 35% 90%, 35% 90%, 35% 90%, 90% 50%, 35% 10%, 35% 10%, 35% 10%);
    transform: translate(6%, 0);
  }

  .play-button:has(input:checked) .label-play {
    background-color: #304296;
    box-shadow: 4px 4px 14px #525252 !important;
    border: 2px solid #fff;
  }

  .ul-pdf-view-videos li {
    display: flex;
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

  .video-content-container .video-player {
    align-items: center;
  }
  </style>
