import {URL} from '../config';
import axios from 'axios';
const instance = axios.create({
    baseURL:URL
})
export default instance ;