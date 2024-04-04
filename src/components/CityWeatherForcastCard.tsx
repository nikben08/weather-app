import { Card, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";
import DayStormImage from '../assets/weather-day-storm.png';
import Image from '../images/weather-forcasting-card-background.png';

export default function CityWeatherForcastCard() {
    const isDesktop = useMediaQuery('(min-width: 900px)'); // Change breakpoint as needed
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
                        Istanbul, TR
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
                        Monday, May 15, 2023
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
                                    marginLeft: 1,
                                    textAlign: 'left'
                                }}
                            >
                                28ºc
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: 'Nunito',
                                    fontSize: 22,
                                    fontWeight: 400,
                                    marginLeft: 1,
                                    textAlign: 'left',
                                }}
                            >
                                26ºc / 32ºc
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
                                Few clouds
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
