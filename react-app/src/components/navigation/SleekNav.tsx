import {
  AppBar,
  Toolbar,
  //Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Box,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { CardMedia } from "@material-ui/core";
//import { sizing } from "@material-ui/system";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
//import { Height } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
//import FolderIcon from "@material-ui/icons/Folder";
import HomeIcon from "@material-ui/icons/Home";
import { green } from "@material-ui/core/colors";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ContactMailSharpIcon from "@material-ui/icons/ContactMailSharp";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import theme from "../../themes/theme";
import { white } from "material-ui/styles/colors";

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
    justifyContent: "space-between",
  },
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
    label: "LOGG INN",
    href: "/login/signin",
    comp: VpnKeyIcon,
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
        <Avatar
          className={classes.pictureLogo}
          alt="logo"
          src="vestengveien1.jpg"
        />
        <Typography align="left" variant="h4" component="h4">
          Vestengveien <br />
          Eiendomsutvikling AS
        </Typography>
        <Box borderRadius={16} className={classes.gucciFlip}>
          {getMenuButtons()}
        </Box>
      </Toolbar>
    );
  };

  return (
    <Box component="header">
      <AppBar className={classes.header}>{displayDesktop()}</AppBar>
    </Box>
  );
};

export default SleekNav;
