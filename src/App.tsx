import { Button, Container, Typography } from '@mui/material';
import { useGeo } from './context/GeoContext';
import { Select, MenuItem } from '@mui/material';
import { useTranslation } from './i18n/useTranslation';
import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(false);
  const { geo, setGeo } = useGeo();
  const { t } = useTranslation();

  return (
    <Container>
      <Select
        value={geo}
        onChange={(e) => setGeo(e.target.value as any)}
        sx={{ mb: 3 }}
      >
        <MenuItem value="EN">EN</MenuItem>
        <MenuItem value="TR">TR</MenuItem>
      </Select>
      <Typography>{t('title')}</Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        {t('play')}
      </Button>
    </Container>
  );
};

export default App;
