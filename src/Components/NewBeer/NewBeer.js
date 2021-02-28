import React, { useState } from 'react';
import style from './NewBeer.module.css';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const NewBeer = (props) => {
  const [controls, setControls] = useState({
    name: {
      type: 'text',
      placeholder: 'Name',
      value: '',
      validation: {
        required: true,
      },
    },
    tagline: {
      type: 'text',
      placeholder: 'Tagline',
      value: '',
      validation: {
        required: false,
      },
    },
    firstBrewed: {
      type: 'text',
      placeholder: 'First brewed',
      value: '',
      validation: {
        required: true,
      },
    },
    attLevel: {
      type: 'text',
      placeholder: 'Attenuation level',
      value: '',
      validation: {
        required: true,
      },
    },
    description: {
      type: 'text',
      placeholder: 'Description',
      value: '',
      validation: {
        required: true,
      },
    },
    contrBy: {
      type: 'text',
      placeholder: 'Contributed by',
      value: '',
      validation: {
        required: true,
      },
    },
  });

  const updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties,
    };
  };
  const handleChange = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
      }),
    });

    setControls(updatedControls);
  };
  console.log('ControlsUpdated', controls);

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      firstBrewed,
      description,
      attLevel,
      contrBy,
    } = controls;
    const newBeer = {
      name,
      tagline,
      firstBrewed,
      description,
      attLevel,
      contrBy,
      id: uuidv4(),
    };
    console.log('New beer added: ', newBeer);
    props.setBeersList(...props.beersList, newBeer);
  };
  console.log('beersList from form comp', props.beersList);
  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }
  let form = formElementsArray.map((formElement) => {
    // console.log('formElement', formElement);

    return (
      <input
        key={formElement.id}
        className={style.Input}
        type={formElement.config.type}
        value={formElement.config.value}
        placeholder={formElement.config.placeholder}
        onChange={(event) => handleChange(event, formElement.id)}
      />
    );
  });

  return (
    <>
      <h1 style={{ opacity: '0.7', color: 'blue' }}>Add new beer</h1>
      <div className={style.resultCard}>
        <form className={style.Form} onSubmit={handleSubmit}>
          {form}
          <button className={style.Button} type="submit">
            Add
          </button>
        </form>
        <Link to={'/'}>Back</Link>
      </div>
    </>
  );
};

export default NewBeer;