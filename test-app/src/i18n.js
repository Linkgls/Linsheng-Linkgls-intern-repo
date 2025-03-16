// src/i18n.js
import i18n from "../node_modules/i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome!",
      goodMorning: "Good Morning!",
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido!",
      goodMorning: "¡Buenos días!",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue!",
      goodMorning: "Bonjour!",
    },
  },
};

i18n
  .use(initReactI18next) // 将 i18n 传递给 react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    debug: true, // debug mode
    interpolation: {
      escapeValue: false, // XSS protection
    },
  });

export default i18n;
