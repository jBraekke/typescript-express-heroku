import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AddApartmentForm from "../../components/forms/AddApartmentForm";
//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
});

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <AddApartmentForm></AddApartmentForm>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
