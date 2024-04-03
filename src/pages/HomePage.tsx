import { Button, Grid, Typography } from "@mui/material";
import CityMultiSelect from "../components/CityMultiSelect";
import PlaceIcon from '@mui/icons-material/Place';

function HomePage() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      item
      xl={12}
      style={{ height: "60vh" }}
    >
      <Grid item>
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: 700,
            fontSize: 23,
            textAlign: 'center',
            color: 'white', // Set color to white
          }}
        >
          Welcome to
          <Typography
            component="span"
            sx={{
              fontFamily: 'Nunito',
              fontWeight: 700,
              fontSize: 23,
              textAlign: 'center',
              color: '#8FB2F5',
              marginLeft: 1,
            }}
          >
            TypeWeather
          </Typography>
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontWeight: 400,
            fontSize: 16,
            textAlign: 'center',
            marginTop: 1,
            color: 'white', // Set color to white
          }}
        >
          Choose a location to see the weather forecast
        </Typography>

        <Grid sx={{ marginTop: 3 }}>
          <CityMultiSelect />
        </Grid>
      </Grid>

    </Grid>
  );
}

export default HomePage;
