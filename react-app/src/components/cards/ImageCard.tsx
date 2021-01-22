import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
  picture: {
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  },
});

const ImageCard = ({ url }: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.picture}
        component="img"
        alt="Sarpsborg"
        image={url}
        title="Sarpsborg"
        height={420}
      />
    </Card>
  );
};
export default ImageCard;