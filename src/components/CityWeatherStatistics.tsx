import { Divider, List, useMediaQuery } from "@mui/material";
import ThermalSensation from "./ThermalSensation";
import ProbabilityOfRain from "./ProbabilityOfRain";
import WindSpeed from "./WindSpeed";
import AirHumidity from "./AirHumidity";
import UVIndex from "./UVIndex";

export default function CityWeatherStatistics() {
    const isDesktop = useMediaQuery('(min-width: 900px)'); // Change breakpoint as needed
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
            <ThermalSensation />
            <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
            <ProbabilityOfRain />
            <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
            <WindSpeed />
            <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
            <AirHumidity />
            <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
            <UVIndex />
        </List>
    )
}
