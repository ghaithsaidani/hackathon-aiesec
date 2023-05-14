import {CssBaseline, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {DarkPalette, LightPalette} from "./theme/requirements/Palette.jsx";
import {Theme} from "./theme/Theme.jsx";
import {useSelector} from "react-redux";
import {Home} from "./components/home/Home.jsx";
import {isLightState} from "./features/ThemeSlice.jsx";

function App() {
  const lightTheme=useSelector(isLightState)
  return (
    <ThemeProvider
    theme={
      lightTheme
        ? responsiveFontSizes(Theme(LightPalette))
        : responsiveFontSizes(Theme(DarkPalette))
    }
    >
      <CssBaseline />
      <Home/>
    </ThemeProvider>
  )
}

export default App
