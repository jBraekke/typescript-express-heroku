import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, MenuItem, Select } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import { useParams } from "react-router-dom";

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

  const params = useParams() as any;

  return (
    <>
      <Card className={classes.formCard}>
        <Typography variant="h2" component="h2" gutterBottom>
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
            defaultValue={params.address}
            variant="outlined"
            label="Adresse"
            id="subject"
            InputProps={{
              readOnly: true,
            }}
          />

          <Controller
            as={TextField}
            name=""
            control={control}
            defaultValue={params.city}
            variant="outlined"
            label="By"
            id="subject"
            InputProps={{
              readOnly: true,
            }}
          />

          <Controller
            as={TextField}
            name=""
            control={control}
            defaultValue=""
            variant="outlined"
            multiline
            label="Vennligst skriv inn din epost adresse.."
            id="text"
            required
          />
          <Controller
            as={TextField}
            name=""
            control={control}
            defaultValue=""
            variant="outlined"
            multiline
            label="Vennligst skriv inn ditt telefonnummer.."
            id="text"
            required
          />

          <Controller
            as={TextField}
            name="text"
            control={control}
            defaultValue=""
            variant="outlined"
            multiline
            rows={5}
            label="Om du ønsker kan du skrive en liten melding om hva du er ute etter..."
            id="text"
          />

          <Button
            type="submit"
            variant={"contained"}
            color="primary"
            endIcon={<MailIcon></MailIcon>}
            size={"large"}
          >
            {" "}
            Send oss en mail{" "}
          </Button>
        </form>
      </Card>
    </>
  );
};
export default ContactForm;
