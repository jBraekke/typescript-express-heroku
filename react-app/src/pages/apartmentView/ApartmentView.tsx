import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useFetch } from "../../hooks/useFetch";
import { IApartment } from "../../interfaces/IApartment";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link as RouterLink, NavLink, useParams, useHistory } from "react-router-dom";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import theme from "../../themes/theme";
import { useAuthContext } from "../../context/AuthProvider";
import { deleteData } from "../../utils/fetchPost";

//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  cardButtons: {
    display: "flex",
    flexDirection: "column",
  },

  headerAddress: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  informationText: {
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },

  description: {
    textAlign: "left",
  },

  secondInformationText: {
    float: "right",
    marginRight: theme.spacing(10),
    fontWeight: "bold",
  },
  secondInformationTextMobile: {
    marginLeft: theme.spacing(2),
    fontWeight: "bold",
  },

  cardContentMobile: {
    marginTop: theme.spacing(10),
  },
  card: {},

  container: {
    //textAlign: "center",
    marginTop: theme.spacing(2),
  },
  sendossmail: {
    fontWeight: "bold",
    fontSize: 16,
    textDecoration: "underline",
    textUnderlineOffset: "5px",
  },
  sendossmail2: {
    fontWeight: "bold",
    fontSize: 16,
  },
  sendossmail3: {
    fontSize: 16,
  },

  månedsleie: {
    fontSize: 22,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  sendossmail4: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.palette.primary.main /* Green */,
    border: "none",
    borderRadius: "15px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "20px",
    fontFamiliy: "Garamond, serif",
    fontWeight: "bold",
    color: "white",
    marginTop: theme.spacing(20),
    alignItems: "center",
    justifyContent: "center",

    "&:hover": {
      opacity: "80%",
      textUnderlineOffset: "30px",
      backgroundColor: theme.palette.primary.main,
    },
  },

  buttonSlett: {
    backgroundColor: "#fa4343",
    border: "none",
    borderRadius: "15px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "20px",
    fontFamiliy: "Garamond, serif",
    fontWeight: "bold",
    color: "white",

    "&:hover": {
      opacity: "80%",
      textUnderlineOffset: "30px",
      backgroundColor: "#fa4343",
    },
  },

  buttonRediger: {
    backgroundColor: "#abd32e",
    border: "none",
    borderRadius: "15px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "20px",
    fontFamiliy: "Garamond, serif",
    fontWeight: "bold",
    color: "white",

    "&:hover": {
      opacity: "80%",
      backgroundColor: "#abd32e",
    },
  },
  redbutton: {
    backgroundColor: "#c70000",
    color: "white",

    "&:hover": {
      backgroundColor: "#3b0000",
    },
  },

  greenbutton: {
    color: "white",
    backgroundColor: "#008040",

    "&:hover": {
      backgroundColor: "#408000",
    },
  },
});

const ApartmentView = () => {
  const { id } = useParams() as any;

  console.log('current ID: ', id);

  const url2 = "/api/apartments/";
  const params = useParams() as any;
  const { status, data } = useFetch(url2 + params.id);
  const [realEstate, setRealEstate] = useState<IApartment>();
  const [imageRefresh, setimageRefresh] = useState({});
  const { isLoggedIn, isAdmin, isLoading } = useAuthContext() as any;
  const removeClickHandler = () => {
    const deleteMethod = {
      method: "DELETE", // Method itself
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
      // No need to have body, because we don't send nothing to the server.
    };
    // Make the HTTP Delete call using fetch api

    fetch(url2 + params.id, deleteMethod)
      .then((response) => response.json())
      .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => console.log(err)); // Do something with the error
    alert("slettet");
  };
  const boolAnswers = {
    YES: "Ja",
    NO: "Nei",
  };

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
  const history = useHistory();

  const TestDisplay = () => {
    return (
      <>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.headerAddress}
          >
            {realEstate?.address}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h6">
            {realEstate?.city}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {realEstate?.imagePath ? (
            <>
              <CardMedia
                component="img"
                height="500"
                alt="Apartment"
                src={
                  "/uploads/" + realEstate.imagePath
                }
                title="Apartment"
              />
            </>
          ) : (
            <>
              <CardMedia
                component="img"
                height="500"
                alt="Apartment"
                src="/hus.jpg"
                title="Apartment"
              />
            </>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant="h4"
                component="h4"
                className={classes.headerAddress}
              >
                Oversikt
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.informationText}
              >
                Depositum:{" "}
                <span className={classes.secondInformationText}>
                  {realEstate?.deposit}
                </span>{" "}
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                className={classes.informationText}
              >
                Husleiegaranti:{" "}
                <span className={classes.secondInformationText}>
                  {realEstate?.rentGuarantee ? boolAnswers.YES : boolAnswers.NO}
                </span>{" "}
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                className={classes.informationText}
              >
                Mulighet for parkering:{" "}
                <span className={classes.secondInformationText}>
                  {realEstate?.parking ? boolAnswers.YES : boolAnswers.NO}
                </span>{" "}
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.informationText}
              >
                Kvadratmeter:{" "}
                <span className={classes.secondInformationText}>
                  {realEstate?.squareMeter}
                </span>{" "}
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                className={classes.informationText}
              >
                Antall soverom:{" "}
                <span className={classes.secondInformationText}>
                  {realEstate?.bedrooms}
                </span>{" "}
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                className={classes.informationText}
              >
                Antall bad:{" "}
                <span className={classes.secondInformationText}>
                  {realEstate?.bathrooms}
                </span>{" "}
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant="h4"
                component="h4"
                className={classes.headerAddress}
              >
                {realEstate?.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.informationText}
              >
                {realEstate?.description}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <Card className={classes.card}>
            <CardMedia
              component="img"
              height="250"
              alt="Apartment"
              src={"/vestengveien1.jpg"}
              title="vestengveien"
            />

            <CardContent>
              <Typography
                variant="h6"
                align={"center"}
                component="h6"
                className={classes.sendossmail}
              >
                Vestengveien Eiendomsutvikling AS
              </Typography>
              <Typography
                variant="h6"
                align={"center"}
                component="h6"
                className={classes.sendossmail3}
              >
                Telefon:{" "}
                <span className={classes.sendossmail2}> {91614232} </span>
              </Typography>

              <Typography
                variant="h6"
                align={"center"}
                component="h6"
                className={classes.sendossmail3}
              >
                Addresse:{" "}
                <span className={classes.sendossmail2}>
                  {" "}
                  {"Lilletuneveien 61B"}{" "}
                </span>
              </Typography>
              <br />
              <Divider />
              <Typography
                variant="h6"
                align={"center"}
                component="h6"
                className={classes.månedsleie}
              >
                Pris pr. måned:{" "}
                <span className={classes.sendossmail4}>
                  {realEstate?.price} kr
                </span>
              </Typography>
              <Divider />

              <Typography
                variant="h6"
                align={"center"}
                component="h6"
                className={classes.sendossmail4}
              >
                Kontakt oss på mail!
              </Typography>
              <br />

              <br />
            </CardContent>

            <CardActions
              className={classes.cardButtons}
              style={{ justifyContent: "center" }}
            >
              <RouterLink
                to={`../contact/${realEstate?.city}/${realEstate?.address}`}
                {...{
                  color: "inherit",
                  style: { textDecoration: "none" },
                  key: "label",
                }}
              >
                <Button
                  variant={"contained"}
                  color="primary"
                  endIcon={<SendIcon></SendIcon>}
                  size={"large"}
                //to="#form"
                >
                  SEND OSS EN MAIL
                </Button>
              </RouterLink>

              {isLoggedIn ? (
                <>
                  <RouterLink
                    to={`../editApartment/${realEstate?._id}`}
                    {...{
                      color: "inherit",
                      style: { textDecoration: "none" },
                      key: "label",
                    }}
                  >
                    <Button
                      variant={"contained"}
                      className={classes.greenbutton}
                      endIcon={<EditIcon></EditIcon>}
                      size={"large"}
                    >
                      Rediger Artikkel
                    </Button>
                  </RouterLink>
                  <Button
                    variant={"contained"}
                    className={classes.redbutton}
                    endIcon={<DeleteIcon></DeleteIcon>}
                    size={"large"}
                    onClick={removeClickHandler}
                  >
                    Slett Artikkel
                  </Button>
                </>
              ) : (
                <></>
              )}
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  };

  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const desktopView = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid container xs={12}>
            <TestDisplay></TestDisplay>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ApartmentView;
