import React,{ Component } from 'react'
import { connect } from 'react-redux';

class Productdetails extends  Component{
    constructor(){
        super();
    /*  const   { name }  = this.props.match.params.name;
       this.state = {
           name,
       }*/
    }

  saveChanges = () =>{

      const { name  } = this.state;
      this.props.saveUpdates(this.state);
      this.setState({ edit: false });
}

    render() {
        const Productlist = this.props.products;
        return (
            <div>
                {

                    Productlist.map((item,i) =>(
                            this.props.match.params.name == item.name ?
                                <div>
                                    {
                                        Object.keys(item).map(key => {
                                            if (key == '_id') key++;
                                            return <div key={Math.floor(Math.random() * 100)}>{ item[key] }</div>
                                        })
                                    }

                                    <input
                                        type="button"
                                        value="DELETE"
                                        onClick={()=>{this.props.Deleteproduct(this.props.match.params.name)}}/>
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






