import React, {Component, Fragment} from 'react';
import './App.css';
import star_gray from './image/star-gray.png';

class CoinListMini extends Component {
    render(){
        return(
            <Fragment>
                <table className="coinTableMini">
                    <tbody>
                        <tr>
                            <th><img src={star_gray} alt="star-gray"/></th>
                            <th>{this.props.name}</th>
                            <td>{this.props.present_Price}</td>
                            <td>{this.props.change_Rate}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default CoinListMini;