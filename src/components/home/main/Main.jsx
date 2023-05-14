import './Main.modules.scss'
import {Hero} from "./hero/Hero.jsx";
import {Dishes} from "./dishes/Dishes.jsx";
export const Main = () => {
	return (
		<main>
			<Hero/>
			<Dishes/>
		</main>
	)
}