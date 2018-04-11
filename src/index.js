import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});
console.log(theme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Main/>
    </MuiThemeProvider>, 
  document.getElementById("root")
);