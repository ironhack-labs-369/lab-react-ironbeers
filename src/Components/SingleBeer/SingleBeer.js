import React, { useState, useEffect } from 'react';
import axios from 'axios';
const api = 'https://ih-beers-api2.herokuapp.com/beers';

const SingleBeer = (props) => {
  const [singleBeer, setSingleBeer] = useState('');

  console.log('props.singleBeer ', props);

  useEffect(() => {
    let id;

    if (props.isRandom) {
      id =
        props.beersList[Math.floor(Math.random() * (props.beersList - 1))].id;
    } else {
      id = props.match.params.id;
    }

    // {
    //       props.isRandom
    //         ? (id =
    //             props.beersList[Math.floor(Math.random() * (props.beersList - 1))]
    //               .id)
    //         : (id = props.match.params.id);
    //     }

    const fetchData = async () => {
      try {
        const beer = await axios(`${api}/${id}`);
        setSingleBeer(beer.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.match.params.id, props.beersList, props.isRandom]);
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
