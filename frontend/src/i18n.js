import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import en from "./locale/en.json";
import ar from "./locale/ar.json";
const resources = {
  en: {
    translation: en
  },
  ar: {
    translation:  ar
  }
};

i18n
.use(languageDetector)
  .use(initReactI18next)  
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    },
    react: {
      useSuspense: false
    }
  });

  export default i18n;