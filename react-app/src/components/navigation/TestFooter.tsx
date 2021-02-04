import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      className={classes.GridItemCopy}
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link
        color="inherit"
        className={classes.GridItemCopy}
        href="https://material-ui.com/"
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "25vh",
    maxWidth: "100%",
    overflowX: "hidden",
  },

  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  footer: {
    textAlign: "center",
    backgroundImage:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);",

    padding: theme.spacing(0, 0),

    "@media (max-width: 900px)": {
      marginTop: theme.spacing(10),
    },
  },
  sweet: {
    backgroundColor: "rgba(53,52,52);",
  },
  gridContainer: {
    marginTop: theme.spacing(1),
  },
  GridItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "right",
    color: "black",
    fontSize: 20,
    fontWeight: 800,
    fontFamily: "EB Garamond",
    textAlign: "right",
    marginTop: theme.spacing(2),

    "@media (max-width: 1200px)": {
      textAlign: "center",
      fontSize: 14,
      marginBottom: theme.spacing(4),
    },
  },

  GridItemsPara: {
    color: "black",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "EB Garamond",
    textAlign: "center",
  },
  GridItemCopy: {
    color: "white",
    fontSize: 13,
    fontWeight: 400,
    fontFamily: "EB Garamond",
  },
  pictureLogo: {
    marginTop: theme.spacing(4),
    height: theme.spacing(20),
    width: theme.spacing(20),
  },
}));

const footers = [
  {
    title: "VESTENGVEIEN EIENDOMSUTVIKLING  A/S",
    description: [
      "Haldens Mossepervei 41a, 1710, Grålum",
      "Sentralbord: 69 14 30 59",
      "Følg oss på Facebook",
    ],
  },
  {
    title: "KJØPE",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "LEIE",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "LES NEDERSTE LINK",
    description: [
      "Åpningstider: 08:00 - 16:00",
      "Vestengveien@gmail.com",
      "Gjerne ring oss!",
      "Lekt meg med animasjon. Bare fjern collapse i html henrik",
    ],
  },
];

export default function TestFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="footer" className={classes.footer}>
        <Grid
          container
          spacing={1}
          justify="space-evenly"
          className={classes.gridContainer}
        >
          <Avatar
            className={classes.pictureLogo}
            alt="logo"
            src="vestengveien1.jpg"
          />

          {footers.map((footer) => (
            <Grid
              item
              xs={6}
              sm={5}
              md={2}
              lg={2}
              className={classes.GridItems}
              key={footer.title}
            >
              <Typography gutterBottom className={classes.GridItems}>
                {footer.title}
              </Typography>

              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      className={classes.GridItemsPara}
                      href="#"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5} p={2} className={classes.sweet}>
          <Copyright />
        </Box>
      </Box>
    </div>
    /* End footer */
  );
}
