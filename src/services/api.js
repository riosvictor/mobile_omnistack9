import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rios-backend-omnistack9.herokuapp.com/',//ip do expo + porta do node (backend)
});

export default api;