
import ThermometerSimpleLight from '../assets/phosphor-thermometer-simple-light.svg';
import { ListItemAvatar, ListItemText, ListItemSecondaryAction,ListItem, Typography } from '@mui/material';
import { itemTextStyle, itemTypographyStyle } from './styles';
export default function ThermalSensation() {
  return (
    <div>
   <ListItem>
          <ListItemAvatar>
            <img src={ThermometerSimpleLight} alt="Thermometer Icon" />
          </ListItemAvatar>
          <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="Thermal sensation" />
          <ListItemSecondaryAction>
            <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">26ºc</Typography>
          </ListItemSecondaryAction>
        </ListItem>
    
      
    </div>
  )
}
