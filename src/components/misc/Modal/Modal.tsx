import React, {useContext} from 'react';
import styles from './Modal.module.scss';
import {ThemeContext} from '../../App/App';

export interface ModalProps {
    visible?: boolean;
    setVisible: (visible: boolean) => void;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({visible, setVisible, children}) => {
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
                {children}
            </div>
        </div>
    );
};

export default Modal;