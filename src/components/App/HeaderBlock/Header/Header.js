import React from 'react';
import styles from './Header.module.scss'

const Header = ({children}) => {
    return<h1 className={styles.header}>{children}</h1>;
};

export default Header;