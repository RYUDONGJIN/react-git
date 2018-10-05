import React, {Component} from 'react';
import NavBar from '../NavBar';
import MainBanner from '../MainBanner';
import CoinMarket from '../CoinMarket';
import MainFooter from '../MainFooter';
import { Button } from 'semantic-ui-react';
import '../App.css';


class App extends Component {
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <NavBar/>
                </header>
                <div className="App-intro">
                    <MainBanner/>
                </div>
                <div className="App-center">
                    <CoinMarket/>
                </div>
                <footer className="App-footer">
                    <MainFooter/>
                </footer>
            </div>
        );
    }
}

export default App;