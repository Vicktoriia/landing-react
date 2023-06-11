import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en', // Язык по умолчанию, если перевод не найден
    debug: true, // Установите значение false в продакшн-окружении
    detection: {
      order: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },

    interpolation: {
      escapeValue: false,
      keySeparator:",",
    },

  });

export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import translationEN from './data/';
// import translationDE from './data.de.json';
// import translationUK from './data.uk.json';

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'uk',
//     debug: true,

//     resources: {
//       en: {
//         translation: translationEN,
//       },
//       de: {
//         translation: translationDE,
//       },
//       uk: {
//         translation: translationUK,
//       },
//     },

//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;
