import * as React from 'react';
import { PaletteMode } from '@mui/material';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import AppBarCitySelect from './AppBarCitySelect';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

interface AppAppBarProps {
  mode: PaletteMode;
}

function AppAppBar({ mode}: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };



  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <svg width="186" height="32" viewBox="0 0 186 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M56.5002 28C55.2006 28 54.3999 27.4 53.0917 26.6934C51.7835 25.9867 47.9999 23.1416 47.9999 19.6C47.9999 17.1975 47.3806 15.2543 46.3259 13.7057C45.279 12.169 43.8608 11.1043 42.3855 10.3527C41.6745 9.99064 40.9347 9.69452 40.198 9.4498C39.7685 9.30724 39.5192 8.84608 39.7056 8.4338C40.8866 5.81916 43.5169 4 46.5724 4C50.7316 4 54.1034 7.37168 54.1034 11.531C54.1034 12.4209 53.9491 13.2748 53.6657 14.0672C54.8662 13.2582 56.3126 12.7861 57.869 12.7861C62.0282 12.7861 65.3998 16.1578 65.3998 20.3172C65.3998 25.3244 60.9998 28 56.5002 28Z" fill="#8FB2F5" />
                  <path d="M29 19.6896C29 23.6593 31.6172 26.967 35.0844 27.6978C35.6195 27.8933 36.1973 28 36.8 28H48.501C48.8934 28 49.0642 27.4752 48.7646 27.2217C46.7197 25.4914 45.2 23.0529 45.2 19.6C45.2 17.7027 44.7195 16.3209 44.0117 15.282C43.2959 14.2312 42.2891 13.4459 41.1146 12.8475C39.9293 12.2437 38.6424 11.8591 37.4135 11.5865C37.124 11.55 36.8295 11.531 36.531 11.531C32.3717 11.531 29 15.1838 29 19.6896Z" fill="#8FB2F5" />
                  <path d="M82.0416 22.6241L78 8.80005H80.4288L83.184 18.784L85.9296 8.81925L88.3584 8.80005L91.1136 18.784L93.8592 8.80005H96.288L92.256 22.6241H89.9712L87.1392 12.7936L84.3264 22.6241H82.0416Z" fill="#FAFAFA" />
                  <path d="M101.424 22.912C100.375 22.912 99.4531 22.6849 98.6595 22.2305C97.8659 21.7761 97.2451 21.1457 96.7971 20.3393C96.3555 19.5329 96.1347 18.6049 96.1347 17.5553C96.1347 16.4225 96.3523 15.44 96.7875 14.608C97.2227 13.7696 97.8275 13.12 98.6019 12.6592C99.3763 12.1984 100.272 11.968 101.29 11.968C102.365 11.968 103.277 12.2208 104.026 12.7264C104.781 13.2256 105.341 13.9328 105.706 14.8481C106.071 15.7633 106.208 16.8416 106.119 18.0832H103.824V17.2384C103.818 16.112 103.619 15.2896 103.229 14.7712C102.839 14.2528 102.224 13.9936 101.386 13.9936C100.439 13.9936 99.7347 14.288 99.2739 14.8768C98.8131 15.4592 98.5827 16.3137 98.5827 17.4401C98.5827 18.4896 98.8131 19.3024 99.2739 19.8784C99.7347 20.4544 100.407 20.7424 101.29 20.7424C101.859 20.7424 102.349 20.6176 102.759 20.368C103.175 20.112 103.495 19.7441 103.719 19.2641L106.003 19.9552C105.607 20.8896 104.992 21.616 104.16 22.1344C103.335 22.6528 102.423 22.912 101.424 22.912ZM97.8531 18.0832V16.3361H104.986V18.0832H97.8531Z" fill="#FAFAFA" />
                  <path d="M110.972 22.912C110.224 22.912 109.59 22.7713 109.072 22.4897C108.553 22.2017 108.16 21.8209 107.891 21.3473C107.628 20.8737 107.497 20.352 107.497 19.7824C107.497 19.2832 107.58 18.8352 107.747 18.4384C107.913 18.0352 108.169 17.6896 108.515 17.4016C108.86 17.1072 109.308 16.8673 109.859 16.6817C110.275 16.5472 110.761 16.4256 111.318 16.3168C111.881 16.208 112.489 16.1089 113.142 16.0192C113.801 15.9233 114.489 15.8208 115.206 15.712L114.38 16.1824C114.387 15.4656 114.227 14.9376 113.9 14.5984C113.574 14.2592 113.024 14.0897 112.249 14.0897C111.782 14.0897 111.331 14.1984 110.896 14.416C110.46 14.6336 110.156 15.0081 109.984 15.5393L107.872 14.8768C108.128 14 108.614 13.2961 109.331 12.7648C110.054 12.2337 111.027 11.968 112.249 11.968C113.171 11.968 113.98 12.1184 114.678 12.4192C115.382 12.72 115.904 13.2129 116.243 13.8977C116.428 14.2625 116.54 14.6368 116.579 15.0208C116.617 15.3984 116.636 15.8112 116.636 16.2592V22.6241H114.611V20.3777L114.947 20.7424C114.48 21.4912 113.932 22.0417 113.305 22.3937C112.684 22.7393 111.907 22.912 110.972 22.912ZM111.433 21.0689C111.958 21.0689 112.406 20.9761 112.777 20.7905C113.148 20.6048 113.443 20.3776 113.66 20.1088C113.884 19.84 114.035 19.5872 114.112 19.3504C114.233 19.056 114.3 18.72 114.313 18.3424C114.332 17.9584 114.342 17.6481 114.342 17.4113L115.052 17.6225C114.355 17.7313 113.756 17.8273 113.257 17.9104C112.758 17.9937 112.329 18.0736 111.971 18.1504C111.612 18.2208 111.296 18.3008 111.02 18.3904C110.752 18.4865 110.524 18.5984 110.339 18.7264C110.153 18.8544 110.009 19.0016 109.907 19.168C109.811 19.3344 109.763 19.5296 109.763 19.7536C109.763 20.0096 109.827 20.2369 109.955 20.4353C110.083 20.6273 110.268 20.7808 110.512 20.896C110.761 21.0112 111.068 21.0689 111.433 21.0689Z" fill="#FAFAFA" />
                  <path d="M125.212 22.6241C124.528 22.7521 123.856 22.8064 123.196 22.7872C122.544 22.7744 121.958 22.656 121.44 22.432C120.921 22.2016 120.528 21.8401 120.259 21.3473C120.022 20.8993 119.897 20.4416 119.884 19.9744C119.872 19.5072 119.865 18.9792 119.865 18.3904V9.37605H122.169V18.2561C122.169 18.6721 122.172 19.0368 122.179 19.3504C122.192 19.664 122.259 19.9201 122.38 20.1185C122.611 20.5025 122.979 20.7168 123.484 20.7617C123.99 20.8064 124.566 20.7809 125.212 20.6849V22.6241ZM117.984 14.0704V12.2561H125.212V14.0704H117.984Z" fill="#FAFAFA" />
                  <path d="M134.613 22.6241V17.632C134.613 17.3056 134.591 16.9441 134.546 16.5473C134.501 16.1505 134.396 15.7696 134.229 15.4048C134.069 15.0336 133.826 14.7296 133.5 14.4928C133.18 14.256 132.744 14.1376 132.194 14.1376C131.9 14.1376 131.608 14.1856 131.32 14.2817C131.032 14.3776 130.77 14.5441 130.533 14.7809C130.303 15.0113 130.117 15.3312 129.976 15.7408C129.836 16.144 129.765 16.6624 129.765 17.296L128.392 16.7104C128.392 15.8272 128.562 15.0272 128.901 14.3104C129.247 13.5936 129.752 13.024 130.418 12.6016C131.084 12.1728 131.903 11.9584 132.876 11.9584C133.644 11.9584 134.277 12.0864 134.776 12.3424C135.276 12.5984 135.672 12.9248 135.967 13.3216C136.261 13.7184 136.479 14.1409 136.62 14.5889C136.76 15.0369 136.85 15.4625 136.888 15.8656C136.933 16.2624 136.956 16.5856 136.956 16.8352V22.6241H134.613ZM127.423 22.6241V8.80005H129.487V16.0768H129.765V22.6241H127.423Z" fill="#FAFAFA" />
                  <path d="M144.174 22.912C143.125 22.912 142.203 22.6849 141.409 22.2305C140.616 21.7761 139.995 21.1457 139.547 20.3393C139.105 19.5329 138.885 18.6049 138.885 17.5553C138.885 16.4225 139.102 15.44 139.537 14.608C139.973 13.7696 140.577 13.12 141.352 12.6592C142.126 12.1984 143.022 11.968 144.04 11.968C145.115 11.968 146.027 12.2208 146.776 12.7264C147.531 13.2256 148.091 13.9328 148.456 14.8481C148.821 15.7633 148.958 16.8416 148.869 18.0832H146.574V17.2384C146.568 16.112 146.369 15.2896 145.979 14.7712C145.589 14.2528 144.974 13.9936 144.136 13.9936C143.189 13.9936 142.485 14.288 142.024 14.8768C141.563 15.4592 141.333 16.3137 141.333 17.4401C141.333 18.4896 141.563 19.3024 142.024 19.8784C142.485 20.4544 143.157 20.7424 144.04 20.7424C144.609 20.7424 145.099 20.6176 145.509 20.368C145.925 20.112 146.245 19.7441 146.469 19.2641L148.753 19.9552C148.357 20.8896 147.742 21.616 146.91 22.1344C146.085 22.6528 145.173 22.912 144.174 22.912ZM140.603 18.0832V16.3361H147.736V18.0832H140.603Z" fill="#FAFAFA" />
                  <path d="M151.011 22.6241V12.2561H153.055V14.7809L152.806 14.4544C152.934 14.1088 153.103 13.7952 153.315 13.5136C153.532 13.2256 153.791 12.9888 154.092 12.8032C154.348 12.6304 154.63 12.496 154.937 12.4C155.251 12.2976 155.571 12.2368 155.897 12.2176C156.223 12.192 156.54 12.2049 156.847 12.2561V14.416C156.54 14.3264 156.185 14.2976 155.782 14.3296C155.385 14.3616 155.027 14.4736 154.707 14.6656C154.387 14.8384 154.124 15.0592 153.919 15.328C153.721 15.5968 153.574 15.904 153.478 16.2496C153.382 16.5888 153.334 16.9569 153.334 17.3536V22.6241H151.011Z" fill="#FAFAFA" />
                  <path d="M75.8867 12.4336V23H73.1426V12.4336H75.8867ZM73.0156 9.69922C73.0156 9.27604 73.1491 8.92773 73.416 8.6543C73.6895 8.37435 74.054 8.23438 74.5098 8.23438C74.972 8.23438 75.3366 8.37435 75.6035 8.6543C75.8704 8.92773 76.0039 9.27604 76.0039 9.69922C76.0039 10.1159 75.8672 10.4642 75.5938 10.7441C75.3268 11.0176 74.9688 11.1543 74.5195 11.1543C74.0573 11.1543 73.6895 11.0176 73.416 10.7441C73.1491 10.4642 73.0156 10.1159 73.0156 9.69922Z" fill="white" />
                </g>
              </svg>

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <AppBarCitySelect />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
            </Box>

            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  </Box>

                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;