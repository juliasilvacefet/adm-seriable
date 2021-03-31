import axios from "axios";

const api = axios.create({
    baseURL:"https://apiseriable.herokuapp.com",

});

export default api;
