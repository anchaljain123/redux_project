import React,{ Component } from 'react'
import Productdetails from './Productdetails'
import Productslist from './Productslist'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'


class App extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={Productslist}/>
                        <Route path="/products/:name"
                               render={ props => (<Productdetails {...props}/>)}
                        />
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;