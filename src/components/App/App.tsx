import React, {useEffect} from 'react';
import styles from './App.module.scss';
import MainPage from '../../pages/MainPage/MainPage';
import Header from '../Header/Header';
import {getBrowserDefaultColorTheme} from '../../utils/getBrowserDefaultColorTheme';

export const ThemeContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>] | null[]>([null, null]);

const App = () => {
    const [theme, setTheme] = React.useState<string>(getBrowserDefaultColorTheme());
    console.log(getBrowserDefaultColorTheme(), theme)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <Header/>
            <MainPage/>
            <div className={`${styles.appBackground} ${ theme === 'dark' ? styles.darkThemeBackground : styles.lightThemeBackground}`}></div>
        </ThemeContext.Provider>
    );
};

export default App;