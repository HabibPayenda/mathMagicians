import '@testing-library/jest-dom';
import reactTestRenderer from 'react-test-renderer';

import Header from '../Header';

describe('Header', () => {
  it('should match the snapshot', () => {
    const tree = reactTestRenderer.create(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
