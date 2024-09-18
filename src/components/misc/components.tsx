import React, {Children, useContext} from 'react';
import styles from './components.module.scss';
import {ThemeContext} from '../App/App';
import header from '../Header/Header';

interface BracketsProps {
    size?: string;
    children?: React.ReactNode | React.ReactElement;
}

interface DropdownProps {
    btnName: string;
    options?: React.ReactNode[] | React.ReactElement[];
}

interface ThemeSwitcherProps {
    styleClassName: string;
}

interface AccordionListProps {
    // accordionIsOpen: boolean;
    // setAccordionIsOpen: (accordionIsOpen: boolean) => void;
    title: string;
    children: React.ReactNode | React.ReactElement;
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

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({styleClassName}) => {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <button className={styleClassName}
                onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
            <Brackets>
                {theme === 'dark' ? 'switchToLightTheme' : 'switchToDarkTheme'}
            </Brackets>
        </button>
    );
}

const AccordionList: React.FC<AccordionListProps> = ({title, children}) => {
    const [theme, setTheme] = useContext(ThemeContext);
    const [accordionIsOpen, setAccordionIsOpen] = React.useState(false);

    return (
        <div className={styles.accordionList}>
            <Brackets size='1.8rem'>
                <button className={styles.accordionBtn}
                        onClick={() => setAccordionIsOpen(!accordionIsOpen)}>
                    {title}
                </button>
            </Brackets>
            <ul className={`${styles.accordionContent} ${accordionIsOpen ? null : styles.close}`}>
                {Children.map(children, child => <li className={`${styles.accordionOption} ${styles[theme ? theme : 'dark']}`}>{child}</li>)}
            </ul>
        </div>
    );
}

export {
    Brackets,
    Marquee,
    Dropdown,
    ThemeSwitcher,
    AccordionList,
};