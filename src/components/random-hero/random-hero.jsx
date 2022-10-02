import BtnLink from "../btn/btn-link";

import style from "./random-hero-style.module.sass";

// Компонент представляет собой блок со случайным персонажем:
const RandomHero = ({ infoHero: { name, description, homepage, wiki, thumbnail } }) => {
    return (
        <div className={style.root}>
            <div className={style.img}>
                <img src={thumbnail} alt={name} />
            </div>
            <div className={style.descr}>
                <h2 className={style.title}>{name}</h2>
                <div className={style.text}>{description}</div>
                <div className={style.btns}>
                    <BtnLink text="homepage" href={homepage} externalStyles={style.redBtn}/>
                    <BtnLink text="wiki" href={wiki} externalStyles={style.greyBtn}/>
                </div>
            </div>
        </div>
    )
}

export default RandomHero;