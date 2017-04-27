import React,{ Component } from 'react'
import { connect } from 'react-redux';
import  './App'

class Editform extends Component{

    constructor(){
        super();
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
        this.props.saveChanges(productObj);
    }

    changeHandler = (event) => {
        this.setState({ data : event.target.value })
    }


    render(){

        const { data } = this.state;
        return(
            <div>
                Name :  <input
                type="text"
                value={data.name}
                onChange={this.changeHandler(event)}
            />
                Brand : <input
                type="text"
                value={data.brand}
                onChange={this.changeHandler(event)}
            />
                Type : <input
                type="text"
                value={data.type}
                onChange={this.changeHandler(event)}
            />
                Price : <input
                type="text"
                value={data.price}
                onChange={this.changeHandler(event)}
            />
                Warranty_Years : <input
                type="text"
                value={data.warranty_years}
                onChange={this.changeHandler(event)}
            />

                <button onClick={this.editProductdetails}>Save Updates</button>
            </div>
        )
    }
}
const mapStateToProps = state => state;

const EditformContainer = connect(mapStateToProps)(Editform);
export default EditformContainer;

