import { Grid, ListItemAvatar, ListItemSecondaryAction, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from '../images/weather-forcasting-card-background.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ThermometerSimpleLight from '../assets/thermometer-simple-light.svg';
import ClounRainLight from '../assets/cloud-rain-light.svg';
import WindLight from '../assets/wind-light.svg';
import DropLight from '../assets/drop-light.svg';
import SunDumLight from '../assets/sun-dim-light.svg';
import RainIcon from '../assets/rain.svg';

const listStyle = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  borderColor: 'divider',
  backgroundColor: 'background.paper',
  marginTop: 2,
};

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
  return (
    <Grid container item xl={12} style={{ height: '100%' }}>
      <Card
        sx={{
          width: 300,
          height: 300,
          backgroundImage: `url(${Image})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      >
        <CardContent>
          {/* Content of the card */}
        </CardContent>
      </Card>

      <List sx={{ ...listStyle, backgroundColor: '#16161F' }}>
        <ListItem>
          <ListItemAvatar>
            <img src={ThermometerSimpleLight} alt="Thermometer Icon" />
          </ListItemAvatar>
          <ListItemText  disableTypography  sx={{ ...itemTextStyle }} primary="Thermal sensation" />
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

      <Card sx={{ width: 300, height: 150, marginTop: 2 }}>
      <CardContent>
        <Grid container spacing={4}>
          {/* Section 1 */}
          <Grid item xs={2}>
            <Typography variant="h6">Mon</Typography>
            <img src={RainIcon} alt="Thermometer Icon" />
            <Typography variant="body1">20°C</Typography>
            <Typography variant="body2">Feels like 18°C</Typography>
          </Grid>
          {/* Section 2 */}
          <Grid item xs={2}>
            <Typography variant="h6">Tue</Typography>
            <img src={RainIcon} alt="Thermometer Icon" />
            <Typography variant="body1">22°C</Typography>
            <Typography variant="body2">Feels like 20°C</Typography>
          </Grid>
          {/* Section 3 */}
          <Grid item xs={2}>
            <Typography variant="h6">Wed</Typography>
            <img src={RainIcon} alt="Thermometer Icon" />
            <Typography variant="body1">25°C</Typography>
            <Typography variant="body2">Feels like 23°C</Typography>
          </Grid>
          {/* Section 4 */}
          <Grid item xs={2}>
            <Typography variant="h6">Thu</Typography>
            <img src={RainIcon} alt="Thermometer Icon" />
            <Typography variant="body1">24°C</Typography>
            <Typography variant="body2">Feels like 22°C</Typography>
          </Grid>
          {/* Section 5 */}
          <Grid item xs={2}>
            <Typography variant="h6">Fri</Typography>
            <img src={RainIcon} alt="Thermometer Icon" />
            <Typography variant="body1">23°C</Typography>
            <Typography variant="body2">Feels like 21°C</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Fri</Typography>
            <img src={RainIcon} alt="Thermometer Icon" />
            <Typography variant="body1">23°C</Typography>
            <Typography variant="body2">Fee21°C</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>


    </Grid>
  );
}

export default WeatherForcastPage;
