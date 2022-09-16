/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './styles.css';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      large, color, text, changeCalculation,
    } = this.props;
    return (
      <div data-testid="button" className={`button ${color} ${large}`} onClick={() => changeCalculation(text)}>
        {text}
      </div>
    );
  }
}

export default Button;
