<template>
    <div>
        <main class="main">
            <div class="page-content bg-gray-50">
                <div class="container mx-auto px-4">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1 media-video">
                            <!-- Header Section -->
                            <div class="flex justify-between items-center">
                                <div>
                                    <h2 class="about-us-title">Videos</h2>
                                    <p class="lead about-us-lead">Explore our videos</p>
                                </div>
                                <router-link to="/media" class="btn btn-primary btn-round btn-shadow">
                                    <i class="icon-long-arrow-left"></i>
                                    <span>Back to Media Center</span>
                                </router-link>
                            </div>

                            <!-- Filters Section -->
                            <span>
                                Search for Videos
                            </span>
                            <span class="relative">
                                <input type="text" v-model="searchTerm" placeholder="Search videos..."
                                    class="w-full pl-10 pr-4 py-2 rounded-3xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-red-600 shadow-sm  mb-2" />
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </span>

                            <ContentState v-if="loading" type="loading" contentType="videos" />
                            <ContentState v-if="!filteredVideos.length && !loading" type="empty" contentType="videos" />
                            <ContentState v-if="!!error" type="error" contentType="videos" />

                            <TransitionGroup v-if="filteredVideos.length" tag="div"
                                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
                                <div v-for="video in filteredVideos" :key="video.id" :data-index="video.id"
                                    class="group relative rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                                    <!-- Thumbnail Container -->
                                    <div class="aspect-video relative overflow-hidden cursor-pointer"
                                        @click="playVideo(video)">
                                        <img :src="getVideoPoster(video)" :alt="video.name"
                                            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            @error="handleImageError" />
                                        <!-- Overlay -->
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div
                                                class="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                                <div class="play-icon w-8 h-8"
                                                    :class="{ 'playing': selectedVideo?.id === video.id && !isPaused }">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor" class="w-8 h-8">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Video Info -->
                                    <div class="p-4">
                                        <h4 class="font-semibold text-gray-900 mb-2 line-clamp-2"
                                            style="font-size: 1.6rem;">{{ video.name
                                            }}</h4>
                                    </div>
                                </div>
                            </TransitionGroup>

                            <!-- Video Player Modal -->
                            <TransitionRoot appear :show="!!selectedVideo" as="template">
                                <Dialog as="div" @close="closeVideo" class="relative z-50 w-full">
                                    <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0"
                                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                        leave-to="opacity-0">
                                        <div class="fixed inset-0 bg-black bg-opacity-75" />
                                    </TransitionChild>

                                    <div class="fixed inset-0 overflow-y-auto">
                                        <div class="flex min-h-full items-center justify-center p-4">
                                            <TransitionChild enter="duration-300 ease-out"
                                                enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                                leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                                leave-to="opacity-0 scale-95">
                                                <DialogPanel class="rounded-2xl bg-white" :style="{
                                                    width: 'calc(100vw - 40px)',
                                                    maxWidth: '1200px'
                                                }">
                                                    <div class="relative aspect-video">
                                                        <div v-if="isYouTubeVideo" class="plyr__video-embed h-full">
                                                            <iframe
                                                                :src="`https://www.youtube.com/embed/${getYoutubeId(selectedVideo?.video_url)}?autoplay=1`"
                                                                allowfullscreen allow="autoplay"
                                                                class="w-full h-full rounded-2xl"></iframe>
                                                        </div>
                                                        <video v-else ref="videoElement" :src="videoSrc(selectedVideo)"
                                                            class="w-full h-full rounded-2xl" controls autoplay></video>
                                                        <button @click="closeVideo"
                                                            class="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors">
                                                            <span class="sr-only">Close</span>
                                                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                                stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </DialogPanel>
                                            </TransitionChild>
                                        </div>
                                    </div>
                                </Dialog>
                            </TransitionRoot>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.play-icon {
    transition: transform 0.3s;
}

.play-icon.playing {
    transform: scale(1.2);
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue';
import gsap from 'gsap';

import ContentState from '@/Components/ContentState.vue';

// State
const videos = ref([]);
const selectedVideo = ref(null);
const isPaused = ref(true);
const filteredVideos = ref(videos.value);
const searchTerm = ref('');
const loading = ref(false);
const error = ref(null);
const videoElement = ref(null);

const isYouTubeVideo = computed(() => {
    return selectedVideo.value && selectedVideo.value.type !== 'Upload';
});

// Methods
const fetchVideos = async () => {
    loading.value = true;
    try {
        const response = await axios.get('/api/get-media-center-videos');
        videos.value = response.data.videos;
        filteredVideos.value = videos.value;
        loading.value = false;

        // Get duration and thumbnail for each video
        for (const video of videos.value) {
            if (video.type === 'Upload' && !video.thumbnail) {
                await generateThumbnail(video);
            }
        }
    } catch (error) {
        error.value = error;
        console.error('Error fetching videos:', error);
    } finally {
        loading.value = false;
    }
};

const getYoutubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
};

const videoSrc = (video) => {
    if (!video) return '';
    return video.type === 'Upload' ? `/storage/${video.file_path}` : '';
};

const getVideoPoster = (video) => {
    if (!video) return null;
    if (video.thumbnail) return video.thumbnail;
    if (video.type !== 'Upload' && video.video_url) {
        const videoId = getYoutubeId(video.video_url);
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return '/api/placeholder/320/180';
};

const handleImageError = (event) => {
    event.target.src = '/api/placeholder/320/180';
};

const generateThumbnail = async (video) => {
    return new Promise((resolve, reject) => {
        const videoElement = document.createElement('video');
        videoElement.src = videoSrc(video);
        videoElement.crossOrigin = 'anonymous';

        videoElement.addEventListener('loadeddata', () => {
            // Seek to 4.5 seconds if the video is longer than 4.5 seconds
            const seekTime = Math.min(4.5, videoElement.duration || 0);
            videoElement.currentTime = seekTime;
        });

        videoElement.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            video.thumbnail = canvas.toDataURL('image/png');
            resolve();
        });

        videoElement.addEventListener('error', (error) => {
            console.error('Error generating thumbnail:', error);
            reject(error);
        });
    });
};

const playVideo = (video) => {
    selectedVideo.value = video;
    isPaused.value = false;
};

const closeVideo = () => {
    selectedVideo.value = null;
    isPaused.value = true;
};

// Animation handlers
const onBeforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.transform = 'scale(0.8)';
};

const onEnter = (el, done) => {
    gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        delay: el.dataset.index * 0.1,
        onComplete: done
    });
};

const onLeave = (el, done) => {
    gsap.to(el, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        onComplete: done
    });
};

// Lifecycle hooks
onMounted(() => {
    fetchVideos();
});

onUnmounted(() => {
    if (videoElement.value) {
        videoElement.value.pause();
    }
});

// Watchers
watch(searchTerm, (value) => {
    filteredVideos.value = videos.value.filter((video) => {
        return video.name.toLowerCase().includes(value.toLowerCase());
    });
});
</script>

<style scoped>
.video-content-container {
    width: 100%;
}

.video-player {
    aspect-ratio: 16/9;
    background: #000;
    width: 100%;
    max-height: 500px;
    /* Set a maximum height for the video player */
}

:deep(.plyr) {
    --plyr-color-main: #304296;
    width: 100%;
    height: 100%;
}

.ul-pdf-view-videos {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    background-color: #f8f9fa;
    padding: 0;
}

.video-item {
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border-bottom: 1px solid #e9ecef;
}

.video-item:hover {
    background-color: #f1f3f5;
}

.video-item.active {
    background-color: #e9ecef;
}

.play_pause_icon {
    width: 24px;
    height: 24px;
    background: white;
    transition: all 0.2s ease;
}

.play {
    clip-path: polygon(20% 0, 20% 100%, 90% 50%, 90% 50%);
}

.pause {
    clip-path: polygon(0 0, 0 100%, 33.33% 100%, 33.33% 0, 66.66% 0, 100% 0, 100% 100%, 66.66% 100%, 66.66% 0);
}

.video-title {
    color: #333;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Custom scrollbar */
.ul-pdf-view-videos::-webkit-scrollbar {
    width: 6px;
}

.ul-pdf-view-videos::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.ul-pdf-view-videos::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
}

.ul-pdf-view-videos::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
