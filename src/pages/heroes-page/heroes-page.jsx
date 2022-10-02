import Error from "../../components/error/error";
import Spinner from "../../components/spinner/spinner";
import ErrorBoundary from "../../components/error-boundary/error-boundary";
import Container from "../../components/container/container";
import Header from "../../components/header/header";
import PanelRandomHero from "../../components/panel-random-hero/panel-random-hero";
import BlockHeroes from "../../components/block-heroes/block-heroes";

import style from "./heroes-page-style.module.sass";

const HeroesPage = () => {
    return (
        <Container>
            <Header/>
            <ErrorBoundary>
                <PanelRandomHero externalStyles={style.panelRandomHeroSection}/>
            </ErrorBoundary>
            <ErrorBoundary>
                <BlockHeroes externalStyles={style.blockHeroesSection}/>
            </ErrorBoundary>
        </Container>
    )
}

export default HeroesPage;