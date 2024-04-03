import {ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Typography } from '@mui/material';
import { itemTextStyle , itemTypographyStyle} from './styles.tsx'; // Stil objesini import ediyoruz
import SunDumLight from '../assets/phosphor-sun-dim-light.svg';
export default function UVIndex() {
  return (
    <div>
       <ListItem>
          <ListItemAvatar>
            <img src={SunDumLight} alt="Thermometer Icon" />
          </ListItemAvatar>
          <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="UV Index" />
          <ListItemSecondaryAction>
            <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">5</Typography>
          </ListItemSecondaryAction>
        </ListItem>
      
    </div>
  )
}
