import React, {useEffect} from 'react';
import styles from './App.module.scss';
import MainPage from '../../pages/MainPage/MainPage';
import Header from '../Header/Header';
import {getBrowserDefaultColorTheme} from '../../utils/getBrowserDefaultColorTheme';

export const ThemeContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['dark', () => {}]);
export const MobileContentContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);

const App = () => {
    const [theme, setTheme] = React.useState<string>(getBrowserDefaultColorTheme());
    const [isContentOpen, setContentOpen] = React.useState<boolean>(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <MobileContentContext.Provider value={[isContentOpen, setContentOpen]}>
                <Header/>
                <MainPage/>
                <div
                    className={`${styles.appBackground} ${theme === 'dark' ? styles.darkThemeBackground : styles.lightThemeBackground}`}></div>
            </MobileContentContext.Provider>
        </ThemeContext.Provider>
    );
};

export default App;