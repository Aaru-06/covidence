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

const Store = () => {
  return (
    <div>
      <Header name="Stores" />
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Register your Store
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={ROUTES.REGSTORE}>
                <Button size="large" color="primary">
                  Click to Register
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
                image="https://media.istockphoto.com/vectors/location-icons-map-pointer-icon-map-navigation-location-red-location-vector-id1182752907?k=6&m=1182752907&s=170667a&w=0&h=szNezVFw2kFJfOvcujsT8l-kIE4-6U4mZdBt7ZUpkC0="
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
                  Click to Find
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
                image="data:image/png;base64,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"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Orders
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Store Orders
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="large" color="primary">
                View your Orders
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Store;
