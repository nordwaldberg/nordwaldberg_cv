import React, {useContext} from 'react';
import styles from './MainPage.module.scss';
import {Marquee} from '../../components/misc/components';
import {MobileContentContext, ThemeContext} from '../../components/App/App';

const MainPage: React.FC = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [isContentOpen, setContentOpen] = useContext(MobileContentContext);

    const mainPage = (
        <>
            <h1 className={styles.title}>LOMAKINA<br/>ALINA</h1>
            <div className={`${styles.pointerIcon} ${styles[theme !== null ? theme : 'dark']}`}></div>
        </>
    );

    const mobile = (
        <>
            Hello!
        </>
    );

    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                {!isContentOpen ? mainPage : mobile}
            </div>
            <Marquee/>
        </div>
    );
};

export default MainPage;