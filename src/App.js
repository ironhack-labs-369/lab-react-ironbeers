import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import AllBeers from './Components/AllBeers/AllBeers';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
      </Switch>
    </div>
  );
}

export default App;
