import {Brik, Couscous, Droa, HrissaHlowa, Lablabi, Tajine} from "../../../../../assets/images/index.js";
import {DishSwiper} from "./swiper/DishSwiper.jsx";

export const DishesFirstArticle = () => {
	const dishes=[
		{
			src:Couscous,
			alt:"couscous"
		},
		{
			src:Brik,
			alt:"brik"
		},
		{
			src:Tajine,
			alt:"tajine"
		},
		{
			src:Lablabi,
			alt:"lablabi"
		},
		{
			src:HrissaHlowa,
			alt:"hrissa hlowa"
		},
		{
			src:Droa,
			alt:"droa"
		}
	]
	return (
		<article>
			<DishSwiper dishes={dishes}/>
		</article>
	)
}