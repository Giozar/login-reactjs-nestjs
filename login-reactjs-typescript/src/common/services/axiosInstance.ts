import axios from 'axios';
const baseURL = 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL,
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    config =>  {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `${token}`
        }
        return config;
    },
    error  => {
        console.error(error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if(error.response.status === 401) {
            console.error(`No autorizado`);
        }

        return Promise.reject(error);
    }
)


export default axiosInstance;


