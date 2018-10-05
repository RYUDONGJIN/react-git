import React from 'react';
import CoinMarketMini from '../CoinMarketMini';
import CoinSideInfo from '../CoinSideInfo';
import TradeView from '../TradeView';
import '../App.css';

const Exchange = () => {
    return (
        <div className="exchange">
            <div className="AppSideBar">
                <CoinSideInfo/>
                <CoinMarketMini/>
            </div>
            <div className="MainExchange">
                <div>
                   <TradeView/>
                </div>
            </div>
        </div>
    );
};

export default Exchange;