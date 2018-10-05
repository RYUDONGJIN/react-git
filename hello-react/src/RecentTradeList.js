import React, {Component, Fragment} from 'react';
import './App.css';

class RecentTradeList extends Component {
    render(){
        return(
            <Fragment>
                <table className="RecentTradeList">
                    <tbody>
                        <tr>
                            <th>{this.props.name}</th>
                            <td>{this.props.subName}</td>
                            <td>{this.props.present_Price}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default RecentTradeList;