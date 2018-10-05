import React, {Component, Fragment} from 'react';
import './App.css';

class OrderCoinList extends Component {
    render(){
        return(
            <Fragment>
                <table className="OrderCoinList">
                    <tbody>
                        <tr>
                            <th>{this.props.name}</th>
                            <td>{this.props.subName}</td>
                            <td>{this.props.present_Price}</td>
                            <td>{this.props.change_Rate}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default OrderCoinList;