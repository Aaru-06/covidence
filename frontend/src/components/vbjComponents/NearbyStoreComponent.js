import React, { Component } from "react";
import firebase from "../../config/firebase";
import Header from "./HeaderView";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { FormGroup, Button } from "reactstrap";
import "./styles/styles.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class NearbyStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: [],
      pincode: "",
      filpin: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const ref = firebase.database().ref("Stores");
    ref.on("value", (snapshot) => {
      let stores = snapshot.val();
      this.setState({
        store: stores,
      });
    });
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();
    let ref = firebase.database().ref();
    this.setState({ errors, values });

    if (errors.length === 0) {
      this.setState({
        pincode: values["pincode"],
      });
    } else {
      console.log(errors);
    }
  }

  render() {
    console.log(this.state.store);
    var pin = Object.keys(this.state.store)
      .filter((key) => {
        return this.state.store[key].Pincode == this.state.pincode;
      })
      .map((key) => {
        return this.state.store[key];
      });
    if (pin != null) {
      const locate = (
        <div className="row">
          <div className="col-12 col-md-4">
            <Card className="root">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Store"
                  height="225"
                  image="https://c0.wallpaperflare.com/preview/539/217/128/ecommerce-online-store-online-shop-store.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Register
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Register your Store
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="large" color="primary">
                  Click to Register
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container">
          <Header name="Nearby stores" />
          <AvForm onSubmit={this.handleSubmit}>
            <AvField
              className="reginput"
              name="pincode"
              id="pincode"
              label="Pincode"
              type="text"
              innerRef={(input) => (this.pincode = input)}
              errorMessage="Pincode Required ..!!"
              validate={{ number: true, required: true }}
            ></AvField>

            <FormGroup id="regbut">
              <Button
                style={{ fontSize: "18px" }}
                color="danger"
                outline="none"
              >
                <i
                  class="fa fa-user-circle-o"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
                Register
              </Button>
            </FormGroup>
          </AvForm>
        </div>
        {locate}
      </div>
    );
  }
}

export default NearbyStore;
