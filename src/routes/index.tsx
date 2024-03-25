import { createBrowserRouter } from "react-router-dom";
import WeatherForcastPage from "../pages/WeatherForcastPage";
import MainLayout from "../pages/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "weather-forcast",
        element: <WeatherForcastPage />,
      },
    ],
  },
  {
    path: "*",
    element: "404 Not Found!",
  }
]);
export default routes;