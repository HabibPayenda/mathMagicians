import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import QueteScreen from './screens/QueteScreen';

const App = () => (
  <div>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/calculator">Calculatro </Link>
        <Link to="/quete"> Quete </Link>
        <Link to="/"> Home </Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="calculator" element={<CalculatorScreen />} />
      <Route path="quete" element={<QueteScreen />} />
    </Routes>
  </div>
);

export default App;
