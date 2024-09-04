import React, {useContext} from 'react';
import styles from './Header.module.scss';
import {Brackets} from '../misc/components';
import {ThemeContext} from '../App/App';
import OpenContactsModal from '../OpenContactsModal/OpenContactsModal';
import ShowCertificatesModal from '../ShowCertificatesModal/ShowCertificatesModal';


const Header: React.FC = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [isContactsVisible, setContactsVisible] = React.useState(false);
    const [isCertificatesVisible, setCertificatesVisible] = React.useState(false);

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
                        <button onClick={() => setContactsVisible(true)}>openContacts</button>
                    </Brackets>
                </li>
                <li>
                    <Brackets>
                        <button onClick={() => setCertificatesVisible(true)}>showCertificates</button>
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
            <OpenContactsModal visible={isContactsVisible} setVisible={setContactsVisible}/>
            <ShowCertificatesModal visible={isCertificatesVisible} setVisible={setCertificatesVisible}/>
        </div>
    );
};

export default Header;