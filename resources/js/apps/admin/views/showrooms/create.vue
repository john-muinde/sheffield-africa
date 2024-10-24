<template>
    <div class="container">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="javascript:;">Showrooms</a>
                                </li>
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    <span>Create Showroom</span>
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
                                    <h3><b>Create Showroom</b></h3>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form @submit.prevent="submitForm">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="post-name"
                                            >Showroom Name</label
                                        >
                                        <input
                                            v-model="showroom.name"
                                            id="post-name"
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Showroom Name ..."
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

                                    <div class="form-group col-md-6">
                                        <label for="post-name"
                                            >Location</label
                                        >
                                        <input
                                            v-model="showroom.location"
                                            id="post-location"
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Location ..."
                                        />

                                        <div class="text-danger mt-1">
                                            {{ errors.location }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.phone_number1"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="post-name"
                                            >Longitude</label
                                        >
                                        <input
                                            v-model="showroom.longitude"
                                            id="post-longitude"
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Longitude ..."
                                        />

                                        <div class="text-danger mt-1">
                                            {{ errors.longitude }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.longitude"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="post-name"
                                            >Latitude</label
                                        >
                                        <input
                                            v-model="showroom.latitude"
                                            id="post-latitude"
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Latitude ..."
                                        />

                                        <div class="text-danger mt-1">
                                            {{ errors.latitude }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.latitude"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <h4>Showroom Contact Details</h4>
                                    <hr class="bg-dark" />

                                    <div class="form-group col-md-4">
                                        <label for="post-phone_number1"
                                            >Phone Number 1</label
                                        >
                                        <input
                                            v-model="showroom.phone_number1"
                                            id="post-phone_number1"
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Phone Number 1 ..."
                                        />

                                        <div class="text-danger mt-1">
                                            {{ errors.phone_number1 }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.phone_number1"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="post-phone_number2">Phone Number 2</label>
                                        <input
                                            v-model="showroom.phone_number2"
                                            id="post-phone_number2"
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Phone Number 2 ..."
                                        />

                                        <div class="text-danger mt-1">
                                            {{ errors.phone_number2 }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.phone_number2"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="post-name">Email</label>
                                        <input
                                            v-model="showroom.email"
                                            id="post-email"
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter Email ..."
                                        />

                                        <div class="text-danger mt-1">
                                            {{ errors.email }}
                                        </div>
                                        <div class="text-danger mt-1">
                                            <div
                                                v-for="message in validationErrors?.email"
                                            >
                                                {{ message }}
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label for="post_description"
                                            >Showroom Description</label
                                        >

                                        <quill-editor
                                            v-model:value="showroom.description"
                                            :options="options1"
                                            placeholder="Enter Description ..."
                                        ></quill-editor>
                                    </div>

                                    <div
                                        class="custom-file-container"
                                        data-upload-id="myFirstImage"
                                    >
                                        <label
                                            >Upload Main Showroom Image
                                            <a
                                                href="javascript:void(0)"
                                                class="custom-file-container__image-clear"
                                                title="Clear Image"
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
                                                accept="image/*"
                                                @change="
                                                    showroom.main_image =
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

                                    <div
                                        class="custom-file-container"
                                        data-upload-id="myShowroomGallery"
                                    >
                                        <label
                                            >Showroom Gallery (multiple images
                                            allowed)
                                            <a
                                                href="javascript:void(0)"
                                                class="custom-file-container__image-clear"
                                                title="Clear Image"
                                                >x</a
                                            ></label
                                        >
                                        <label
                                            class="custom-file-container__custom-file"
                                            for="showroom_gallery"
                                        >
                                            <input
                                                type="file"
                                                class="custom-file-container__custom-file__custom-file-input"
                                                accept="image/*"
                                                ref="showroom_gallery"
                                                multiple
                                                id="showroom_gallery"
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
                                                v-model="showroom.is_published"
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
useMeta({ title: "Create Showroom" });

import "../../assets/sass/scrollspyNav.scss";
import highlight from "../../components/plugins/highlight.vue";

import "../../assets/sass/forms/file-upload-with-preview.min.css";
import FileUploadWithPreview from "file-upload-with-preview";

import Multiselect from "@suadelabs/vue3-multiselect";
import "@suadelabs/vue3-multiselect/dist/vue3-multiselect.css";

import { quillEditor } from "vue3-quill";
import "vue3-quill/lib/vue3-quill.css";

import { reactive, onMounted, ref } from "vue";
import useShowrooms from "@/composables/showrooms";
import { useForm, useField, defineRule } from "vee-validate";
import { required, min } from "@/validation/rules";

defineRule("required", required);
defineRule("min", min);

// Define a validation schema
const schema = {
    name: "required|min:3",
    location: "required",
    longitude: "required",
    latitude: "required",
    phone_number1: "required",
    phone_number2: "required",
    email: "required",
    description: "required|min:3",
    is_published: "required",
};

// Create a form context with the validation schema
const { validate, errors } = useForm({ validationSchema: schema });
// Define actual fields for validation
const { value: name } = useField("name", null, { initialValue: "" });
const { value: location } = useField("location", null, { initialValue: "" });
const { value: longitude } = useField("longitude", null, { initialValue: "" });
const { value: latitude } = useField("latitude", null, { initialValue: "" });
const { value: phone_number1 } = useField("phone_number1", null, {
    initialValue: "",
});
const { value: phone_number2 } = useField("phone_number2", null, { initialValue: "" });
const { value: email } = useField("email", null, { initialValue: "" });


const { value: description } = useField("description", null, {
    initialValue: "",
});

const { value: is_published } = useField("is_published", null, {
    initialValue: "",
});

const {
    storeShowroom,
    validationErrors,
    isLoading,
    getShowroomList,
    showroomList,
} = useShowrooms();

const showroom = reactive({
    name,
    location,
    longitude,
    latitude,
    phone_number1,
    phone_number2,
    email,
    description,
    is_published,
    main_image: "",
    showroom_gallery: "",
});

const options1 = ref({
    modules: {
        //toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline"], ["image", "code-block"]],
    },
});

function submitForm() {
    validate().then((form) => {
        if (form.valid) {
            const fileInput = document.getElementById("showroom_gallery");
            const files = fileInput.files;
            storeShowroom(showroom, files);
        }
    });
}

onMounted(() => {

    //single file upload
    new FileUploadWithPreview("myFirstImage", {
        images: {
            baseImage: "/assets/images/file-preview.png",
            backgroundImage: "",
        },
    });

    //multiple file upload
    new FileUploadWithPreview("myShowroomGallery", {
        images: {
            baseImage: "/assets/images/file-preview.png",
            backgroundImage: "",
        },
    });
});
</script>
