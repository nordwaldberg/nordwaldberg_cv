import React from 'react';
import styles from './ContentPage.module.scss';

const downloadCVOptions: React.ReactNode[] = [
    <a href="./static_files/CV_EN.pdf" download="CV_EN.pdf" key="CVeng">english</a>,
    <a href="./static_files/CV_RU.pdf" download="CV_RU.pdf" key="CVru">russian</a>,
];

const openContactsOptions: React.ReactNode[] = [
    <a href="https://github.com/nordwaldberg"
       target="_blank"
       rel="noreferrer noopener"
       key="github"
    >github</a>,
    <a href="https://www.linkedin.com/in/nordwaldberg/"
       target="_blank"
       rel="noreferrer noopener"
       key="linkedin"
    >linkedin</a>,
    <a href="https://t.me/nordwaldberg"
       target="_blank"
       rel="noreferrer noopener"
       key="telegram"
    >telegram</a>,
    <a href="mailto:nord.waldberg@gmail.com"
       target="_blank"
       rel="noreferrer noopener"
       key="email"
    >email</a>,
    <a href="https://spb.hh.ru/resume/9adcb3c2ff088f64c30039ed1f5a79796f345a"
       target="_blank"
       rel="noreferrer noopener"
       key="hh"
    >hh</a>,
];

const showCertificatesOptions: React.ReactNode[] = [
    <a href="./static_files/ya_academy.jpg"
       target="_blank"
       className={styles.text}
       key="ya_academy"
    >
        <p className={styles.title}>{'> Yandex School of UI Development'}</p>
        <p className={styles.date}>October - December 2021</p>
    </a>,
    <a href="./static_files/react_udemy.jpg"
       target="_blank"
       className={styles.text}
       key="react_udemy"
    >
        <p className={styles.title}>{'> Udemy'}</p>
        <p className={styles.date}>November - November 2020</p>
    </a>,
    <a href="./static_files/MDA.pdf"
       target="_blank"
       className={styles.text}
       key="MDA"
    >
        <p className={styles.title}>{'> Moscow Digital Academy [UI/UX]'}</p>
        <p className={styles.date}>April - April 2024</p>
    </a>,
    <a href="./static_files/stepik-linux.pdf"
       target="_blank"
       className={styles.text}
       key="stepik-linux"
    >
        <p className={styles.title}>{'> Stepik'}</p>
        <p className={styles.date}>October - October 2022</p>
    </a>,
];

export {
    downloadCVOptions,
    openContactsOptions,
    showCertificatesOptions,
}