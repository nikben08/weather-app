
import axios from 'axios';
import { ICityNextDaysWeatherData, ICityWeatherData } from '../app/types';

export const getCitiesWeatherDataReq = async (cityIds: string) => {
    const a = axios.get<ICityWeatherData>('http://api.openweathermap.org/data/2.5/group?id=' + cityIds + '&appid=ffe3c12e3405e9c4a3715588141a3738');
    return a;
}

export const getCityNextDaysWeatherReq = async ({ lat, lon }: { lat: string, lon: string }) => {
    console.log('----------------------');
    console.log(lat);
    console.log(lon);
    console.log('----------------------');
    const a = axios.get<ICityNextDaysWeatherData>('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&cnt=16&appid=ffe3c12e3405e9c4a3715588141a3738');
    console.log(a);
    return a;
}

