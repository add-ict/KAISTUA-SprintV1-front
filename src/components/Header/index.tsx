import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, languages } from '../../i18n'
import HeaderPresent from "./Present";

type HeaderProps = {
    toggleNav: any;
}

export default function Header({ toggleNav }: HeaderProps) {
    const { t, i18n } = useTranslation();
    const handleChangeLanguage = (lang: Languages) => {
        i18n.changeLanguage(lang);
    }

    return <HeaderPresent handleChangeLanguage={handleChangeLanguage} toggleNav={toggleNav}/>;
}