import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {},
});

const PictureCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href="/welcome" component={CardActionArea} color="inherit">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Salg
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Vi tilbyr et flott utvalg av nyrenoverte og lekre boliger sentralt i
            Østfold
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="purchase.jpg"
          title="Contemplative Reptile"
        />
      </Link>
    </Card>
    
    
  );
};
export default PictureCard;
