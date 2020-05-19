import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({children}) => {
    return (
        <div  className={styles.paragraph}>

                {children}
        </div>


    );
};

export default Paragraph;