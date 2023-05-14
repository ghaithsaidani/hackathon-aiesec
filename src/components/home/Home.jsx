import './Home.modules.scss'
/*import {Button} from "@mui/material";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changetheme, isLightState} from "../../features/ThemeSlice.jsx";*/
import {Header} from "./header/Header.jsx";
import {Main} from "./main/Main.jsx";
import {Footer} from "./footer/Footer.jsx";
export const Home = () => {
	//const dispatch=useDispatch();
	//const isLight=useSelector(isLightState);
	return (
		<>
			<Header/>
			<Main/>
			<Footer/>
		</>
	)
}