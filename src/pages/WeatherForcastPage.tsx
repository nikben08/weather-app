import { Card, Grid } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useSelectedCityIds } from "../stores/WeatherForcastingStore";
import { getCitiesWeatherDataReq } from "../api/getCitiesReq";
import { useQuery } from "react-query";
import parseResponse from "../functions/parseResponse";
import { ApiResponse, ICityWeatherData } from "../app/types";
import { useNavigate } from "react-router-dom";
import CityWeatherForcastCard from "../components/CityWeatherForcastCard";
import CityWeatherStatisticsChart from "../components/CityWeatherStatisticsChart";
import CityWeatherStatistics from "../components/CityWeatherStatistics";
import CityWeatherNextDaysCard from "../components/CityWeatherNextDaysCard";


function WeatherForcastPage() {
  const navigate = useNavigate();
  const selectedCityIds = useSelectedCityIds();

  useEffect(() => {
    if (selectedCityIds === undefined) {
      navigate('/');
    }
  }, []);

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
      {cityWeatherData?.list.map((weatherData, index) => (
        <Fragment key={index}>
          <Grid sx={{marginTop: 2}} item container>
            <Grid item>
              <CityWeatherForcastCard weatherData={weatherData} />
            </Grid>
            <Grid item>
              <CityWeatherStatisticsChart weatherData={weatherData} />
            </Grid>
          </Grid>
          <CityWeatherStatistics weatherData={weatherData} />
          <CityWeatherNextDaysCard weatherData={weatherData} />

        </Fragment>
      ))}
    </Grid>
  );
}

export default WeatherForcastPage;


