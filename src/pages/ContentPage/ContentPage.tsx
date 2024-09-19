import React from 'react';
import styles from '../ContentPage/ContentPage.module.scss';
import {AccordionList, ThemeSwitcher} from '../../components/misc/components';
import {downloadCVOptions, openContactsOptions, showCertificatesOptions} from './ContentOptions';

const ContentPage: React.FC = () => {

    return (
        <div className={styles.pageContainer}>
            <div className={styles.accordionListWrapper}>
                <AccordionList title='downloadCV' key='downloadCVAccordion'>
                    {downloadCVOptions}
                </AccordionList>
                <AccordionList title='openContacts' key='openContactsAccordion'>
                    {openContactsOptions}
                </AccordionList>
                <AccordionList title='showCertificates' key='showCertificatesAccordion'>
                    {showCertificatesOptions}
                </AccordionList>
            </div>
            <ThemeSwitcher styleClassName={styles.themeSwitcher} key='themeSwitcherBtn'/>
        </div>
    );
};

export default ContentPage;