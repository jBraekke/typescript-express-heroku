import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import CarCard from "../../components/cards/CarCard";
import InfoCard from "../../components/cards/InfoCard";
import PictureCard from "../../components/cards/PictureCard";
import { Box, Container, Slide, Typography } from "@material-ui/core";
import { title } from "process";
import theme from "../../themes/theme";
import { Info } from "@material-ui/icons";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  gridheader: {
    backgroundImage: "url(header1.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  },
  titleBox: {
    textAlign: "center",
  },
});

const Frontpage = () => {
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

  const FancyRow = () => {
    return (
      <>
        <Grid item xs={6}>
          <PictureCard title={"Leiligheter"} />
        </Grid>
        <Grid item xs={6}>
          <PictureCard title={"Hus"} />
        </Grid>
        <Grid item xs={6}>
          <PictureCard title={"Kommende boliger"} />
        </Grid>
        <Grid item xs={6}>
          <PictureCard title={"Næringsbygg"} />
        </Grid>
      </>
    );
  };

  const TitleTest = () => {
    return (
      <Box m={2} className={classes.titleBox}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h2">
            {titleString}
          </Typography>
        </Grid>
      </Box>
    );
  };

  return (
    <div>
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Grid className={classes.gridheader} container spacing={1}>
          <Container>
            <Box m={4}>
              <Grid container item xs={12} spacing={3}>
                <FancyRow />
              </Grid>
            </Box>
          </Container>
        </Grid>
      </Slide>
      <Grid container spacing={1}>
        <InfoRow></InfoRow>
        <Container>
          <Grid container item xs={12} spacing={3}></Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default Frontpage;
