import { create } from "zustand";
import { AuthAPi } from "../services/Auth";
import { IAuthStore, IProfile, IProfileData } from "../types/AutgTypes";
import localStore from "./localStore";
import { moviesAPi } from "../services/Movies";
import { profileAPi } from "../services/Profile";

const initial = {
    movies: [],
    movie: null,
    profile: null,
    favoritesMovies: [],
    profileInfo: null,
    profileData: {} as IProfile,
};


export const useAuthtore = create<IAuthStore>((set) => ({
    ...initial,
    actions: {
        authSignIn: async (data) => {
            const response = await AuthAPi.authSinIn(data);
            if (response.result) {
                localStore.setItem('access_token', response.data.tokens.access_token);
            }

            set({ profile: response.data.profile, profileInfo: response.data });
            console.log(response);
            return response;
        },
        authSignUp: async (data) => {
            const response = await AuthAPi.authSinUp(data);
            console.log(response);
            return response.data;
        },
        getAllMoviesFunc: async () => {
            const response = await moviesAPi.getAllMovies();
            set({ movies: response.data });
            return response;
        },
        getFavoritesMoviesFunc: async () => {
            const response = await moviesAPi.getFavoritesMovies();
            set({ favoritesMovies: response.data });
            return response;
        },
        getProfileInfoFunc: async () => {
            const response = await profileAPi.getProfiloInfo()
            console.log(response, 'responseProfile');

            set({ profileData: response.data })

            return response
        },
        profileEditFunc: async (data: IProfileData) => {
            const response = await profileAPi.profileEdit(data);
            if (response.result) {
                set({ profileData: response.data });
            }
            return response;
        },
        reset: () => set({ ...initial }),
    }

}));