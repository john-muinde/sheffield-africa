<template>
  <div class="container">
    <teleport to="#breadcrumb">
      <ul class="navbar-nav flex-row">
        <li>
          <div class="page-header">
            <nav class="breadcrumb-one" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;">Users</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span>Edit User</span>
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
                  <h3><b>Edit User</b></h3>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="form-group col-md-6">
                  <label for="post-name"> Name</label>
                  <input
                    v-model="user.name"
                    id="post-name"
                    type="text"
                    class="form-control"
                    placeholder="Enter Name ..."
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
                  <label for="post-email">User Email</label>
                  <input
                    v-model="user.email"
                    id="post-email"
                    type="email"
                    class="form-control"
                    placeholder="Enter User Email ..."
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

             
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                  <label for="post-email">Password</label>
                  <input
                    v-model="user.password"
                    id="post-email"
                    type="password"
                    class="form-control"
                    placeholder="Enter Password ..."
                  />

                  <div class="text-danger mt-1">
                    {{ errors.password }}
                  </div>
                  <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.password">
                      {{ message }}
                    </div>
                  </div>
                </div>

                <div class="form-group col-md-6">
                  <label for="post-address">Confirm Password</label>
                  <input
                    v-model="user.confirm_password"
                    id="post-address"
                    type="password"
                    class="form-control"
                    placeholder="Enter Confirm Password ..."
                  />

                  <div class="text-danger mt-1">
                    {{ errors.confirm_password }}
                  </div>
                  <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.confirm_password">
                      {{ message }}
                    </div>
                  </div>
                </div>
                </div>

            
             


                <div class="form-group col-md-6">
                  <label for="is_published" class="col-form-label"
                    >Role</label
                  >
                  <div>
                    <select
                      v-model="user.role"
                      id="role"
                      class="form-select"
                    >
                      <option selected value="1">Admin</option>
                    </select>
                  </div>

                  <div class="text-danger mt-1">
                    {{ errors.role }}
                  </div>
                  <div class="text-danger mt-1">
                    <div v-for="message in validationErrors?.role">
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
useMeta({ title: "Edit User" });

import "../../assets/sass/scrollspyNav.scss";
import "../../assets/sass/scrollspyNav.scss";
import "../../assets/sass/forms/file-upload-with-preview.min.css";





import { reactive, onMounted, ref, watchEffect } from "vue";
import useUsers from "@/composables/users";
import { useForm, useField, defineRule } from "vee-validate";
import { required, min } from "@/validation/rules";

import { useRoute } from "vue-router";

defineRule("required", required);
defineRule("min", min);

// Define a validation schema
const schema = {
  name: "required|min:3",
  email: "required|min:3",
  role: "required",
  password: "required|min:3",
  confirm_password: "required",
};
// Create a form context with the validation schema
const { validate, errors } = useForm({ validationSchema: schema });
// Define actual fields for validation
const { value: name } = useField("name", null, { initialValue: "" });
const { value: email } = useField("email", null, { initialValue: "" });
const { value: role } = useField("role", null, { initialValue: "1" });
const { value: password } = useField("password", null, {
  initialValue: "",
});
const { value: confirm_password } = useField("confirm_password", null, {
  initialValue: "",
});

const route = useRoute();


const { user: postData, getUser,
  updateUser, validationErrors, isLoading, getUserList, userList } =
  useUsers();
const user = reactive({
  name,
  email,
  role,
  password,
  confirm_password,
});

function submitForm() {
  validate().then((form) => {
    if (form.valid) {
      updateUser(user);
    }
  });
}

onMounted(() => {
  getUser(route.params.id);

});

watchEffect(() => {
  user.id = postData.value.id;
  user.name = postData.value.name;
  user.email = postData.value.email;

  console.log(postData.value);
});

//console.log(blogCategoryList);
</script>
