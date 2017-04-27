import React,{ Component } from 'react'
import { connect } from 'react-redux';
import  './App'
import { asyncDeleteAction ,asyncUpdateAction} from '../actions'
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
            <div>
                Name :  <input
                type="text"
                name="name"
                value={data.name}
                onChange={(event) =>this.changeHandler(event)}
            />
                Brand : <input
                type="text"
                name="brand"
                value={data.brand}
                onChange={(event) => this.changeHandler(event)}
            />
                Type : <input
                type="text"
                name="type"
                value={data.type}
                onChange={(event) => this.changeHandler(event)}
            />
                Price : <input
                type="text"
                name="price"
                value={data.price}
                onChange={(event) => this.changeHandler(event)}
            />


                <button onClick={ this.editProductdetails }>Save Updates</button>
            </div>
        )
    }
}
const mapStateToProps = state => state;

const EditformContainer = connect(mapStateToProps)(Editform);
export default EditformContainer;

