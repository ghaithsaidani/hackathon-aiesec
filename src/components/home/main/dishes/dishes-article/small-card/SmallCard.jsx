import './SmallCard.modules.scss'
import {Stack, Typography} from "@mui/material";
export const SmallCard = (props) => {
	return (
		<Stack className={"small-card"}>
			<Typography variant={"h4"}>{props.title}</Typography>
			<Typography variant={"h6"}>{props.description}</Typography>
		</Stack>
	)
}