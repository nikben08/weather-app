import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { useEffect } from 'react';

function App() {

  interface Coordinates {
    latitude: number;
    longitude: number;
    accuracy: number;
  }
  
  interface Position {
    coords: Coordinates;
  }
  
  interface GeolocationError {
    code: number;
    message: string;
  }
  
  const options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos: Position) {
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function errors(err: GeolocationError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  });
  
  return (
    <RouterProvider router={routes}></RouterProvider>
);
}

export default App
