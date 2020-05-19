import React from 'react';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Header from './Header/Header';
import Paragraph from './Paragraph/Paragraph';
// import {ReactComponent as ReactLogoSvg } from '../../itlogo.png';
import img from '../../itlogo.png'
import Card from './HeaderBlock/Card/Card';
import Footer from './Footer/Footer';
import Section from './Section/Section';
import Button from "./Button/Button";


import styles from './App.module.scss'


const wordsList = [
    {
        eng: 'between',
        it: 'tra',
        id : 1
    },
    {
        eng: 'high',
        it: 'alto',
        id : 2
    },
    {
        eng: 'really',
        it: 'realmente',
        id : 3
    },
    {
        eng: 'something',
        it: 'qualcosa',
        id : 4
    },
    {
        eng: 'most',
        it: 'maggior parte',
        id : 5
    },
    {
        eng: 'another',
        it: 'altro',
        id : 6
    },
    {
        eng: 'much',
        it: 'tanto',
        id : 7
    },
    {
        eng: 'family',
        it: 'famiglia',
        id : 8
    },
    {
        eng: 'own',
        it: 'proprio',
        id : 9
    },
    {
        eng: 'out',
        it: 'fuori',
        id : 10
    },
    {
        eng: 'leave',
        it: 'lasciare',
        id : 11
    },
];


const App = () => {

  return(
      <>
        <HeaderBlock>
            <Header white>
              Learn Italian words online
          </Header>
          {/*<ReactLogoSvg />*/}
          <img className={styles.itlogo} src={img}  alt="logo"/>
          <Paragraph white>
            Use remember cards and replenish your vocabulary
          </Paragraph>
        </HeaderBlock>
          <Section className={styles.textCenter}>
              <Header size='l' >
                  We created lessons for help you to speak Italian fluently
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
                     Native Italian teachers
                  </Paragraph>
              </div>
          </Section>
          <Section className={styles.textCenter} >
                <Header size='l'>
                    It's easy to start learning Italian with us
                </Header>
                <Paragraph>
                    Click the card and learn the words fast and easy!
                </Paragraph>
              <div className={styles.flex}>
                  {
                      wordsList
                          .map(({ eng , it, id }) => (
                              <Card  key={id} eng={eng} it={it} />
                          ))
                  }
              </div>
          </Section>
        <HeaderBlock hideBackground>
          <Header size='l' white>
            Learn Italian with us !
          </Header>
            <img className={styles.itlogo} src={img} alt="logo"/>
          <Paragraph white>
            START RIGHT NOW !
          </Paragraph>
            <Button />
            <Footer />
        </HeaderBlock>


          </>
  )
};
export default App;
