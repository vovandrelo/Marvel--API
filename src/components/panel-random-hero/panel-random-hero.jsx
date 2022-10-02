import React from "react";
import classNames from "classnames";

import MarvelService from "../../services/marvel-service";

import RandomHero from "../random-hero/random-hero";
import ControlRandomHero from "../control-random-hero/control-random-hero";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

import style from "./panel-random-hero-style.module.sass";


// Компонент представляет собой панель со случайным персонажем:
class PanelRandomHero extends React.Component {
    constructor(props) {
        super(props)
        // Сервис для работы с сервером marvel:
        this.marvelService = new MarvelService()
        this.state = {
            hero: {},       // Текущий герой
            loading: false, // Информация о загрузке
            error: false,   // Информация об ошибке
        }
    }

    // При первоначальной загрузке приложения начинается загрузка случайного героя:
    componentDidMount = () => {
        this.startLoadingHero();
    }

    // Вычисление id нового героя и его загрузка:
    startLoadingHero = () => {
        this.setState({ loading: true, error: false })

        const id = Math.floor(Math.random() * (1010789 - 1009146) + 1009146);

        this.marvelService.getCharacter(id)
        .then(this.successLoadingHero)
        .catch(this.errorLoadingHero)
    }

    // Установка полученного персонажа в состояние компонента:
    successLoadingHero = ( hero ) => {
        this.setState({ hero, loading: false })
    }

    // В случае ошибки информация о ней устанавливается в состояние компонента:
    errorLoadingHero = () => {
        this.setState({ hero: {}, loading: false, error: true })
    }

    render() {
        // В случае ошибки отображаем вместо персонажа соответствующую иконку:
        const error = this.state.error ? <Error externalStyles={style.icon}/> : null;
        // В случае загрузки отображаем вместо персонажа соответствующую иконку:
        const loading = this.state.loading ? <Spinner externalStyles={style.icon}/> : null;
        // Если нет загрузки и не были выявлены ошибки, отображаем персонажа:
        const content = !this.state.error && !this.state.loading ? <RandomHero infoHero={this.state.hero}/> : null;

        return (
            <div className={classNames(style.root, this.props.externalStyles)}>
                {error}
                {loading}
                {content}
                <ControlRandomHero onClickHandler={this.startLoadingHero}/>
            </div>
        )
    }
}

export default PanelRandomHero;