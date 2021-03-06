import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import AppsIcon from "@material-ui/icons/Apps";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import MainPanel from "../components/MainPanel";
import cardImg from "../assets/img-card_02.png";

const useStyles = makeStyles((theme) => ({
  bodySection: {
    display: "flex",
    justifyContent: "center",
  },
  bodyContainer: {
    maxWidth: "60%",
  },
  buttonsSection: {
    padding: "10px 0px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    margin: theme.spacing(1),
    color: "#8E8F8F",
    backgroundColor: "#fff",
    width: "200px",
    borderRadius: "0px",
    boxShadow: "none",
  },
  sectionTitle: {
    paddingTop: "40px",
    paddingBottom: "20px",
  },
  textSectionTitle: {
    textTransform: "uppercase",
    fontWeight: 500,
    paddingBottom: 10,
    color: "#DD8C84",
  },
  textSectionSubsection: {
    fontWeight: 500,
    color: "#8E8F8F",
  },
  paperRoot: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    paddingBottom: "20px",
  },
  textCardContainer: {
    padding: "20px 15px",
    width: "100%",
    height: "auto",
    margin: 0,
    borderRadius: 0,
  },
  cardText: {
    fontWeight: 400,
    color: "#8E8F8F",
  },
  imgCardTextContainer: {
    backgroundColor: "#DD8C84",
    padding: 10,
  },
  imgCardTitle: {
    color: "#fff",
    fontWeight: 300,
    textTransform: "uppercase",
  },
  cardImgContainer: {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    height: 580,
  },
  cardImg: {
    position: "relative",
    left: "-60px",
    width: "850px",
  },
  footerTextContainer: {
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#DD8C84",
    padding: 10,
    marginBottom: 20,
  },
  footerLink: {
    color: "inherit",
    fontWeight: 700,
  },
}));

export default function Home() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <NavBar />
      <MainPanel />
      <section className={classes.bodySection}>
        <Grid container justify="center" className={classes.bodyContainer}>
          <Grid container className={classes.buttonsSection}>
            <Grid item xs={12} className={classes.buttonsContainer}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AppsIcon />}
              >
                Quantidade
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<SwapHorizIcon />}
              >
                Ordernar
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.sectionTitle}>
            <Grid item xs={12}>
              <Typography noWrap className={classes.textSectionTitle}>
                Shampoos e Dermocosm??ticos
              </Typography>
              <Typography className={classes.textSectionSubsection}>
                Os shampoos dermocosm??ticos possuem f??rmulas especiais que, al??m
                de tratar os fios, fortalecem a sa??de do couro cabeludo - a pele
                sens??vel onde est?? a raiz dos cabelos. Eles regulam a
                oleosidade, hidratam e ajudam a combater a caspa e a queda dos
                fios.
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.cardsContainer}>
            <Grid item xs={6} style={{ paddingRight: 10 }}>
              <div className={classes.paperRoot}>
                <Paper elevation={3} className={classes.textCardContainer}>
                  <Typography noWrap className={classes.textSectionTitle}>
                    Como escolher o melhor shampoo?
                  </Typography>
                  <Typography className={classes.cardText}>
                    O cabelo pode ser oleoso, seco, misto ou quimicamente
                    tratado. Cada caso exige um tipo de shampoo especial. T??o
                    importante quanto levar em conta as caracter??sticas dos fios
                    ?? considerar as necessidades da raiz. O ideal ?? procurar a
                    orienta????o de um dermatologista para a indica????o do produto
                    mais adequado. Geralmente, a recomenda????o ?? usar produtos
                    <b> que n??o cont??m sulfato</b> e, por isso tratam o couro
                    cabeludo sem remover a sua hidrata????o natural. Considere
                    tamb??m produtos com ??cido salic??lico, que ajuda a regular a
                    descama????o piroctona otamina, que evita a prolifera????o de
                    fungos, e bisabolol, um ativo anti-inflamat??rio.
                  </Typography>
                </Paper>
              </div>
              <div className={classes.paperRoot}>
                <Paper elevation={3} className={classes.textCardContainer}>
                  <Typography noWrap className={classes.textSectionTitle}>
                    Queda de cabelo nunca mais
                  </Typography>
                  <Typography className={classes.cardText}>
                    Surpreende-se com a quantidade de fios soltos ao acordar, ou
                    que ficam presos no pente ao se arrumar? Os shampoos
                    dermocosm??ticos antiqueda t??m na sua composi????o ativos como
                    as <b>vitaminas do complexo B</b>, essenciais para evitar os
                    cabelos opacos e fr??geis. Tratamentos com laser e
                    medicamentos t??picos tamb??m podem ajudar a diminuir a queda
                    e estimular o crescimento dos fios. Mas s?? devem ser usados
                    a partir da orienta????o de um dermatologista. Lembre-se que a
                    m?? alimenta????o e o estresse est??o entre as poss??veis causas
                    da queda de cabelo, ent??o procure rever seus h??bitos.
                  </Typography>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: 10 }}>
              <div className={classes.imgCardTextContainer}>
                <Typography noWrap className={classes.imgCardTitle}>
                  Conhe??a nossos <b>shampoos {">"}</b>
                </Typography>
              </div>
              <div className={classes.cardImgContainer}>
                <img
                  src={cardImg}
                  alt="Mulher de cabelos longos segurando uma escova de cabelo"
                  className={classes.cardImg}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paperRoot}>
                <Paper elevation={3} className={classes.textCardContainer}>
                  <Typography noWrap className={classes.textSectionTitle}>
                    Anticaspa
                  </Typography>
                  <Typography className={classes.cardText}>
                    Os mais procurados shampoos da actegoria dos dermocosm??ticos
                    s??o aqueles que t??m a????o anticaspa. Procure um que possua
                    propriedades <b>antimicrobianas</b> como o dissulfeto de
                    sel??nio. E - de novo - que n??o contenham sulfato, caso
                    contr??rio seu cabelo pode ficar ressecado e sem a prote????o
                    natural. A aplica????o do produto deve ser apenas no couro
                    cabeludo, com movimentos de massagem, deixando agir por
                    alguns minutos. Evite banhos com ??gua muito quente e, ao
                    usar condicionadores e m??scaras capilares cuide para n??o
                    aplic??-las na raiz do cabelo - assim, n??o fiucar??o res??duos
                    acumulados estimulando a oleosidade.
                  </Typography>
                </Paper>
              </div>
              <div className={classes.footerTextContainer}>
                <Typography className={classes.footerText}>
                  Para maiores informa????es sobre o combate ?? caspa, acesse o{" "}
                  <Link
                    href="#"
                    onClick={preventDefault}
                    className={classes.footerLink}
                  >
                    Dermaclub
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
