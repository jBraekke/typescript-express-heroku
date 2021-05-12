/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Snackbar } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { postData } from "../../utils/fetchPost";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignitems: "center",
      textAlign: "center",
    },
  },
  formCard: {},
  error: {
    color: "red",
  },
}));

const LoginUser = () => {
  const classes = useStyles();
  const methods = useForm();
  const [datas, setDatas] = useState("");
  const { handleSubmit, control, errors } = methods;
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCloseError = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  const onSubmit = (data: any, e: any) => {
    setDatas("sending" + data.status);
    postData("api/auth/login", data)
      .then((data) => {
        setDatas("sending" + data.status);
        if (!data.ok) {
          setOpenError(true);
          throw data;
        }
        setOpen(true);
        return data.json();
      })
      .then(() => {})
      .catch((err) => {
        err.text().then((errorMessage: any) => {
          var dd = JSON.parse(errorMessage);
          setDatas(dd.data);
        });
      });
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Logget inn!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          Fikk ikke logget inn, prøv igjen!
        </Alert>
      </Snackbar>
      <Typography variant="h4" component="h2">
        Logg inn
      </Typography>
      <Typography>{datas}</Typography>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={TextField}
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Må være en gyldig email",
            },
          }}
          error={!!errors.email}
          variant="outlined"
          multiline
          rows={2}
          label="Skriv inn din email..."
          id="text"
        />
        {errors.email && (
          <span className={classes.error}>{errors.email.message}</span>
        )}
        <Controller
          as={TextField}
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: {
              value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
              message: "Passord ikke sterkt nok/Må være 6 bokstaver",
            },
          }}
          error={!!errors.password}
          variant="outlined"
          multiline
          rows={2}
          label="Skriv inn ditt passord..."
          id="text"
        />
        {errors.password && (
          <span className={classes.error}>{errors.password.message}</span>
        )}

        <Button type="submit"> Login bruker </Button>
      </form>
    </>
  );
};
export default LoginUser;
