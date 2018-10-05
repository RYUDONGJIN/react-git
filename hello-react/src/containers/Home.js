import React from 'react';
import MainBanner from '../MainBanner';
import CoinMarket from '../CoinMarket';
import MainFooter from '../MainFooter';
import '../App.css';

const Home = () => {
    return (
        <div className="App">
            <div className="App-intro">
                <MainBanner/>
            </div>
            <div className="App-center">
                <CoinMarket/>
            </div>
            <footer className="App-footer">
                <MainFooter/>
            </footer>
        </div>
    );
};

export default Home;