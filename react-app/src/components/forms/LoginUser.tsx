import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, MenuItem, Select } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

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
}));

const LoginUser = () => {
  const classes = useStyles();
  const methods = useForm();
  const [datas, setDatas] = useState("");
  const { handleSubmit, control } = methods;

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }

  const onSubmit = (data: any, e: any) => {
    setDatas("sending" + data.status);
    console.log(e);
    postData("api/auth/login", data).then((data) => {
      setDatas("sending" + data.status);
      if (data.status === 200) {
        setDatas("User logged in!");
        console.log(data);
      } else setDatas("Failed to log in user..");
    });
  };

  return (
    <>
     
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
            variant="outlined"
            label="Email"
            id="subject"
          />
          <Controller
            as={TextField}
            name="password"
            control={control}
            defaultValue=""
            variant="outlined"
            multiline
            rows={4}
            label="Passord"
            id="text"
          />

          <Button type="submit"> Login bruker </Button>
        </form>
  
    </>
  );
};
export default LoginUser;