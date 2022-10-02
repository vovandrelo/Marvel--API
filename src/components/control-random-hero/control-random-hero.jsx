import classNames from "classnames";

import Btn from "../btn/btn";

import imgMjolnir from "../../resourses/img/mjolnir.png";
import imgShield from "../../resourses/img/shield.png";
import style from "./control-random-hero-style.module.sass";

// Компонент представляет собой блок с кнопкой выбора случайного персонажа:
const ControlRandomHero = ({ onClickHandler }) => {
    return (
        <div className={style.root}>
            <h2 className={style.title}>Random character for today! <br/> Do you want to get to know him better?</h2>
            <h2 className={style.title}>Or choose another one</h2>
            <img src={imgMjolnir} alt="mjolnir" className={classNames(style.mjolnir)}/>
            <img src={imgShield} alt="shield" className={classNames(style.shield)}/>
            <Btn text="try it" clickHandler={ onClickHandler } externalStyles={classNames(style.btn)}/>
        </div>
    )
}

export default ControlRandomHero;