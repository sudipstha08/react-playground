import axios from 'axios';
import { apiEndPoints } from './apiconfig';
import store from '../store';
import { refreshAuthToken } from '../actions/auth';

const axiosInstance = axios.create({
    baseURL: apiEndPoints.baseUrl,
    timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('token') ? "Bearer " + localStorage.getItem('token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default axiosInstance;