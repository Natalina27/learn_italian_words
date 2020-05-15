import React from 'react';
import styles from './Card.module.scss';

class Card  extends React.Component{

    state = {
        done: false
    };

    handleCardClick = () => {
        this.setState({
            done: !this.state.done
        })

    };

    render(){

        const {eng, rus} = this.props;
        const { done } = this.state;

        const cardClass = [styles.card];
        if(done){
            cardClass.push(styles.done);
        }

        return(
            <div
                className={cardClass.join(' ')}
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