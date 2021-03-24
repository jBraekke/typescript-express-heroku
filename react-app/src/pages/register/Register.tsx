import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import AddUser from "../../components/forms/AddUser";

/*const useStyles = makeStyles({
  root: { flexGrow: 1 },
});*/

const Register = () => {
  //const classes = useStyles();

  return (
    <>
      <Container>
        <AddUser></AddUser>
      </Container>
    </>
  );
};

export default Register;
