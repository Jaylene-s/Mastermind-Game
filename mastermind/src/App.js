import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import RandomNumber from './components/RandomNum';
import Home from './views/home';

function App() {
  let urlPath = window.location.pathname;

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
