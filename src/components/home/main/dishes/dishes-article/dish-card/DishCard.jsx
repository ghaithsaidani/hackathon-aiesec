import {Stack} from "@mui/material";
import './DishCard.modules.scss'

export const DishCard = (props) => {
	return (
		<Stack className={"dish-card"}>
			<img src={props.src} alt={props.alt}/>
		</Stack>
	)
}