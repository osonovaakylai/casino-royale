import { useState, useCallback } from 'react';
import { Box, GlobalStyles } from '@mui/material';
import styled from '@emotion/styled';
import { useTranslation } from './i18n/useTranslation';
import GameBanner from './components/GameBanner';
import GameFooter from './components/GameFooter';
import GameModal from './components/GameModal';

const globalStyles = {
  html: {
    margin: 0,
    padding: 0,
    height: '100%',
  },
  body: {
    margin: 0,
    padding: 0,
    height: '100%',
    overflowX: 'hidden',
    overscrollBehavior: 'none',
    fontFamily:
      'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    '*': {
      boxSizing: 'border-box',
    },
  },
  '#root': {
    height: '100%',
    margin: 0,
    padding: 0,
  },
};

const AppWrapper = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const App = () => {
  const [isGameOpen, setGameOpen] = useState(false);
  const { t } = useTranslation();

  const openGame = useCallback(() => {
    setGameOpen(true);
  }, []);

  const closeGame = useCallback(() => {
    setGameOpen(false);
  }, []);

  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <AppWrapper>
        <GameBanner onOpen={openGame} buttonText={t('play')} />
        <GameFooter />
      </AppWrapper>
      <GameModal open={isGameOpen} onClose={closeGame} />
    </>
  );
};

export default App;
