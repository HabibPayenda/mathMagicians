import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
