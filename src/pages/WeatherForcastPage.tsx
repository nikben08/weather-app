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

  const isDesktop = useMediaQuery('(min-width: 900px)'); // Change breakpoint as needed

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
            width: 400,
            height: 400,
          }),
        }}
      >
        <CardContent>
          <Typography variant="body1">Istanbul, TR</Typography>
          <Typography variant="body2">Monday, May 15, 2023</Typography>
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
        <ListItem >
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
          ...(isDesktop && {
            height: 160,
          }),
        }}>
        <CardContent>
          <Grid container spacing={1} >

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


