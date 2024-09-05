import React, {useContext} from 'react';
import styles from './Header.module.scss';
import {Brackets, Dropdown} from '../misc/components';
import {ThemeContext} from '../App/App';
import OpenContactsModal from '../OpenContactsModal/OpenContactsModal';
import ShowCertificatesModal from '../ShowCertificatesModal/ShowCertificatesModal';


const Header: React.FC = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [isContactsVisible, setContactsVisible] = React.useState(false);
    const [isCertificatesVisible, setCertificatesVisible] = React.useState(false);

    const dropdownOptions: React.ReactNode[] | React.ReactElement[] = [
        <a href="/CV_EN.pdf" download="CV_EN.pdf">english</a>,
        <a href="/CV_RU.pdf" download="CV_RU.pdf">russian</a>,
    ];

    return (
        <div className={styles.header}>
            <a className={`${styles.logo} ${theme === 'dark' ? styles.dark : styles.light}`}></a>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <Dropdown btnName={'downloadCV'} options={dropdownOptions}/>
                </li>
                <li className={styles.link}>
                    <Brackets>
                        <button onClick={() => setContactsVisible(true)}>openContacts</button>
                    </Brackets>
                </li>
                <li className={styles.link}>
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