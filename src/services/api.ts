import axios from 'axios';

const api = axios.create({
    //trocar esse url para o endereço de ip
    baseURL: 'http://localhost:3333'
});

export default api;
