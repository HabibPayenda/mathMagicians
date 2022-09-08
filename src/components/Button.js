import './styles.css';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { large, color, text } = this.props;
    return (
      <div className={`button ${color} ${large}`}>
        {text}
      </div>
    );
  }
}

export default Button;
