import './Hero.modules.scss'
import {HeroArticle} from "./hero-article/HeroArticle.jsx";

export const Hero = () => {
    return (
        <section id={"hero"}>
            <HeroArticle/>
        </section>
    )
}