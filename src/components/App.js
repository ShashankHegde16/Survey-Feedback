import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../action';
import Header from './Header';
import Home from './Home';
import Dashboard from './Survey/Dashboard';
import history from '../history';

class App extends React.Component {


    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/surveys' exact component={Dashboard}></Route>
                        <Route path='/surveys/create' exact component={Dashboard}></Route>
                    </div>
                </Router>
            </div>
        );
    }

}



export default connect(null, { getUser })(App);