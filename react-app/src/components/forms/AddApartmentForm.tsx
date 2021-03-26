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
  Snackbar,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { IApartment } from "../../interfaces/IApartment";
import { postData, postImage } from "../../utils/fetchPost";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
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
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const ContactForm = () => {
  const classes = useStyles();
  const methods = useForm();
  const [datas, setDatas] = useState("");
  const [images, setImages] = useState([]) as any;
  const { handleSubmit, control, errors } = methods;
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const onSubmit = (data: IApartment, e: any) => {
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
    /*
    console.log(data);
    postData("/api/apartments/add", data).then((data) => {
      setDatas("sending" + data.status);
      if (data.status === 204) {
        setDatas("Leilighet er lagt ut.");
        setOpen(true);
      } else
        setDatas(
          "Kunne ikke legge ut leilighet. Har du fylt ut alle felter riktig?"
        );
      setOpen(false);
    });
*/

    console.log(e);
    postData("/api/apartments/add", data)
      .then((data) => {
        //setDatas("sending" + data.status);
        if (!data.ok) {
          setOpenError(true);
          throw data;
        }
        setOpen(true);
        setDatas("Leilighet lagt til!");
        return data.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        err.text().then((errorMessage: any) => {});
      });

    if (images) {
      const formData = new FormData();
      formData.append("image", images);
      postImage("/api/multer/uploadimage", formData);
    }
  };
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
  const onFileChange = (event: any) => {
    setImages(event.target.files[0]);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Leilighet lagt til!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          Leiligheten ble ikke lagt til, prøv igjen!
        </Alert>
      </Snackbar>
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
              value: /^[A-Za-z0-9" "ÆØÅæøå]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.title}
          defaultValue=""
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
              value: /^[A-Za-z0-9" "ÆØÅæøå]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.description}
          defaultValue=""
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
              value: /^[A-Za-z0-9" "ÆØÅæøå]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.address}
          defaultValue=""
          variant="outlined"
          label="Skriv inn addresse..."
        />
        {errors.address && (
          <span className={classes.error}>{errors.address.message}</span>
        )}
        <Controller
          as={TextField}
          name="rentGuarantee"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Za-z0-9" "ÆØÅæøå]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.rentGuarantee}
          defaultValue=""
          variant="outlined"
          label="Skriv inn husleiegaranti..."
        />
        {errors.rentGuarantee && (
          <span className={classes.error}>{errors.rentGuarantee.message}</span>
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
          variant="outlined"
          label="Skriv inn pris..."
        />
        {errors.price && (
          <span className={classes.error}>{errors.price.message}</span>
        )}
        <Controller
          as={TextField}
          name="deposit"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[0-9]*$/,
              message: "Bare nummer tillatt",
            },
          }}
          error={!!errors.deposit}
          defaultValue=""
          variant="outlined"
          label="Skriv inn depositum..."
        />
        {errors.deposit && (
          <span className={classes.error}>{errors.deposit.message}</span>
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
