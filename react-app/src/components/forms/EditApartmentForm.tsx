import React, { useEffect, useState } from "react";
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
import AddIcon from "@material-ui/icons/Add";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
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
const EditApartment = () => {
  const classes = useStyles();
  const methods = useForm();
  const [datas, setDatas] = useState("");
  const [images, setImages] = useState([]) as any;
  const { handleSubmit, control, errors } = methods;
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [realEstate, setRealEstate] = useState<IApartment>();
  const params = useParams() as any;
  const url2 = "/api/apartments/";
  const { data } = useFetch(url2 + params.id);

  useEffect(() => {
    if (params.id) {
      setRealEstate(data);
    }
  }, [params.id, data]);

  const onSubmit = (data: IApartment, e: any) => {
    if (images) {
      data.imagePath = images.name;
    }

    console.log(e);
    postData("/api/apartments/edit/" + params.id, data)
      .then((data) => {
        if (!data.ok) {
          setOpenError(true);
          throw data;
        }
        setOpen(true);
        setDatas("Leilighet endret!");
        return data.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        err.text().then(() => {});
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
        Endre en leilighet
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
              value: /^[A-Za-z0-9" "ÆØÅæøå.,'\\?\\!]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.title}
          defaultValue={realEstate?.title}
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
          multiline
          rows={10}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Za-z0-9" "ÆØÅæøå.,'-\\?\\!]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.description}
          defaultValue={realEstate?.description}
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
              value: /^[A-Za-z0-9" "ÆØÅæøå.,'`-]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.address}
          defaultValue={realEstate?.address}
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
              value: /^[A-Za-z0-9" "ÆØÅæøå.,]*$/,
              message: "Bare bokstaver og nummer tillatt",
            },
          }}
          error={!!errors.rentGuarantee}
          defaultValue={realEstate?.rentGuarantee}
          variant="outlined"
          label="Skriv inn husleiegaranti..."
        />
        {errors.rentGuarantee && (
          <span className={classes.error}>{errors.rentGuarantee.message}</span>
        )}
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
          defaultValue={realEstate?.squareMeter}
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
          defaultValue={realEstate?.bedrooms}
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
          defaultValue={realEstate?.bathrooms}
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
          defaultValue={realEstate?.price}
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
          defaultValue={realEstate?.deposit}
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
        <Button
          type="submit"
          variant={"contained"}
          color="primary"
          endIcon={<AddIcon></AddIcon>}
          size={"large"}
        >
          Legg til annonse{" "}
        </Button>
      </form>
    </>
  );
};
export default EditApartment;
