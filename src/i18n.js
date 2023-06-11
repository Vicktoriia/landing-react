import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './data/locales/en/translation.json';
import translationDE from './data/locales/de/translation.json';
import translationUA from './data/locales/ua/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

    resources: {
      en: {
        translation: translationEN,
      },
      de: {
        translation: translationDE,
      },
      ua: {
        translation: translationUA,
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     lng: 'en',
//     fallbackLng: 'en', // Язык по умолчанию, если перевод не найден
//     debug: true, // Установите значение false в продакшн-окружении
//     detection: {
//       order: ['localStorage', 'cookie'],
//     },
//     backend: {
//       loadPath: './data/locales/{{lng}}/translation.json',
//     },

//     interpolation: {
//       escapeValue: false,
//       keySeparator:",",
//     },

//   });

// export default i18n;
