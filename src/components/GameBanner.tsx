import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)({
  boxSizing: 'border-box',
  width: '100%',
  flex: 1,
  minHeight: 'clamp(420px, 65vh, 720px)',
  paddingInline: '16px',
  backgroundImage: 'url(/assets/stars-bg.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
});

const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',

  marginTop: 'clamp(200px, 22vh, 250px)',
  marginBottom: 'clamp(200px, 22vh, 250px)',
});

const Logo = styled('img')(({ theme }) => ({
  width: 'clamp(140px, 30vw, 220px)',
  marginBottom: theme.spacing(3),
}));

const SlotImage = styled('img')(({ theme }) => ({
  width: 'clamp(180px, 50vw, 320px)',
  marginBottom: theme.spacing(4),
}));

const PlayButton = styled(Button)({
  width: '100%',
  maxWidth: 360,
  height: 56,
  borderRadius: 12,
  padding: '20px 24px',
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '22px',
  background: 'linear-gradient(90deg, #FF8D6B 0%, #FFBA47 100%)',
  boxShadow: 'none',
  '&:hover': {
    background: 'linear-gradient(90deg, #FF8D6B 0%, #FFBA47 100%)',
    filter: 'brightness(0.98)',
    boxShadow: 'none',
  },
});

type GameBannerProps = {
  onOpen: () => void;
  buttonText: string;
};

const GameBanner = ({ onOpen, buttonText }: GameBannerProps) => {
  return (
    <Wrapper>
      <Content>
        <Logo src="/assets/casino-royale.png" alt="Casino Royale" />
        <SlotImage src="/assets/logo-seven.png" alt="777 logo" />
        <PlayButton variant="contained" onClick={onOpen}>
          {buttonText}
        </PlayButton>
      </Content>
    </Wrapper>
  );
};

export default GameBanner;
