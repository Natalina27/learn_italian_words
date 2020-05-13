import React from 'react';
import styles from './HeaderBlock.module.css';

const HeaderBlock = () => {
    return(
       <div>
           <div>
               <h1 className={styles.header}>Learn English words online</h1>
               <p> Use fill out cards and replenish your vocabulary</p>
           </div>
       </div>
    );
};

export default HeaderBlock;