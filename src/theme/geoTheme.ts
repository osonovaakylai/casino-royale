import { createTheme } from '@mui/material';
import { Geo } from '../context/GeoContext';

export const createThemeByGeo = (geo: Geo) => {
  switch (geo) {
    case 'TR':
      return createTheme({
        palette: {
          primary: {
            main: '#FF8D6B',
            light: '#FFBA47',
          },
        },
      });

    case 'EN':
    default:
      return createTheme({
        palette: {
          primary: {
            main: '#00A6FF',
            light: '#00E0FF',
          },
        },
      });
  }
};
