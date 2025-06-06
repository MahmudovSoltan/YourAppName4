import { AxiosResponse } from "axios";
import { AuthPeyload, IAuthresponse, IResponse } from "../types/AutgTypes";
import instance from "../utils/instance";

export const AuthAPi ={
    authSinIn : async (data: Omit<AuthPeyload, 'full_name'>): Promise<IResponse<IAuthresponse>> => {
        const response = await instance({
            method: 'POST',
            url: 'auth/login', // Replace with your actual endpoint
            data
        });
        return {
            data: response.data.data,
            message: response.data.message,
            result: response.data.result,
            status: response.data.status
        };
    },
      authSinUp : async (data:AuthPeyload): Promise<AxiosResponse<any>> => {
        const response = await instance({
            method: 'POST',
            url: 'auth/signup', // Replace with your actual endpoint
            data
        });
        return response;
    },
}