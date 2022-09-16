import './styles.css';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    return (
      <div data-testid="header" className="header">
        {total}
        {operation}
        { next }
      </div>
    );
  }
}

export default Header;
