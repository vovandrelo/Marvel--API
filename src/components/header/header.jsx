import classNames from 'classnames';

import style from "./header-style.module.sass";

// Компонент представляет собой "шапку" сайта:
const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.title}><span>Marvel</span> information portal</h1>
            <nav className={style.navigate}>
                <ul className={style.list}>
                    <li><a className={classNames(style.link, style.active)} href="#">Characters</a></li>
                    /
                    <li><a className={classNames(style.link)} href="#">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;