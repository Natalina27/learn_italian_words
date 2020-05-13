import React from "react";
import ReactDom from 'react-dom';

// const el = React.createElement(
//     'h1',
//     null,
//     'Hello World, React.js!'
// );

const el = <h1>Hello World!!!</h1>;

ReactDom.render(el, document.getElementById('root'));


