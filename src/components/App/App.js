import React from 'react';
import HeaderBlock from "../HeaderBlock/HeaderBlock";

const App = () => {
  return(
      <>
        <HeaderBlock
            title = 'Learn English words online'
            descr = 'Use fill out cards and replenish your vocabulary'
        />
        <HeaderBlock title='We like it'
                     hideBackground
                     />
      </>
  )
};
export default App;
