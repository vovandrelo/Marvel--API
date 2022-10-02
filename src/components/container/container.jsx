
import styles from "./container-style.module.sass";

// Компонент представляет собой контейнер, в котором располагется основная часть страницы
const Container = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Container;