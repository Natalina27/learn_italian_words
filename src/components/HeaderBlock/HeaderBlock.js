import React from 'react';
import styles from './HeaderBlock.module.scss';
import {ReactComponent as ReactLogoSvg } from '../../logo.svg';

const HeaderBlock = () => {
    return(
       <div className={styles.cover}>
           <div className={styles.wrap}>
               <h1 className={styles.header}>Learn English words online</h1>
               <ReactLogoSvg />
               <p className={styles.decr}> Use fill out cards and replenish your vocabulary</p>
           </div>
       </div>
    );
};

export default HeaderBlock;