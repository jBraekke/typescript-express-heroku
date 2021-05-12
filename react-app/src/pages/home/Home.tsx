import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import CarCard from "../../components/cards/CarCard";
import PictureCard from "../../components/cards/PictureCardHomePage";
import { Box, Container, Slide, Typography, Divider } from "@material-ui/core";
import LoadingScreen from "../../components/loading/LoadingScreen";
import theme from "../../themes/theme";

const Frontpage = () => {
  const [imageLoad, setImageLoad] = useState(false);
  const img = new Image();
  img.onload = function () {
    setImageLoad(true);
  };
  img.src = "pic8.jpg";
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    boxContainerHeaderTitle: {
      marginBottom: theme.spacing(4),
    },
    text: {
      fontWeight: 500,
    },
  });
  const classes = useStyles();

  const FancyRow = () => {
    return (
      <>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Box className={classes.boxContainerHeaderTitle}>
              <Typography
                variant="h2"
                component="h2"
                align={"center"}
                className={classes.text}
              >
                Velkommen!
              </Typography>

              <Typography variant="h2" component="h2" align={"center"}>
                Hva ønsker du å leie?
              </Typography>

              <Divider />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureCard title={"Leiligheter"} image="pic6.jpg" />
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureCard title={"Hus"} image="pic5.jpg" />
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureCard title={"Kommende boliger"} image="pic3.jpg" />
        </Grid>
        <Grid item xs={12} md={6}>
          <PictureCard title={"Næringsbygg"} image="pic4.jpg" />
        </Grid>
      </>
    );
  };

  return imageLoad ? (
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
  ) : (
    <LoadingScreen></LoadingScreen>
  );
};

export default Frontpage;
