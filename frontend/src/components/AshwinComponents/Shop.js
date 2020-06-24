import React, { Component } from "react";
import storage from "../../config/firebase";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import Header from "../vbjComponents/HeaderView";
import img from "../../images/shop.jpg";
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";
import firebase from "../../config/firebase";
import * as ROUTES from "../../constants/routes";
import { Redirect } from "react-router-dom";

const RenderCart = (props) => {
  return props.order.map((order) => {
    return(
      <p 
      style={{
        margin:' 15px 0px 20px 30px ',
        fontSize: '18px',
        fontWeight: 'bold',
        wordSpacing: '10px'
      }} > {order.item} : {order.qty} </p>
    );
  });
}


class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manual: 'False',
      flag: false,
      show: false,
      fileval: '',
      item: '',
      qty: '',
    	order : [],
      cust: '',
      object : {}    	
    };    
    this.AddCart = this.AddCart.bind(this);
    this.PlaceOrder = this.PlaceOrder.bind(this);
    this.ViewCart = this.ViewCart.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleqty = this.handleqty.bind(this);
    this.HandleFile = this.HandleFile.bind(this);
  }

  HandleFile = (e) => {
    this.setState({fileval: e.target.files[0], manual: 'True'}, () => console.log(this.state.fileval.name));
    const uploadTask = storage.ref(`Carts/${this.state.fileval.name}`).put(this.state.fileval);
    uploadTask.on(
    "state_changed",
    (snapshot) => {},
    error => {
      console.log(error);
    },
    () => {
      storage.ref("Carts")
      .child(this.state.fileval.name)
      .getDownloadURL()
      .then(url => {
        console.log(url);
      });
    });
  }

  handleName(e){
    this.setState({item: e.target.value});
  }

  handleqty(e){
    this.setState({qty: e.target.value});
  }

  AddCart(){
    const obj = {'item': this.state.item  , 'qty': this.state.qty};
    const neword = this.state.order.slice();
    neword.push(obj);
    this.setState({ order: neword}, ()=> console.log(this.state.order)); 

  }

  ViewCart(){
    this.setState({show: !this.state.show}); 
  }

  PlaceOrder(event, errors, values){
    event.preventDefault();
    let ref = firebase.database().ref("Stores");

    ref.on("value", (snapshot) => {
      let stores = snapshot.val();
      if(stores!==null){
        Object.keys(stores)
        .filter((key) => {
          return stores[key].Name == this.props.location.name;
        })
        .map((key) => {
          this.setState({cust: key}, ()=> console.log(this.state.cust))
        })
      }      
    });


    
  }
    

  render() {
    if (this.state.flag) {
      return <Redirect to={ROUTES.DASHBOARD} />;
    }
    return (
      <div className="statpage">
        <Header name={this.props.location.name} />
        <div className="row">
          <div className="col-12 col-sm-6">
            <img
              className="myImage"
              src={img}
              width="600px"
              height="620px"
              alt="img"
            ></img>
          </div>

          <div className="col-12 col-sm-6">
            <div className="reg">
              <h2 id="regh2">Make Your Order</h2>
              <AvForm onSubmit={this.PlaceOrder} >
                <AvField
                  className="reginput"
                  name="item"
                  id="item"
                  value = {this.state.item}
                  label="Name"
                  type="text"
                  onChange={this.handleName}
                  innerRef={(input) => (this.item = input)}
                  errorMessage="Name Required ..!!"
                  required
                ></AvField>

                <AvField
                  className="reginput"
                  name="qty"
                  id="qty"
                  value = {this.state.qty}
                  label="Quantity"
                  type="text"
                  onChange={this.handleqty}
                  innerRef={(input) => (this.qty = input)}
                  errorMessage="Quantity must be a Number ..!!"
                  validate={{ number: true, required: true }}
                ></AvField>

                <FormGroup id="shopbut">
                  <Button
                    style={{
                      fontSize: "17px",
                      borderWidth: "3px",
                      boxShadow: "0px 7px 5px #d4d4d4",
                    }}
                    color="danger"
                    outline="none"
                    onClick={this.AddCart}
                  >
                    <i
                      className="fa fa-cart-plus"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>
                    Add To Cart
                  </Button>

                  <Button
                    style={{
                      fontSize: "17px",
                      float: "right",
                      borderWidth: "3px",
                      boxShadow: "0px 7px 5px #d4d4d4",
                    }}
                    color="danger"
                    outline="none"
                    onClick={this.PlaceOrder}
                  >
                    <i
                      className="fa fa-check-circle-o"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>
                    Place Order
                  </Button>
                </FormGroup>
              </AvForm>
              <FormGroup id="shopbut">
                <Button
                  style={{
                    fontSize: "17px",
                    borderWidth: "3px",
                    boxShadow: "0px 7px 5px #d4d4d4",
                  }}
                  color="danger"
                  outline="none"
                  onClick={this.ViewCart}
                >
                  <i
                    className="fa fa-shopping-cart"
                    aria-hidden="true"
                    style={{marginRight: "7px", width: "34px" }}
                  ></i>
                  View Cart
                </Button>
                <Label for="files" style={{cursor: 'pointer', float: 'right'}} ><i class="fa fa-cloud-upload" style={{color: '#db0202', width: '65px', fontSize: '35px'}} ></i></Label>
                <Input onChange={this.HandleFile} id="files" type="file" style={{display: 'none'}} />
              </FormGroup>
            </div>
          </div>
        </div>
        <Modal style={{marginTop: '100px'}} isOpen={this.state.show} toggle={this.ViewCart} >
          <ModalHeader> <h2 style={{marginLeft: '200px'}}> My Cart </h2> </ModalHeader>
          <ModalBody>
            <RenderCart order={this.state.order} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Shop;

// ref.child("Carts").push({
        
//       });

// <Button
//                   style={{
//                     fontSize: "17px",
//                     float: "right",
//                     width: "142px",
//                     borderWidth: "3px",
//                     boxShadow: "0px 7px 5px #d4d4d4",
//                   }}
//                   color="danger"
//                   outline="none"
//                 >
//                   <i
//                     class="fas fa-clipboard-list"
//                     aria-hidden="true"
//                     style={{ marginRight: "7px" }}
//                   ></i>
//                   Manual List
//                 </Button>