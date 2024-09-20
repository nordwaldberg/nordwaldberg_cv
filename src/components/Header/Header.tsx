import React, {useContext} from 'react';
import styles from './Header.module.scss';
import {Brackets, Dropdown, ThemeSwitcher} from '../misc/components';
import {MobileContentContext, ThemeContext} from '../App/App';
import OpenContactsModal from '../OpenContactsModal/OpenContactsModal';
import ShowCertificatesModal from '../ShowCertificatesModal/ShowCertificatesModal';


const Header: React.FC = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [isContentOpen, setContentOpen] = useContext(MobileContentContext);

    const [isContactsVisible, setContactsVisible] = React.useState(false);
    const [isCertificatesVisible, setCertificatesVisible] = React.useState(false);

    const dropdownOptions: React.ReactNode[] | React.ReactElement[] = [
        <a href="./static_files/CV_EN.pdf" download="CV_EN.pdf">english</a>,
        <a href="./static_files/CV_RU.pdf" download="CV_RU.pdf">russian</a>,
    ];

    return (
        <div className={styles.header}>
            <a className={`${styles.logo} ${theme === 'dark' ? styles.dark : styles.light}`}></a>
            <ul className={styles.links}>
                <li key='downloadCV' className={styles.link}>
                    <Dropdown btnName={'downloadCV'} options={dropdownOptions}/>
                </li>
                <li key='openContacts' className={styles.link}>
                    <Brackets>
                        <button
                            onClick={() => setContactsVisible(true)}>
                            openContacts
                        </button>
                    </Brackets>
                </li>
                <li key='showCertificates' className={styles.link}>
                    <Brackets>
                        <button
                            onClick={() => setCertificatesVisible(true)}>
                            showCertificates
                        </button>
                    </Brackets>
                </li>
            </ul>
            <button className={`${styles.menuSwitcher} ${isContentOpen ? styles.closed : styles.opened} ${theme === 'dark' ? styles.dark : styles.light}` }
                    onClick={() => setContentOpen(!isContentOpen)}>
            </button>
            <ThemeSwitcher styleClassName={styles.themeSwitcher}/>
            <OpenContactsModal
                visible={isContactsVisible}
                setVisible={setContactsVisible}
            />
            <ShowCertificatesModal
                visible={isCertificatesVisible}
                setVisible={setCertificatesVisible}
            />
        </div>
    );
};

export default Header;