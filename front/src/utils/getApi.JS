import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const getApi= (withToken = false) =>{
    const headers = {
        'Content-Type': 'application/json'
    };
    if (withToken) {
        headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return axios.create({
        baseURL: baseURL,
        headers,
        withCredentials: true,
    });
}

export default getApi