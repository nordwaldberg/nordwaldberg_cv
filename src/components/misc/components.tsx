import React, {useContext} from 'react';
import styles from './components.module.scss';
import {ThemeContext} from '../App/App';

interface BracketsProps {
    size?: string;
    children?: React.ReactNode | React.ReactElement;
}

interface DropdownProps {
    btnName: string;
    options?: React.ReactNode[] | React.ReactElement[];
}

const Brackets: React.FC<BracketsProps> = ({size, children}) => {
    return (
        <div className={styles.brackets}>
            <span style={{fontSize: `${size}`}}>[</span>
            {children}
            <span style={{fontSize: `${size}`}}>]</span>
        </div>
    );
};

const marqueeText = `Frontend // UI/UX Design // Illustration // Graphic Design // Frontend // UI/UX Design // Illustration // Graphic Design // Frontend // UI/UX Design // Illustration // Graphic Design // Frontend // UI/UX Design // Illustration // Graphic Design // Frontend // UI/UX Design // Illustration // Graphic Design // Frontend // UI/UX Design // Illustration // Graphic Design // Frontend // UI/UX Design // Illustration // Graphic Design // Frontend // UI/UX Design // Illustration // Graphic Design //`;

const Marquee: React.FC = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeWrapper}>
                <div className={styles.marquee}>
                    <span>{marqueeText}</span>
                </div>
            </div>
        </div>
    );

}

const Dropdown: React.FC<DropdownProps> = ({btnName, options}) => {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <div className={styles.dropdown}>
            <Brackets>
                <button className={styles.dropdownBtn}>
                    {btnName}
                </button>
            </Brackets>
            <ul className={`${styles.dropdownOptions} ${styles[theme ? theme : 'dark']}`}>
                <li className={`${styles.option} ${styles[theme ? theme : 'dark']}`}>
                    {options ? options[0] : null}
                </li>
                <li className={`${styles.option} ${styles[theme ? theme : 'dark']}`}>
                    {options ? options[1] : null}
                </li>
            </ul>

        </div>
    );
}

export {
    Brackets,
    Marquee,
    Dropdown,
};