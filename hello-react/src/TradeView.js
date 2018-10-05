import React from 'react';
import Trade from './image/tradeView.png';
import RecentTrade from './RecentTrade';
import OrderCoin from './OrderCoin';
import OrderSideInfo from './OrderSideInfo';

const TradeView = () => {
    return (
        <div>
            <div className="leftMainEx">
                <img src={Trade} alt="trade"/>
            </div>
            <div className="rightMainEx">
                <RecentTrade/>
            </div>
            <div className="leftMainEx">
                <OrderCoin/>
            </div>
            <div className="rightMainEx">
                <OrderSideInfo/>
            </div>
        </div>
    );
}

export default TradeView;