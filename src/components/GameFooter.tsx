import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGeo, Geo, isGeo } from '../providers/GeoProviders';
import { useTranslation } from '../i18n/useTranslation';

import {
  characterImg,
  casinoRoyale,
  downloadIcon,
  icon18plus,
  licenseLogo,
  instagramIcon,
  telegramIcon,
  xIcon,
  mailIcon,
  englishFlag,
  turkishFlag,
} from '../assets';

const TABLET_MEDIA = '@media (min-width:768px)';
const DESKTOP_MEDIA = '@media (min-width:1440px)';

const text16 = {
  fontSize: 16,
  lineHeight: '22px',
  letterSpacing: 0,
};

const GameFooterWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  background: 'linear-gradient(180deg, #06225D 0%, #02011F 100%)',
  padding: '60px 28px 48px',
  color: '#BABABA',

  '@media (min-width: 480px)': {
    paddingLeft: 45,
    paddingRight: 45,
  },

  [TABLET_MEDIA]: {
    padding: '60px 32px',
  },
});
const Inner = styled(Box)({
  width: '100%',
  maxWidth: 1920,
  margin: '0 auto',

  [TABLET_MEDIA]: {
    margin: 0,
  },
});
const Layout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 52,
  [DESKTOP_MEDIA]: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 20,
  },
}));

const CharacterWrapper = styled(Box)({
  display: 'none',
  [DESKTOP_MEDIA]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    order: 1,
  },
});
const Character = styled('img')({
  width: 240,

  '@media (min-width:1920px)': {
    width: 288,
  },
});
const DownloadCard = styled(Box)(({ theme }) => ({
  display: 'grid',
  justifyItems: 'center',
  gap: theme.spacing(2.25),
  border: '1px dashed #f8a64c',
  borderRadius: 16,
  padding: theme.spacing(2.25),
  textAlign: 'center',
  width: '100%',
  maxWidth: 320,

  '@media (min-width: 480px)': {
    maxWidth: 390,
  },

  [DESKTOP_MEDIA]: {
    order: 2,
    marginLeft: 20,
  },
}));
const Logo = styled('img')({
  width: 175,
});
const RightCol = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 60,
  width: '100%',
  [DESKTOP_MEDIA]: {
    width: 'auto',
    justifyContent: 'space-between',
    order: 4,
    marginLeft: 'auto',
  },
}));

const Compliance = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  alignItems: 'center',
  textAlign: 'center',
  opacity: 0.75,
  width: '100%',

  [TABLET_MEDIA]: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },

  [DESKTOP_MEDIA]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 'auto',
    textAlign: 'left',
    order: 3,
    marginLeft: 20,
  },
}));
const ComplianceRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  [TABLET_MEDIA]: {
    width: 287,
  },
  [DESKTOP_MEDIA]: {
    flexDirection: 'row',
    width: 357,
    alignItems: 'center',
  },
}));
const SocialBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  alignItems: 'center',
  width: '100%',

  [DESKTOP_MEDIA]: {
    alignItems: 'flex-end',
  },
}));

const SocialMedia = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  justifyContent: 'center',
}));
const LangSelect = styled(Select)(() => ({
  width: '100%',
  maxWidth: 289,
  height: 56,
  borderRadius: 8,
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',

  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255,255,255,0.1)',
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255,255,255,0.1)',
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255,255,255,0.1)',
  },

  '& .MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    color: '#fff',
  },

  '& .MuiSvgIcon-root': {
    color: '#fff',
  },

  [DESKTOP_MEDIA]: {
    marginTop: 40,
  },
}));
const LangMenuItem = styled(MenuItem)({
  color: '#fff',
  background: 'transparent',

  '&:hover': {
    background: 'rgba(255,255,255,0.08)',
  },

  '&.Mui-selected': {
    background: 'rgba(255,255,255,0.12)',
  },
});

const FlagIcon = styled('img')(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: theme.spacing(1.5),
}));

const DownloadTitle = styled(Typography)(() => ({
  fontSize: 32,
  fontWeight: 800,
  lineHeight: '40px',
  color: '#fff',
}));

const SocialMediaText = styled(Typography)(() => ({
  ...text16,
  fontWeight: 400,
  color: '#BABABA',
}));

const DownloadDescription = styled(Typography)(() => ({
  ...text16,
  fontWeight: 600,
  color: '#BABABA',
  textAlign: 'center',
}));

const AgeRestrictionText = styled(Typography)(() => ({
  ...text16,
  fontWeight: 400,
  color: 'rgba(251, 251, 251, 0.7)',
}));

const LicenseText = styled(Typography)(() => ({
  ...text16,
  fontWeight: 400,
  textAlign: 'center',
  color: 'rgba(251, 251, 251, 0.7)',
  [DESKTOP_MEDIA]: {
    textAlign: 'left',
  },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  width: 250,
  minHeight: 56,
  borderRadius: 12,
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  gap: theme.spacing(1),
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '22px',
  background: 'linear-gradient(90deg, #FF8D6B 0%, #FFBA47 100%)',
  boxShadow: 'none',

  '& .MuiButton-startIcon img': {
    width: 24,
    height: 24,
    objectFit: 'contain',
  },

  '&:hover': {
    background: 'linear-gradient(90deg, #FF8D6B 0%, #FFBA47 100%)',
    opacity: 0.95,
    boxShadow: 'none',
  },
}));

const SOCIAL_LINKS = [
  { href: 'https://instagram.com', icon: instagramIcon, altText: 'Instagram' },
  { href: 'https://telegram.com', icon: telegramIcon, altText: 'Telegram' },
  { href: 'https://x.com', icon: xIcon, altText: 'X' },
  { href: 'https://mail.com', icon: mailIcon, altText: 'Mail' },
];

const LANG_OPTIONS = [
  { value: 'EN', labelKey: 'english', flag: englishFlag, alt: 'English' },
  { value: 'TR', labelKey: 'turkish', flag: turkishFlag, alt: 'Turkish' },
];

const GameFooter = () => {
  const { geo, setGeo } = useGeo();
  const { t } = useTranslation();

  const handleGeoChange = (
    e: React.ChangeEvent<HTMLInputElement> | { target: { value: unknown } },
  ) => {
    const value = e.target.value;

    if (isGeo(String(value))) {
      setGeo(value as Geo);
    }
  };

  return (
    <GameFooterWrapper>
      <Inner>
        <Layout>
          <CharacterWrapper>
            <Character src={characterImg} alt="Character" />
          </CharacterWrapper>
          <DownloadCard>
            <Logo src={casinoRoyale} alt="Casino Royale" />
            <DownloadTitle>{t('download')}</DownloadTitle>
            <DownloadDescription>
              {t('downloadDescription')}
            </DownloadDescription>
            <DownloadButton
              variant="contained"
              startIcon={<img src={downloadIcon} alt="Download icon" />}
            >
              {t('install')}
            </DownloadButton>
          </DownloadCard>
          <RightCol>
            <LangSelect
              value={geo}
              onChange={handleGeoChange}
              MenuProps={{
                PaperProps: {
                  sx: {
                    mt: 1,
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: 'none',
                  },
                },
                MenuListProps: {
                  sx: { padding: 0 },
                },
              }}
            >
              {LANG_OPTIONS.map((lang) => (
                <LangMenuItem key={lang.value} value={lang.value}>
                  <FlagIcon src={lang.flag} alt={lang.alt} />
                  {t(lang.labelKey)}
                </LangMenuItem>
              ))}
            </LangSelect>
            <SocialBlock>
              <SocialMediaText>{t('socialMedia')}</SocialMediaText>
              <SocialMedia>
                {SOCIAL_LINKS.map((item) => (
                  <Box
                    key={item.href}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      transition: 'opacity .2s',
                      '&:hover': { opacity: 0.85 },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      width={52}
                      alt={item.altText}
                    />
                  </Box>
                ))}
              </SocialMedia>
            </SocialBlock>
          </RightCol>
          <Compliance>
            <ComplianceRow>
              <Box component="img" src={icon18plus} width={58} />
              <AgeRestrictionText>{t('only18Plus')}</AgeRestrictionText>
            </ComplianceRow>
            <ComplianceRow>
              <Box component="img" src={licenseLogo} width={58} />
              <LicenseText>{t('licenseInfo')}</LicenseText>
            </ComplianceRow>
          </Compliance>
        </Layout>
      </Inner>
    </GameFooterWrapper>
  );
};

export default GameFooter;
