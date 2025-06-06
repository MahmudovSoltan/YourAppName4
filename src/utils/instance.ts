import axios from "axios"
import localStore from "../store/localStore"


const BASE_URL  = 'https://api.sarkhanrahimli.dev/api/filmalisa/'


const instance = axios.create({
    baseURL:BASE_URL,
   
})

instance.interceptors.request.use((config)=>{
    const token = localStore.getItem('access_token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})


export default instance;