import {createTheme} from "@mui/material/styles";
import "./styles/fonts.css"

const themeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#79b989',
        },
        secondary: {
            main: '#0082AA',
        },
        info: {
            main: '#d1cf02',
        },
        success: {
            main: '#46c14c',
        },
    },
    typography: {
        fontFamily: '"Kanit", "Helvetica", "Arial", sans-serif',
        body1: {
            fontFamily: '"Abel", "Helvetica", "Arial", sans-serif',
        },
        body2: {
            fontFamily: '"Abel", "Helvetica", "Arial", sans-serif',
        },
        caption: {
            fontFamily: '"Kanit", "Helvetica", "Arial", sans-serif',
        },
    },
};

export default createTheme(themeOptions);