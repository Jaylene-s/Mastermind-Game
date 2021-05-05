import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import RandomNumber from './components/RandomNum';

function App() {
  let urlPath = window.location.pathname;

  return (
    <BrowserRouter>
    <Route exact path = "/">
        <RandomNumber />
      </Route>
      </BrowserRouter>
  );
}

export default App;
