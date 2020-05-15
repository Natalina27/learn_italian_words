import React from 'react';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Header from './HeaderBlock/Header/Header';
import Paragraph from './HeaderBlock/Paragraph/Paragraph';
import {ReactComponent as ReactLogoSvg } from '../../logo.svg';
import styles from './App.module.scss'
import Card from "./Card/Card";


const wordsList = [
    {
        eng: 'between',
        rus: 'между'
    },
    {
        eng: 'high',
        rus: 'высокий'
    },
    {
        eng: 'really',
        rus: 'действительно'
    },
    {
        eng: 'something',
        rus: 'что-нибудь'
    },
    {
        eng: 'most',
        rus: 'большинство'
    },
    {
        eng: 'another',
        rus: 'другой'
    },
    {
        eng: 'much',
        rus: 'много'
    },
    {
        eng: 'family',
        rus: 'семья'
    },
    {
        eng: 'own',
        rus: 'личный'
    },
    {
        eng: 'out',
        rus: 'из/вне'
    },
    {
        eng: 'leave',
        rus: 'покидать'
    },
];


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
          <div>
              {
                  wordsList.map(({ eng , rus }) => <Card eng={eng} rus={rus} />)
              }
          </div>
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
