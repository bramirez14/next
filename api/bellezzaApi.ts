import axios from 'axios';



const bellezzaApi = axios.create({
    baseURL: '/api'
});


export default bellezzaApi;


