import React from "react";
import ReactDom from 'react-dom';

const AppList = () => {
    const items = ['Item1', 'Item2','Item3', 'Item4'];
    const title = <h1>My list</h1>;

    const isAuth = false;

    return (
        <ul>
            { isAuth ? title : null }
            { items.map(item => <li>{item}</li>) }
        </ul>
    )
};

const AppHeader = () => {
    return <h1 className='header'>Hello World!!!</h1>
};

const AppInput = () => {
    const placeholder = 'Type text...';
    return (
        <label htmlFor='search'>
            <input placeholder={placeholder}/>
        </label>
    )
};

const App = () => {
    return(
        <>
            <AppHeader />
            <AppInput/>
            <AppList />
            <AppHeader />
            <AppList />
        </>
        )
};


ReactDom.render(<App />, document.getElementById('root'));


