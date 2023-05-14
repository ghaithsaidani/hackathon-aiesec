import {Stack, Typography} from "@mui/material";
import {SmallCard} from "./small-card/SmallCard.jsx";
import {Camping} from "../../../../../assets/images/index.js";

export const DishesSecondArticle = () => {
    const cards = [
        {
            title: "12K+",
            description: "Source journey"
        },
        {
            title: "2+",
            description: "Years of Experience"
        }
    ]
    return (
        <article>
            <img src={Camping} alt={"camping"}/>
            <Stack className={"description"}>
                <Typography variant={"h5"}>Our Experience</Typography>
                <Typography variant={"h2"}>Our Stories Have Adventures</Typography>
                <Typography variant={"body1"}>We are experienced in bringing adventures to stay their journey, with all
                    outdoor destinations in the Tunisia as our specialties. Start your adventure now! Nature has already
                    called you!</Typography>
                <ul className={"experience-cards-list"}>
                    {cards.map((item)=>(
                    <li key={item.title}><SmallCard title={item.title} description={item.description}/></li>
                ))}
                </ul>
            </Stack>
        </article>
    )
}