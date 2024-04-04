import { Divider, List, useMediaQuery } from "@mui/material";
import ThermalSensation from "./ThermalSensation";
import ProbabilityOfRain from "./ProbabilityOfRain";
import WindSpeed from "./WindSpeed";
import AirHumidity from "./AirHumidity";
import UVIndex from "./UVIndex";

export default function CityWeatherStatistics(weatherData: any) {
    const isDesktop = useMediaQuery('(min-width: 900px)');
    console.log('------------');
    console.log(weatherData);
    console.log('-----------------')
    const { wind, main } = weatherData;
    const windSpeed = wind?.speed;
    const airHumidity = main?.humidity;
    const thermalSensation = main?.feels_like;
    const thermalSensationCelsius = thermalSensation - 273.15;

    return (
        <List
            sx={{
                py: 0,
                width: 1200,
                marginTop: 2,
                borderRadius: 2,
                borderColor: 'divider',
                backgroundColor: '#16161F',
                ...(isDesktop && {
                    height: '100%',
                    width: 1200,
                    marginTop: 2,
                }),
            }}
        >
            <ThermalSensation thermalSensationCelsius={thermalSensationCelsius} />
            <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
            <ProbabilityOfRain probabilityOfRain={12} />
            <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
            <WindSpeed windSpeed={windSpeed} />
            <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
            <AirHumidity airHumidity={airHumidity} />
            <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
            <UVIndex uvIndex={1}/>
        </List>
    )
}
