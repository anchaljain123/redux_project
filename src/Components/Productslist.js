import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { asyncAction } from '../actions'
import { Link } from 'react-router-dom'
class Productslist extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        this.props.dispatch(asyncAction());
    }
    render(){
        const Productlist = this.props.products;
        return (
            <div >
                <ul>
                    {
                        Productlist.map((item,i) =>(
                            <li key={item.name}><Link to={`/products/`+item.name}>{item.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const ProductlistContainer = connect(mapStateToProps)(Productslist);
export default ProductlistContainer;