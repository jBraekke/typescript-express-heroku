import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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

const PictureCardHomePage = ({ title, description, image }: any) => {
  const classes = useStyles();
  const testStyles = makeStyles({
    image: {
      backgroundImage: "url(" + image + ")",
      backgroundRepeat: "no-repeat, repeat",
      backgroundSize: "cover",
      background: "rgba(0,0,0,0.1)",
    },
  });
  const classes2 = testStyles();

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
      <Card className={classes2.image}>
        <CardContent className={classes.content}>
          <Typography
            align="center"
            color="primary"
            variant="h4"
            component="h3"
          >
            {title}
          </Typography>
          <Typography
            align="center"
            color="primary"
            variant="body1"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
export default PictureCardHomePage;
/*        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="leieboer.jpg"
          title="Contemplative Reptile"
        /> */
