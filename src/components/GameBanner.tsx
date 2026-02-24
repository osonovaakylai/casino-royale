import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { starsBg, casinoRoyale, logoSeven } from '../assets';

const Wrapper = styled(Box)({
  boxSizing: 'border-box',
  width: '100%',
  flex: 1,
  minHeight: 'clamp(420px, 65vh, 720px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingInline: 16,
  paddingBlock: 'clamp(199px, 20vh, 240px)',
  backgroundImage: `url(${starsBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
});

const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  maxWidth: 420,
});

const Logo = styled('img')({
  display: 'block',
  width: 'clamp(140px, 30vw, 220px)',
  marginBottom: 48,
});

const SlotImage = styled('img')({
  display: 'block',
  width: 'clamp(180px, 50vw, 320px)',
  marginBottom: 32,
});

const PlayButton = styled(Button)(({ theme }) => {
  const gradient = `linear-gradient(
    90deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.light} 100%
  )`;

  return {
    width: '100%',
    maxWidth: 360,
    height: 56,
    borderRadius: 12,
    padding: '20px 24px',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 22,
    background: gradient,
    boxShadow: 'none',

    '&:hover': {
      background: gradient,
      filter: 'brightness(0.98)',
      boxShadow: 'none',
    },
  };
});

type GameBannerProps = {
  onOpen: () => void;
  buttonText: string;
};

const GameBanner = ({ onOpen, buttonText }: GameBannerProps) => {
  return (
    <Wrapper>
      <Content>
        <Logo src={casinoRoyale} alt="Casino Royale" loading="lazy" />
        <SlotImage src={logoSeven} alt="777 logo" loading="lazy" />
        <PlayButton variant="contained" onClick={onOpen}>
          {buttonText}
        </PlayButton>
      </Content>
    </Wrapper>
  );
};

export default GameBanner;
