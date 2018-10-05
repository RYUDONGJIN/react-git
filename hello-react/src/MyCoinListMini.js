import React, {Component, Fragment} from 'react';
import './App.css';
import star_gray from './image/star-gray.png';

class MyCoinListMini extends Component {
    render(){
        return(
            <Fragment>
                <table className="myCoinTableMini">
                    <tbody>
                        <tr>
                            <th><img src={star_gray} alt="star-gray"/></th>
                            <th>{this.props.name}</th>
                            <th>{this.props.subName}</th>
                            <td>{this.props.present_Price}</td>
                            <td>{this.props.change_Rate}</td>
                            <td>{this.props.Max_Price}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default MyCoinListMini;