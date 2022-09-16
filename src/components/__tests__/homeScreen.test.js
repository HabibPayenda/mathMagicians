import '@testing-library/jest-dom';
import reactTestRenderer from 'react-test-renderer';

import HomeScreen from '../../screens/HomeScreen';

describe('Home Screen', () => {
  it('should match the snapshot', () => {
    const tree = reactTestRenderer.create(<HomeScreen />);
    expect(tree).toMatchSnapshot();
  });
});
