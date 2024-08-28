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

export default Brackets;