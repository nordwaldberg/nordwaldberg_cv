import React, {useEffect} from 'react';
import styles from './App.module.scss';
import MainPage from '../../pages/MainPage/MainPage';
import Header from '../Header/Header';
import {getBrowserDefaultColorTheme} from '../../utils/getBrowserDefaultColorTheme';
import ContentPage from '../../pages/ContentPage/ContentPage';

export const ThemeContext = React.createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(['dark', () => {}]);
export const MobileContentContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);

const App = () => {
    const [theme, setTheme] = React.useState<string>(getBrowserDefaultColorTheme());
    const [isContentOpen, setContentOpen] = React.useState<boolean>(false);
    const [isMobileVersion, setMobileVersion] = React.useState<boolean>(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery: MediaQueryList = window.matchMedia('(max-width: 1020px)');

        setMobileVersion(mediaQuery.matches);

        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setMobileVersion(e.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <MobileContentContext.Provider value={[isContentOpen, setContentOpen]}>
                <Header/>
                {isContentOpen && isMobileVersion ? <ContentPage/> : <MainPage/>}
                <div className={`${styles.appBackground} ${theme === 'dark' ? styles.darkThemeBackground : styles.lightThemeBackground}`}></div>
            </MobileContentContext.Provider>
        </ThemeContext.Provider>
    );
};

export default App;