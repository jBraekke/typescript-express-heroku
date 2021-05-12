import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Container } from "@material-ui/core";
import InfoCardAboutUs from "../../components/cards/InfoCardAboutUs";
import EmployeeCard from "../../components/cards/EmployeeCardAboutUs";
import ImageCard from "../../components/cards/ImageCardAboutUs";
//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },

  boxborder: {
    border: "2px solid black",
  },
  textSchtyle: {
    borderBottom: "0.1mm ridge rgb(50, 50, 100, .6)",
    fontSize: 50,
    fontWeight: 800,
    textAlign: "center",
    fontFamily: "EB Garamond",
    marginTop: 30,
    marginBottom: 25,
  },
  titleSchtyle: {
    textAlign: "center",
    fontFamily: "EB Garamond",
    fontWeight: 800,
    fontSize: 50,
  },
});

const AboutUs = () => {
  const classes = useStyles();

  const titleString = "HVEM ER VI?";
  const descriptionString =
    "Vi er et norsk eiendomsfirma som arbeider med alt innenfor bolig og rennovasjon. Vårt hovedkontor ligger ved tunejordet ta gjerne en tur innom. Vi brenner for å gjøre klar nye leiligheter" +
    "I motsetning til hva mange tror, er ikke Lorem Ipsum bare tilfeldig tekst. Dets røtter springer helt tilbake til et stykke klassisk latinsk litteratur fra 45 år f.kr., hvilket gjør det over 2000 år gammelt. Richard McClintock - professor i latin ved Hampden-Sydney College i Virginia, USA - slo opp flere av de mer obskure latinske ordene, consectetur, fra en del av Lorem Ipsum, og fant dets utvilsomme opprinnelse gjennom å studere bruken av disse ordene i klassisk litteratur. Lorem Ipsum kommer fra seksjon 1.10.32 og 1.10.33 i de Finibus Bonorum et Malorum (The Extremes of Good and Evil) av Cicero, skrevet i år 45 f.kr. Boken er en avhandling om teorier rundt etikk, og var veldig populær under renessansen. Den første linjen av Lorem Ipsum, er hentet fra en linje i seksjon 1.10.32.";

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
        <Grid item xs={12}></Grid>
      </>
    );
  };

  const AboutUsRow = () => {
    return (
      <>
        <Grid container>
          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Box className={classes.textSchtyle}>Vår ledelse</Box>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            justify="center"
            item
            xs={12}
            md={12}
            spacing={1}
          >
            <Grid item xs={6} md={4}>
              <EmployeeCard
                Name={"ANDRÉ LUNDEBY"}
                Role={"DAGLIG LEDER"}
                PhoneNumber={915334324}
                Email={"harrypotter1337@gmail.com"}
              ></EmployeeCard>
            </Grid>
            <Grid item xs={6} md={4}>
              <EmployeeCard
                Name={"STÅLE GRANDAHL"}
                Role={"DAGLIG LEDER"}
                PhoneNumber={915334324}
                Email={"harrypotter1337@gmail.com"}
              ></EmployeeCard>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <Box className={classes.root} mt={6}>
      <Grid container>
        <Container>
          <Grid container item sm={12}>
            <Grid item sm={12} md={6}>
              <InfoRow />
            </Grid>
            <Grid item sm={12} md={6}>
              <Grid container item xs={12}>
                <Grid item sm={6} md={12}>
                  <ImageCard url="sarpsborg.jpg" />
                </Grid>
                <Grid item sm={6} md={12}>
                  <ImageCard url="sarp.jpg" />
                </Grid>
                <FancyRow />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <AboutUsRow />
    </Box>
  );
};

export default AboutUs;
