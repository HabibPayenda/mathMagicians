import './styles.css';
import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children } = this.props;
    return <div className="footer">{ children }</div>;
  }
}

export default Footer;
