import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ContactForm from "../../components/forms/ContactForm";
//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
});

const ContactUs = () => {
  const [data, setData] = useState([] as any);

  const classes = useStyles();

  const CornRow = () => {
    return <>{data}</>;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <ContactForm></ContactForm>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;