import { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { GeoProvider, useGeo } from './providers/GeoProviders';
import { createThemeByGeo } from './theme/createThemeByGeo';
import App from './App';

const Root = () => {
  const { geo } = useGeo();
  const theme = useMemo(() => createThemeByGeo(geo), [geo]);

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
