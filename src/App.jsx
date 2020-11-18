import React from 'react';
import Title from './components/Title'
import Logo from './components/Logo';
import logo from './assets/reactjs-thumb.jpg'
import './scss/App.scss'

const App = () => {
    return (
        <div className='app'>
            <div className='container'>
                <Title name='World'></Title>
                <Logo logo={logo}></Logo>
            </div>
        </div>
    );
};

export default App;