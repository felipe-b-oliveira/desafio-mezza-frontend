import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import mainPanelImage from "../assets/img-mainPanel.jpeg";
import hairSilhouette from "../assets/silhueta-mainPanel.png";

const useStyles = makeStyles(() => ({
  leftImgContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  panelImg: {
    width: 800,
  },
  rightPanelContainer: {
    backgroundColor: "#DD8C84",
    display: "flex",
  },
  rightPanelTextContainer: {
    alignSelf: "center",
    paddingLeft: 60,
    color: "#fff",
  },
  panelTextTitle: {
    textTransform: "uppercase",
    fontSize: "2rem",
    lineHeight: "2rem",
  },
  hairSilhouetteImg: {
    width: 50,
    opacity: "0.5",
    paddingBottom: 5,
  },
  panelTextSubtitle: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: "2.5rem",
    paddingBottom: 10,
  },
  panelText: {
    fontWeight: 500,
  },
}));

export default function MainPanel() {
  const classes = useStyles();

  return (
    <section>
      <Grid container>
        <Grid item xs={6} className={classes.leftPanelContainer}>
          <div className={classes.leftImgContainer}>
            <img
              src={mainPanelImage}
              alt="Mulher oriental com cabelos longos sorrindo"
              className={classes.panelImg}
            />
          </div>
        </Grid>
        <Grid item xs={6} className={classes.rightPanelContainer}>
          <div className={classes.rightPanelTextContainer}>
            <Grid container direction="row" alignItems="baseline">
              <Typography
                color="inherit"
                noWrap
                className={classes.panelTextTitle}
              >
                Capilar
              </Typography>
              <img
                src={hairSilhouette}
                alt="Silhueta de cabelo longo"
                className={classes.hairSilhouetteImg}
              />
            </Grid>
            <Typography
              color="inherit"
              noWrap
              className={classes.panelTextSubtitle}
            >
              Fortalecimento
            </Typography>
            <Typography color="inherit" noWrap className={classes.panelText}>
              Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a
            </Typography>
            <Typography color="inherit" noWrap className={classes.panelText}>
              fortalecer o cabelo, combater a queda e tratar a tão indesejada
              caspa.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
