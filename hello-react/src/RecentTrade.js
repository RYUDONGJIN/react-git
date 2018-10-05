import React, { Component, Fragment} from 'react';
import './App.css';
import RecentTradeList from './RecentTradeList';
import 'semantic-ui-css/semantic.min.css';

const divStyle = {
    width : "1200px",
    height : "855px"
}

class RecentTrade extends Component {
    render() {
        return (
            <Fragment>
                <div style={divStyle}>
                    <div>
                        {coins.map(coin => {
                            return <RecentTradeList 
                                key={coin.id} title={coin.title} 
                                name={coin.name} subName={coin.subName}
                                present_Price={coin.present_Price} 
                                change_Rate={coin.change_Rate}
                                Max_Price={coin.Max_Price} 
                                Min_Price={coin.Min_Price}
                                trans_Price={coin.trans_Price}
                                />
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const coins = [
    {
        id: 1,
        name: '시간',
        subName: '체결가',
        present_Price: '거래량',
    },
    {
        id: 2,
        name: '05:05:52',
        subName: '610',
        present_Price: '519.5000',
    },
    {
        id: 3,
        name: '05:06:15',
        subName: '610',
        present_Price: '5.9361',
    },
    {
        id: 4,
        name: '05:05:52',
        subName: '610',
        present_Price: '519.5000',
    },
    {
        id: 5,
        name: '05:06:15',
        subName: '610',
        present_Price: '5.9361',
    },
    {
        id: 6,
        name: '05:05:52',
        subName: '610',
        present_Price: '519.5000',
    },
    {
        id: 7,
        name: '05:06:15',
        subName: '610',
        present_Price: '5.9361',
    },
    {
        id: 8,
        name: '05:05:52',
        subName: '610',
        present_Price: '519.5000',
    },
    {
        id: 9,
        name: '05:06:15',
        subName: '610',
        present_Price: '5.9361',
    },
    {
        id: 10,
        name: '05:05:52',
        subName: '610',
        present_Price: '519.5000',
    },
    {
        id: 11,
        name: '05:06:15',
        subName: '610',
        present_Price: '5.9361',
    },
    {
        id: 12,
        name: '05:05:52',
        subName: '610',
        present_Price: '519.5000',
    },
    {
        id: 13,
        name: '05:06:15',
        subName: '610',
        present_Price: '5.9361',
    },
    {
        id: 14,
        name: '05:05:52',
        subName: '610',
        present_Price: '519.5000',
    },
    {
        id: 15,
        name: '05:06:15',
        subName: '610',
        present_Price: '5.9361',
    },
    {
        id: 16,
        name: '05:05:52',
        subName: '610',
        present_Price: '519.5000',
    }
]

export default RecentTrade;