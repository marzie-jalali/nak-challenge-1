import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        headings: {
          sign_in: "Sign In",
        },
        labels: {
          sign_up_button: "Sign Up",
          username: "Username",
          password: "Password",
          sign_in_button: "Sign In",
          sign_in_button_loading: "Signing In...",
          sign_in_button_success: "Signed In",
          sign_in_button_error: "Sign In Failed",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
