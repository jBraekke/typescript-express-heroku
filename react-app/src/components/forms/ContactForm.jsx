import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
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
}));

const ContactForm = () => {
  const classes = useStyles();
  const methods = useForm();
  const [datas, setDatas] = useState();
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

  const onSubmit = (data, e) => {
    postData("http://localhost:9000/test/contact", data).then((data) => {
      if (data.status === 250) {
        setDatas("Mail sent!");
      } else setDatas("Failed to send mail");
    });
  };

  return (
    <>
      <Typography variant="h4" component="h2">
        Kontakt oss
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
          name="subject"
          control={control}
          defaultValue=""
          variant="outlined"
          label="Tittel"
        />
        <Controller
          as={TextField}
          name="text"
          control={control}
          defaultValue=""
          variant="outlined"
          multiline
          rows={4}
          label="Melding"
        />

        <Button type="submit"> Send melding </Button>
      </form>
    </>
  );
};
export default ContactForm;
