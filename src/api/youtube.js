// We create this to handle everything related to the api request
import axios from "axios";
const KEY = 'AIzaSyAkB-xEMciNVz8K_NOT-9g6zWosHUQR7HA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }

});