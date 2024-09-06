import React, {useContext} from 'react';
import styles from './MainPage.module.scss';
import {Marquee} from '../../components/misc/components';
import {ThemeContext} from '../../components/App/App';

// interface MainPageProps {
//  children?: React.Child | React.ReactNode;
// }

const MainPage: React.FC = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                <h1 className={styles.title}>LOMAKINA<br/>ALINA</h1>
                <div className={`${styles.pointerIcon} ${styles[theme !== null ? theme : 'dark']}`}></div>
            </div>
            <Marquee/>
        </div>
    );
};

export default MainPage;