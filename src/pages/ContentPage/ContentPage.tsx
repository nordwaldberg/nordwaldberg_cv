import React, {useContext} from 'react';
import styles from '../ContentPage/ContentPage.module.scss';
import {AccordionList, Brackets, ThemeSwitcher} from '../../components/misc/components';
import {ThemeContext} from '../../components/App/App';

const ContentPage: React.FC = () => {
    const [theme, setTheme] = useContext(ThemeContext);


    const downloadCVOptions: React.ReactNode[] | React.ReactElement[] = [
        <a href="/static_files/CV_EN.pdf" download="CV_EN.pdf">english</a>,
        <a href="/static_files/CV_RU.pdf" download="CV_RU.pdf">russian</a>,
    ];

    const openContactsOptions: React.ReactNode[] | React.ReactElement[] = [
        <a href="https://github.com/nordwaldberg"
           target="_blank"
           rel="noreferrer noopener"
           key='github'>github</a>,
        <a href="https://www.linkedin.com/in/nordwaldberg/"
           target="_blank"
           rel="noreferrer noopener"
           key='linkedin'>linkedin</a>,
        <a href="https://t.me/nordwaldberg"
           target="_blank"
           rel="noreferrer noopener"
           key='telegram'>telegram</a>,
        <a href="mailto:nord.waldberg@gmail.com"
           target="_blank"
           rel="noreferrer noopener"
           key='email'>email</a>,
        <a href="https://spb.hh.ru/resume/9adcb3c2ff088f64c30039ed1f5a79796f345a"
           target="_blank"
           rel="noreferrer noopener"
           key='hh'>hh</a>,
    ];

    const showCertificatesOptions: React.ReactNode[] | React.ReactElement[] = [
            <a href="/static_files/ya_academy.jpg"
               target="_blank"
               className={styles.text}
               key='ya_academy'
            >
                <p className={styles.title}>{'> Yandex School of UI Development'}</p>
                <p className={styles.date}>October - December 2021</p>
            </a>,
            <a href="/static_files/react_udemy.jpg"
               target="_blank"
               className={styles.text}
               key='react_udemy'
            >
                <p className={styles.title}>{'> Udemy'}</p>
                <p className={styles.date}>November - November 2020</p>
            </a>,
            <a href="/static_files/MDA.pdf"
               target="_blank"
               className={styles.text}
               key='MDA'
            >
                <p className={styles.title}>{'> Moscow Digital Academy [UI/UX]'}</p>
                <p className={styles.date}>April - April 2024</p>
            </a>,
            <a href="/static_files/stepik-linux.pdf"
               target="_blank"
               className={styles.text}
               key='stepik-linux'
            >
                <p className={styles.title}>{'> Stepik'}</p>
                <p className={styles.date}>October - October 2022</p>
            </a>,
    ];

    return (
        <div className={styles.pageContainer}>
            <div className={styles.accordionListWrapper}>
                <AccordionList title='downloadCV'>
                    {downloadCVOptions}
                </AccordionList>
                <AccordionList title='openContacts'>
                    {openContactsOptions}
                </AccordionList>
                <AccordionList title='showCertificates'>
                    {showCertificatesOptions}
                </AccordionList>
            </div>
            <ThemeSwitcher styleClassName={styles.themeSwitcher}/>
        </div>
    );
};

export default ContentPage;