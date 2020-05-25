import React from 'react';
import './features.css';

const features = () => {
  return (
    <div className='container'>
      <div className='cardContainer'>
        <img src='/images/icon1.png' alt='First Feature' />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className='cardContainer'>
        <img src='/images/icon2.png' alt='Second Feature' />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className='cardContainer'>
        <img src='/images/icon3.png' alt='Third Feature' />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's</p>
      </div>
      <div className='cardContainer'>
        <img src='/images/icon4.png' alt='Fourth Feature' />
        <h3>JSX</h3>
        <p>Statically-type, designed to run on modern browsers.</p>
      </div>
    </div>
  );
};

export default features;
