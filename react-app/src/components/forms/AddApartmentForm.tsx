import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
} from "@material-ui/core";
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
  error: {
    color: "red",
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const methods = useForm();
  const [datas, setDatas] = useState("");
  const [images, setImages] = useState([]) as any;
  const { handleSubmit, control, register, errors } = methods;

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
  async function postImage(url = "", data: any) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }

  const onSubmit = (data: IApartment) => {
    setDatas("sending" + data);
    //temp Fix
    data.imagePath = images.name;
    data.city = "Sarpsborg";
    data.squareMeter = 123;
    data.bedrooms = 2;
    data.bathrooms = 2;
    data.price = 9000;
    //data.apartment = true;
    data.incoming = false;
    data.house = false;
    data.commerce = false;
    data.rentGuarantee = false;
    data.parking = true;
    data.deposit = true;
    data.newlyBuilt = true;

    console.log(data);
    postData("http://localhost:1337/api/apartments/add", data).then((data) => {
      setDatas("sending" + data.status);
      if (data.status === 200) {
        setDatas("Leilighet er lagt ut.");
      } else
        setDatas(
          "Kunne ikke legge ut leilighet. Har du fylt ut alle felter riktig?"
        );
    });

    if (images) {
      const formData = new FormData();
      formData.append("image", images);
      postImage("http://localhost:1337/api/multer/uploadimage", formData);
    }
  };

  const onFileChange = (event: any) => {
    setImages(event.target.files[0]);
  };
  const inputProps = {
    //maxLength: 5,
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
          rules={{
            required: true,
            pattern: {
              value: /^[A-Za-z0-9_-]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.title}
          defaultValue="Tittel"
          variant="outlined"
          label="Skriv inn tittel..."
        />
        {errors.title && (
          <span className={classes.error}>{errors.title.message}</span>
        )}
        <Controller
          as={TextField}
          name="description"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Za-z0-9_-]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.title}
          defaultValue="Beskrivelse"
          variant="outlined"
          label="Skriv inn beskrivelse..."
        />
        <Controller
          as={TextField}
          name="address"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Za-z0-9_-]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.title}
          defaultValue="Adresse"
          variant="outlined"
          label="Skriv inn addresse..."
        />

        <FormGroup>
          <Typography>Velg type bolig</Typography>
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="apartment"
                defaultValue={false}
                render={({ onChange, value }) => (
                  <Checkbox
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            }
            label="Leilighet"
          />
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="house"
                defaultValue={false}
                render={({ onChange, value }) => (
                  <Checkbox
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            }
            label="Hus"
          />
        </FormGroup>
        <Button type="submit"> Send melding </Button>
      </form>
    </>
  );
};
export default ContactForm;
