import React from "react";
import classNames from "classnames";

import ListHeroes from "../list-heroes/list-heroes";
import ActiveHero from "../active-hero/active-hero";

import style from "./block-heroes-style.module.sass";

// Компонент представляет собой блок со всеми персонажами и активным:
class BlockHeroes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeHero: null    // Активный персонаж
        }
    }

    // Изменение активного персонажа:
    onChangeActiveHero = (hero) => {
        this.setState({activeHero: hero})
    }

    render() {
        return (
            <div className={classNames(style.root, this.props.externalStyles)}>
                <ListHeroes activeHero={this.state.activeHero} changeActiveHero={this.onChangeActiveHero}/>
                <ActiveHero activeHero={this.state.activeHero}/>
            </div>
        )
    }

}

export default BlockHeroes;