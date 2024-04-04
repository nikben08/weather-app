import { Card, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";
import DayStormImage from '../assets/weather-day-storm.png';
import DayFewCloudsImage from '../assets/weather-day-few-clouds.png';
import DayCloudyImage from '../assets/weather-day-cloudy.png';
import DayClearImage from '../assets/weather-day-clear.png';

export default function CityWeatherNextDaysCard(weatherData: any) {
    const isDesktop = useMediaQuery('(min-width: 900px)'); // Change breakpoint as needed
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

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Mon</Typography>
                        <img src={DayStormImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">20°C</Typography>
                        <Typography variant="body2">18°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayFewCloudsImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayFewCloudsImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayCloudyImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayClearImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayClearImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayFewCloudsImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>
                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayFewCloudsImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Mon</Typography>
                        <img src={DayStormImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">20°C</Typography>
                        <Typography variant="body2">18°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayFewCloudsImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayFewCloudsImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>

                    <Grid item xs={3} xl={1}>
                        <Typography variant="h6">Tue</Typography>
                        <img src={DayCloudyImage} style={{ width: 56, height: 56, margin: '0 auto' }} />
                        <Typography variant="body1">22°C</Typography>
                        <Typography variant="body2">20°C</Typography>
                    </Grid>


                </Grid>
            </CardContent>
        </Card>
    )
}
