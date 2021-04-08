import axios from "axios"

const KEY = "AIzaSyA2gVcKwBKFLbuikQFX9muSbIF_bA33L3E"


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})