import React from 'react';
import "./scss/index.scss";
import { SignUp } from './ui/pages/SignUp';
import { Header } from './ui/components/Header';
import { Nav } from './ui/components/Nav';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="p-body">
        <SignUp />
      </div>
      <Nav />
    </div>
  );
};

export default App;
