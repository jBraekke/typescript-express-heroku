import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import CarCard from "../../components/cards/CarCard";
import InfoCard from "../../components/cards/InfoCard";
import PictureCard from "../../components/cards/PictureCard";
import { Box, Container, Slide } from "@material-ui/core";

const img = new Image();
img.src = "header1.jpg";
const useStyles = makeStyles({
  root: { flexGrow: 1 },
  gridheader: {
    backgroundImage: "url(" + img.src + ")",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  },
  titleBox: {
    textAlign: "center",
  },
});

const Frontpage = () => {
  const [imageLoad, setImageLoad] = useState(false);
  const classes = useStyles();
  const titleString = "Velkommen til Vestengveien!";
  const descriptionString =
    "Vi er et norsk eiendomsfirma som arbeider med alt innenfor bolig og rennovasjon. Vårt hovedkontor ligger ved tunejordet ta gjerne en tur innom!";
  const InfoRow = () => {
    return (
      <>
        <Grid item xs={12}>
          {" "}
          <InfoCard
            title={titleString}
            description={descriptionString}
          ></InfoCard>
        </Grid>
      </>
    );
  };

  useEffect(() => {
    img.onload = () => {
      setImageLoad(true);
    };
  }, [imageLoad]);

  const FancyRow = () => {
    return (
      <>
        <Grid item xs={12} md={6}>
          <PictureCard title={"Leiligheter"} image="apartments.jpg" />
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureCard title={"Hus"} image="house.jpg" />
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureCard title={"Kommende boliger"} image="incoming.jpeg" />
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureCard title={"Næringsbygg"} image="leieboer.jpg" />
        </Grid>
      </>
    );
  };

  return (
    <div>
      <Grid container item xs={12}>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Grid className={classes.gridheader} item xs={12}>
            <Container>
              <Box m={4}>
                <Grid container item xs={12}>
                  <FancyRow />
                </Grid>
              </Box>
            </Container>
          </Grid>
        </Slide>
      </Grid>
    </div>
  );
};

export default Frontpage;
