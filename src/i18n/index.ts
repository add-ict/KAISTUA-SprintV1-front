import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranEn from './translations/en.json';
import tranKo from './translations/ko.json';

export const languages = [ 'en', 'ko' ] as const;
export type Languages = typeof languages[number]; // 'en' | 'ko'

const resources = {
    en: { translation: tranEn },
    ko: { translation: tranKo },
}

const userLanguage = window.navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language') || userLanguage || 'ko',
    fallbackLng: 'ko',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n;
