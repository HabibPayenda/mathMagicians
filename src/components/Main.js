import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div className="mainContainer">
        { children }
      </div>
    );
  }
}

export default Main;
