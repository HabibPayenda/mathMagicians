import '@testing-library/jest-dom';
import reactTestRenderer from 'react-test-renderer';

import QueteScreen from '../../screens/QueteScreen';

describe('Quete Screen', () => {
  it('should match the snapshot', () => {
    const tree = reactTestRenderer.create(<QueteScreen />);
    expect(tree).toMatchSnapshot();
  });
});
