import { createTheme } from '@mui/material';
import { Geo } from '../context/GeoContext';

export const createThemeByGeo = (geo: Geo) => {
  switch (geo) {
    case 'TR':
      return createTheme({
        palette: {
          primary: {
            main: '#d32f2f',
          },
          background: {
            default: '#fff5f5',
          },
        },
      });

    case 'EN':
    default:
      return createTheme({
        palette: {
          primary: {
            main: '#1976d2',
          },
          background: {
            default: '#f5f7fa',
          },
        },
      });
  }
};
