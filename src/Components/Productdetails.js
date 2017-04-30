import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { asyncDeleteAction } from '../actions'
import Editform from './Editform'
import Styling from './Styling'
import img1 from '../images/one.png'

class Productdetails extends  Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    Deleteproduct = (productName) =>{
        const products = this.props.products;
        products.map((product) => {
            product.name === productName ?(
                    this.props.dispatch(asyncDeleteAction(productName) ) ,
                        this.props.history.push('/')
                )
                :"";
        })
    }

    render() {
        const Productlist = this.props.products;
        return (
            <div>
                {
                    this.state.edit ?
                        <Editform
                            productName ={this.props.match.params.name}
                            Productlist = {Productlist}
                            propsval = {this.props}
                        />
                        :
                        Productlist.map((item,i) =>(
                            this.props.match.params.name == item.name ?
                                <div className="container" style={Styling.details}>

                                    <img className="img-responsive" src={img1} alt=""/>
                                    {

                                        Object.keys(item).map((key) => {

                                            return <div>

                                                <div className="col-sm-5 col-md-2">{key} :{ item[key] } </div>
                                            </div>
                                        })
                                    }
                                    <button type="button"
                                            className="btn btn-danger"
                                            onClick={()=>{this.Deleteproduct(this.props.match.params.name)}}>
                                        Delete
                                    </button>
                                    <button type="button"
                                            className="btn btn-primary"
                                            onClick={(event) => this.setState({edit:!this.state.edit})}>
                                        EDIT
                                    </button>
                                </div>

                                :<span></span>
                        ))
                }

            </div>
        )
    }
}

const mapStateToProps = state => state;

const ProductdetailsContainer = connect(mapStateToProps)(Productdetails);
export default ProductdetailsContainer;






