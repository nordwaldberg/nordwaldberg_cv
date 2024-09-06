import React from 'react';
import Modal, {ModalProps} from '../misc/Modal/Modal';
import styles from './OpenContactsModal.module.scss';
import {Brackets} from '../misc/components';

const OpenContactsModal: React.FC<ModalProps> = ({visible, setVisible}) => {
    return (
        <Modal visible={visible} setVisible={setVisible} name={'[ contacts ]'}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <a href="https://github.com/nordwaldberg"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                    >
                        <Brackets>github</Brackets>
                    </a>
                    <a href="https://www.linkedin.com/in/nordwaldberg/"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                    >
                        <Brackets>linkedin</Brackets>
                    </a>
                    <a href="https://t.me/nordwaldberg"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                    >
                        <Brackets>telegram</Brackets>
                    </a>
                    <a href="mailto:nord.waldberg@gmail.com"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                    >
                        <Brackets>email</Brackets>
                    </a>
                    <a href="https://spb.hh.ru/resume/9adcb3c2ff088f64c30039ed1f5a79796f345a"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                    >
                        <Brackets>hh</Brackets>
                    </a>
                </div>
            </div>
        </Modal>
    );
};

export default OpenContactsModal;