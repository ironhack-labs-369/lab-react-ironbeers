import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const api = 'https://ih-beers-api2.herokuapp.com/beers';

const AllBeers = () => {
  const [beersList, setBeersList] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const beers = await axios(api);
      setBeersList(beers.data);
    };
    fetchData();
  }, []);
  console.log('beersList', beersList);

  if (!beersList) return <h3>Loading...</h3>;
  return (
    <div>
      {beersList.map((beer) => {
        return (
          <div key={beer._id} style={{ width: '90vw', display: 'flex' }}>
            <img
              src={beer.image_url}
              alt={beer.name}
              style={{ width: '20%', height: '50%', margin: '5% 5% 5% 5%' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '5% 5% 5% 5%',
              }}
            >
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <h4>{beer.tagline}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBeers;
