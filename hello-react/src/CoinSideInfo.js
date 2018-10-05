import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';

const CoinSideInfo = () => {
    return (
        <div className="coinSideInfo">
            <div className="leftInfo">
                <p>리플</p>
                <p>XRP / KRW</p>
                <Button basic color='grey' size='medium'>정보</Button>
                <div className="smallInfo">
                    <p>최고가</p>
                    <p>최저가</p>
                    <p>거래량</p>
                    <p>거래대금</p>
                </div>
            </div>
            <div className="rightInfo">
                <p>597</p>
                <p>5 (0.84%)</p>
                <Button basic color='grey' size='medium'>공식사이트</Button>
                <div className="smallInfo">
                    <p>611</p>
                    <p>563</p>
                    <p>4,253,258 XRP</p>
                    <p>25억 KRW</p>
                </div>
            </div>
        </div>
    );
};

export default CoinSideInfo;