import React,{ Component } from 'react'
import Productdetails from './Productdetails'
import Productslist from './Productslist'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { browserHistory } from 'react-router'


const  App =() => {
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

export default App;