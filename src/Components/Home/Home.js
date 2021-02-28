import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to={'/beers'}>
        <section style={{ width: '100vw', height: '30vh' }}>
          <img
            src="../../assets/beers.png"
            alt="beers"
            style={{ width: '100%', height: '70%' }}
          />
          <h2>Beers</h2>
          <p>List all the beers</p>
        </section>
      </Link>

      <Link to={'/beers/:randomId'}>
        <section
          style={{
            width: '100vw',
            height: '30vh',
          }}
        >
          <img
            src="../../assets/random-beer.png"
            alt="random-beer"
            style={{ width: '100%', height: '70%' }}
          />
          <h2>Random Beer</h2>
          <p>Check the beer details</p>
        </section>
      </Link>

      <Link to={'/beers/new'}>
        <section style={{ width: '100vw', height: '30vh' }}>
          <img
            src="../../assets/new-beer.png"
            alt="new-beer"
            style={{ width: '100%', height: '70%' }}
          />
          <h2>New Beer</h2>
          <p>Add a new beer to the list</p>
        </section>
      </Link>
    </>
  );
};

export default Home;
