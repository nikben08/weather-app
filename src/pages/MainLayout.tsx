import * as React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom
import LayoutBackgroundImage from '../assets/layout-background-image.png';
import { Box, PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from '../components/AppAppBar';

export default function MainLayout() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const defaultTheme = createTheme({
     palette: { mode },
     components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: `url(${LayoutBackgroundImage})`,
          }
        }
      }
    }
   });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box
        component="main"
        className="overflow-hidden"
        sx={{
          flexGrow: 1,
          p: 1,
          minHeight: "100vh",
          height: "100%",
          paddingTop: 8,
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
