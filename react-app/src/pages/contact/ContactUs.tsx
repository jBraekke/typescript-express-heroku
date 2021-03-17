import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ContactForm from "../../components/forms/ContactForm";
import { Container } from "@material-ui/core";
import LoadingScreen from "../../components/loading/LoadingScreen"


const ContactUs = () => {
  
  const [imageLoad, setImageLoad] = useState(false);
  const img = new Image();
  img.onload = function () {
    setImageLoad(true);
  }
  img.src = "salg1.jpg";

  const useStyles = makeStyles({
    root: { flexGrow: 1 },
    gridheader: {
      backgroundImage: "url(" + img.src + ")",
      backgroundRepeat: "no-repeat, repeat",
      backgroundSize: "cover",
      height: "1000px",
    },
  });
  const classes = useStyles();
  return imageLoad ? (
    <div className={classes.root}>
      <Grid className={classes.gridheader} container>
        <Container>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <ContactForm></ContactForm>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  ): <LoadingScreen></LoadingScreen>
};

export default ContactUs;
