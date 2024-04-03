import { Grid, ListItemAvatar, ListItemSecondaryAction, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from '../images/weather-forcasting-card-background.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ThermometerSimpleLight from '../assets/phosphor-thermometer-simple-light.svg';
import ClounRainLight from '../assets/phosphor-cloud-rain-light.svg';
import WindLight from '../assets/phosphor-wind-light.svg';
import DropLight from '../assets/phosphor-drop-light.svg';
import SunDumLight from '../assets/phosphor-sun-dim-light.svg';

import DayStormImage from '../assets/weather-day-storm.png';
import DayFewCloudsImage from '../assets/weather-day-few-clouds.png';
import DayCloudyImage from '../assets/weather-day-cloudy.png';
import DayClearImage from '../assets/weather-day-clear.png';
import useMediaQuery from '@mui/material/useMediaQuery';


import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { useState } from "react";
import { useSelectedCityIds } from "../stores/WeatherForcastingStore";
import { getCitiesWeatherDataReq } from "../api/getCitiesReq";
import { useQuery } from "react-query";
import parseResponse from "../functions/parseResponse";
import { ApiResponse, ICityWeatherData } from "../app/types";

const dataset = [
  { min: -12, max: -4, precip: 79, month: 'Jan' },
  { min: -11, max: -3, precip: 66, month: 'Feb' },
  { min: -6, max: 2, precip: 76, month: 'Mar' },
  { min: 1, max: 9, precip: 106, month: 'Apr' },
  { min: 8, max: 17, precip: 105, month: 'Mai' },
  { min: 15, max: 24, precip: 114, month: 'Jun' },
  { min: 18, max: 26, precip: 106, month: 'Jul' },
  { min: 17, max: 26, precip: 105, month: 'Aug' },
  { min: 13, max: 21, precip: 100, month: 'Sept' },
  { min: 6, max: 13, precip: 116, month: 'Oct' },
  { min: 0, max: 6, precip: 93, month: 'Nov' },
  { min: -8, max: -1, precip: 93, month: 'Dec' },
];

const series = [
  { type: 'line', dataKey: 'min', color: '#577399' },
  { type: 'line', dataKey: 'max', color: '#fe5f55' },
  { type: 'bar', dataKey: 'precip', color: '#bfdbf7', yAxisKey: 'rightAxis' },
];


const itemTextStyle = {
  color: '#BFBFD4',
  fontFamily: 'Nunito',
  fontSize: '14px',
  lineHeight: '140%',
  fontWeight: 700,
};

const itemTypographyStyle = {
  color: '#FAFAFA',
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '140%',
  fontWeight: 500,
};



function WeatherForcastPage() {
  const selectedCityIds = useSelectedCityIds();
  console.log(selectedCityIds);
  const isDesktop = useMediaQuery('(min-width: 900px)'); // Change breakpoint as needed

  const {
    data: cityWeatherData,
    isLoading: isCityWeatherDataLoading,
    refetch: refetchCityWeatherData,
  } = useQuery("get/CitiesWeatherData", () => getCitiesWeatherDataReq(selectedCityIds?.join(',') ?? ''), {
    cacheTime: 0,
    retry: 1,
    select: parseResponse as (
      response: ApiResponse<ICityWeatherData>
    ) => ICityWeatherData,
  });

  console.log(cityWeatherData);

  return (
    <Grid container item xl={12} style={{ height: '100%' }}>
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

      <Card
        sx={{
          height: 0,
          width: 0,
          ...(isDesktop && {
            width: 820,
            height: 350,
            marginLeft: 3
          }),
        }}
      >
        <CardContent sx={{ padding: 0, margin: 0 }}>
          <Stack sx={{ width: '100%', backgroundColor: '#16161F' }}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ padding: 0, margin: 0 }}> {/* Adjust padding */}
                <ResponsiveChartContainer
                  series={series}
                  xAxis={[
                    {
                      scaleType: 'band',
                      dataKey: 'month',
                      label: 'Month',
                    },
                  ]}
                  yAxis={[
                    { id: 'leftAxis' },
                    { id: 'rightAxis' },
                  ]}
                  dataset={dataset}
                  height={350}
                >
                  <ChartsGrid horizontal />
                  <LinePlot />
                  <MarkPlot />

                  <ChartsXAxis />
                  <ChartsYAxis axisId="leftAxis" label="temerature (°C)" />
                  <ChartsYAxis
                    axisId="rightAxis"
                    position="right"
                    label="precipitation (mm)"
                  />
                  <ChartsTooltip />
                </ResponsiveChartContainer>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>


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
        <ListItem>
          <ListItemAvatar>
            <img src={ThermometerSimpleLight} alt="Thermometer Icon" />
          </ListItemAvatar>
          <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="Thermal sensation" />
          <ListItemSecondaryAction>
            <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">26ºc</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
        <ListItem>
          <ListItemAvatar>
            <img src={ClounRainLight} alt="Thermometer Icon" />
          </ListItemAvatar>
          <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="Probability of rain" />
          <ListItemSecondaryAction>
            <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">0%</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
        <ListItem>
          <ListItemAvatar>
            <img src={WindLight} alt="Wind speed" />
          </ListItemAvatar>
          <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="Wind speed" />
          <ListItemSecondaryAction>
            <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">8 km/h</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
        <ListItem>
          <ListItemAvatar>
            <img src={DropLight} alt="Thermometer Icon" />
          </ListItemAvatar>
          <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="Air humidity" />
          <ListItemSecondaryAction>
            <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">40%</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider sx={{ borderColor: '#1C1C27' }} variant="middle" component="li" />
        <ListItem>
          <ListItemAvatar>
            <img src={SunDumLight} alt="Thermometer Icon" />
          </ListItemAvatar>
          <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="UV Index" />
          <ListItemSecondaryAction>
            <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">5</Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>

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


    </Grid>
  );
}

export default WeatherForcastPage;


