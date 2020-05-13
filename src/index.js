import React from "react";
import ReactDom from 'react-dom';

const AppList = () => {
    return (
        <ul>
            <li>My first list</li>
            <li>My second list</li>
        </ul>
    )
};

const AppHeader = () => {
    return <h1>Hello World!!!</h1>
};
const App = (
    <>
        <AppHeader />
        <AppList />
        <AppHeader />
        <AppList />
    </>
);

ReactDom.render(<App />, document.getElementById('root'));


