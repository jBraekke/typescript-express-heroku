import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Copyright() {
  return (
    <Typography variant="body2" align="center" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh',
    
    
  },
  gridRoot: {
    flexGrow: 1,
    

   
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.7);",
  },

  bottomPicture: {
    padding: theme.spacing(2),
    backgroundImage: "url(navsmoke3.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  },

  //fikk ikke til å funke
  logo: {
    padding: theme.spacing(10),
    backgroundImage: "url(vestengveien1.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
  },

  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    backgroundColor: "yellow",
  },
  footer: {
    padding: theme.spacing(0, 0),
    marginTop: 'auto',
    backgroundColor: "rgba(0, 0, 0, 0.7);",
    
  },
}));





export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
     
      
      <footer className={classes.footer}>
        
      <div className={classes.gridRoot}>
      <Grid container spacing={0} direction= "column" alignItems="stretch" justify="space-between">
      
      <Grid item xs={12} alignItems ="stretch" justify="space-between" >
          <Paper className={classes.paper}>SE VÅRE LEILIGHETER</Paper>
        </Grid>
      
      <Grid item xs={12} >
          <Paper className={classes.paper}>KONTAKT OSS</Paper>
        </Grid>
       
      
        <Grid item xs={12} >
          <Paper className={classes.paper}>SEND OSS EN MAIL</Paper>
        </Grid>
       
       
        <Grid item xs={12} >
          <Paper className={classes.bottomPicture}><Copyright></Copyright></Paper>
        </Grid>
       
      
      
      
      
      
      </Grid>
    </div>
  

   
       
      </footer>
    </div>
  );
}