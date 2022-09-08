import './styles.css';

import React from 'react';
import Header from './Header';
import Main from './Main';
import Button from './Button';
import Footer from './Footer';
import buttons from './constants/buttons';
import footerButtons from './constants/footerButtons';
import calculate from '../functions/calculate';

class Calculator extends React.Component {
  btns = buttons.map((item) => {
    const button = (
      <Button
        large={item.size}
        color={item.color}
        text={item.text}
        key={item.text}
        changeCalculation={(text) => this.changeCalculation(text)}
      />
    );
    return button;
  });

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.footerBtns = footerButtons.map((item) => {
      const button = (
        <Button
          large={item.size}
          color={item.color}
          text={item.text}
          key={item.text}
          changeCalculation={this.changeCalculation}
        />
      );
      return button;
    });
  }

  changeCalculation = (text) => {
    const calculation = calculate(this.state, text);
    this.setState(calculation);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <Header total={total} next={next} operation={operation} />
        <Main>{this.btns}</Main>
        <Footer>{this.footerBtns}</Footer>
      </div>
    );
  }
}

export default Calculator;
