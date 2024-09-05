import React, {useContext} from 'react';
import styles from './components.module.scss';
import {ThemeContext} from '../App/App';

interface BracketsProps {
    children?: React.ReactNode | React.ReactElement;
}

interface DropdownProps {
    btnName: string;
    options?: React.ReactNode[] | React.ReactElement[];
}

const Brackets: React.FC<BracketsProps> = ({children}) => {
    return (
        <div className={styles.brackets}>
            <span>[</span>
            {children}
            <span>]</span>
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

    const handleOptionClick = (option: string) => {
        console.log(`Вы выбрали: ${option}`);
    };


    return (
        <div className={styles.dropdown}>
            <Brackets>
                <button className={styles.dropdownBtn}>
                    {btnName}
                </button>
            </Brackets>
            <ul className={`${styles.dropdownOptions} ${styles[theme ? theme : 'dark']}`}>
                <li className={`${styles.option} ${styles[theme ? theme : 'dark']}`} onClick={() => handleOptionClick('1')}>
                    {options ? options[0] : null}
                </li>
                <li className={`${styles.option} ${styles[theme ? theme : 'dark']}`} onClick={() => handleOptionClick('2')}>
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