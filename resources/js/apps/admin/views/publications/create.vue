<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:;">Publication</a>
                                </li>
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    <span>Create Publication</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div class="row">
                <div id="" class="col-lg-12 layout-spacing layout-top-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading pb-0">
                            <div class="row">
                                <div
                                    class="col-xl-12 col-md-12 col-sm-12 col-12"
                                >
                                    <h3><b>Create Publication</b></h3>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form @submit.prevent="submitForm">
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <label for="post-name">Title</label>
                                        <input
                                            v-model="blog.name"
                                            id="post-name"
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Title ..."
                                        />

                                        <div class="text-danger mt-1">
                                            {{ errors.name }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.name"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label
                                            for="post-category"
                                            class="form-label"
                                            >Type</label
                                        >

                                        <select class="form-select form-control" name="type" id="type" v-model="blog.type">
                                            <option value="">Select Type</option>
                                            <option value="Brochures">Brochures</option>
                                            <option value="Newsletter">Newsletter</option>
                                        </select>

                                        <div class="text-danger mt-1">
                                            {{ errors.type }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.type"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="post-content"
                                            > Description</label
                                        >

                                        <quill-editor
                                            v-model:value="blog.content"
                                            :options="options1"
                                            placeholder="Enter Blog Content ..."
                                        ></quill-editor>
                                    </div>

                                    <div
                                        class="custom-file-container"
                                        data-upload-id="myFirstImage"
                                    >
                                        <label
                                            >Upload File (Must be pdf)
                                            <a
                                                href="javascript:void(0)"
                                                class="custom-file-container__image-clear"
                                                title="Clear File"
                                                >x</a
                                            ></label
                                        >
                                        <label
                                            class="custom-file-container__custom-file"
                                            for="main_image"
                                        >
                                            <input
                                                type="file"
                                                class="custom-file-container__custom-file__custom-file-input"
                                                accept="application/pdf"
                                                @change="
                                                    blog.main_image =
                                                        $event.target.files[0]
                                                "
                                                id="main_image"
                                            />
                                            <input
                                                type="hidden"
                                                name="MAX_FILE_SIZE"
                                                value="10485760"
                                            />
                                            <span
                                                class="custom-file-container__custom-file__custom-file-control"
                                            ></span>
                                        </label>
                                        <div
                                            class="custom-file-container__image-preview"
                                        ></div>
                                    </div>

                                   

                                    <div class="form-group col-md-4">
                                        <label
                                            for="is_published"
                                            class="col-form-label"
                                            >Publishing Status</label
                                        >
                                        <div>
                                            <select
                                                v-model="blog.is_published"
                                                id="is_published"
                                                class="form-select"
                                            >
                                                <option value="">
                                                    Select Publishing Status ...
                                                </option>
                                                <option selected value="1">
                                                    Published
                                                </option>
                                                <option value="0">
                                                    Not Published
                                                </option>
                                            </select>
                                        </div>

                                        <div class="text-danger mt-1">
                                            {{ errors.is_published }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.is_published"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    :disabled="isLoading"
                                    class="btn btn-primary mt-3"
                                >
                                    <div v-show="isLoading" class=""></div>
                                    <span v-if="isLoading">Processing...</span>
                                    <span v-else>Save</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.ql-container {
    min-height: 250px !important;
    height: 300px !important;
}

.custom-file-container__image-multi-preview {
    height: 200px !important;
}
</style>

<script setup>
import { useMeta } from "../../composables/use-meta";
useMeta({ title: "Create Blog" });

import "../../assets/sass/scrollspyNav.scss";
import highlight from "../../components/plugins/highlight.vue";

import "../../assets/sass/forms/file-upload-with-preview.min.css";
import FileUploadWithPreview from "file-upload-with-preview";

import { quillEditor } from "vue3-quill";
import "vue3-quill/lib/vue3-quill.css";

import { reactive, onMounted, ref } from "vue";
import usePublication from "@/composables/publications";

import { useForm, useField, defineRule } from "vee-validate";
import { required, min } from "@/validation/rules";

defineRule("required", required);
defineRule("min", min);

// Define a validation schema
const schema = {
    name: "required|min:3",
    type: "required",
    is_published: "required"
};

// Create a form context with the validation schema
const { validate, errors } = useForm({ validationSchema: schema });
// Define actual fields for validation
const { value: name } = useField("name", null, { initialValue: "" });
const { value: type } = useField("type", null, {
    initialValue: "",
});
const { value: content } = useField("content", null, {
    initialValue: "",
});
const { value: main_image } = useField("main_image", null, {
    initialValue: "",
});
const { value: is_published } = useField("is_published", null, {
    initialValue: "",
});

const {
    storePublication,
    validationErrors,
    isLoading,
    getPublictionList,
    publicationList,
} = usePublication();


const blog = reactive({
    name,
    type,
    content,
    is_published,
    main_image: ""
});

const options1 = ref({
    modules: {
        //toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"], ["image", "code-block"]],
    },
});

function submitForm() {

    console.log(blog);


    validate().then((form) => {
        if (form.valid) {
           
            storePublication(blog);
        }
    });
}

onMounted(() => {

    //single file upload
    new FileUploadWithPreview("myFirstImage", {
        images: {
            baseImage: "/assets/images/file-preview-pdf.png",
            backgroundImage: "",
        },
    });

   
});

// console.log("test")
// console.log(brandList);

// console.log("test")
// console.log(blogCategoryList);
</script>
