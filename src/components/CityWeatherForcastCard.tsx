import { Card, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";
import DayStormImage from '../assets/weather-day-storm.png';
import Image from '../images/weather-forcasting-card-background.png';
import { ICityWeatherData } from "../app/types";

type CityWeatherStatisticsProps = {
    weatherData: ICityWeatherData['list'][number];
};

export default function CityWeatherStatistics({ weatherData }: CityWeatherStatisticsProps) {
    const isDesktop = useMediaQuery('(min-width: 900px)'); // Change breakpoint as needed
    const temperatureInCelsius = weatherData.main.temp - 273.15;
    const minTemperatureInCelsius = weatherData.main.temp - 273.15;
    const maxTemperatureInCelsius = weatherData.main.temp - 273.15;
    const weatherDescription = weatherData.weather[0].description;
    const cityName = weatherData.name;
    const countryName = weatherData.sys.country;

    const timestampInMillis = weatherData.dt * 1000;
    
    // Create a new Date object with the adjusted timestamp
    const localDateTime = new Date(timestampInMillis + weatherData.sys.timezone * 1000);
    
    // Format the date and time
    const formattedDateTime = localDateTime.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <Card
            sx={{
                height: 300,
                backgroundImage: `url(${Image})`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                width: 1200,
                ...(isDesktop && {
                    width: 350,
                    height: 350,
                }),
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%', // Ensure CardContent takes full height
                }}
            >
                <Grid>
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'Nunito',
                            fontSize: 16,
                            fontWeight: 700,
                            marginTop: 1,
                            marginLeft: 1,
                            textAlign: 'left'
                        }}
                    >
                        {cityName}, {countryName}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: 'Nunito',
                            fontSize: 12,
                            fontWeight: 400,
                            marginLeft: 1,
                            textAlign: 'left'
                        }}
                    >
                        {formattedDateTime}
                    </Typography>
                </Grid>


                <Grid container direction="row" alignItems="center">
                    <Grid item xs={6}>
                        <Grid container direction="column" alignItems="flex-start">
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'Nunito',
                                    fontSize: 52,
                                    fontWeight: 700,
                                    textAlign: 'left'
                                }}
                            >
                                  {temperatureInCelsius.toFixed(0)}ºc
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: 'Nunito',
                                    fontSize: 22,
                                    fontWeight: 400,
                                    marginLeft: 0.5,
                                    textAlign: 'left',
                                }}
                            >
                                {minTemperatureInCelsius.toFixed(0)}ºc / {maxTemperatureInCelsius.toFixed(0)}ºc
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: 'Nunito',
                                    fontSize: 16,
                                    fontWeight: 400,
                                    marginLeft: 1,
                                    textAlign: 'left'
                                }}
                            >
                                {weatherDescription}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={DayStormImage} style={{ width: 150, height: 150, marginLeft: 20 }} />
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}
