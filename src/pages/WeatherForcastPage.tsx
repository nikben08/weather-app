import { Avatar, Grid, Paper, Skeleton, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LayersIcon from "@mui/icons-material/Layers";
import ErrorIcon from "@mui/icons-material/Error";
import DoneIcon from '@mui/icons-material/Done';
import LoopIcon from '@mui/icons-material/Loop';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { useState } from "react";

function WeatherForcastPage() {

  const [companyStatisticsIsLoading, setCompanyStatisticsIsLoading] = useState<boolean>(true);
  const statisticsData = [
    {
      name: "HATA SAYISI",
      count: 1,
      icon: <ErrorIcon sx={{ fontSize: "28px" }} />,
      bgColor: "#F04438",
      color: "#9EA3AB",
      isActive: true,
    },
    {
      name: "PERSONEL",
      count: 2,
      icon: <PeopleAltOutlinedIcon sx={{ fontSize: "28px" }} />,
      bgColor: "#10B981",
      color: "#9EA3AB",
      isActive: true,

    },
    {
      name: "TEZGAH",
      count: 3,
      icon: <LayersIcon sx={{ fontSize: "28px" }} />,
      bgColor: "#F79009",
      color: "#9EA3AB",
      isActive: true,
    },
    {
      name: "AKTİF İŞLEM",
      count: 4,
      icon: <LoopIcon sx={{ fontSize: "28px" }} />,
      bgColor: "#6366F1",
      color: "#9EA3AB",
      isActive: true,
    },
    {
      name: "TAMAMLANAN",
      count: 5,
      icon: <DoneIcon sx={{ fontSize: "28px" }} />,
      bgColor: "#63BF9E",
      color: "#9EA3AB",
      isActive: true,
    },
    {
      name: "İŞLEM SAYISI",
      count: 6,
      icon: <StackedLineChartIcon sx={{ fontSize: "28px" }} />,
      bgColor: "#44ACF2",
      color: "#9EA3AB",
      isActive: true,
    },
  ];

  return (
    <Grid container item xl={12} spacing={3} style={{ height: '100%' }}>
      <Grid container item xl={12} spacing={1} >
        {companyStatisticsIsLoading ? (
          statisticsData.map((value, key) => (
            <Grid key={key} item xs={12} sm={6} md={6} lg={3} xl={2}>
              <Paper className="border-1 border-[#f1f1f4] flex !flex-col p-3" sx={{ borderRadius: '18px', color: value.color }}>
                <Grid item>
                  <Typography variant="h5">
                    <Skeleton />
                  </Typography>
                </Grid>
                <Grid item>
                  <Skeleton variant="rectangular" height={70} />
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <Skeleton />
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          ))
        ) : (
          statisticsData.filter(data => data.isActive).map((value, key) => (
            <Grid key={key} item xs={12} sm={6} md={6} lg={3} xl={2}>
              <Paper
                className="border-1 border-[#f1f1f4] flex !flex-col p-3"
                sx={{ borderRadius: "18px" }}
              >
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: 13,
                        fontWeight: 500,
                        marginLeft: 1,
                        marginTop: 2,
                        color: value.color,
                        fontFamily: "Ubuntu, sans-serif",
                      }}
                    >
                      {value.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      sx={{
                        marginTop: 1,
                        marginRight: 1,
                        bgcolor: value.bgColor,
                        width: 56,
                        height: 56,
                      }}
                    >
                      {value.icon}
                    </Avatar>
                  </Grid>
                </Grid>
                <Typography variant="h2" sx={{ marginLeft: 1 }}>
                  {value.count}
                </Typography>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
}

export default WeatherForcastPage;
