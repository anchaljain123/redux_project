import React,{ Component } from 'react';
import App from './App'
import { asyncDeleteAction,asyncUpdateAction } from '../actions'
import { connect } from 'react-redux';
import { BrowserRouter as Router,Route,withRouter } from 'react-router-dom'
import { browserHistory } from 'react-router'
class Container extends Component{

    render(){
        return(
            <div>
                <Router history = { browserHistory }>
                    <App/>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const MainContainer = connect(mapStateToProps)(Container);
export default MainContainer;
