import { ref } from "vue";
import { useRouter } from "vue-router";

export function useMediaDocuments(options = {}) {
    const {
        thumbnailScale = 0.5,
        enableDflip = true,
        cdnBaseUrl = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174",
        storageBaseUrl = window.location.origin + "/storage",
        filters = {
            type: "document",
        },
    } = options;

    const pdfjsLib = ref(null);
    const documents = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const router = useRouter();

    // Dynamic PDF.js loader
    const loadPdfJS = async () => {
        if (window.pdfjsLib) return window.pdfjsLib;

        try {
            await Promise.all([
                new Promise((resolve) => {
                    const script = document.createElement("script");
                    script.src = `${cdnBaseUrl}/pdf.min.js`;
                    script.onload = resolve;
                    document.head.appendChild(script);
                }),
                new Promise((resolve) => {
                    const script = document.createElement("script");
                    script.src = `${cdnBaseUrl}/pdf.worker.min.js`;
                    script.onload = resolve;
                    document.head.appendChild(script);
                }),
            ]);

            await new Promise((resolve) => setTimeout(resolve, 100));
            return window.pdfjsLib;
        } catch (err) {
            console.error("Failed to load PDF.js", err);
            throw err;
        }
    };

    // Generate thumbnail from PDF
    const generateThumbnail = async (filePath, scale = thumbnailScale) => {
        try {
            const pdfjsLib = await loadPdfJS();
            const fullPath = `${storageBaseUrl}/${filePath}`;
            const loadingTask = pdfjsLib.getDocument(fullPath);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);

            const canvas = document.createElement("canvas");
            const viewport = page.getViewport({ scale });
            const context = canvas.getContext("2d");

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({
                canvasContext: context,
                viewport: viewport,
            }).promise;

            return canvas.toDataURL("image/jpeg", 0.8);
        } catch (error) {
            console.error("Error generating thumbnail:", error);
            return null;
        }
    };

    // Process documents with thumbnail generation
    const processDocuments = async (fetchFunction) => {
        loading.value = true;
        try {
            const documentsData = await fetchFunction();

            // Process each document
            for (const doc of documentsData) {
                // Generate slug if not present
                doc.slug =
                    doc.slug ||
                    doc.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "");

                // Handle thumbnail
                if (
                    !doc.thumbnail_path &&
                    doc.publication_file.toLowerCase().endsWith(".pdf")
                ) {
                    const thumbnail = await generateThumbnail(
                        doc.publication_file
                    );
                    doc.thumb = thumbnail || undefined;
                } else if (doc.thumbnail_path) {
                    doc.thumb = `${storageBaseUrl}/${doc.thumbnail_path}`;
                }
            }

            documents.value = documentsData;
            loading.value = false;
            return documentsData;
        } catch (err) {
            loading.value = false;
            error.value = err instanceof Error ? err : new Error(String(err));
            console.error(err);
            return [];
        }
    };

    // Initialize DFlip for documents
    const initializeDflip = (docs = documents.value) => {
        if (!enableDflip || !docs.length) return false;

        docs.forEach((doc) => {
            if (doc.publication_file.toLowerCase().endsWith(".pdf")) {
                window[`df_option_${doc.id}`] = {
                    source: `${storageBaseUrl}/${doc.publication_file}`,
                    outline: [],
                    autoEnableOutline: false,
                    autoEnableThumbnail: false,
                    overwritePDFOutline: false,
                    pageSize: "0",
                    is3D: true,
                    direction: "1",
                    slug: doc.slug,
                    wpOptions: "true",
                    id: doc.id,
                };
            }
        });

        if (window.DFLIP?.parseBooks) {
            window.DFLIP.parseBooks();
            if (router.currentRoute.value.hash) {
                // if has is only #_ then remove the hash
                if (router.currentRoute.value.hash === "#_") {
                    router.replace({
                        hash: "",
                    });
                    return;
                }
                const brochure = docs.find((b) =>
                    router.currentRoute.value.hash.includes(b.slug)
                );
                if (brochure) {
                    document.getElementById(`df_${brochure.id}`).click();
                }
            }
            return true;
        }

        console.warn("DFLIP library not loaded");
        return false;
    };

    // Handle route leaving with open DFlip book
    const handleRouteLeave = (to, from, next) => {
        const wrapper = document.querySelector(".df-lightbox-wrapper");
        const wrapperOpen = wrapper && wrapper.style.display !== "none";

        if (window.DFLIP && wrapperOpen) {
            document.querySelector(".df-lightbox-close")?.click();
            next(false);
            return false;
        }
        next();
    };

    // Filter and search documents
    const filterDocuments = (searchTerm = "") => {
        return documents.value.filter((doc) => {
            // Check filters
            const matchesFilters = Object.entries(filters).every(
                ([key, value]) => doc[key] === value
            );

            // Check search term
            const matchesSearch =
                !searchTerm ||
                Object.values(doc).some((field) =>
                    String(field)
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                );

            return matchesFilters && matchesSearch;
        });
    };

    return {
        documents,
        loading,
        error,
        processDocuments,
        initializeDflip,
        generateThumbnail,
        handleRouteLeave,
        filterDocuments,
    };
}
