import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams, NavLink } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import { useFetch } from "../../hooks/useFetch";
import { IApartment } from "../../interfaces/IApartment";
//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
});

const ApartmentView = () => {

  const url =
  "https://vestengveien-eiendomsutvikling.herokuapp.com/api/apartments/get";
  const url2 =
  "http://localhost:1337/api/apartments/";
  /*const getData = () => {
    fetch(url2 + params.id, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        //setData(myJson.data)
        setRealEstate(myJson.data);;
      });
    }*/
    const params = useParams() as any;
  const { status, data } = useFetch(url2 + params.id);
  const [realEstate, setRealEstate] = useState<IApartment>();
    useEffect(() => {
      
      if (params.id) {
        setRealEstate(data);
        
      }
    }, []);

  const classes = useStyles();


  const CornRow = () => {
    return <><p>{realEstate?.address}</p></>;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <CornRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default ApartmentView;
