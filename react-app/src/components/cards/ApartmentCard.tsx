import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { IApartmentProps } from "../../interfaces/IApartment";
import Divider from '@material-ui/core/Divider';
import theme from "../../themes/theme";

const useStyles = makeStyles({
  root: {
    marginBottom: 0,
    padding: 0,
    //padding: theme.spacing(4),
  
    "&:hover": {
      boxShadow: "17px 17px 18px #D4D2D2",
      transition: "all 0.2s ease-in",
      marginTop: 3,
      marginBottom: 7,
    },
  },
  media: {
    height: 100,
  },

  card: {
    maxWidth: 345,
    
  },
  text: {
    marginTop: theme.spacing(1),
  },
  secondInformationText: {
    display: "block",
    marginTop: theme.spacing(1),
    fontWeight: "bold",
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
          <Typography gutterBottom variant="h4" component="h4">
          <span className={classes.secondInformationText}>
                  {props?.title}
                </span>{" "}
          </Typography>
          <Divider/>
          <Typography variant="h6" component="h6" className={classes.text}>
          <span className={classes.secondInformationText} >
          {props?.address}, {props?.city}
                </span>{" "}
          </Typography>
          <Typography variant="h6"  component="h6" className={classes.text}>
          <span >
                
                </span>{" "}
          </Typography>
          <Typography variant="h6"  component="h6" className={classes.text}>
             Kvadratmeter <span className={classes.secondInformationText}>
                  {props?.squareMeter} m²
                </span>{" "} 
          </Typography>

          <Typography variant="h6"  component="h6" className={classes.text}>
             Antall soverom<span className={classes.secondInformationText}>
                  {props?.bedrooms}
                </span>{" "}
          </Typography>

          <Typography variant="h6"  component="h6" className={classes.text}>
             Antall bad <span className={classes.secondInformationText}>
                  {props?.bathrooms}
                </span>{" "}
          </Typography>
          {props.newlyBuilt ? (
            <Typography variant="h6"  component="h6" className={classes.text}>
              Kjøpspris: <span className={classes.secondInformationText}>
                  {props?.price}
                </span>{" "}kr
            </Typography>
          ) : (
            <Typography variant="h6"  component="h6" className={classes.text}>
              Pris per måned <span className={classes.secondInformationText}>
                  {props?.price} Kr
                </span>{" "}
            </Typography>
          )}
         
        
        
        </CardContent>
      </Card>
    </RouterLink>
  );
};

export default ApartmentCard;
