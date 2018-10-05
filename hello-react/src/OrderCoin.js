import React, { Component, Fragment} from 'react';
import './App.css';
import OrderCoinList from './OrderCoinList';
import 'semantic-ui-css/semantic.min.css';

const divStyle = {
    width : "1200px",
    height : "855px"
}

class OrderCoin extends Component {
    render() {
        return (
            <Fragment>
                <div style={divStyle}>
                    <div>
                        {coins.map(coin => {
                            return <OrderCoinList 
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
        name: '나의 주문',
        subName: '가격 ',
        present_Price: '주문 잔량',
        change_Rate: '총 주문량'
    },
    {
        id: 2,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 3,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 4,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 5,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 6,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 7,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 6,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 7,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 6,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 7,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 6,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 7,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 6,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 7,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 6,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 7,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 6,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    },
    {
        id: 7,
        name: '',
        subName: '602 ',
        present_Price: '1,480.0561',
        change_Rate: '1,735.9478'
    },
    {
        id: 6,
        name: '',
        subName: '613 ',
        present_Price: '122.8481',
        change_Rate: '181,658.1415'
    }
]

export default OrderCoin;