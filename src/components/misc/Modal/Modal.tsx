import React, {useContext} from 'react';
import styles from './Modal.module.scss';
import {ThemeContext} from '../../App/App';

export interface ModalProps {
    visible?: boolean;
    setVisible: (visible: boolean) => void;
    name?: string;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({visible, setVisible, name, children}) => {
    const [theme, setTheme] = useContext(ThemeContext);

    const showWrapper = visible ? `${styles.wrapper} ${styles.wrapperVisible}` : `${styles.wrapper}`;
    const showPopup = visible ? `${styles.popupWrapper} ${styles.popupVisible}` : `${styles.popupWrapper}`;

    return (
        <div className={showWrapper}
             onClick={() => setVisible(false)}
        >
            <div className={`${showPopup} ${styles[theme !== null ? theme : 'dark']}`}
                 onClick={event => event.stopPropagation()}
            >
                <div className={styles.header}>
                    <h2>{name}</h2>
                    <button className={styles.closeBtn} onClick={() => setVisible(false)}>[x]</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;