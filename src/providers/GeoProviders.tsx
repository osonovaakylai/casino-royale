import { createContext, useContext, useState } from 'react';

export type Geo = 'EN' | 'TR';

export const isGeo = (value: string): value is Geo =>
  value === 'EN' || value === 'TR';

type GeoContextType = {
  geo: Geo;
  setGeo: (geo: Geo) => void;
};

const GeoContext = createContext<GeoContextType | undefined>(undefined);

export const GeoProvider = ({ children }: { children: React.ReactNode }) => {
  const [geo, setGeo] = useState<Geo>('EN');

  return (
    <GeoContext.Provider value={{ geo, setGeo }}>
      {children}
    </GeoContext.Provider>
  );
};

export const useGeo = () => {
  const context = useContext(GeoContext);

  if (!context) {
    throw new Error('No GeoContext found.');
  }

  return context;
};
