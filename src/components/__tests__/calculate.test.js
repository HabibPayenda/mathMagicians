import calculate from '../../functions/calculate';

describe('Tests for the calculate function', () => {
  it('should do the minus operation currectly', () => {
    const button = '=';
    const data = {
      total: '4',
      next: '2',
      operation: '-',
    };

    const returned = calculate(data, button);

    expect(returned.total).toBe('2');
  });

  it('should do the pluse operation currectly', () => {
    const button = '=';
    const data = {
      total: '4',
      next: '2',
      operation: '+',
    };

    const returned = calculate(data, button);

    expect(returned.total).toBe('6');
  });

  it('should do the multiplication operation currectly', () => {
    const button = '=';
    const data = {
      total: '4',
      next: '2',
      operation: 'x',
    };

    const returned = calculate(data, button);

    expect(returned.total).toBe('8');
  });

  it('should do the division operation currectly', () => {
    const button = '=';
    const data = {
      total: '4',
      next: '2',
      operation: '/',
    };

    const returned = calculate(data, button);

    expect(returned.total).toBe('2');
  });

  it('should clean the display', () => {
    const button = 'AC';
    const data = {
      total: '4',
      next: '2',
      operation: '/',
    };

    const returned = calculate(data, button);

    expect(returned.total && returned.next && returned.operation).toBe(null);
  });
});
