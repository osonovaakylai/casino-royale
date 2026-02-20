import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { GeoProvider, useGeo } from './context/GeoContext';

import App from './App';
import { createThemeByGeo } from './theme/geoTheme';

const Root = () => {
  const { geo } = useGeo();
  const theme = createThemeByGeo(geo);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <GeoProvider>
    <Root />
  </GeoProvider>,
);
