import React from 'react';
import { Link } from 'react-router-dom';

const AllBeers = (props) => {
  if (!props.beersList) return <h3>Loading...</h3>;
  return (
    <div>
      {props.beersList.map((beer) => {
        return (
          <div
            key={beer._id}
            style={{ width: '90vw', display: 'flex', margin: '5% 0 5% 5%' }}
          >
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
                <h2>{beer.name}</h2>
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
