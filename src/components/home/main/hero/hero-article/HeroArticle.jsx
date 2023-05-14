import {Stack, Typography} from "@mui/material";
import {HeroImage} from "../../../../../assets/images/index.js";

export const HeroArticle = () => {
    return (
        <article>
            <Stack className={"description"}>
                <Typography variant={"h1"}>Let your curiosity guide you</Typography>
                <Typography variant={"body1"}>
                    Welcome to Tunisia! We are your go-to source for all things travel. Whether you&apos;re a
                    seasoned
                    traveler or a first-timer, we&apos;re here to help you plan your next adventure.
                </Typography>
            </Stack>
            <aside><img src={HeroImage} alt={"hero aside"}/></aside>
        </article>
    )
}