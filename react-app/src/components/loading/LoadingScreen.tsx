import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
import { Avatar, Typography } from "@material-ui/core";
import theme from "../../themes/theme";
const useStyles = makeStyles({
    test: {
        height: "2000px",
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
        textAlign: "center",
        opacity: "40%",
      },
      pictureLogo: {
        marginTop: theme.spacing(10),
        height: theme.spacing(10),
        width: theme.spacing(10),
      },
});

const LoadingScreen = ({ title, description }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.test}>
    <Avatar
      className={classes.pictureLogo}
      alt="logo"
      src="vestengveien1.jpg"
    />
  </div>
  );
};

export default LoadingScreen;
