import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  MenuItem,
  Select,
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
  const { handleSubmit, control, errors } = methods;

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
    /*data.city = "Sarpsborg";
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
    data.newlyBuilt = true;*/

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

  return (
    <>
      <Typography variant="h4" component="h2">
        Legg til leilighet
      </Typography>
      <Typography>{datas}</Typography>
      <Typography>Legg til bilde</Typography>
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
          error={!!errors.description}
          defaultValue="Beskrivelse"
          variant="outlined"
          label="Skriv inn beskrivelse..."
        />
        {errors.description && (
          <span className={classes.error}>{errors.description.message}</span>
        )}
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
          error={!!errors.address}
          defaultValue="Adresse"
          variant="outlined"
          label="Skriv inn addresse..."
        />
        {errors.address && (
          <span className={classes.error}>{errors.address.message}</span>
        )}
        <Typography>Skriv in antall/pris</Typography>
        <Controller
          as={TextField}
          name="squareMeter"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]*$/,
              message: "Bare nummer tillatt",
            },
          }}
          error={!!errors.squareMeter}
          defaultValue="Kvadratmeter"
          variant="outlined"
          label="Skriv inn kvadratmeter..."
        />
        {errors.squareMeter && (
          <span className={classes.error}>{errors.squareMeter.message}</span>
        )}
        <Controller
          as={TextField}
          name="bedrooms"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]*$/,
              message: "Bare nummer tillatt",
            },
          }}
          error={!!errors.bedrooms}
          defaultValue="soverom"
          variant="outlined"
          label="Skriv inn antall soverom..."
        />
        {errors.bedrooms && (
          <span className={classes.error}>{errors.bedrooms.message}</span>
        )}
        <Controller
          as={TextField}
          name="bathrooms"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]*$/,
              message: "Bare nummer tillatt",
            },
          }}
          error={!!errors.bedrooms}
          defaultValue="bad"
          variant="outlined"
          label="Skriv inn antall bad..."
        />
        {errors.bathrooms && (
          <span className={classes.error}>{errors.bathrooms.message}</span>
        )}
        <Controller
          as={TextField}
          name="price"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]*$/,
              message: "Bare nummer tillatt",
            },
          }}
          error={!!errors.price}
          defaultValue="pris"
          variant="outlined"
          label="Skriv inn pris..."
        />
        {errors.price && (
          <span className={classes.error}>{errors.price.message}</span>
        )}
        <Typography>Velg By</Typography>
        <Controller
          rules={{
            required: true,
            pattern: {
              value: /^[A-Za-z]*$/,
              message: "Bare bokstaver tillatt/Må fylles ut!",
            },
          }}
          as={Select}
          error={!!errors.city}
          name="city"
          control={control}
        >
          <MenuItem value={"Sarpsborg"}>Sarpsborg</MenuItem>
          <MenuItem value={"Fredrikstad"}>Fredrikstad</MenuItem>
          <MenuItem value={"Moss"}>Moss</MenuItem>
        </Controller>
        {errors.city && (
          <span className={classes.error}>{errors.city.message}</span>
        )}

        <FormGroup>
          <Typography>Velg type bolig (Velg en eller flere)</Typography>
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
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="incoming"
                defaultValue={false}
                render={({ onChange, value }) => (
                  <Checkbox
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            }
            label="Innkommende leilighet"
          />
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="commerce"
                defaultValue={false}
                render={({ onChange, value }) => (
                  <Checkbox
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            }
            label="Næringsbygg"
          />
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="newlyBuilt"
                defaultValue={false}
                render={({ onChange, value }) => (
                  <Checkbox
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            }
            label="Nybygg"
          />
        </FormGroup>
        <FormGroup>
          <Typography>Hva har boligen? (Velg en eller flere)</Typography>
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="deposit"
                defaultValue={false}
                render={({ onChange, value }) => (
                  <Checkbox
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            }
            label="Depositum"
          />
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="rentGuarantee"
                defaultValue={false}
                render={({ onChange, value }) => (
                  <Checkbox
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            }
            label="Leiegaranti"
          />
          <FormControlLabel
            control={
              <Controller
                control={control}
                name="parking"
                defaultValue={false}
                render={({ onChange, value }) => (
                  <Checkbox
                    onChange={(e) => onChange(e.target.checked)}
                    checked={value}
                  />
                )}
              />
            }
            label="Parkering"
          />
        </FormGroup>
        <Button type="submit"> Send melding </Button>
      </form>
    </>
  );
};
export default ContactForm;
