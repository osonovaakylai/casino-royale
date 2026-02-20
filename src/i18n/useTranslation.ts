import { useGeo } from '../context/GeoContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { geo } = useGeo();

  const t = (key: string) => {
    return translations[geo][key] ?? key;
  };

  return { t };
};
