import axios from './axios';
const BASE_URL = 'http://localhost:3002/';
export default function request(method, url, data = null) {
    let config = {
        method,
        url: `${BASE_URL}${url}`
    }
    if (data) {
        config.data = data;
    }
    return axios(config);
}