import axios from 'axios'
import localStore from '../store/localStore'
import { useAuthtore } from '../store/auth.store'


const BASE_URL = 'https://api.sarkhanrahimli.dev/api/filmalisa/'


const instance = axios.create({
    baseURL: BASE_URL,

})

instance.interceptors.request.use((config) => {
    const token = localStore.getItem('access_token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})
export const logout = () => {
    //   localStorage.removeItem('access_token');
    localStore.removeItem('access_token')
    instance.defaults.headers.common['Authorization'] = null;
    // Call the correct logout or reset action if it exists, e.g. reset or signOut
    // Replace 'reset' with the actual action name if different
    useAuthtore.getState().actions.reset();
};

export default instance;