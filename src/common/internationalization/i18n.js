import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from '../locales/pt.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    lng: 'pt',
    fallbackLng: 'pt',
    debug: false,
    ns: ['pt'],
    defaultNS: 'pt',
    interpolation: {escapeValue: false},
    resources: {pt},
    react: {
      wait: false, nsMode: 'default'
    }
  });

export default i18n;
