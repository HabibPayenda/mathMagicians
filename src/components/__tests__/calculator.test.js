import '@testing-library/jest-dom';
import reactTestRenderer from 'react-test-renderer';

import Calculator from '../Calculator';

describe('Calculator', () => {
  it('should match the snapshot', () => {
    const tree = reactTestRenderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
