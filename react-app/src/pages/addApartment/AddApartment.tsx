import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AddApartmentForm from "../../components/forms/AddApartmentForm";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
});

const ContactUs = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <AddApartmentForm></AddApartmentForm>
      </Container>
    </>
  );
};

export default ContactUs;
