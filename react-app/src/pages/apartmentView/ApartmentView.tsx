import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams, NavLink } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import { useFetch } from "../../hooks/useFetch";
import { IApartment } from "../../interfaces/IApartment";
import { Box, Button, Card, CardContent, CardMedia, Container, Divider, Typography } from "@material-ui/core";
import theme from "../../themes/theme";

//import CarCard from "../../components/cards/CarCard";
//import { Button, Input } from "@material-ui/core";

const useStyles = makeStyles({
  root: { flexGrow: 1 },

  headerAddress: {
      marginTop: theme.spacing(2),
  },
  informationText: {
    //marginLeft: theme.spacing(5),
    marginTop: theme.spacing(1),
  },

  secondInformationText: {
    float: "right",
    marginRight: theme.spacing(20),
    fontWeight: "bold",
  },
  container: {
    //textAlign: "center",
    marginTop: theme.spacing(2),
  },
  button: {
  backgroundColor: theme.palette.primary.main,/* Green */
  border: "none",
  borderRadius: "15px",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "20px",
  fontFamiliy: "Garamond, serif",
  fontWeight: "bold",
  color: "lightgray",
  
  "&:hover": {
   
    opacity: "80%",
    textUnderlineOffset: "30px",
    backgroundColor: theme.palette.primary.main,
  },

  },

  buttonSlett: {
    backgroundColor:  "#fa4343",
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
      backgroundColor:  "#fa4343",
    },
  },

  buttonRediger: {
    backgroundColor:  "#abd32e",
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
      backgroundColor:  "#abd32e",
    },
  },




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
    return (
        <>
      
      <Grid item xs={12}>
      <Typography variant="h2" component="h2" className={classes.headerAddress}>{realEstate?.address}</Typography>
      <Typography variant="h6" component="h6">{realEstate?.city}</Typography>
      <br/>
      <Divider />
      </Grid>
    
      <Grid item xs={12}>
     <Typography variant="h4" component="h4" className={classes.headerAddress}>Oversikt</Typography>
     
      </Grid>

      <Grid container item xs={12} spacing={1} className={classes.container}>
            
            <Grid item xs={4}>
            
            <Typography variant="h6" component="h6" className={classes.informationText}>Depositum: <span className={classes.secondInformationText}>{realEstate?.deposit}</span> </Typography>
            <Typography variant="h6" component="h6" className={classes.informationText}>Husleiegaranti: <span className={classes.secondInformationText}>{realEstate?.rentGuarantee}</span> </Typography>
            <Typography variant="h6" component="h6" className={classes.informationText}>Mulighet for parkering: <span className={classes.secondInformationText}>{realEstate?.parking}</span> </Typography>
            </Grid>
            
            <Grid item xs={4}>
            <Typography variant="h6" component="h6" className={classes.informationText}>Kvadratmeter: <span className={classes.secondInformationText}>{realEstate?.squareMeter}</span> </Typography>
            <Typography variant="h6" component="h6" className={classes.informationText}>Antall soverom: <span className={classes.secondInformationText}>{realEstate?.bedrooms}</span> </Typography>
            <Typography variant="h6" component="h6" className={classes.informationText}>Antall bad: <span className={classes.secondInformationText}>{realEstate?.bathrooms}</span> </Typography>
            </Grid>
            
          <Grid item xs={4}>
          <Card>
          
        <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          align={"center"}
          component="h2"
          
        >Kontakt oss om leilighet</Typography>
        <br/>

      <Typography variant="h6" component="h6" className={classes.informationText}>Månedsleie: <span className={classes.secondInformationText}>{realEstate?.price}</span> </Typography>
        <br/>
        <Button className={classes.button}>Send oss en mail</Button>
        <br/>
        <Button className={classes.buttonRediger}>Rediger annonse</Button>
        <br/>
        <Button className={classes.buttonSlett}>Slett annonse</Button>

        </CardContent>
      
       </Card>
            </Grid>
            </Grid>
            <Divider/>

        
         
          <Grid container item xs={12} className={classes.container}>
            
            <Grid item xs={6}>
            <Typography variant="h2" component="h2" className={classes.headerAddress}>{realEstate?.title}</Typography>
            <Typography variant="h6" component="h6" className={classes.informationText}>{realEstate?.description}</Typography>

            </Grid>
          
            </Grid>


    </>
  );
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
