import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, MenuItem, Select } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AddIcon from '@material-ui/icons/Add';

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

const AddUser = () => {
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
    //console.log(response.json());
    return response; // parses JSON response into native JavaScript objects
  }

  const onSubmit = (data: any, e: any) => {
    setDatas("sending" + data.status);
    console.log(e);
    postData("api/auth/register", data).then((data) => {
      setDatas("sending" + data.status);
      if (data.status === 200) {
        setDatas("User created!");
      } else setDatas("Failed to create user...");
    });
  };

  return (
    <>
     
        <Typography variant="h4" component="h2">
          Legg til bruker
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
            name="firstName"
            control={control}
            defaultValue=""
            rows={2}
            multiline
            variant="outlined"
            label="Skriv inn ditt fornavn..."
            id="subject"
          />
          <Controller
            as={TextField}
            name="lastName"
            control={control}
            defaultValue=""
            variant="outlined"
            multiline
            rows={2}
            label="Skriv inn ditt etternavn..."
            id="text"
          />

        <Controller
            as={TextField}
            name="email"
            control={control}
            defaultValue=""
            variant="outlined"
            multiline
            rows={2}
            label="Skriv inn din email..."
            id="text"
          />
         
         <Controller
            as={TextField}
            name="password"
            control={control}
            defaultValue=""
            variant="outlined"
            multiline
            rows={2}
            label="Skriv inn ditt passord..."
            id="text"
          />

      <Controller
            as={TextField}
            name="role"
            control={control}
            defaultValue=""
            variant="outlined"
            multiline
            rows={2}
            label="Skriv inn rolle"
            id="text"
          />
         
         

          <Button 
          type="submit"  variant={"contained"}
                  color = "primary"
                  endIcon={<AddIcon></AddIcon>}
                  size={"large"}> Opprett bruker 
          </Button>
        </form>
  
    </>
  );
};
export default AddUser;
