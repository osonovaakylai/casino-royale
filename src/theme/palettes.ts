import { Geo } from '../providers/GeoProviders';

type GeoPalette = {
  primary: {
    main: string;
    light: string;
  };
};

export const GEO_PALETTES: Record<Geo, GeoPalette> = {
  EN: {
    primary: {
      main: '#00A6FF',
      light: '#00E0FF',
    },
  },
  TR: {
    primary: {
      main: '#FF8D6B',
      light: '#FFBA47',
    },
  },
};
