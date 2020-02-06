import React from 'react';
import "./scss/index.scss";
import { SignUp } from './ui/pages/SignUp';
import { Header } from './ui/components/Header';
import { Nav } from './ui/components/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, Button } from '@material-ui/core';
import theme from './config/theme/theme';

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <SignUp />
          <Nav />
          <Button variant="contained" color="primary">lalala</Button>
      </MuiThemeProvider>
    </>
  );
};

export default App;
