import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import reactTestRenderer from 'react-test-renderer';

import Button from '../Button';
import Header from '../Header';

describe('Button tests', () => {
  it('should see the element in the dom tree', () => {
    const buttonName = '-';

    render(<Button text={buttonName} />);

    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('-');
  });

  it('should match the snapshot', () => {
    const buttonName = '-';
    const tree = reactTestRenderer.create(<Button text={buttonName} />);
    expect(tree).toMatchSnapshot();
  });

  it('should check if the click event is working properly', () => {
    const buttonName = '1';

    const changeCalculation = jest.fn();

    render(<Button text={buttonName} changeCalculation={changeCalculation} />);
    render(<Header total={buttonName} />);

    const buttonElement = screen.getByTestId('button');
    const headerElement = screen.getByTestId('header');
    fireEvent.click(buttonElement);
    expect(headerElement.textContent).toBe('1');
  });
});
