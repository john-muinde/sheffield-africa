<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:;">Events</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    <span>Edit Event</span>
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
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h3><b>Edit Event</b></h3>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form @submit.prevent="submitForm">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="post-name">Event Name</label>
                                        <input v-model="event.name" id="post-name" type="text" class="form-control"
                                            placeholder="Enter Event Name ..." />

                                        <div class="text-danger mt-1">
                                            {{ errors.name }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div v-for="message in validationErrors?.name">
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="post-location">Event Location</label>
                                        <input v-model="event.location" id="post-location" type="text"
                                            class="form-control" placeholder="Enter Event location ..." />

                                        <div class="text-danger mt-1">
                                            {{ errors.location }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div v-for="message in validationErrors?.location">
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-md-6">
                                        {{ typeof (event.start_date) }}
                                        <label for="start_date">Start Date</label>
                                        <flat-pickr v-model="event.start_date" class="form-control flatpickr active"
                                            placeholder="Select Start Date"></flat-pickr>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="end_date">End Date</label>
                                        <flat-pickr v-model="event.end_date" class="form-control flatpickr active"
                                            placeholder="Select End Date"></flat-pickr>
                                    </div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="post-url">URL</label>
                                    <input v-model="event.url" id="post-url" type="text" class="form-control"
                                        placeholder="Enter Event url ..." />

                                    <div class="text-danger mt-1">
                                        {{ errors.url }}
                                    </div>
                                    <div class="text-danger mt-1">
                                        <div v-for="message in validationErrors?.url">
                                            {{ message }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="post_description">Description</label>

                                    <quill-editor v-model:value="event.description" :options="options1"
                                        placeholder="Enter Description..."></quill-editor>
                                </div>

                                <div class="form-group">
                                    <div class="custom-file-container" data-upload-id="myFirstImage">
                                        <label>Upload Event Logo
                                            <a id="event_image" href="javascript:void(0)"
                                                class="custom-file-container__image-clear"
                                                title="Clear Image">x</a></label>
                                        <label class="custom-file-container__custom-file">
                                            <input type="file"
                                                class="custom-file-container__custom-file__custom-file-input"
                                                accept="image/*" @change="
                                                    event.main_image =
                                                    $event.target.files[0]
                                                    " />
                                            <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                            <span
                                                class="custom-file-container__custom-file__custom-file-control"></span>
                                        </label>
                                        <div class="custom-file-container__image-preview"></div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="is_published" class="col-form-label">Publishing Status</label>
                                    <div>
                                        <select v-model="event.is_published" id="is_published" class="form-select">
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
                                        <div v-for="message in validationErrors?.is_published">
                                            {{ message }}
                                        </div>
                                    </div>
                                </div>

                                <button :disabled="isLoading" class="btn btn-primary mt-3">
                                    <div v-show="isLoading" class=""></div>
                                    <span v-if="isLoading">Processing...</span>
                                    <span v-else>Update</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, watchEffect } from "vue";

import { useRoute } from "vue-router";
import useEvents from "@/composables/events";
import { useForm, useField, defineRule } from "vee-validate";
import { required, min } from "@/validation/rules";
import FileUploadWithPreview from "file-upload-with-preview";
import "../../assets/sass/forms/file-upload-with-preview.min.css";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "../../assets/sass/forms/custom-flatpickr.css";

import "@suadelabs/vue3-multiselect/dist/vue3-multiselect.css";

import { quillEditor } from "vue3-quill";
import "vue3-quill/lib/vue3-quill.css";

import { useMeta } from "../../composables/use-meta";
useMeta({ title: "Edit Event" });

defineRule("required", required);
defineRule("min", min);

// Define a validation schema
const schema = {
    name: "required|min:3",
    location: "required|min:3",
    start_date: "required",
    end_date: "required",
    url: "required",
    description: "required|min:3",
    is_published: "required",
};

// Create a form context with the validation schema
const { validate, errors, resetForm } = useForm({ validationSchema: schema });
// Define actual fields for validation

const {
    event: postData,
    getEvent,
    updateEvent,
    validationErrors,
    isLoading,
    getEventList,
} = useEvents();

const { value: name } = useField("name", null, { initialValue: "" });
const { value: location } = useField("location", null, { initialValue: "" });
const { value: url } = useField("url", null, { initialValue: "" });
const { value: start_date } = useField("start_date", null, { initialValue: new Date() });
const { value: end_date } = useField("end_date", null, { initialValue: new Date() });
const { value: description } = useField("description", null, {
    initialValue: "",
});
const { value: is_published } = useField("is_published", null, {
    initialValue: "",
});

const event = reactive({
    name,
    location,
    start_date,
    url,
    end_date,
    description,
    is_published,
});
const route = useRoute();
function submitForm() {
    validate().then((form) => {
        console.log(form.valid);
        if (form.valid) {
            updateEvent(event);
        }
    });
}
onMounted(() => {
    getEvent(route.params.id);
    getEventList();

    watchEffect(() => {
        if (postData.value && postData.value.main_image_path) {
            const mainImagePath = postData.value.main_image_path;

            // Define the variable
            const mainImage = "/storage/" + mainImagePath;

            // Create the configuration object with the variable value
            const fileUploadConfig = {
                images: {
                    baseImage: mainImage,
                    backgroundImage: "",
                },
            };

            // Pass the configuration object to FileUploadWithPreview
            new FileUploadWithPreview("myFirstImage", fileUploadConfig);
        }
    });
});
// https://vuejs.org/api/reactivity-core.html#watcheffect

watchEffect(() => {
    event.id = postData.value.id;
    event.name = postData.value.name;
    event.url = postData.value.url;
    event.location = postData.value.location;
    event.start_date = postData.value.start_date;
    event.end_date = postData.value.end_date;
    event.description = postData.value.description;
    event.is_published = postData.value.is_published;
});
</script>
