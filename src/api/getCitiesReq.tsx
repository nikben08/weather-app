
import axios from 'axios';
import { ICityNextDaysWeatherData, ICityWeatherData } from '../app/types';

export const getCitiesWeatherDataReq = async (cityIds: string) => {
    return axios.get<ICityWeatherData>('http://api.openweathermap.org/data/2.5/group?id=' + cityIds + '&appid=ffe3c12e3405e9c4a3715588141a3738');
}

export const getCityNextDaysWeatherReq = async ({ lat, lon }: { lat: string, lon: string }) => {
    const a = axios.get<ICityNextDaysWeatherData>('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&cnt=16&appid=ffe3c12e3405e9c4a3715588141a3738');
    console.log(a);
    return a;
}

