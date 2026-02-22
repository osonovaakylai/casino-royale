import { createTheme } from '@mui/material';
import { Geo } from '../providers/GeoProviders';
import { GEO_PALETTES } from './palettes';

export const createThemeByGeo = (geo: Geo) =>
  createTheme({
    palette: GEO_PALETTES[geo] ?? GEO_PALETTES.EN,
  });
