import axios, { AxiosError, AxiosResponse } from "axios";
import { store } from "../store/configureStore";
import { router } from "../router/router";
import { toast } from "react-toastify";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.defaults.withCredentials = true;

const responceBody = (responce: AxiosResponse) => responce.data;

axios.interceptors.request.use(config => {
    const token  = store.getState().account.user?.token;
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use(async responce => {
   return responce;
}, (error: AxiosError)=>{
    const {data, status} = error.response as AxiosResponse;
    switch(status){
        case 400:
            if(data.errors){
                const modelStateError: string[] = [];
                for(const key in data.errors){
                    if(data.errors[key]){
                        modelStateError.push(data.errors[key]);
                    }
                }
                throw modelStateError.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break
        case 500:
            router.navigate('/server-error',  {state: {error: data}});
            break;
        default:
            break;
    }

    return Promise.reject(error.response);
});


const requests = {
    get: (url:string, params?: URLSearchParams) => axios.get(url, {params}).then(responceBody),
    post: (url:string, body:object) => axios.post(url,body).then(responceBody),
    put: (url:string, body:object) => axios.put(url,body).then(responceBody),
    delete: (url:string) => axios.delete(url).then(responceBody),
}

const Account = {
    login: (value: any) => requests.post('Aut/login', value),
    register: (value: any) => requests.post('aut/register', value),
    getCuurentUser: () => requests.get('aut/getCurrentUser'),
}

const Player = {
    getAllThePlayers: () => requests.get('Players/getAllThePlayers'),
    updateSocre: (value: any) => requests.put(`players/updateScore?score=${value}`, value),
}

const agent = {
    Account,
    Player,
}

export default agent;