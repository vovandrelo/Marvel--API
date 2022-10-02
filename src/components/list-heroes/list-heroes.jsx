import React from "react";
import classNames from "classnames";

import MarvelService from "../../services/marvel-service";

import Btn from "../btn/btn";
import Error from "../error/error";
import Spinner from "../spinner/spinner";

import style from "./list-heroes-style.module.sass";

// Компонент представляет собой блок со списком всем персонажей:
class ListHeroes extends React.Component {
    constructor(props) {
        super(props)
        // Сервис для работы с сервером marvel:
        this.marvelService = new MarvelService()
        this.state = {
            heroes: [],         // Герои
            loading: false,     // Статус загрузки
            error: false,       // Статус ошибки
            offset: 210,        // Загружаемые герои
            maxLoad: false,     // Указывает, что все герои загружены
        }
    }

    // При первоначальной загрузке приложения начинается загрузка героев:
    componentDidMount = () => {
        this.startLoadingHeroes();
    }

    // Загрузка новых героев:
    startLoadingHeroes = () => {
        this.setState({ loading: true })

        this.marvelService.getAllCharacters(this.state.offset)
        .then(this.successLoadingHeroes)
        .catch(this.errorLoadingHeroes)
    }

    // Установка полученных героев в состояние компонента:
    successLoadingHeroes = (heroes) => {
        this.setState((state) => ({
            heroes: [...state.heroes, ...heroes],
            loading: false,
            offset: state.offset + 9,
            maxLoad: heroes.length < 9 ? true : false,
        }))
    }

    // В случае ошибки информация о ней устанавливается в состояние компонента:
    errorLoadingHeroes = () => {
        this.setState({ heroes: {}, loading: false, error: true })
    }

    render() {
        // В случае ошибки отображаем вместо персонажа соответствующую иконку:
        const error = this.state.error && <Error externalStyles={style.icon}/>;
        // В случае загрузки отображаем вместо персонажа соответствующую иконку:
        const loading = this.state.loading && <Spinner externalStyles={style.icon}/>;

        // Если нет ошибки, отображаем персонажей:
        const list = 
            !this.state.error &&
            <ul className={style.list}>
                {this.state.heroes.map(hero => 
                    <li
                        className={classNames(style.item, { [style.active]: this.props.activeHero?.id === hero.id})}
                        key={hero.id}
                        onClick={() => this.props.changeActiveHero(hero)}
                    >
                        <div className={style.img}>
                            <img src={hero.thumbnail} alt={hero.name} />
                        </div>
                        <div className={style.text}>{hero.name}</div>
                    </li>
                )}
            </ul>

        // Если нет ошибки, не загрузки и зружены ещё не все герои, то отображаем кнопку доп. загрузки:
        const btn =
            !this.state.loading &&
            !this.state.error &&
            !this.state.maxLoad &&
            <Btn
                text="load more"
                clickHandler={this.startLoadingHeroes}
                externalStyles={style.btn}
            />

        return (
            <div className={style.root}>
                {error}
                {list}
                {loading}
                {btn}
            </div>
        )
    }
}

export default ListHeroes;