import { Box, Card, CardContent, Stack, useMediaQuery } from "@mui/material";
import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsGrid } from "@mui/x-charts/ChartsGrid";

export default function CityWeatherStatisticsChart(weatherData: any) {
    const isDesktop = useMediaQuery('(min-width: 900px)');

    const dataset = [
        { min: -12, max: -4, precip: 79, month: 'Jan' },
        { min: -11, max: -3, precip: 66, month: 'Feb' },
        { min: -6, max: 2, precip: 76, month: 'Mar' },
        { min: 1, max: 9, precip: 106, month: 'Apr' },
        { min: 8, max: 17, precip: 105, month: 'Mai' },
        { min: 15, max: 24, precip: 114, month: 'Jun' },
        { min: 18, max: 26, precip: 106, month: 'Jul' },
        { min: 17, max: 26, precip: 105, month: 'Aug' },
        { min: 13, max: 21, precip: 100, month: 'Sept' },
        { min: 6, max: 13, precip: 116, month: 'Oct' },
        { min: 0, max: 6, precip: 93, month: 'Nov' },
        { min: -8, max: -1, precip: 93, month: 'Dec' },
    ];

    const series = [
        { type: 'line', dataKey: 'min', color: '#577399' },
        { type: 'line', dataKey: 'max', color: '#fe5f55' },
        { type: 'bar', dataKey: 'precip', color: '#bfdbf7', yAxisKey: 'rightAxis' },
    ];

    return (
        <Card
            sx={{
                height: 0,
                width: 0,
                ...(isDesktop && {
                    width: 834,
                    height: 350,
                    marginLeft: 2,
                }),
            }}
        >
            <CardContent sx={{ padding: 0, margin: 0 }}>
                <Stack sx={{ width: '100%', backgroundColor: '#16161F' }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ padding: 0, margin: 0 }}> {/* Adjust padding */}
                            <ResponsiveChartContainer
                                series={series}
                                xAxis={[
                                    {
                                        scaleType: 'band',
                                        dataKey: 'month',
                                        label: 'Month',
                                    },
                                ]}
                                yAxis={[
                                    { id: 'leftAxis' },
                                    { id: 'rightAxis' },
                                ]}
                                dataset={dataset}
                                height={350}
                            >
                                <ChartsGrid horizontal />
                                <LinePlot />
                                <MarkPlot />

                                <ChartsXAxis />
                                <ChartsYAxis axisId="leftAxis" label="temerature (°C)" />
                                <ChartsYAxis
                                    axisId="rightAxis"
                                    position="right"
                                    label="precipitation (mm)"
                                />
                                <ChartsTooltip />
                            </ResponsiveChartContainer>
                        </Box>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}
