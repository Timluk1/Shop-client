import axios from "axios";

const API_PATH = process.env.NEXT_PUBLIC_BACKEND_PATH;

enum apiPaths {
    login = "/auth/login",
    registration = "/auth/registration",
    getProducts = "/products",
}

const options = {
    baseURL: API_PATH,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
    withCredentials: true,
};

const axiosInstance = axios.create(options);
const axiosInstanceWithAuth = axios.create(options);

axiosInstanceWithAuth.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
        return config;
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

axiosInstanceWithAuth.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            console.log("hello");
        }
        return Promise.reject(error);
    },
);

export { axiosInstance, axiosInstanceWithAuth, apiPaths };
