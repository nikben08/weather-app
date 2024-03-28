
import axios from 'axios';
import { ICityWeatherData } from '../app/types';

export const getCitiesWeatherDataReq = async (cityIds: string) => {
    console.log(cityIds);
    const a =  axios.get<ICityWeatherData>('http://api.openweathermap.org/data/2.5/group?id=' + cityIds + '&appid=ffe3c12e3405e9c4a3715588141a3738');
    return a;
}
