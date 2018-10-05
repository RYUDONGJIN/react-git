import React, { Component, Fragment} from 'react';
import './App.css';
import MyCoinListMini from './MyCoinListMini';
import { Button, Input} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const InputIcon = () => 
    <Input color="Red" icon='search' placeholder='검색' />

const ButtonExampleGroupBasic = () => (
    <div>
      <Button.Group widths='2'>
        <Button basic color="grey">보유</Button>
        <Button basic color="grey">즐겨찾기</Button>
      </Button.Group>
    </div>
)

const divStyle = {
    width : "1200px",
    height : "855px"
}

class MyCoinMini extends Component {
    render() {
        return (
            <Fragment>
                <div style={divStyle}>
                    <div className ="myCoinFilter">
                        <div className="myCoinFilterButton">
                            <ButtonExampleGroupBasic/>
                        </div>
                        <div className="myCoinFilterInput">
                            <InputIcon/>
                        </div>
                    </div>
                    <div>
                        {coins.map(coin => {
                            return <MyCoinListMini 
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
        name: '이름',
        subName: '총 보유 수량',
        present_Price: '미체결 수량',
        change_Rate: '거래 가능 수량',
        Max_Price: '출금 주소 관리',
        Min_Price: '최저가',
        trans_Price: '거래대금'
    },
    {
        id: 2,
        title: 'Ripple',
        name: '리플',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 3,
        title: 'Bitcoin',
        name: '비트코인',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 4,
        title: 'Ripple',
        name: '리플',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 5,
        title: 'Bitcoin',
        name: '비트코인',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 6,
        title: 'Ripple',
        name: '리플',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 7,
        title: 'Bitcoin',
        name: '비트코인',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 8,
        title: 'Ripple',
        name: '리플',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 9,
        title: 'Bitcoin',
        name: '비트코인',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 10,
        title: 'Ripple',
        name: '리플',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 11,
        title: 'Bitcoin',
        name: '비트코인',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 12,
        title: 'Ripple',
        name: '리플',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 13,
        title: 'Bitcoin',
        name: '비트코인',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 14,
        title: 'Ripple',
        name: '리플',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 15,
        title: 'Bitcoin',
        name: '비트코인',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 16,
        title: 'Ripple',
        name: '리플',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    },
    {
        id: 17,
        title: 'Bitcoin',
        name: '비트코인',
        subName: '0',
        present_Price: '0',
        change_Rate: '0',
    }
]

export default MyCoinMini;