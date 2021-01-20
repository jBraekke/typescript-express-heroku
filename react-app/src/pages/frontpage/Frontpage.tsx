import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import CarCard from "../../components/cards/CarCard";
import InfoCard from "../../components/cards/InfoCard";
import PictureCard from "../../components/cards/PictureCard";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
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
          <PictureCard />
        </Grid>
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
        <Grid item xs={6}>
          <PictureCard />
        </Grid>
      
      </>
    );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <InfoRow />
          <FancyRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default Frontpage;
