import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useTranslation } from 'react-i18next';

import logo from "../../static/logo_ko.png"

type HeaderPresentProps = {
    handleChangeLanguage: any;
    toggleNav: any;
}

export default function HeaderPresent({ handleChangeLanguage,toggleNav }: HeaderPresentProps) {
    const { t, i18n } = useTranslation();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleNav(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} alt="logo image" style={{height: "40px"}}/>
                    <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                        의결기구 전산관리 시스템
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}/>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

/*
<div>
    <p>{t('hello')}</p>
    { languages.map(lang=> (
        <button key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t(`language_${lang}`)}
        </button>
    ))}
</div>
 */