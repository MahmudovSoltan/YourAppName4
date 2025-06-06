import {  IProfile, IProfileData, IResponse } from '../types/AutgTypes'
import instance from '../utils/instance'

export const profileAPi = {
    getProfiloInfo: async ():Promise<IResponse<IProfile>> => {
        return instance({
            method: 'GET',
            url: 'profile'
        })
        .then((res) => res.data)
        .catch((err) => console.log(err)
        )
    },
    profileEdit: async (data:IProfileData):Promise<IResponse<IProfile>> => {
        return instance({
            method: 'PUT',
            url: 'profile',
            data
        })
        .then((res) => res.data)
        .catch((err) => console.log(err,'profileEdit Error')
        )
    }
}