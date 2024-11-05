import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";
import { AbilityBuilder, Ability } from "@casl/ability";
import { ABILITY_TOKEN } from "@casl/vue";
import store from "../store";
import axiosInstance from "../axiosInstance";

export default function useAuth() {
    const processing = ref(false);
    const validationErrors = ref({});
    const router = useRouter();
    
    // Move inject() calls inside setup or within the composable function
    const swal = inject("$swal");
    const ability = inject(ABILITY_TOKEN);

    const user = reactive({
        name: "",
        email: "",
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

        try {
            const response = await axiosInstance.post("/login", loginForm);
            await store.dispatch("auth/getUser");
            await loginUser();
            
            swal({
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 0,
            });
            
            await router.push({ name: "frontend.myaccount" });
        } catch (error) {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors;
            }
        } finally {
            processing.value = false;
        }
    };

    const submitRegister = async () => {
        if (processing.value) return;

        processing.value = true;
        validationErrors.value = {};

        try {
            const response = await axiosInstance.post("/register", registerForm);
            
            swal({
                icon: "success",
                title: "Registration successfully",
                showConfirmButton: false,
                timer: 1500,
            });
            
            await router.push({ name: "auth.login" });
        } catch (error) {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors;
            }
        } finally {
            processing.value = false;
        }
    };

    const loginUser = () => {
        user.name = store.state.auth.user.name;
        user.email = store.state.auth.user.email;
        getAbilities();
    };

    const getUser = async () => {
        if (store.getters["auth/authenticated"]) {
            await store.dispatch("auth/getUser");
            loginUser();
        }
    };

    const logout = async () => {
        if (processing.value) return;

        processing.value = true;

        try {
            await axiosInstance.post("/logout");
            user.name = "";
            user.email = "";
            store.dispatch("auth/logout");
            router.push({ name: "frontend.login" });
        } finally {
            processing.value = false;
        }
    };

    const getAbilities = async () => {
        try {
            const response = await axiosInstance.get("/api/abilities");
            const permissions = response.data;
            const { can, rules } = new AbilityBuilder(Ability);
            can(permissions);
            ability.update(rules);
        } catch (error) {
            console.error("Error fetching abilities:", error);
        }
    };

    return {
        loginForm,
        registerForm,
        validationErrors,
        processing,
        submitLogin,
        submitRegister,
        user,
        getUser,
        logout,
        getAbilities,
    };
}
