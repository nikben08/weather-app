import { ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Typography } from '@mui/material';
import { itemTextStyle, itemTypographyStyle } from './styles.tsx'; // Stil objesini import ediyoruz
import DropLight from '../assets/phosphor-drop-light.svg';
export default function AirHumidity({ airHumidity }: { airHumidity: number }) {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <img src={DropLight} alt="Thermometer Icon" />
        </ListItemAvatar>
        <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="Air humidity" />
        <ListItemSecondaryAction>
          <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">{airHumidity}%</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}
