import {Button} from "@mui/material";
import {Logo} from "../../../../assets/images/index.js";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const Navbar = () => {
	const navbarList=["home","popular dishes","monuments","arts and crafts"];
	return (
		<nav>
			<ul>
				<li><img src={Logo} alt={"logo"}/></li>
				{
					navbarList.map((item)=>(
						<li key={item}><a>{item}</a></li>
					))
				}
				<li><Button variant={"outlined"} endIcon={<AccountCircleOutlinedIcon />}>Connecter</Button></li>
			</ul>
		</nav>
	)
}