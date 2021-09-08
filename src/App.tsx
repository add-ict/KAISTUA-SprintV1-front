import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import {green, orange, red} from '@mui/material/colors';
import AppLayout from "./components/AppLayout";

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppLayout >
                <div>child</div>
            </AppLayout>
        </ThemeProvider>
    );
}