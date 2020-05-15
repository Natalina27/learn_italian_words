import React from 'react';
import styles from './Card.module.scss';

class Card  extends React.Component{

    handleCardClick = () => {
        console.log(this.props.rus);

    };

    render(){

        const {eng, rus} = this.props;

        return(
            <div
                className={styles.card}
                onClick={this.handleCardClick}

            >
                <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                        { eng }
                    </div>
                    <div className={styles.cardBack}>
                        { rus }
                    </div>
                </div>
            </div>
        );
    }
}


export default Card;