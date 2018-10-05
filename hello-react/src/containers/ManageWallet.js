import React from 'react';
import CoinMarketMini from '../CoinMarketMini';
import MyCoinMini from '../MyCoinMini';
import MyCoinOne from '../MyCoinOne';
import '../App.css';

const ManageWallet = () => {
    return (
        <div className="CoinManage">
            <div className="AppSideBar">
                <CoinMarketMini/>
            </div>
            <div className="AppManageContent">
                <MyCoinOne/>
            </div>
            <div className="AppManageContent">
                <MyCoinMini/>
            </div>
            
        </div>
    );
};

export default ManageWallet;