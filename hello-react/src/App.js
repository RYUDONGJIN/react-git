import React, {Component} from 'react';
import NavBar from './NavBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavBar/>
                    {this.props.children}
                </header>
            </div>
        );
    }
}

export default App;