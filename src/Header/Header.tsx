import React, {useEffect} from 'react';
import styles from './Header.module.scss';
import Brackets from '../components/components';

const Header: React.FC = () => {
    const [theme, setTheme] = React.useState<string>('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

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

            <button onClick={() => {
                theme === 'dark' ? setTheme('light') : setTheme('dark');
            }}>
                <Brackets>
                    {theme === 'dark' ? 'switchToLightTheme' : 'switchToDarkTheme'}
                </Brackets>
            </button>
        </div>
    );
};

export default Header;