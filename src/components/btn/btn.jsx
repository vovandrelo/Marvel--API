import classNames from "classnames";

import style from "./btn-style.module.sass";

const Btn = ({text = "", clickHandler = null, externalStyles = null}) => {
    return (
        <button
            onClick={clickHandler}
            className={classNames(style.btn, externalStyles)}>
            {text}
        </button>
    )
}

export default Btn;