import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { asyncDeleteAction ,asyncUpdateAction} from '../actions'
import Editform from './Editform'

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

    saveChanges = (productState) =>{
        this.props.dispatch(asyncUpdateAction(productState));
        this.setState({ edit: false });
    }

    render() {
        const Productlist = this.props.products;
        console.log(this.state, "state");
        return (
            <div>
                {
                    this.state.edit ?
                        <Editform
                            saveChanges = {this.saveChanges}
                            productName ={this.props.match.params.name}
                            Productlist = {Productlist}
                        />
                        :
                        Productlist.map((item,i) =>(
                            this.props.match.params.name == item.name ?
                                <div className="container">
                                    {
                                        Object.keys(item).map((key,i) => {
                                            if (key == '_id') i++;
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






