import React from 'react';
import styles from './components.module.scss';

interface BracketsProps {
    children?: React.ReactNode | React.ReactElement;
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

export {
    Brackets,
    Marquee,
};