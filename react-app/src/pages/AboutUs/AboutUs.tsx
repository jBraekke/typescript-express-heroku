import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import PictureCard from "../../components/cards/PictureCard";
import InfoCardAboutUs from "../../components/cards/InfoCardAboutUs";
import EmployeeCard from "../../components/cards/EmployeeCard";
//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },


  boxborder: {
      border: "2px solid black",
     
  },
  textSchtyle: {
      borderBottom: "0.1mm ridge rgb(50, 50, 100, .6)",
      fontSize: 30,
      fontWeight: 800,
      textAlign: "center", 
      fontFamily: "EB Garamond",
      borderRadius: 2,
      marginTop: (50),
      
  },



});

const AboutUs = () => {
 
/*
  const getData = () => {
    fetch("cars.json", {
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
        setData(myJson.car);
      });
  };

  useEffect(() => {
    getData();
  }, []);
*/
  const classes = useStyles();

  const titleString = "GRANDAHL BIL AS ER SARPSBORG STØRSTE BILFORRETNING MED OVER 100 BILER TIL SALGS TIL ENHVER TID!";
  const descriptionString =
    "Vi er et norsk eiendomsfirma som arbeider med alt innenfor bolig og rennovasjon. Vårt hovedkontor ligger ved tunejordet ta gjerne en tur innom. Vi brenner for å gjøre klar nye leiligheter" +
    "I motsetning til hva mange tror, er ikke Lorem Ipsum bare tilfeldig tekst. Dets røtter springer helt tilbake til et stykke klassisk latinsk litteratur fra 45 år f.kr., hvilket gjør det over 2000 år gammelt. Richard McClintock - professor i latin ved Hampden-Sydney College i Virginia, USA - slo opp flere av de mer obskure latinske ordene, consectetur, fra en del av Lorem Ipsum, og fant dets utvilsomme opprinnelse gjennom å studere bruken av disse ordene i klassisk litteratur. Lorem Ipsum kommer fra seksjon 1.10.32 og 1.10.33 i de Finibus Bonorum et Malorum (The Extremes of Good and Evil) av Cicero, skrevet i år 45 f.kr. Boken er en avhandling om teorier rundt etikk, og var veldig populær under renessansen. Den første linjen av Lorem Ipsum, er hentet fra en linje i seksjon 1.10.32."
  
    const InfoRow = () => {
    return (
      <>
        <Grid item xs={12}>
          {" "}
          <InfoCardAboutUs
            title={titleString}
            description={descriptionString}
          ></InfoCardAboutUs>
        </Grid>
      </>
    );
  };

  

  const FancyRow = () => {
    return (
      <>
        
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
      
        <Grid item xs={12} >
        <Box className={classes.textSchtyle}>Vår ledelse</Box>
        </Grid>
        <Grid item xs={2}>
         
         </Grid>
        <Grid item xs={4}>
          <EmployeeCard
          Name={"ANDRÉ LUNDEBY"}
          Role={"DAGLIG LEDER"}
          PhoneNumber={915334324}
          Email={"harrypotter1337@gmail.com"}
          
          
          ></EmployeeCard>
        </Grid>
        <Grid item xs={4}>
          <EmployeeCard
          Name={"STÅLE GRANDAHL"}
          Role={"DAGLIG LEDER"}
          PhoneNumber={915334324}
          Email={"harrypotter1337@gmail.com"}
         ></EmployeeCard>
         
        </Grid>

    

        <Grid item xs={2}>
         
        </Grid>
       
       
      
      </>
    );
  };



  return (
    <Box className={classes.root} mt={6}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={3}>
        <InfoRow />
          <FancyRow />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
