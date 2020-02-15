import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.104:3333',//'https://rios-backend-omnistack9.herokuapp.com/',//ip do expo + porta do node (backend)
});

export default api;