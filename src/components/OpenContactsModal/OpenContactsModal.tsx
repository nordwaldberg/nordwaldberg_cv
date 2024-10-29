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
                       key='github'
                    >
                        <Brackets>github</Brackets>
                    </a>
                    <a href="https://www.linkedin.com/in/nordwaldberg/"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                       key='linkedin'
                    >
                        <Brackets>linkedin</Brackets>
                    </a>
                    <a href="https://t.me/nordwaldberg"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                       key='telegram'
                    >
                        <Brackets>telegram</Brackets>
                    </a>
                    <a href="mailto:nord.waldberg@gmail.com"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                       key='email'
                    >
                        <Brackets>email</Brackets>
                    </a>
                    <a href="https://spb.hh.ru/resume/6fd30a6dff079f42180039ed1f354733796d59"
                       target="_blank"
                       rel="noreferrer noopener"
                       className={styles.contactLink}
                       key='hh'
                    >
                        <Brackets>hh</Brackets>
                    </a>
                </div>
            </div>
        </Modal>
    );
};

export default OpenContactsModal;