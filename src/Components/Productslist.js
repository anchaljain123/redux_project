import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { asyncAction } from '../actions'
import { Link } from 'react-router-dom'
import img1 from '../images/one.png'
import Styling from './Styling'
import './stylecss.css'

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
            <div className="row">
                {
                    Productlist.map((item,i) =>(
                        <div className="col-sm-3">
                            <div className="card">
                                <canvas className="header-bg" width="250" height="70" id="header-blur"></canvas>

                                <div className="avatar">
                                    <img className="img-responsive" src={img1} alt=""/>
                                </div>
                                <div className="content">
                                    <Link to={`/products/`+item.name}>
                                        <strong style={Styling.listing}>{item.name}</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }



            </div>


        )
    }
}

const mapStateToProps = state => state;

const ProductlistContainer = connect(mapStateToProps)(Productslist);
export default ProductlistContainer;