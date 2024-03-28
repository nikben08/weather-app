import { AxiosResponse } from "axios";

export type ApiResponse<T> = AxiosResponse<T>;

export interface ICityData {
    iso2: string;
    iso3: string;
    country: string;
    cities: string[];
}

export interface IGetCitiesResponse {
    error: boolean;
    msg: string;
    data: ICityData[];
}