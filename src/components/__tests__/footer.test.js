import '@testing-library/jest-dom';
import reactTestRenderer from 'react-test-renderer';

import Footer from '../Footer';

describe('Footer', () => {
  it('should match the snapshot', () => {
    const tree = reactTestRenderer.create(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
