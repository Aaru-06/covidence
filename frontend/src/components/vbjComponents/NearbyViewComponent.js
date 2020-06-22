import React from "react";
import "./styles/styles.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

const NearbyView = (props) => {
  return props.pin.map((pincode) => {
    return (
      <div className="row">
        <Card className="root">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="store"
              height="225"
              image="https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              title="Store"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {pincode.Name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {pincode.Address}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={ROUTES.SHOP}>
              <Button size="large" color="primary">
                Click to Buy
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  });
};

export default NearbyView;
