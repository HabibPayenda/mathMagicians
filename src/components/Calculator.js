import './styles.css';

import React from 'react';
import Header from './Header';
import Main from './Main';
import Button from './Button';
import Footer from './Footer';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Main>
          <Button color="gray" text="AC" />
          <Button color="gray" text="+/-" />
          <Button color="gray" text="%" />
          <Button color="orange" text="/" />
          <Button color="gray" text="7" />
          <Button color="gray" text="8" />
          <Button color="gray" text="9" />
          <Button color="orange" text="x" />
          <Button color="gray" text="4" />
          <Button color="gray" text="5" />
          <Button color="gray" text="6" />
          <Button color="orange" text="-" />
          <Button color="gray" text="1" />
          <Button color="gray" text="2" />
          <Button color="gray" text="3" />
          <Button color="orange" text="+" />
        </Main>
        <Footer>
          <Button large="large" color="gray" text="0" />
          <Button color="gray" text="." />
          <Button color="orange" text="=" />
        </Footer>
      </div>
    );
  }
}

export default Calculator;
