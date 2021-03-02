import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Avatar, Box, Button, Grid, SvgIcon } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ContactMailSharpIcon from "@material-ui/icons/ContactMailSharp";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import theme from "../../themes/theme";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    //display: "flex",
  },
  drawer: {
    width: drawerWidth,
    //flexShrink: 0,
  },
  icon: {
    backgroundColor: theme.palette.secondary.main,
  },

  appBar: {
    //zIndex: theme.zIndex.drawer + 1,
    position: "relative",
  },
  menuButton: {
    float: "right",
  },

  menuItems: {},
  toolbar: {},

  drawerPaper: {
    width: drawerWidth,
  },
  content: {},
  closeMenuButton: {
    marginLeft: "auto",
    marginRight: 0,
  },
}));

function SleekDrawerNav() {
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
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const getMenuButtons = () => {
    return headersData.map(({ label, href, comp }: any) => {
      return (
        <Box>
          <Button
            {...{
              key: label,
              to: href,
              component: RouterLink,
              className: classes.menuItems,
            }}
          >
            <Box mr={1}>
              <Avatar className={classes.icon}>
                <SvgIcon component={comp} />
              </Avatar>
            </Box>
            {label}
          </Button>
        </Box>
      );
    });
  };

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "left" : "right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            className={classes.closeMenuButton}
          >
            <CloseIcon />
          </IconButton>
          {getMenuButtons()}
        </Drawer>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
      </div>
    </Box>
  );
}
SleekDrawerNav.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
export default SleekDrawerNav;
