<template>
    <div>
        <main class="main">
            <div class="page-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <h2 class="about-us-title">Newsletters</h2>

                            <router-link to="/media" class="btn btn-primary btn-round btn-shadow float-right">
                                <i class="icon-long-arrow-left"></i>
                                <span>Back to Media Center</span>
                            </router-link>

                            <p class="lead about-us-lead text-primary mb-1">
                                Explore Our Newsletters
                            </p>

                            <p class="about-us-text mb-2">
                                Click on the documents to view
                            </p>

                            <ContentState v-if="loading" type="loading" contentType="NewsLetters" />
                            <ContentState v-if="!newsletters.length && !loading" type="empty"
                                contentType="NewsLetters" />
                            <ContentState v-if="!!error" type="error" contentType="NewsLetters" />

                            <div v-show="newsletters.length" class="dflip-books row media-center" id="dflip-books"
                                ref="bookContainer">
                                <a v-for="newsletter in newsletters" :key="newsletter.id"
                                    :href="`/media/newsletters#${newsletter.slug}/`" class="_df_thumb"
                                    :data-slug="newsletter.slug" :data-title="newsletter.name"
                                    :id="`df_${newsletter.id}`" :data-df-option="`df_option_${newsletter.id}`"
                                    :thumb="newsletter.thumb">
                                    {{ newsletter.name }}
                                </a>
                            </div>
                            <canvas ref="thumbnailCanvas" style="display: none;"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick, watch } from 'vue';
import ContentState from "@/Components/ContentState.vue";
import { useMeta } from "../../admin/composables/use-meta";

useMeta({ title: "Newsletters | Media Center" });

const newsletters = ref([]);
const loading = ref(false);
const error = ref(null);
const bookContainer = ref(null);
const thumbnailCanvas = ref(null);
const dflipInitialized = ref(false);

// Function to load PDF.js from CDN
const loadPdfJS = async () => {
    // Load PDF.js library if not already loaded
    if (window.pdfjsLib) return window.pdfjsLib;

    await Promise.all([
        // Load main PDF.js library
        new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
        }),
        // Load PDF.js worker
        new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
        })
    ]);

    // Wait a bit to ensure everything is properly initialized
    await new Promise(resolve => setTimeout(resolve, 100));

    return window.pdfjsLib;
};

// Function to generate thumbnail from PDF
const generateThumbnail = async (pdfUrl, scale = 0.5) => {
    try {
        const pdfjsLib = await loadPdfJS();

        // Create a new loading task
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale });
        const canvas = thumbnailCanvas.value;
        const context = canvas.getContext('2d');

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;

        return canvas.toDataURL('image/jpeg', 0.8);
    } catch (error) {
        console.error('Error generating thumbnail:', error);
        return null;
    }
};

const initializeDflip = () => {
    if (!newsletters.value.length || dflipInitialized.value) return;

    newsletters.value.forEach((newsletter) => {
        window[`df_option_${newsletter.id}`] = {
            source: '/storage/' + newsletter.publication_file,
            outline: [],
            autoEnableOutline: false,
            autoEnableThumbnail: false,
            overwritePDFOutline: false,
            pageSize: "0",
            is3D: true,
            direction: "1",
            slug: newsletter.slug,
            wpOptions: "true",
            id: newsletter.id,
        };
    });

    nextTick(() => {
        const container = bookContainer.value;
        if (container && container.children.length === newsletters.value.length) {
            if (window.DFLIP && window.DFLIP.parseBooks) {
                window.DFLIP.parseBooks();
                dflipInitialized.value = true;
                console.log('DFlip books initialized successfully');
            } else {
                console.warn('DFLIP library not loaded');
            }
        }
    });
};

// Fetch newsletters and generate thumbnails
const fetchMediaCenter = async () => {
    loading.value = true;
    try {
        const response = await axios.get("/api/get-media-center", {});
        const newslettersData = response.data.newsletters;

        // Process each newsletter and generate thumbnail
        for (const newsletter of newslettersData) {
            newsletter.slug = newsletter.name.toLowerCase().replace(/ /g, "-");

            // Generate thumbnail from PDF
            const pdfUrl = '/storage/' + newsletter.publication_file;
            const thumbnail = await generateThumbnail(pdfUrl);

            // Use generated thumbnail or fallback to placeholder
            newsletter.thumb = thumbnail || null;
        }

        newsletters.value = newslettersData;
        loading.value = false;
    } catch (err) {
        loading.value = false;
        error.value = err;
        console.error(err);
    }
};

// Watch for changes in the newsletters array
watch(newsletters, (newValue) => {
    if (newValue.length > 0) {
        nextTick(() => {
            initializeDflip();
        });
    }
}, { deep: true });

// Initial setup
onMounted(async () => {
    await fetchMediaCenter();
});
</script>


<style>
/* Styles remain unchanged */
.df-sheet .df-page:before {
    opacity: 0.5;
}

section.linkAnnotation a,
a.linkAnnotation,
.buttonWidgetAnnotation a,
a.customLinkAnnotation,
.customHtmlAnnotation,
.customVideoAnnotation,
a.df-autolink {
    background-color: #ff0;
    opacity: 0.2;
}

section.linkAnnotation a:hover,
a.linkAnnotation:hover,
.buttonWidgetAnnotation a:hover,
a.customLinkAnnotation:hover,
.customHtmlAnnotation:hover,
.customVideoAnnotation:hover,
a.df-autolink:hover {
    background-color: #2196f3;
    opacity: 0.5;
}

.df-icon-play-popup:before {
    background-color: rgb(51, 133, 209);
}

.df-icon-play-popup:before {
    color: #fff;
}

.df-lightbox-bg {
    opacity: 0.8;
}

.df-lightbox-wrapper .df-bg {
    background-color: transparent;
}

.df-container.df-transparent.df-fullscreen {
    background-color: #eee;
}
</style>
