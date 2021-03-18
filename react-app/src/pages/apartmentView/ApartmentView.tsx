import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams, NavLink } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import { useFetch } from "../../hooks/useFetch";
import { IApartment } from "../../interfaces/IApartment";
import { Card, CardMedia, Container } from "@material-ui/core";
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
  const [imageRefresh, setimageRefresh] = useState({});
  
    useEffect(() => {
      
      if (params.id) {
        setRealEstate(data);
        /*
        setimageRefresh([{
          imageSrc: './uploads/' + realEstate?.imagePath,
          imageHash: Date.now()
       }])
    */
      }
    });

  const classes = useStyles();


  const CornRow = () => {
    return <>
    
        {realEstate?.imagePath ? (
          <>
            <CardMedia
              component="img"
              height="300"
              alt="Apartment"
              src={"./uploads/" + realEstate?.imagePath}
              title="Apartment"
            />
          </>
        ) : (
          <>
            <CardMedia
              component="img"
              height="300"
              alt="Apartment2"
              src="public/hus.jpg"
              title="Apartment"
            />
          </>
        )}
    

      <Grid container item xs={12}>
    <Grid item xs={12}>
      <p>{realEstate?.title}</p>
      <p>{realEstate?.address}</p>
      <p>{realEstate?.description}</p>
      <p>{realEstate?.city}</p>
      </Grid>
      </Grid>
      
      
      
      
      
      
      
      </>;
  };

  return (
    <div className={classes.root}>
      <Container>
      <Grid container >
        <Grid container xs={12}>
          <CornRow />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

export default ApartmentView;
