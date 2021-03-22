import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { IApartmentProps } from "../../interfaces/IApartment";

const useStyles = makeStyles({
  root: {
    marginBottom: 0,
    padding: 0,
    "&:hover": {
      boxShadow: "17px 17px 18px #D4D2D2",
      transition: "all 0.2s ease-in",
      marginTop: 3,
      marginBottom: 7,
    },
  },
  media: {
    height: 200,
  },

  card: {
    maxWidth: 345,
  },
});

const ApartmentCard = ({ props }: IApartmentProps) => {
  const classes = useStyles();

  return (
    <RouterLink to={`apartmentview/${props._id}`}
    {...{
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
            <CardMedia
              component="img"
              height="300"
              alt="Apartment"
              image={"./uploads/" + props.imagePath}
              title="Apartment"
            />
          </>
        ) : (
          <>
            <CardMedia
              component="img"
              height="300"
              alt="Apartment"
              image="hus.jpg"
              title="Apartment"
            />
          </>
        )}

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.city}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.address}
          </Typography>
          {props.newlyBuilt ? (
            <Typography variant="body2" color="textSecondary" component="p">
              Kjøpspris: {props.price}kr
            </Typography>
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              Pris per måned: {props.price}kr
            </Typography>
          )}
        </CardContent>
      </Card>
    </RouterLink>
  );
};

export default ApartmentCard;
