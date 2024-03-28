
import axios from 'axios';
import { IGetCitiesResponse } from '../app/types';

export const getCitiesReq = async () => {
    const a =  axios.get<IGetCitiesResponse>('https://countriesnow.space/api/v0.1/countries');
    console.log(a);
    return a;
}
