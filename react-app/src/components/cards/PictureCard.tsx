import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(salg2.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
    background: "rgba(0,0,0,0.1)",
  },
  content: {
    height: "300px",
  },
});

const PictureCard = () => {
  const classes = useStyles();

  return (
    <Link
      {...{
        component: RouterLink,
        to: "/welcome",
        color: "inherit",
        style: { textDecoration: "none" },
        key: "label",
      }}
    >
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography variant="h4" component="h3">
            Salg
          </Typography>
          <Typography variant="body2" component="p">
            Vi tilbyr et flott utvalg av nyrenoverte og lekre boliger sentralt i
            Østfold
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
export default PictureCard;
/*        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="leieboer.jpg"
          title="Contemplative Reptile"
        /> */
