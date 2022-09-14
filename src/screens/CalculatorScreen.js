import React from 'react';
import Calculator from '../components/Calculator';

const HomeScreen = () => (
  <div className="screen calcScreen">
    <div className="rightContainer">
      <h1 className="mainTitle">Lets do some math:</h1>
    </div>
    <div className="leftContainer">
      <Calculator />
    </div>
  </div>
);

export default HomeScreen;
