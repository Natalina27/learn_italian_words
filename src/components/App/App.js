import React from 'react';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Header from './Header/Header';
import Paragraph from './Paragraph/Paragraph';
import {ReactComponent as ReactLogoSvg } from '../../logo.svg';
import Card from './HeaderBlock/Card/Card';
import Footer from './Footer/Footer';
import Section from './Section/Section';
import Button from "./Button/Button";


import styles from './App.module.scss'


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
            <Header white>
              Learn English words online
          </Header>
          <ReactLogoSvg />
          <Paragraph white>
            Use remember cards and replenish your vocabulary
          </Paragraph>
        </HeaderBlock>
          <Section className={styles.textCenter}>
              <Header size='l' >
                  We created lessons for help you to speak English fluently
              </Header>
              <div className={styles.flexParagraph}>
                  <Paragraph>
                      <Header size='l'>
                          <div className={styles.num}>
                              1
                          </div>
                      </Header>
                     Easy and safe payment
                  </Paragraph>
                  <Paragraph>
                      <Header size='l'>
                          <div className={styles.num}>
                              2
                          </div>
                      </Header>
                      Free consultation
                  </Paragraph>
                  <Paragraph>
                      <Header size='l'>
                          <div className={styles.num}>
                              3
                          </div>
                      </Header>
                     Native English teachers
                  </Paragraph>
              </div>
          </Section>
          <Section className={styles.textCenter} >
                <Header size='l'>
                    It's easy to start learning English with us
                </Header>
                <Paragraph>
                    Click the card and learn the words fast and easy!
                </Paragraph>
              <div className={styles.flex}>
                  {
                      wordsList
                          .map(({ eng , rus, id }) => (
                              <Card  key={id} eng={eng} rus={rus} />
                          ))
                  }
              </div>
          </Section>
        <HeaderBlock hideBackground>
          <Header size='l' white>
            Learn English with us !
          </Header>
          <Paragraph white>
            START RIGHT NOW !
          </Paragraph>
            <Button />
          <ReactLogoSvg className={styles.svg}/>
        </HeaderBlock>
          <Footer />

          </>
  )
};
export default App;
