import './styles.css';

import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Button from './Button';
import Footer from './Footer';
import buttons from './constants/buttons';
import footerButtons from './constants/footerButtons';
import calculate from '../functions/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const obj = {
    total,
    next,
    operation,
  };

  const changeCalculation = (text) => {
    const calculation = calculate(obj, text);
    const { total, next, operation } = calculation;
    setTotal(total);
    setNext(next);
    setOperation(operation);
  };

  const btns = buttons.map((item) => {
    const button = (
      <Button
        large={item.size}
        color={item.color}
        text={item.text}
        key={item.text}
        changeCalculation={(text) => changeCalculation(text)}
      />
    );
    return button;
  });

  const footerBtns = footerButtons.map((item) => {
    const button = (
      <Button
        large={item.size}
        color={item.color}
        text={item.text}
        key={item.text}
        changeCalculation={changeCalculation}
      />
    );
    return button;
  });

  return (
    <div className="container">
      <Header total={total} next={next} operation={operation} />
      <Main>{btns}</Main>
      <Footer>{footerBtns}</Footer>
    </div>
  );
};

export default Calculator;
