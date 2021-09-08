import React from 'react';
import { useTranslation } from 'react-i18next';
import {Box, Button, SwipeableDrawer, Toolbar} from "@mui/material";
import logo from "../../static/logo_ko.png";

type NavigationPresentProps = {
    state: boolean;
    toggleDrawer: any;
    children: React.ReactNode;
}

const anchor = 'left';

export default function NavigationPresent({ children, state, toggleDrawer }: NavigationPresentProps) {
    return (
        <SwipeableDrawer
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <Toolbar>
                    <img src={logo} alt="logo image" style={{height: "40px"}}/>
                </Toolbar>
                {children}
            </Box>
        </SwipeableDrawer>
    )
}