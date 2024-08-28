import React from 'react';
import styles from './App.module.scss';
import MainPage from '../pages/MainPage/MainPage';
import Header from '../Header/Header';


const App = () => {
    return (
        <>
            <Header/>
            <MainPage/>
        </>
    );
};

export default App;