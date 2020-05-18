import React from 'react';
import styles from './Header.module.scss'

const Header = ({children, size='xl',white}) => {

    let sizePoint;
    switch (size){
        case 'xl':
            sizePoint = 1;
            break;
        case 'l':
            sizePoint = 2;
            break;
        case 'm':
            sizePoint = 3;
            break;
        case 's':
            sizePoint = 4;
            break;
        case 'xs':
            sizePoint = 5;
            break;
        default:
            sizePoint = 1;
    }

     const className = [styles.header];
    className.push(styles[`size${size.toUpperCase()}`]);
    if (white){
        className.push(styles.whiteColor);
    }

    return React.createElement(
        `h${sizePoint}`,
        {
            className: className.join(' '),
        },
        children
        )

};

export default Header;