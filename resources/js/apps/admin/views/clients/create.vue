<template>
  <div class="container">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Client</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>Create Client</span>
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
                  <h3><b>New Client</b></h3>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="form-group col-md-6">
                  <label for="post-name">Client Name</label>
                  <input
                    v-model="client.name"
                    id="post-name"
                    type="text"
                    class="form-control"
                    placeholder="Enter Client Name ..."
                  />

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
                  <label for="post-phone">Client Phone</label>
                  <input
                    v-model="client.phone"
                    id="post-phone"
                    type="text"
                    class="form-control"
                    placeholder="Enter Client Phone ..."
                  />

                  <div class="text-danger mt-1">
                    {{ errors.phone }}
                  </div>
                  <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.phone">
                      {{ message }}
                    </div>
                  </div>
                </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                  <label for="post-email">Client Email</label>
                  <input
                    v-model="client.email"
                    id="post-email"
                    type="email"
                    class="form-control"
                    placeholder="Enter Client Email ..."
                  />

                  <div class="text-danger mt-1">
                    {{ errors.email }}
                  </div>
                  <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.email">
                      {{ message }}
                    </div>
                  </div>
                </div>

                <div class="form-group col-md-6">
                  <label for="post-address">Client Address</label>
                  <input
                    v-model="client.address"
                    id="post-address"
                    type="text"
                    class="form-control"
                    placeholder="Enter Client address ..."
                  />

                  <div class="text-danger mt-1">
                    {{ errors.address }}
                  </div>
                  <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.address">
                      {{ message }}
                    </div>
                  </div>
                </div>
                </div>

                <div class="form-group">
                  <label for="post_description">Description</label>
                  <textarea
                    v-model="client.description"
                    id="post_description"
                    class="form-control"
                    placeholder="Enter Description ..."
                  ></textarea>

                  <div class="text-danger mt-1">
                    {{ errors.description }}
                  </div>
                  <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.description">
                      {{ message }}
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div
                    class="custom-file-container"
                    data-upload-id="myFirstImage"
                  >
                    <label
                      >Upload Client Logo
                      <a
                        id="brand_image"
                        href="javascript:void(0)"
                        class="custom-file-container__image-clear"
                        title="Clear Image"
                        >x</a
                      ></label
                    >
                    <label class="custom-file-container__custom-file">
                      <input
                        type="file"
                        class="custom-file-container__custom-file__custom-file-input"
                        accept="image/*"
                        @change="client.main_image = $event.target.files[0]"
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
                    <div class="custom-file-container__image-preview"></div>
                  </div>
                </div>


                <div class="form-group">
                  <label for="is_published" class="col-form-label"
                    >Publishing Status</label
                  >
                  <div>
                    <select
                      v-model="client.is_published"
                      id="is_published"
                      class="form-select"
                    >
                      <option selected value="1">Published</option>
                      <option value="0">Not Published</option>
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

<script setup>
import { useMeta } from "../../composables/use-meta";
useMeta({ title: "New Client" });

import "../../assets/sass/scrollspyNav.scss";
import "../../assets/sass/scrollspyNav.scss";
import "../../assets/sass/forms/file-upload-with-preview.min.css";

import FileUploadWithPreview from "file-upload-with-preview";



import { reactive, onMounted, ref } from "vue";
import useClients from "@/composables/clients";
import { useForm, useField, defineRule } from "vee-validate";
import { required, min } from "@/validation/rules";

defineRule("required", required);
defineRule("min", min);

// Define a validation schema
const schema = {
  name: "required|min:3",
  phone: "required|min:3",
  email: "required|min:3",
  address: "required|min:3",
  description: "required|min:3",
  is_published: "required",
};
// Create a form context with the validation schema
const { validate, errors } = useForm({ validationSchema: schema });
// Define actual fields for validation
const { value: name } = useField("name", null, { initialValue: "" });
const { value: phone } = useField("phone", null, { initialValue: "" });
const { value: email } = useField("email", null, { initialValue: "" });
const { value: address } = useField("address", null, { initialValue: "" });
const { value: description } = useField("description", null, {
  initialValue: "",
});
const { value: is_published } = useField("is_published", null, {
  initialValue: "",
});

const { storeClient, validationErrors, isLoading, getClientList, clientList } =
  useClients();
const client = reactive({
  name,
  phone,
  email,
  address,
  description,
  is_published,
});

function submitForm() {
  validate().then((form) => {
    if (form.valid) {
      storeClient(client);
    }
  });
}

onMounted(() => {
  getClientList();

  new FileUploadWithPreview("myFirstImage", {
    images: {
      baseImage: "/assets/images/file-preview.png",
      backgroundImage: "",
    },
  });
});

//console.log(blogCategoryList);
</script>
