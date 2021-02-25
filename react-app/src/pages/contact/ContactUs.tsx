import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ContactForm from "../../components/forms/ContactForm";
import { Container } from "@material-ui/core";
//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  gridheader: {
    backgroundImage: "url(salg1.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
    height: "1000px",
  },
});

const ContactUs = () => {
  const classes = useStyles();

  return (
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
  );
};

export default ContactUs;
