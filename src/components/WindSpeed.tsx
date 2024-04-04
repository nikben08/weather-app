import { ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Typography } from '@mui/material';
import { itemTextStyle, itemTypographyStyle } from './styles.tsx'; // Stil objesini import ediyoruz
import WindLight from '../assets/phosphor-wind-light.svg';

export default function WindSpeed({ windSpeed }: { windSpeed: number }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <img src={WindLight} alt="Wind speed" />
      </ListItemAvatar>
      <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="Wind speed" />
      <ListItemSecondaryAction>
        <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">{windSpeed}%</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
}


