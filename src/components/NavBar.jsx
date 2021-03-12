import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo-panvel.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    bacgroundColor: "#1E4388",
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "center",
    minHeight: 54,
  },
  navbarTexts: {
    textTransform: "uppercase",
    textWeight: 500,
    fontSize: "0.9rem",
  },
  iconButton: {
    marginLeft: 0,
    marginRight: 0,
  },
  shopIconButton: {
    marginLeft: 15,
  },
  search: {
    position: "relative",
    display: "flex",
    backgroundColor: "#fff",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(6),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "#ABABAA",
  },
  inputRoot: {
    color: "#ABABAA",
    width: 200,
    [theme.breakpoints.up("sm")]: {
      minWidth: 500,
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  imgContainer: {
    display: "flex",
    marginRight: 10,
  },
  imgLogo: {
    maxWidth: 150,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.imgContainer}>
          <img
            src={logo}
            alt="Logotipo PanVel Cosméticos"
            className={classes.imgLogo}
          />
        </div>
        <IconButton
          edge="start"
          className={classes.iconButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography color="inherit" noWrap className={classes.navbarTexts}>
          Categorias
        </Typography>
        <div className={classes.search}>
          <InputBase
            placeholder="O que você procura?"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          className={classes.iconButton}
        >
          <AccountCircle />
        </IconButton>
        <Typography color="inherit" noWrap className={classes.navbarTexts}>
          Entrar
        </Typography>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          className={classes.shopIconButton}
        >
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
