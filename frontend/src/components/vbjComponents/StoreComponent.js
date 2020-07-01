import React, { Component } from "react";
import Header from "./HeaderView";
import "./styles/styles.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as ROUTES from "../../constants/routes";
import { Link, Redirect } from "react-router-dom";
import SideNavBar from "../arumugamComponents/SideNavBar";

const Store = (props) => {
  return (
    <div>
      <Header name="Stores" />
      <SideNavBar history={props.history} />
      <div style={{marginTop: '30px'}}  className="row">
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Register your Store
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={ROUTES.REGSTORE}>
                <Button size="large" color="primary">
                  Register Your Store
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card className="root">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="225"
                image="https://cdn.dribbble.com/users/6115/screenshots/5812700/drb-nearby.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Location
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Find Nearby Stores
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={ROUTES.NEARBY_STORE}>
                <Button size="large" block color="primary">
                  Find Stores
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card className="root">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="225"
                image="https://thumbs.dreamstime.com/b/shopping-icon-shopping-cart-icon-dark-background-simple-vector-icon-shopping-icon-shopping-cart-icon-dark-background-116659167.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Orders
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  My Orders
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Link to={ROUTES.ORDERS}>
              <Button size="large" color="primary">
                View Orders
              </Button>
            </Link>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Store;
