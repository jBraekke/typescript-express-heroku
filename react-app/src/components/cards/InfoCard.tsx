import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignitems: "center",
    textAlign: "center",
  },
  buttonCenter: {
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
    textAlign: "center",
  },
});

const InfoCard = ({ title, description }: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box component="h2">{title}</Box>
        <Box>{description}</Box>
      </CardContent>
      <CardActions className={classes.buttonCenter}>
        <Button size="small" color="primary">
          Kontakt oss
        </Button>
        <Button size="small" color="primary">
          Lær mer
        </Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
