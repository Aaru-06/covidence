import React from "react";

import "./styles/styles.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function InfectedCard(props) {
  return (
    <div className="row">
      <Card className="root">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="danger"
            height="160"
            image="https://images.unsplash.com/photo-1555699875-5773b06e8ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            title="Infected Address"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              <span className="typo">Infected</span>
              <span>Address</span>
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="typos"
            >
              {props.infected}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default InfectedCard;
