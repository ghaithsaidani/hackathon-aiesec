import {createTheme} from "@mui/material";
import {TypographyStyle} from "./requirements/TypographyStyle.jsx";

export const Theme = (palette) => createTheme(
    {
        palette: {...palette},
        typography:{...TypographyStyle},
        spacing: (factor) => `${factor}px`,
        breakpoints: {
            values: {
                xs: 0,
                sm: 650,
                md: 750,
                lg: 1200,
                xl: 1536,
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: () => ({

                    }
                ),
            },
        }
    }
)