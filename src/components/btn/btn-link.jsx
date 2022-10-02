import classNames from "classnames";

import style from "./btn-style.module.sass";

const BtnLink = ({text, href, externalStyles}) => {
    return (
        <a
            href={href}
            className={classNames(style.btn, externalStyles)}>
            {text}
        </a>
    )
}

export default BtnLink;