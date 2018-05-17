import React from 'react';
//import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App.jsx';
import About from './component/home/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//     <Router>
//         <Route path="/" component={App} />
//     </Router> , document.getElementById('root'));
render((
    <Router>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={App} />
            <Route exact path='/about' component={About} />
        </Switch>
        </Router>
), document.getElementById('root'));
registerServiceWorker();
