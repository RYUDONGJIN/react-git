import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        
    }
    render(){
        return(
            <div>
                <h1>안녕하세요 리액트</h1>
            </div>
        );
    }
}

export default App;