import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { IApartment } from "../../interfaces/IApartment";

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
  const [datas, setDatas] = useState("");
  const [images, setImages] = useState() as any;
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
  async function postImage(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-type": "multipart/form-data",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }

  const onSubmit = (data: IApartment) => {
    setDatas("sending" + data);
    data.imagePath = images.name;
    console.log(data);
    postData("https://http://localhost:1337/api/apartments/add", data).then(
      (data) => {
        setDatas("sending" + data.status);
        if (data.status === 200) {
          setDatas("Leilighet er lagt ut.");
        } else
          setDatas(
            "Kunne ikke legge ut leilighet. Har du fylt ut alle felter riktig?"
          );
      }
    );

    const formData = new FormData();
    formData.append("image", images);
    postImage("http://localhost:1337/api/multer/uploadimage", formData);
  };

  const onFileChange = (event: any) => {
    setImages(event.target.files[0]);
  };

  return (
    <>
      <Typography variant="h4" component="h2">
        Legg til leilighet
      </Typography>
      <Typography>{datas}</Typography>
      <Input type="file" onChange={onFileChange} />
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={TextField}
          name="title"
          control={control}
          defaultValue="Tittel"
          variant="outlined"
          label="Skriv inn tittel..."
        />
        <Controller
          as={TextField}
          name="description"
          control={control}
          defaultValue="Beskrivelse"
          variant="outlined"
          label="Skriv inn beskrivelse..."
        />
        <Controller
          as={TextField}
          name="address"
          control={control}
          defaultValue="Adresse"
          variant="outlined"
          label="Skriv inn addresse..."
        />
        <Controller
          as={TextField}
          type="date"
          name="date"
          control={control}
          defaultValue="Tittel"
          variant="outlined"
          label="Skriv inn tittel..."
        />
        <Button type="submit"> Send melding </Button>
      </form>
    </>
  );
};
export default ContactForm;
