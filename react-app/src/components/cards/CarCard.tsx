import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link, Link as RouterLink } from "react-router-dom";
import { IApartment, IApartmentProps } from "../../interfaces/IApartment";

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

const CarCard = ({ props }: IApartmentProps) => {
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
        {props.images ? (
          props.images.map((image) => (
            <>
              {" "}
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image={"./uploads/" + image.filename}
                title="Contemplative Reptile"
              />
            </>
          ))
        ) : (
          <>
            {" "}
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="300"
              image="hus.jpg"
              title="Contemplative Reptile"
            />
          </>
        )}

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props._id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.adresse}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CarCard;
