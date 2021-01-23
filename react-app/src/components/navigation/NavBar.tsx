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

const headersData = [
  {
    label: "HJEM",
    href: "/",
    comp: HomeIcon,
  },
  {
    label: "VÅRE LEILIGHETER",
    href: "/mentors",
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

const useStyles = makeStyles(() => ({
  header: {
    backgroundImage: "url(navsmoke3.jpg)",
    backgroundRepeat: "no-repeat, repeat",
    backgroundSize: "cover",
    position: "sticky",

    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  gucciFlip: {
    backgroundColor: "rgba(0, 0, 0, 0.7);",
  },
  icon: {
    backgroundColor: green[500],
  },
  iconFrame: {
    backgroundColor: green[500],
  },
  vesteng: {
    backgroundColor: "rgba(0, 0, 0, 0.0);",
    borderRadius: 10,
    width: "30%",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: 400,
    fontFamily: "EB Garamond",
    textShadow: "2px 3px black",
  },
  logo: {
    height: 200,
    width: 200,
    borderRadius: 25,
  },
  menuButton: {
    fontWeight: 700,
    fontSize: 14,
    opacity: "90%",

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
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const {
    header,
    logo,
    title,
    menuButton,
    toolbar,
    drawerContainer,
    vesteng,
    gucciFlip,
    icon,
    iconFrame,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Box p={1}>
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <Box mt={2} mr={29} p={1} className={vesteng}>
            {VestengVeienText}
          </Box>
          <Box p={2} mt={2} borderRadius={16} className={gucciFlip}>
            {getMenuButtons()}
          </Box>
        </Toolbar>
      </Box>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, comp }: any) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <Box mr={1}>
            <Avatar className={iconFrame}>
              <SvgIcon className={icon} component={comp} />
            </Avatar>
          </Box>

          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    // <Typography variant="h6" component="h1" className={logo}>
    <CardMedia
      image="vestengveien1.jpg"
      className={logo}
      title="logo"
    ></CardMedia>
  );
  const VestengVeienText = (
    <Box className={title} pl={2}>
      VESTENGVEIEN EIENDOMSUTVIKLING AS
    </Box>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, comp }: any) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          <Box mr={1}>
            <Avatar className={iconFrame}>
              <SvgIcon className={icon} component={comp} />
            </Avatar>
          </Box>
          {label}
        </Button>
      );
    });
  };

  return (
    <Box component="header">
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </Box>
  );
}
