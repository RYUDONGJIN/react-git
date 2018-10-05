import React, { Fragment} from 'react';
import './App.css';
import MyCoinListMini from './MyCoinListMini';
import 'semantic-ui-css/semantic.min.css';

const MyCoinOne = () => {
    return(
        <Fragment>
            {kwrCoins.map(kwr => {
                return <MyCoinListMini 
                    key={kwr.id} title={kwr.title} 
                    name={kwr.name} subName={kwr.subName}
                    present_Price={kwr.present_Price} 
                    change_Rate={kwr.change_Rate}
                    Max_Price={kwr.Max_Price} 
                    Min_Price={kwr.Min_Price}
                    trans_Price={kwr.trans_Price}
                    />
            })}
        </Fragment>
    );
}

const kwrCoins = [
    {
        id: 1,
        name: 'KRW 자산',
        subName: '총 보유 금액',
        present_Price: '미체결 수량',
        change_Rate: '미체결 금액',
        Max_Price: '거래 가능 금액',
        Min_Price: '입출금  계좌 관리',
        trans_Price: '거래대금'
    },
    {
        id: 2,
        title: 'KRW',
        name: '대한민국 원',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    }
]

export default MyCoinOne;