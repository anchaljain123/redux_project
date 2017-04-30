import React,{ Component } from 'react'
import { connect } from 'react-redux';
import  './App'
import Styling from './Styling'
import { asyncUpdateAction}  from '../actions'
class Editform extends Component{

    constructor(props){
        super(props);
        this.state = {
            data:{},
        }
    }

    componentWillMount() {
        this.props.Productlist.map((item) => {
            if(item.name == this.props.productName){
                this.setState({ data: item });
            }
        })
    }

    editProductdetails = () => {
        let { data } = this.state;
        let productObj =data;
        this.props.dispatch(asyncUpdateAction(productObj));
        this.props.propsval.history.push('/')
    }

    changeHandler = (event) => {
        const { data } = this.state;
        const updatedData = Object.assign({}, data, {[event.target.name]: event.target.value});
        this.setState({ data : updatedData })
    }


    render(){

        const { data } = this.state;
        return(
            <div style={Styling.formstyle}>
            <div className="contact-section">
                <div className="container">
                    <h2>EDIT PRODUCT</h2>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <form className="form-horizontal">
                                <div className="form-group">
                                     <label >Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={data.name}
                                        onChange={(event) =>this.changeHandler(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Brand</label>
                                 <input
                                type="text"
                                className="form-control"
                                name="brand"
                                value={data.brand}
                                onChange={(event) => this.changeHandler(event)}
                            />
                                </div>
                                    <div className="form-group">
                                Type : <input
                                type="text"
                                name="type"
                                className="form-control"
                                value={data.type}
                                onChange={(event) => this.changeHandler(event)}
                            />
                                    </div>
                                <div className="form-group">

                                Price : <input
                                type="text"
                                className="form-control"
                                name="price"
                                value={data.price}
                                onChange={(event) => this.changeHandler(event)}
                            />
                                </div>



                                <button onClick={ this.editProductdetails } style={Styling.btn}>Save Updates</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>

                        )
                        }
                        }
                        const mapStateToProps = state => state;

                        const EditformContainer = connect(mapStateToProps)(Editform);
                        export default EditformContainer;

