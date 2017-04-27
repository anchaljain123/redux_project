import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { asyncUpdateAction } from '../actions'
class Product extends  Component{
    constructor(props){
        super(props);
        const { name , type , price } = this.props.product;
        this.state = {
            name,
            type,
            price,
        }
    }
    render() {

        const item = this.props.product;
        return (
            <div>
                {
                    this.state.edit ?
                        <div>
                            <input
                                type="text"
                                value={ this.state.name }
                                onChange={(event) => this.setState({ name: event.target.value })}
                            />
                            <input type="text"
                                   value={ this.state.type }
                                   onChange={ (event) => this.setState({ type: event.target.value })}
                            />
                            <input type="text"
                                   value={ this.state.price }
                                   onChange={ (event) => this.setState({ price: event.target.value })}
                            />
                            <button onClick={ this.props.dispatch(asyncUpdateAction()) }>Save Updates</button>

                        </div>
                        :

                            this.props.match.params.name == this.props.product.name ?
                                <div>
                                    {
                                        Object.keys(item).map(key => {
                                            if (key == '_id') key++;
                                            return <div>{ item[key] }</div>
                                        })
                                    }
                                    <input type="button" value="EDIT" onClick={ () => this.setState({ edit: !this.state.edit })}/>
                                    <input type="button" value="DELETE" onClick={ ()=>{
                                        this.props.Deleteproduct(this.props.match.params.name) } }/>
                                </div>

                                :<span></span>

                }

            </div>
        )
    }
}

const mapStateToProps = state => state;

const ProductContainer = connect(mapStateToProps)(Product);
export default ProductContainer;






