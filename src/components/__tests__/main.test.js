import '@testing-library/jest-dom';
import reactTestRenderer from 'react-test-renderer';

import Main from '../Main';

describe('Main', () => {
  it('should match the snapshot', () => {
    const tree = reactTestRenderer.create(<Main />);
    expect(tree).toMatchSnapshot();
  });
});
