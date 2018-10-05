import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './containers/Home';
import manageWallet from './containers/ManageWallet';
import exchange from './containers/Exchange';
import './App.css';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="manageWallet" component={manageWallet}/>
        <Route path="exchange" component={exchange}/>
      </Route>
    </Router>,
    document.getElementById('root')
);