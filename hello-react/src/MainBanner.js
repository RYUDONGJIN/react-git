import React, {Component, Fragment} from 'react';
import banner_01 from './image/banner_01.png';
import './App.css';

class MainBanner extends Component {
    render(){
        return(
            <Fragment>
                <div className="MainContent">
                    <a href="/"><img src={banner_01} alt="banner_01"/></a>
                </div>
            </Fragment>
        );
    }
}

export default MainBanner;