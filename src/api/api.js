import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000/api' });
const API = axios.create({ baseURL: 'http://localhost:5000/api/' });

API.interceptors.request.use((request) => {
    return request;
},
(error) => {
    console.error('Request error', error);
    return Promise.reject(error);
}
);

API.interceptors.response.use((response) => {
    return response;
},
(error) => {
    console.error('Response error', error);
    return Promise.reject(error);
}
);

export default API;