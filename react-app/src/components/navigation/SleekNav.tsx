import {
  AppBar,
  Toolbar,
  //Typography,
  makeStyles,
  Button,
  Box,
  SvgIcon,
  Typography,
} from "@material-ui/core";
//import { sizing } from "@material-ui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
//import { Height } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
//import FolderIcon from "@material-ui/icons/Folder";
import HomeIcon from "@material-ui/icons/Home";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ContactMailSharpIcon from "@material-ui/icons/ContactMailSharp";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import theme from "../../themes/theme";
import Hidden from "@material-ui/core/Hidden";
import SleekDrawerNav from "./SleekDrawerNav";

const useStyles = makeStyles({
  menuButton: {
    opacity: "100%",
    color: "#FFFFFF",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "lightgreen",
      opacity: "100%",
      textUnderlineOffset: "30px",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  logo: { display: "flex", justifyContent: "space-evenly" },
  content: theme.mixins.toolbar,
  gucciFlip: {
    //backgroundColor: "rgba(0, 0, 0, 0.8);",
  },
  header: {
    position: "sticky",
    margin: "0",
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
  },
  pictureLogo: {
    height: theme.spacing(10),
    width: theme.spacing(10),
    marginRight: theme.spacing(2),
  },
  sexyText: {
    fontFamily: "EB Garamond",
    borderBottom: "2px solid white",
  },
});

const headersData = [
  {
    label: "HJEM",
    href: "/",
    comp: HomeIcon,
  },
  {
    label: "VÅRE LEILIGHETER",
    href: "/welcome",
    comp: HomeWorkIcon,
  },
  {
    label: "KONTAKT OSS",
    href: "/contact",
    comp: ContactMailSharpIcon,
  },
  {
    label: "OM OSS",
    href: "/aboutus",
    comp: ImportContactsIcon,
  },
  {
    label: "Legg ut annonse",
    href: "/addApartment",
    comp: HomeIcon,
  },
];

const SleekNav = () => {
  const classes = useStyles();
  const getMenuButtons = () => {
    return headersData.map(({ label, href, comp }: any) => {
      return (
        <Button
          {...{
            key: label,
            to: href,
            component: RouterLink,
            className: classes.menuButton,
          }}
        >
          <Box mr={1}>
            <Avatar className={classes.icon}>
              <SvgIcon component={comp} />
            </Avatar>
          </Box>
          {label}
        </Button>
      );
    });
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logo}>
          <Avatar
            className={classes.pictureLogo}
            alt="logo"
            src="vestengveien1.jpg"
          />
          <Typography variant="h4" component="h4" className={classes.sexyText}>
            VESTENGVEIEN <br />
            EIENDOMSUTVIKLING AS
          </Typography>
        </Box>
        <Box borderRadius={16} className={classes.gucciFlip}>
          {getMenuButtons()}
        </Box>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Box>
          <Avatar
            className={classes.pictureLogo}
            alt="logo"
            src="vestengveien1.jpg"
          />
        </Box>
        <Box>
          <Typography variant="h4" component="h4" className={classes.sexyText}>
            VESTENGVEIEN <br />
            EIENDOMSUTVIKLING AS
          </Typography>
        </Box>

        <Box className={classes.logo}>{SleekDrawerNav}</Box>
      </Toolbar>
    );
  };

  return (
    <>
      <Box component="header">
        <Hidden mdDown implementation="css">
          <AppBar className={classes.header}>{displayDesktop()}</AppBar>
        </Hidden>

        <Hidden lgUp implementation="css">
          <AppBar className={classes.header}>{displayMobile()}</AppBar>
        </Hidden>
      </Box>
    </>
  );
};

export default SleekNav;
