import React from 'react';
import styles from './MainPage.module.scss';
import {Marquee} from '../../components/misc/components';

// interface MainPageProps {
//  children?: React.Child | React.ReactNode;
// }

const MainPage: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>LOMAKINA<br/>ALINA</h1>
            <div className={styles.pointerIcon}></div>
            <Marquee/>
        </div>
    );
};

export default MainPage;