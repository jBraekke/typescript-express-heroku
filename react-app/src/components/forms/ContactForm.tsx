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

const ContactForm = () => {
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
    postData("/contact/sendmail", data).then((data) => {
      setDatas("sending" + data.status);
      if (data.status === 250) {
        setDatas("Mail sent!");
      } else setDatas("Failed to send mail");
    });
  };

  return (
    <>
      <Card className={classes.formCard}>
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
            id="subject"
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
            id="text"
          />
          <Controller
            as={Select}
            name="City"
            control={control}
            defaultValue=""
            variant="outlined"
            rows={4}
            label="Melding"
            id="City"
          >
            {" "}
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Controller>

          <Button type="submit"> Send melding </Button>
        </form>
      </Card>
    </>
  );
};
export default ContactForm;
