import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Язык по умолчанию
    debug: true, // Включить отладку

    interpolation: {
      escapeValue: false, // Не экранировать строки
    },
  });

export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// import translationEN from './data.en.json';
// import translationDE from './data.de.json';
// import translationUK from './data.uk.json';

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
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
