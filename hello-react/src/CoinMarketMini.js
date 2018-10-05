import React, { Component, Fragment} from 'react';
import './App.css';
import CoinListMini from './CoinListMini';
import { Button, Input, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const InputIcon = () => 
    <Input color="Red" icon='search' placeholder='검색' />

const ButtonGroupColored = () => (
    <Button.Group widths='1'>
        <Button basic inverted color='grey' size='big'>거래소 목록</Button>
        <Button basic inverted color='grey' size='big'>보유 자산 현황</Button>
    </Button.Group>
)

const ButtonExampleGroupBasic = () => (
    <div>
      <Button.Group widths='5'>
        <Button basic color="grey">KRW</Button>
        <Button basic color="grey">BTC</Button>
        <Button basic color="grey">ETR</Button>
      </Button.Group>
    </div>
)

const IconStar = () => (
    <div>
      <Icon name='star' color='grey'/>
    </div>
)

const divStyle = {
    margin : "10px",
    width : "315px",
    height : "855px"
}

class CoinMarketMini extends Component {
    render() {
        return (
            <Fragment>
                <div style={divStyle}>
                    <div className ="marketFilterMini">
                        <div className="filterBtnMini">
                            <ButtonGroupColored/>
                        </div>
                        <div className="filterInputMini">
                            <InputIcon/>
                        </div>
                        <div className="flavorIcon">
                            <IconStar/>
                        </div>
                        <div>
                            <ButtonExampleGroupBasic/>
                        </div>
                    </div>
                    <div>
                        {coins.map(coin => {
                            return <CoinListMini 
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
        title: '',
        name: '이름',
        subName: '',
        present_Price: '현재가',
        change_Rate: '전일대비',
        Max_Price: '최고가',
        Min_Price: '최저가',
        trans_Price: '거래대금'
    },
    {
        id: 2,
        title: 'Ripple',
        name: '리플',
        subName: 'XRP/KRW',
        present_Price: '612',
        change_Rate: '17.80%',
        Max_Price: '643',
        Min_Price: '506',
        trans_Price: '68억 KRW'
    },
    {   
        id: 3,
        title: 'Bitcoin',
        name: '비트코인',
        subName: 'BTC/KRW',
        present_Price: '7,383,000',
        change_Rate: '0.68%',
        Max_Price: '7,385,000',
        Min_Price: '7,257,000',
        trans_Price: '21억 KRW'
    },
    {
        id: 4,
        title: 'Ripple',
        name: '리플',
        subName: 'XRP/KRW',
        present_Price: '612',
        change_Rate: '17.80%',
        Max_Price: '643',
        Min_Price: '506',
        trans_Price: '68억 KRW'
    },
    {   
        id: 5,
        title: 'Bitcoin',
        name: '비트코인',
        subName: 'BTC/KRW',
        present_Price: '7,383,000',
        change_Rate: '0.68%',
        Max_Price: '7,385,000',
        Min_Price: '7,257,000',
        trans_Price: '21억 KRW'
    },
    {
        id: 6,
        title: 'Ripple',
        name: '리플',
        subName: 'XRP/KRW',
        present_Price: '612',
        change_Rate: '17.80%',
        Max_Price: '643',
        Min_Price: '506',
        trans_Price: '68억 KRW'
    },
    {   
        id: 7,
        title: 'Bitcoin',
        name: '비트코인',
        subName: 'BTC/KRW',
        present_Price: '7,383,000',
        change_Rate: '0.68%',
        Max_Price: '7,385,000',
        Min_Price: '7,257,000',
        trans_Price: '21억 KRW'
    },
    {
        id: 8,
        title: 'Ripple',
        name: '리플',
        subName: 'XRP/KRW',
        present_Price: '612',
        change_Rate: '17.80%',
        Max_Price: '643',
        Min_Price: '506',
        trans_Price: '68억 KRW'
    },
    {   
        id: 9,
        title: 'Bitcoin',
        name: '비트코인',
        subName: 'BTC/KRW',
        present_Price: '7,383,000',
        change_Rate: '0.68%',
        Max_Price: '7,385,000',
        Min_Price: '7,257,000',
        trans_Price: '21억 KRW'
    },
    {
        id: 10,
        title: 'Ripple',
        name: '리플',
        subName: 'XRP/KRW',
        present_Price: '612',
        change_Rate: '17.80%',
        Max_Price: '643',
        Min_Price: '506',
        trans_Price: '68억 KRW'
    },
    {   
        id: 11,
        title: 'Bitcoin',
        name: '비트코인',
        subName: 'BTC/KRW',
        present_Price: '7,383,000',
        change_Rate: '0.68%',
        Max_Price: '7,385,000',
        Min_Price: '7,257,000',
        trans_Price: '21억 KRW'
    },
    {
        id: 12,
        title: 'Ripple',
        name: '리플',
        subName: 'XRP/KRW',
        present_Price: '612',
        change_Rate: '17.80%',
        Max_Price: '643',
        Min_Price: '506',
        trans_Price: '68억 KRW'
    },
    {   
        id: 13,
        title: 'Bitcoin',
        name: '비트코인',
        subName: 'BTC/KRW',
        present_Price: '7,383,000',
        change_Rate: '0.68%',
        Max_Price: '7,385,000',
        Min_Price: '7,257,000',
        trans_Price: '21억 KRW'
    },
    {
        id: 14,
        title: 'Ripple',
        name: '리플',
        subName: 'XRP/KRW',
        present_Price: '612',
        change_Rate: '17.80%',
        Max_Price: '643',
        Min_Price: '506',
        trans_Price: '68억 KRW'
    }
]

export default CoinMarketMini;