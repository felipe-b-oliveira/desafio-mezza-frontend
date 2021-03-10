import { createMuiTheme } from "@material-ui/core/styles";

// Cria instância do tema para aplicar estilos gerais como tamanho da fonte,
// cor da fonte, enfim, estilos aplicados de forma geral na aplicação.
const theme = createMuiTheme({
  "@global": {
    ul: {
      margin: 0,
      padding: 10,
      listStyle: "none",
    },
  },
  // overrides: {
  //   MuiLink: {
  //     root: {
  //       color: "pink",
  //     },
  //   },
  // },
});

export default theme;
