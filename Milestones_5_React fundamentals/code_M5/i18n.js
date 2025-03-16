import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialization of i18next with two languages: English and Spanish
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome!",
        goodMorning: "Good Morning!",
        // Add other English translations here
      },
    },
    es: {
      translation: {
        welcome: "¡Bienvenido!",
        goodMorning: "Buen día",
        // Add other Spanish translations here
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if the current language translation is missing
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;