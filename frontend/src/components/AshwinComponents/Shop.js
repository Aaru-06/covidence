import React , { Component } from "react";
import Header from '../vbjComponents/HeaderView';
import img from "../../images/shop.jpg"
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";
import { FormGroup, Button } from "reactstrap";


class Shop extends Component{
	constructor(props){
		super(props);

		// this.state = {
		// 	val: 0,
		// 	order : [
		// 	{
		// 		iname: '',
		// 		iqty: ''
		// 	}]
		// }
		// this.Addcart = this.Addcart.bind(this);
	}

	// Addcart(){
	// 	this.setState({
	// 		order[this.state.val].iname: values["item"],
	// 		order[this.state.val].iqty: values["qty"],
	// 		val: this.state.val + 1
	// 	})

	// 	console.log(this.state.order);
	// }


	render(){
		return(
			<div className="statpage">
			<Header name="Shop" />
			<div className="row">
	          <div className="col-12 col-sm-6">
	            <img
	              className="myImage"
	              src= {img}
	              width="600px"
	              height="620px"
	              alt="img"
	            ></img>
	          </div>

	          <div className="col-12 col-sm-6">
	          	<div className="reg">
	              <h2 id="regh2">Make Your Order</h2>
	              <AvForm>
	                <AvField
	                  className="reginput"
	                  name="item"
	                  id="item"
	                  label="Name"
	                  type="text"
	                  innerRef={(input) => (this.item = input)}
	                  errorMessage="Name Required ..!!"
	                  required
	                ></AvField>
	                
	                <AvField
	                  className="reginput"
	                  name="qty"
	                  id="qty"
	                  label="Quantity"
	                  type="text"
	                  innerRef={(input) => (this.qty = input)}
	                  errorMessage="Quantity must be a Number ..!!"
	                  validate={{ number: true, required: true }}
	                ></AvField>          

	                <FormGroup id="shopbut">
	                  <Button
	                    style={{ fontSize: "17px", borderWidth: '3px', boxShadow: '0px 7px 5px #d4d4d4'}}
	                    color="danger"
	                    outline="none"
	                    onClick={this.Addcart}
	                  >
	                    <i
	                      class="fa fa-cart-plus"
	                      aria-hidden="true"
	                      style={{ marginRight: "7px" }}
	                    ></i>
	                    Add To Cart
	                  </Button>

	                  <Button
	                    style={{ fontSize: "17px",  float: 'right', borderWidth: '3px', boxShadow: '0px 7px 5px #d4d4d4'}}
	                    color="danger"
	                    outline="none"
	                  	>
	                    <i
	                      class="fa fa-check-circle-o"
	                      aria-hidden="true"
	                      style={{ marginRight: "7px" }}
	                    ></i>
	                    Place Order
	                  </Button>	                  
	                </FormGroup>	                
	              </AvForm>
	              <FormGroup id="shopbut">
	              <Button
                    style={{ fontSize: "17px", borderWidth: '3px', boxShadow: '0px 7px 5px #d4d4d4'}}
                    color="danger"
                    outline="none"
                  	>
                    <i
                      class="fa fa-shopping-cart"
                      aria-hidden="true"
                      style={{ marginRight: "7px", width: '35px' }}
                    ></i>
                    View Cart
                  </Button>
                  <Button
                    style={{ fontSize: "17px", float: 'right', width: '142px', borderWidth: '3px', boxShadow: '0px 7px 5px #d4d4d4'}}
                    color="danger"
                    outline="none"
                  	>
                    <i
                      class="fas fa-clipboard-list"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>
                    Manual List
                  </Button>
                  </FormGroup>
	            </div>  
	          </div>
	        </div>
			</div>
		)
	}
}

export default Shop;

