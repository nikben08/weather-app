import { Card, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";
import DayStormImage from '../assets/weather-day-storm.png';
import DayFewCloudsImage from '../assets/weather-day-few-clouds.png';
import DayCloudyImage from '../assets/weather-day-cloudy.png';
import DayClearImage from '../assets/weather-day-clear.png';
import { getCityNextDaysWeatherReq } from "../api/getCitiesReq";
import { useQuery } from "react-query";
import parseResponse from "../functions/parseResponse";
import { ApiResponse, ICityNextDaysWeatherData, ICityWeatherData } from "../app/types";

type CityWeatherStatisticsProps = {
    weatherData: ICityWeatherData['list'][number];
};

export default function CityWeatherNextDaysCard({ weatherData }: CityWeatherStatisticsProps) {
    const isDesktop = useMediaQuery('(min-width: 900px)'); // Change breakpoint as needed

    const {
        data: cityNextDaysWeatherData,
        isLoading: isCityNextDaysWeatherDataLoading,
        refetch: refetchCityNextDaysWeatherData,
    } = useQuery("get/CityNextDaysWeatherData", () => getCityNextDaysWeatherReq({ lat: weatherData.coord.lat.toString(), lon: weatherData.coord.lon.toString() }), {
        cacheTime: 0,
        retry: 1,
        select: parseResponse as (
            response: ApiResponse<ICityNextDaysWeatherData>
        ) => ICityNextDaysWeatherData,
    });
    console.log(cityNextDaysWeatherData);

    const getWeekDay = (dt: number): string => {
        if (cityNextDaysWeatherData) {
            const timestampInMillis = dt * 1000;
            const localDateTime = new Date(timestampInMillis + cityNextDaysWeatherData?.city.timezone * 1000);
            const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(localDateTime);
            return weekday;
        }
    
        return 'undefined';
    };
    
    

    return (
        <Card
            sx={{
                width: '100%',
                height: 300,
                marginTop: 2,
                backgroundColor: '#16161F',
                ...(isDesktop && {
                    height: 160,
                }),
            }}>
            <CardContent sx={{ backgroundColor: '#16161F', }}>
                <Grid container spacing={1}>
                    {cityNextDaysWeatherData?.list.map((weatherData, index) => (
                        <Grid item xs={3} xl={1}>
                            <Typography variant="h6">
                                {getWeekDay(weatherData.dt)}
                            </Typography>
                            <img src={DayStormImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                            <Typography variant="body1">{(weatherData.temp.max - 273.15).toFixed(0)}°C</Typography>
                            <Typography variant="body2">{(weatherData.temp.min - 273.15).toFixed(0)}°C</Typography>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}
