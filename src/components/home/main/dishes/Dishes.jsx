import {DishesSecondArticle} from "./dishes-article/DishesSecondArticle.jsx";
import './Dishes.modules.scss'
import {DishesFirstArticle} from "./dishes-article/DishesFirstArticle.jsx";

export const Dishes = () => {
	return (
		<section id={"dishes"}>
			<DishesFirstArticle/>
			<DishesSecondArticle/>
		</section>
	)
}