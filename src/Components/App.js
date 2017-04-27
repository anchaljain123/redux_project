import React,{ Component } from 'react'
import Productdetails from './Productdetails'
import Productslist from './Productslist'
import { BrowserRouter as Router,Route,withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { asyncDeleteAction,asyncUpdateAction } from '../actions'
import { browserHistory } from 'react-router'
class App extends Component {

    constructor(props){
        super(props);
    }

    Deleteproduct = (productName) =>{
        const products = this.props.products;
        products.map((product) => {
            product.name === productName ?
                ( this.props.dispatch(asyncDeleteAction(productName)),
                    this.props.history.push('/products'))
                :"";
        })
    }

    saveUpdates = (productState) =>{
        this.props.dispatch(asyncUpdateAction(productState));
    }

    render(){
        return(
            <div>
                <Router history={browserHistory}>
                    <div>
                        <Route exact path="/" component={Productslist}/>
                        <Route path="/products/:name" render={
                            props => (<Productdetails {...props}
                                                      Deleteproduct={this.Deleteproduct}
                                                      saveUpdates = {this.saveUpdates} />)
                        } />
                    </div>
                </Router>
            </div>
        )
    }
}
const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;