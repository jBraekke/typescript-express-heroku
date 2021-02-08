import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useFetch } from "../../hooks/useFetch";
import { IApartment } from "../../interfaces/IApartment";
import { Fade } from "@material-ui/core";
import CarCard from "../../components/cards/CarCard";
//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
});

const Test = () => {
  const url = "http://localhost:1337/api/apartments/getlist";

  const { status, data, error } = useFetch(url);

  const classes = useStyles();

  const CornRow = () => {
    return (
      <>
        {data.map((data: any) => (
          <Grid item xs={6}>
            <CarCard props={data}></CarCard>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <CornRow></CornRow>
        </Grid>
      </Grid>
    </div>
  );
};

export default Test;
