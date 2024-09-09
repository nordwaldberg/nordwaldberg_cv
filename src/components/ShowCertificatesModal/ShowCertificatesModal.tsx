import React from 'react';
import Modal, {ModalProps} from '../misc/Modal/Modal';
import styles from './ShowCertificatesModal.module.scss';
import {Brackets} from '../misc/components';

const ShowCertificatesModal: React.FC<ModalProps> = ({visible, setVisible}) => {

    return (
        <Modal visible={visible} setVisible={setVisible} name={'[ certificates ]'}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Brackets size={'2.7rem'}>
                        <a href="/static_files/ya_academy.jpg"
                           target="_blank"
                           className={styles.text}
                           key='ya_academy'
                        >
                            <p className={styles.title}>{'> Yandex School of UI Development'}</p>
                            <p className={styles.date}>October - December 2021</p>
                        </a>
                    </Brackets>
                    <Brackets size={'2.7rem'}>
                        <a href="/static_files/react_udemy.jpg"
                           target="_blank"
                           className={styles.text}
                           key='react_udemy'
                        >
                            <p className={styles.title}>{'> Udemy'}</p>
                            <p className={styles.date}>November - November 2020</p>
                        </a>
                    </Brackets>
                    <Brackets size={'2.7rem'}>
                        <a href="/static_files/MDA.pdf"
                           target="_blank"
                           className={styles.text}
                           key='MDA'
                        >
                            <p className={styles.title}>{'> Moscow Digital Academy [UI/UX]'}</p>
                            <p className={styles.date}>April - April 2024</p>
                        </a>
                    </Brackets>
                    <Brackets size={'2.7rem'}>
                        <a href="/static_files/stepik-linux.pdf"
                           target="_blank"
                           className={styles.text}
                           key='stepik-linux'
                        >
                            <p className={styles.title}>{'> Stepik'}</p>
                            <p className={styles.date}>October - October 2022</p>
                        </a>
                    </Brackets>
                </div>
            </div>
        </Modal>
    );
};

export default ShowCertificatesModal;