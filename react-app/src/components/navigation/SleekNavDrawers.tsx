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
import clsx from "clsx";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
const drawerWidth = 240;
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
  appBar: {
    position: "sticky",
    margin: "0",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
  },
  pictureLogo: {
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
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
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
      <>
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    );
  };

  return (
    <Box component="header">
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        {displayDesktop()}
      </AppBar>
    </Box>
  );
};

export default SleekNav;
