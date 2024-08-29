import React, {useContext} from 'react';
import styles from './Header.module.scss';
import Brackets from '../misc/components';
import {ThemeContext} from '../App/App';


const Header: React.FC = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <div className={styles.header}>
            <a className={`${styles.logo} ${theme === 'dark' ? styles.dark : styles.light}`}></a>
            <ul className={styles.links}>
                <li>
                    <Brackets>
                        downloadCV
                    </Brackets>
                </li>
                <li>
                    <Brackets>
                        openContacts
                    </Brackets>
                </li>
                <li>
                    <Brackets>
                        showCertificates
                    </Brackets>
                </li>
                <li>
                    <Brackets>
                        showProjects
                    </Brackets>
                </li>
            </ul>

            <button className={styles.themeSwitcher} onClick={() => {
                if (setTheme !== null) {
                    theme === 'dark' ? setTheme('light') : setTheme('dark');
                }
            }}>
                <Brackets>
                    {theme === 'dark' ? 'switchToLightTheme' : 'switchToDarkTheme'}
                </Brackets>
            </button>
        </div>
    );
};

export default Header;