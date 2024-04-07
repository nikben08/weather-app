import { AxiosResponse } from "axios";

export type ApiResponse<T> = AxiosResponse<T>;

export interface City {
    id: number;
    name: string;
    state: string;
    country: string;
    coord: {
        lon: number;
        lat: number;
    };
}

export interface ICityWeatherData {
    cnt: number;
    list: {
        coord: {
            lon: number;
            lat: number;
        };
        sys: {
            country: string;
            timezone: number;
            sunrise: number;
            sunset: number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            sea_level?: number; // Optional field
            grnd_level?: number; // Optional field
            humidity: number;
        };
        visibility: number;
        wind: {
            speed: number;
            deg: number;
        };
        clouds: {
            all: number;
        };
        dt: number;
        id: number;
        name: string;
    }[];
}


export interface ICityNextDaysWeatherData {
    city: {
        timezone: number;
    },
    cnt: number;
    list: {
        temp: {
            day: number;
            min: number;
            max: number;
            night: number;
            eve: number;
            morn: number;
        };
        dt: number;
    }[];
}