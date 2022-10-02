import Skeleton from '@mui/material/Skeleton';

import style from "./fake-hero-style.module.sass";

// Компонент представляет заглушку. Устанавливается в случаях, когда персонаж не выбран или загружается
const FakeHero = () => {
    return (
        <div className={style.skeleton}>
            <div className={style.avaBlock}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={326} height={16} />
            </div>
            <Skeleton className={style.descr} variant="rectangular" width={375} height={35} />
            <Skeleton className={style.descr} variant="rectangular" width={375} height={35} />
            <Skeleton className={style.descr} variant="rectangular" width={375} height={35} />
        </div>
    )
}

export default FakeHero;