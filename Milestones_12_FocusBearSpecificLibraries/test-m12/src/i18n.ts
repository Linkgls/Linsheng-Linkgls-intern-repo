// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "../node_modules/react-i18next";

// default language
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

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
