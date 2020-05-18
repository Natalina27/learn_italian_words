import React from 'react';
import styles from './HeaderBlock.module.scss';

const HeaderBlock = ({hideBackground = false, children}) => {
    const styleCover = hideBackground? { background: 'none'} : {};

    return(
       <div className={styles.cover} style={styleCover}>
           <div className={styles.wrap}>
           {/*    /!*{title ? <h1 className={styles.header}>{title}</h1> : null}*!/*/}
           {/*    {title && <h1 className={styles.header}>{title}</h1>}*/}
           {/*    <ReactLogoSvg />*/}
           {/*    <p className={styles.decr}> {descr}</p>*/}
               {children}
           </div>
        </div>
    );
};

export default HeaderBlock;