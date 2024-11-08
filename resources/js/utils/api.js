// src/utils/api.js
import axiosInstance from "../axiosInstance";
import showToast from "./notification";

export const apiRequest = async (method, url, data = null, config = {}) => {
    try {
        const response = await axiosInstance({
            method,
            url,
            data,
            ...config,
        });
        return response.data;
    } catch (error) {
        console.error(error.response);
        const validationErrors = error.response?.data?.errors || {};
        const message =
            error.response?.data?.message ||
            error.message ||
            "Something went wrong";
        validationErrors.message = message;
        showToast(message, "error");
        throw validationErrors;
    }
};
