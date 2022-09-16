import '@testing-library/jest-dom';
import reactTestRenderer from 'react-test-renderer';

import CalculatorScreen from '../../screens/CalculatorScreen';

describe('Calculator Screen', () => {
  it('should match the snapshot', () => {
    const tree = reactTestRenderer.create(<CalculatorScreen />);
    expect(tree).toMatchSnapshot();
  });
});
