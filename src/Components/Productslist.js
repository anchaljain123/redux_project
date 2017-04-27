import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { asyncAction } from '../actions'
import { Link } from 'react-router-dom'
import img1 from '../images/one.png'

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
                <ul className="list-group">
                    {
                        Productlist.map((item,i) =>(
                            <li key={item.name} className="list-group-item">
                                <img className="img-responsive" src={img1} alt=""/>
                                <Link to={`/products/`+item.name}>{item.name}</Link>
                            </li>
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