import { ref, reactive, inject, provide } from "vue";
import { useRouter } from "vue-router";
import { AbilityBuilder, Ability } from "@casl/ability";
import { ABILITY_TOKEN } from "@casl/vue";
import store from "../store";
import axiosInstance from "../axiosInstance";

let user = reactive({
    name: "",
    email: "",
});

export default function useAuth() {
    const processing = ref(false);
    const validationErrors = ref({});
    const router = useRouter();
    const swal = inject("$swal");
    const ability = inject(ABILITY_TOKEN);

    const head = ref({
        use: () => {},
    });

    const loginForm = reactive({
        email: "",
        password: "",
        remember: false,
    });

    const registerForm = reactive({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submitLogin = async () => {
        if (processing.value) return;

        processing.value = true;
        validationErrors.value = {};

        await axiosInstance
            .post("/login", loginForm)
            .then(async (response) => {
                await store.dispatch("auth/getUser");
                await loginUser();
                swal({
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 0,
                });
                await router.push({ name: "frontend.myaccount" });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (processing.value = false));
    };

    const submitRegister = async () => {
        if (processing.value) return;

        processing.value = true;
        validationErrors.value = {};

        await axiosInstance
            .post("/register", registerForm)
            .then(async (response) => {
                // await store.dispatch('auth/getUser')
                // await loginUser()
                swal({
                    icon: "success",
                    title: "Registration successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                await router.push({ name: "auth.login" });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (processing.value = false));
    };

    const submitLoginAdmin = async () => {
        if (processing.value) return;
        processing.value = true;
        validationErrors.value = {};

        await axiosInstance
            .post("/login", loginForm)
            .then(async (response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
                await store.dispatch("auth/getUser");
                await loginUser();
                swal({
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                await router.push({ name: "admin.dashboard" });
                //await router.go(-1);
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (processing.value = false));
    };

    const submitRegisterAdmin = async () => {
        if (processing.value) return;

        processing.value = true;
        validationErrors.value = {};

        await axiosInstance
            .post("/register", registerForm)
            .then(async (response) => {
                // await store.dispatch('auth/getUser')
                // await loginUser()
                swal({
                    icon: "success",
                    title: "Registration successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                await router.push({ name: "admin.dashboard" });
            })
            .catch((error) => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => (processing.value = false));
    };

    const loginUser = () => {
        user = store.state.auth.user;
        // Cookies.set('loggedIn', true)
        getAbilities();
    };

    const getUser = async () => {
        if (store.getters["auth/authenticated"]) {
            await store.dispatch("auth/getUser");
            await loginUser();
        }
    };

    const logout = async () => {
        if (processing.value) return;

        processing.value = true;

        axiosInstance
            .post("/logout")
            .then((response) => {
                user.name = "";
                user.email = "";
                store.dispatch("auth/logout");
                router.push({ name: "frontend.login" });
            })
            .catch((error) => {
                // swal({
                //     icon: 'error',
                //     title: error.response.status,
                //     text: error.response.statusText
                // })
            })
            .finally(() => {
                processing.value = false;
                // Cookies.remove('loggedIn')
            });
    };

    const logoutAdmin = async () => {
        if (processing.value) return;

        processing.value = true;

        axiosInstance
            .post("/logout")
            .then((response) => {
                user.name = "";
                user.email = "";
                store.dispatch("auth/logout");
                router.replace({
                    name: "admin.login",
                    meta: { layout: "auth" },
                    replace: true,
                });
            })
            .catch((error) => {
                // swal({
                //     icon: 'error',
                //     title: error.response.status,
                //     text: error.response.statusText
                // })
            })
            .finally(() => {
                processing.value = false;
                // Cookies.remove('loggedIn')
            });
    };

    const getAbilities = async () => {
        await axiosInstance.get("/api/abilities").then((response) => {
            const permissions = response.data;
            const { can, rules } = new AbilityBuilder(Ability);

            can(permissions);

            ability.update(rules);
        });
    };

    // Apply the 'head' injection using app.use()
    head.value.use(getAbilities);

    return {
        loginForm,
        registerForm,
        validationErrors,
        processing,
        submitLogin,
        submitLoginAdmin,
        submitRegister,
        submitRegisterAdmin,
        user,
        getUser,
        logout,
        logoutAdmin,
        getAbilities,
    };
}
