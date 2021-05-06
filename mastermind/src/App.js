import React from "react";
import { BrowserRouter,Route } from 'react-router-dom';
import RandomNumber from './components/RandomNum';
import Home from './views/home';

function App() {

  return (
    <BrowserRouter>
    <Route exact path = "/">
      <Home />
    </Route>
    <Route path = "/game">
      <RandomNumber />
    </Route>
      </BrowserRouter>
  );
}

export default App;
