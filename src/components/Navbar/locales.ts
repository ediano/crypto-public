import { i18n } from '@/config/i18n.config';

export const flag = {
  'en-US': '🇺🇸',
  'pt-BR': '🇧🇷',
};

export const locales = i18n.locales.map((code) => {
  return { code, ico: flag[code] };
});
