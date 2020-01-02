import axios from 'axios'
import * as Cookies from "js-cookie";

axios.interceptors.request.use(function (config) {
    const token = Cookies.get('token')
    if (token)
        config.headers.authorization = `Bearer ${token}`;
        config.headers["content-type"] = 'application/json' 
    return config;
});

export default axios
