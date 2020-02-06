import React from 'react';
import "./scss/index.scss";
import { SignUp } from './ui/pages/SignUp';
import { Header } from './ui/components/Header';
import { Nav } from './ui/components/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, Button, Typography } from '@material-ui/core';
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
          <Typography variant="h1">Titre</Typography>
          <Typography variant="h2">Titre</Typography>
          <Typography variant="h3">Titre</Typography>
          <Typography variant="h4">Titre</Typography>
          <Typography variant="h5">Titre</Typography>
      </MuiThemeProvider>
    </>
  );
};

export default App;
