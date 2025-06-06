import { HttpStatusCode } from "axios";

export interface AuthPeyload {
    email: string,
    full_name: string,
    password: string
}



export interface IResponse<T> {
    data: T;
    message: string;
    result: boolean;
    status?: HttpStatusCode;
}

export interface IToken {
    access_token: string
}
export interface IData {
    id: number,
    full_name: string,
    email: string,
    img_url: string | null,
    created_at: string
}

export interface IAuthresponse {
    tokens: IToken,
    profile: IData
}
export interface IFavorite {
    id: number,
    title: string,
    cover_url: string,
    fragman: string,
    watch_url: string,
    adult: boolean,
    run_time_min: number,
    imdb: string,
    overview: string,
    created_at: string
}

export interface IActions {
    authSignIn: (data: Omit<AuthPeyload, 'full_name'>) => Promise<IResponse<IAuthresponse>>,
    authSignUp: (data: AuthPeyload) => Promise<IResponse<null>>,
    getAllMoviesFunc: () => Promise<IResponse<IMovies[]>>,
    getFavoritesMoviesFunc: () => Promise<IResponse<IFavorite[]>>,
    getProfileInfoFunc:()=>Promise<IResponse<IProfile>>,
    profileEditFunc:(data:IProfileData)=>Promise<IResponse<IProfile>>
}
export interface IMovies {
    id: number,
    title: string,
    cover_url: string,
    fragman: string,
    watch_url: string,
    adult: boolean,
    run_time_min: number,
    imdb: string,
    overview: string,
    created_at: string
}
export interface IProfile {
    id: number,
    full_name: string,
    email: string,
    img_url: string | null,
    created_at: string
}
export interface IProfileData {
    full_name: string,
    email: string,
    img_url?: string|null|undefined
    password:string
}
export interface IAuthStore {
    movies: IMovies[] | null,
    movie: null,
    profile: IData | null | undefined;
    actions: IActions,
    favoritesMovies: IFavorite[],
    profileInfo: any,
    profileData:IProfile
}