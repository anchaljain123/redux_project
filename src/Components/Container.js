import React,{ Component } from 'react';
import App from './App'
import { BrowserRouter as Router} from 'react-router-dom'
import { browserHistory } from 'react-router'
import Styling from './Styling'

const  Container =() =>{
          return(
            <div>
                <Router history = { browserHistory }>
                    <App/>
                </Router>
            </div>
        )

}

export default Container;
