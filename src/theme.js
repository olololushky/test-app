import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root:{
        textTransform: 'uppercase'
      }
    }
  }
})