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
                                        <div v-if="isYouTubeVideo">
                                            <iframe :src="videoSrc(selectedVideo) + '?autoplay=1'" frameborder="0"
                                                allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                        </div>
                                        <video v-else ref="videoPlayer" controls loop muted></video>
                                    </div>
                                </div>
                                <aside class="col-lg-3 video-player-list">
                                    <div class="widget widget-cats">
                                        <h3 class="widget-title"><b>Video List</b></h3>
                                        <ul class="ul-pdf-view-videos">
                                            <li v-for="video in videos" :key="video.id">
                                                <div class="play-button">
                                                    <label :for="'checkbox' + video.id" class="label-play"
                                                        @click="playVideo(video)">
                                                        <div class="play_pause_icon play"></div>
                                                    </label>
                                                    <input class="checkbox-play" type="checkbox"
                                                        :id="'checkbox' + video.id" :checked="selectedVideo?.id && selectedVideo?.id == video.id
                                                            ? true : false" />
                                                </div>
                                                <span>{{ video.name }}</span>
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
import { ref, onMounted, nextTick, computed } from 'vue';
import axios from 'axios';

// Videos array
const videos = ref([]);
const videoPlayer = ref(null);

// Selected video ref
const selectedVideo = ref(null);
const isPlaying = ref(false);

// Flag for YouTube iframe
const isYouTubeVideo = computed(() => {
    return selectedVideo.value && selectedVideo.value.type !== 'Upload';
});

// Fetch video data
const fetchMediaCenter = async () => {
    try {
        const response = await axios.get('/api/get-media-center-videos');
        videos.value = response.data.videos;
        autoplayFirstVideo();
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
        if (videos.value.length > 0) {
            playVideo(videos.value[0]);
        }
    });
};

// Play the selected video
const playSelectedVideo = () => {
    if (selectedVideo.value && videoPlayer.value) {
        const videoUrl = videoSrc(selectedVideo.value);
        videoPlayer.value.src = videoUrl;
        videoPlayer.value.muted = true;
        videoPlayer.value.play();
        isPlaying.value = true;
    }
};

// Pause the currently playing video
const pauseVideo = (play = false) => {
    if (videoPlayer.value) {
        if (!play) {
            videoPlayer.value.pause();
            isPlaying.value = false;
        } else {
            videoPlayer.value.play();
            isPlaying.value = true;
        }
    }
};

// Play selected video
const playVideo = (video) => {

    if (video.id != selectedVideo.value?.id) {
        selectedVideo.value = video;
        playSelectedVideo();
        return;
    }

    if (!isPlaying.value) {
        pauseVideo(true);
        return;
    }

    pauseVideo();
};

onMounted(() => {
    fetchMediaCenter();
});
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
