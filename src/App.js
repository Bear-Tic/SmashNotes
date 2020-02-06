import React from 'react';
import "./scss/index.scss";
import { SignUp } from './ui/pages/SignUp';
import { Header } from './ui/components/Header';
import { Nav } from './ui/components/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <SignUp />
      <Nav />
    </div>
  );
};

export default App;
