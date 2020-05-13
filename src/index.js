import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";

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
    // const margin = 40;
    // const headerStyle = {
    //     color: 'red',
    //     marginLeft: `${margin}px`,
    //     marginBottom: `${margin}px`,
    // }
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
            <HeaderBlock />
            <AppHeader />
            <AppInput/>
            <AppList />
            <AppHeader />
            <AppList />
        </>
        )
};


ReactDom.render(<App />, document.getElementById('root'));


