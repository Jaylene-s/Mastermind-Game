import React from "react";
import { BrowserRouter,Route } from 'react-router-dom';
import RandomNumber from './components/RandomNum';
import RandomNumberMedium from './components/RandomNumMedium';
import RandomNumberHard from './components/RandomNumHard';
import Home from './views/home';

function App() {

  return (
    <BrowserRouter>
    <Route exact path = "/">
      <Home />
    </Route>
    <Route path = "/easy">
      <RandomNumber />
    </Route>
    <Route path = "/medium">
      <RandomNumberMedium />
    </Route>
    <Route path = "/hard">
      <RandomNumberHard />
    </Route>
      </BrowserRouter>
  );
}

export default App;
