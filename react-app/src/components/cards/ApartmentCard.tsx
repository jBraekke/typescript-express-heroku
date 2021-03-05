import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link, Link as RouterLink } from "react-router-dom";
import { IApartmentProps } from "../../interfaces/IApartment";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      boxShadow: "17px 17px 18px #D4D2D2",
      transition: "all 0.2s ease-in",
      marginTop: -3,
    },
  },
  media: {
    height: 200,
  },
});

const ApartmentCard = ({ props }: IApartmentProps) => {
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
      <Card
        className={classes.root}
        onMouseOver={(setShadow) => ({ shadow: 3 })}
      >
        {props.imagePath ? (
          <>
            {" "}
            <CardMedia
              component="img"
              alt="Apartment"
              height="300"
              image={"./uploads/" + props.imagePath}
              title="Apartment"
            />
          </>
        ) : (
          <>
            {" "}
            <CardMedia
              component="img"
              alt="Apartment"
              height="300"
              image="hus.jpg"
              title="Apartment"
            />
          </>
        )}

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Tittel: {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Adresse: {props.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Antall Soverom: {props.bedrooms}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pris per måned: {props.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Depositum: {props.deposit}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Husleie garanti: {props.rentGuarantee}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            By: {props.city}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ApartmentCard;
