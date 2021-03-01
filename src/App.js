import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from './Components/Home/Home';
import AllBeers from './Components/AllBeers/AllBeers';
import SingleBeer from './Components/SingleBeer/SingleBeer';
import NewBeer from './Components/NewBeer/NewBeer';
const api = 'https://ih-beers-api2.herokuapp.com/beers';

function App() {
  const [beersList, setBeersList] = useState('');
  console.log('beersList', beersList);

  useEffect(() => {
    const fetchData = async () => {
      const beers = await axios(api);
      setBeersList(beers.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/beers"
          render={(props) => <AllBeers {...props} beersList={beersList} />}
        />
        <Route
          exact
          path="/beers/new"
          render={(props) => (
            <NewBeer
              {...props}
              beersList={beersList}
              setBeersList={setBeersList}
            />
          )}
        />

        <Route
          exact
          path="/beers/:randomId"
          render={(props) => (
            <SingleBeer {...props} beersList={beersList} isRandom={true} />
          )}
        />
        <Route
          exact
          path="/beers/:id"
          component={SingleBeer}
          isRandom={false}
        />
      </Switch>
    </div>
  );
}

export default App;
