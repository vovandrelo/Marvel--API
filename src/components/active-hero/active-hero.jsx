import BtnLink from "../btn/btn-link";
import FakeHero from "../fake-hero/fake-hero";

import style from "./active-hero-style.module.sass";

// Компонент представляет собой блок с активным персонажем:
const ActiveHero = ( { activeHero } ) => {

    // Если активнй персонаж не выбран, отображаем заглушку:
    if (!activeHero) {
        return <FakeHero/>;
    }

    // Извлекаем из активного персонажа необходимых данных:
    const {name, description, wiki, homepage, thumbnail, comics } = activeHero;

    // Формируем блок, отвечающий за комиксы персонажа. Если их нет отображаем соответствующее сообщение:
    let comicsBlock = <div>Comics are missing</div>;
    if (comics?.length !== 0) {
        comicsBlock =
           <>
                <h2 className={style.title}>Comics:</h2>
                <ul className={style.comics}>
                    {comics?.map((comic, i) => i < 10 ? <li key={i} className={style.item}>{comic}</li> : null)}
                </ul>
           </>
    }

    return (
        <div className={style.root}>
            <div className={style.basicInfo}>
                <div className={style.img}>
                    <img src={thumbnail} alt={name}/>
                </div>
                <div className={style.links}>
                    <h2 className={style.title}>{name}</h2>
                    <BtnLink text="homepage" href={homepage} externalStyles={style.redBtn}/>
                    <BtnLink text="wiki" href={wiki} externalStyles={style.greyBtn}/>
                </div>
            </div>

            <div className={style.description}>{description}</div>
            {comicsBlock}
        </div>
    )
}

export default ActiveHero;