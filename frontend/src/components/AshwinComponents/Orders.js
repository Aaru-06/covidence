import React , { Component, useState } from 'react';
import firebase from "../../config/firebase";
import Header from "../vbjComponents/HeaderView";
import { Card, CardText, Button, Modal, ModalHeader, ModalBody, } from "reactstrap";
import { Link } from 'react-router-dom';
import SideNavBar from "../arumugamComponents/SideNavBar";

const RenderOrder = (props) => {

    let ordid = [];
    let orders = [];

    const ref = firebase.database().ref("Carts");
    ref.on("value", (snapshot) => {
        orders = snapshot.val();
        props.order.map((order) => {
            ordid = Object.keys(orders).filter((key) => {
                return orders[key].customerId === order.customerId;
            })                   
        })
    });
    
    function CancelOrder (key) {
        const ref = firebase.database().ref("Carts").child(key).remove();
        window.location.reload();
    }    

    const [open, setOpen] = useState(false);

    return ordid.map((key) => {
    if(orders[key].manuel === "False"){   
        let stname = Object.keys(props.store).filter(st => {
            return st === orders[key].shopId                
        })       
        .map(sto => {
        return props.store[sto].Name
        });      
        
        let stadd = Object.keys(props.store).filter(st => {
            return st === orders[key].shopId                
        })       
        .map(sto => {
        return props.store[sto].Address
        });        

        return(
            <Card className="ordcards">
                <strong>
                <CardText style={{color: 'blue', marginBottom: '20px'}} >Id : {key}</CardText>

                <CardText style={{color: 'red', marginBottom: '20px'}} >
                    Name : {stname}
                </CardText>     
                <CardText style={{color: 'orange', marginBottom: '30px'}} >
                    Address : {stadd}
                </CardText>
                </strong>
                <div className="row" style={{marginLeft: '0px'}} >
                    <Button color="danger" outline="none" onClick={() => setOpen(true)} >View Cart</Button>    
                    <Button color="danger" outline="none" style={{marginLeft: '105px'}} onClick = {() => CancelOrder(key)} >Cancel Order</Button>
                </div>     
                <Modal isOpen={open} style={{ marginTop: "100px" }} >
                <ModalHeader>
                    <div className="row">
                        <h2 style={{ marginLeft: "190px"  }}> My Cart </h2>{" "}
                        <Link style={{float: 'right', marginLeft: '175px', marginTop: '5px'}} onClick={() => setOpen(false)}>
                        <i style={{color: 'black'}} class="fa fa-times-circle-o" aria-hidden="true"></i>
                        </Link>
                    </div>
                </ModalHeader>
                    <ModalBody>
                        {
                            orders[key].Items.map((item) => {
                            return (
                            <p  style={{
                                    margin: " 15px 0px 20px 30px ",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    wordSpacing: "10px",
                                }}>
                                {" "}
                                {item}{" "}
                              </p>)
                            })
                        }
                    </ModalBody>    
                </Modal>    

            </Card>
        )
    }
    if(orders[key].manuel === "True"){  
        let stname = Object.keys(props.store).filter(st => {
            return st === orders[key].shopId                
        })       
        .map(sto => {
        return props.store[sto].Name
        });   
        
        let stadd = Object.keys(props.store).filter(st => {
            return st === orders[key].shopId                
        })       
        .map(sto => {
        return props.store[sto].Address
        });

        let photo = orders[key].imageUri;

        return(
            <Card className="ordcards">
                <strong>
                <CardText style={{color: 'blue', marginBottom: '20px'}} >Id : {key}</CardText>

                <CardText style={{color: 'red', marginBottom: '20px'}} >
                    Name : {stname}
                </CardText>     
                <CardText style={{color: 'orange', marginBottom: '30px'}} >
                    Address : {stadd}
                </CardText>
                </strong>    
                <div className="row" style={{marginLeft: '0px'}} >
                    <Link to={photo} onClick={(event) => { event.preventDefault(); window.open(photo); } } > <Button color="danger" outline="none">View Photo</Button> </Link>  
                    <Button color="danger" outline="none" style={{marginLeft: '105px'}} onClick = {() => CancelOrder(key)} >Cancel Order</Button>
                </div>         
            </Card>
        )           
    }
});
              
}

class Orders extends Component {
    constructor(props){
        super(props);

        this.state = {
            order : [],
            stores : [],
            customers : [],
            cust : ''
        }
    }

    componentDidMount() {
        const ref = firebase.database().ref("Carts");
        ref.on("value", (snapshot) => {
          let orders = snapshot.val();
          this.setState({
            order: orders,
          }, () => console.log(this.state.order) );
        });

        const ref1 = firebase.database().ref("Stores");
        ref1.on("value", (snapshot) => {
            let stores = snapshot.val(); 
            this.setState({
                stores : stores,
              }, () => console.log(this.state.stores) );
        });

        const ref2 = firebase.database().ref("users");
        ref2.on("value", (snapshot) => {
            let customers = snapshot.val();        
            this.setState({
                customers: customers,
              }, () => console.log(this.state.customers) );
        });   
        
        var CustomerKey = localStorage.getItem("snapKey");
        var res = CustomerKey.split("/");
        this.setState({cust: Object.values(res).pop() }, () => console.log(this.state.cust));
      }

    render(){
        let d = new Date();
        let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 

        let ord = Object.keys(this.state.order)
        .filter((key) => {
            return this.state.order[key].customerId === this.state.cust;
        })
        .map((key) => {
            return this.state.order[key];
        });
        console.log(ord);       

        return(
            <div>
                <Header name="My Orders" />
                <div className="row">
                <RenderOrder order={ord} store={this.state.stores}  />
                </div>
            </div>
        )
    }
}

export default Orders;

