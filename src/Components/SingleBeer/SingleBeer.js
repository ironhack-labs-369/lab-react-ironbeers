import React, { useState, useEffect } from 'react';
import axios from 'axios';
const api = 'https://ih-beers-api2.herokuapp.com/beers';

const SingleBeer = (props) => {
  const [singleBeer, setSingleBeer] = useState('');
  const [effectRunning, setEffectRunning] = useState(true);
  const randomIndex = Math.floor(Math.random() * (props.beersList.length - 1));

  console.log('props.singleBeer ', props);
  console.log('randomIndex ', randomIndex);
  console.log('randomId ', props.beersList[randomIndex]._id);

  let id;

  if (props.isRandom && effectRunning) {
    id = props.beersList[randomIndex]._id;
  } else {
    id = props.match.params.id;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const beer = await axios(`${api}/${id}`);
        setSingleBeer(beer.data);
        setEffectRunning(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);
  console.log('beer', singleBeer);

  if (!singleBeer) return <h3>Loading...</h3>;
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img
        src={singleBeer.image_url}
        alt={singleBeer.name}
        style={{ width: '15%', height: '12rem', marginTop: '8%' }}
      />
      <p>
        <span
          style={{
            width: '90vw',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '1.5rem',
          }}
        >
          <span>{singleBeer.name}</span>
          <span style={{ opacity: '0.4' }}>{singleBeer.attenuation_level}</span>
        </span>
        <span
          style={{
            width: '90vw',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ opacity: '0.4' }}>
            {singleBeer.tagline}&nbsp;&nbsp;
          </span>
          <span style={{ fontWeight: 'bold' }}>{singleBeer.first_brewed}</span>
        </span>
      </p>
      <p style={{ margin: '0 6% 5% 6%', fontSize: '0.7rem' }}>
        {singleBeer.description}
      </p>
      <p
        style={{
          margin: '0 0 5% 6%',
          fontSize: '0.7rem',
          display: 'flex',
          alignSelf: 'flex-start',
        }}
      >
        {singleBeer.contributed_by}
      </p>
    </div>
  );
};

export default SingleBeer;
