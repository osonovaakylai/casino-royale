import { Geo } from '../providers/GeoProviders';

export const translations: Record<Geo, Record<string, string>> = {
  EN: {
    title: 'Welcome to Casino Royal',
    play: 'OPEN THE GAME',
    download: 'Download Casino',
    downloadDescription: 'Play Min anywhere, anytime',
    install: 'Install App',
    turkish: 'Turkish',
    english: 'English',
    socialMedia: 'Us on social media:',
    only18Plus: 'Only 18+',
    licenseInfo: 'Casino is certified by the Anjouan Gaming Authority',
  },
  TR: {
    title: 'Casino Royal oyununa hoş geldiniz',
    play: 'OYUNU BAŞLAT',
    download: 'Casinoyu indir',
    downloadDescription: 'Her yerde, her zaman oynayın',
    install: 'Uygulamayı yükle',
    turkish: 'Türkçe',
    english: 'İngilizce',
    socialMedia: 'Sosyal medyada biz:',
    only18Plus: 'Sadece 18+',
    licenseInfo:
      'Casino, Anjouan Gaming Authority tarafından sertifikalandırılmıştır',
  },
};
