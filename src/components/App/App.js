import React from 'react';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import {ReactComponent as ReactLogoSvg } from '../../logo.svg';
import styles from './App.module.scss'


const App = () => {
  return(
      <>
        <HeaderBlock>
          <Header>
              Learn English words online
          </Header>
          <ReactLogoSvg />
          <Paragraph>
            Use remember cards and replenish your vocabulary
          </Paragraph>
        </HeaderBlock>
        <HeaderBlock hideBackground>
          <Header>
            Excellent !
        </Header>
          <Paragraph>
          GOOD JOB !
          </Paragraph>
          <ReactLogoSvg className={styles.svg}/>
        </HeaderBlock>

      </>
  )
};
export default App;
