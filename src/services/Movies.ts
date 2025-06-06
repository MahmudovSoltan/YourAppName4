import { IMovies, IResponse } from "../types/AutgTypes"
import instance from "../utils/instance"

export const moviesAPi = {
    getAllMovies: async ():Promise<IResponse<IMovies[]>> => {
        return instance({
            method: 'GET',
            url: 'movies'
        })
        .then((res) => res.data)
        .catch((err) => console.log(err)
        )
    },
    getFavoritesMovies: async ():Promise<IResponse<IMovies[]>> => {
        return instance({
            method: 'GET',
            url: 'movies/favorites'
        })
        .then((res) => res.data)
        .catch((err) => console.log(err)
        )
    }
}