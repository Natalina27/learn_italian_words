import React from 'react';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Header from './HeaderBlock/Header/Header';
import Paragraph from './HeaderBlock/Paragraph/Paragraph';
import {ReactComponent as ReactLogoSvg } from '../../logo.svg';
import styles from './App.module.scss'
import Card from "./HeaderBlock/Card/Card";


const wordsList = [
    {
        eng: 'between',
        rus: 'между',
        id : 1
    },
    {
        eng: 'high',
        rus: 'высокий',
        id : 2
    },
    {
        eng: 'really',
        rus: 'действительно',
        id : 3
    },
    {
        eng: 'something',
        rus: 'что-нибудь',
        id : 4
    },
    {
        eng: 'most',
        rus: 'большинство',
        id : 5
    },
    {
        eng: 'another',
        rus: 'другой',
        id : 6
    },
    {
        eng: 'much',
        rus: 'много',
        id : 7
    },
    {
        eng: 'family',
        rus: 'семья',
        id : 8
    },
    {
        eng: 'own',
        rus: 'личный',
        id : 9
    },
    {
        eng: 'out',
        rus: 'из/вне',
        id : 10
    },
    {
        eng: 'leave',
        rus: 'покидать',
        id : 11
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
                  wordsList.map(({ eng , rus, id }) => <Card  key={id} eng={eng} rus={rus} />)
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
