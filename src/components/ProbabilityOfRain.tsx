
import { ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Typography } from '@mui/material';
import ClounRainLight from '../assets/phosphor-cloud-rain-light.svg';
import { itemTextStyle, itemTypographyStyle } from './styles';
export default function ProbabilityOfRain({ probabilityOfRain }: { probabilityOfRain: number }) {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <img src={ClounRainLight} alt="Thermometer Icon" />
        </ListItemAvatar>
        <ListItemText disableTypography sx={{ ...itemTextStyle }} primary="Probability of rain" />
        <ListItemSecondaryAction>
          <Typography sx={{ ...itemTypographyStyle }} variant="body2" color="text.secondary">{probabilityOfRain}%</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}
