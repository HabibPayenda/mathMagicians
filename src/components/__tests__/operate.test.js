import operate from '../../functions/operate';

describe('Tests for the operate function', () => {
  it('should do the minus operation currectly', () => {
    const numberOne = 4;
    const numberTwo = 2;
    const operation = '-';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe('2');
  });

  it('should do the pluse operation currectly', () => {
    const numberOne = 4;
    const numberTwo = 2;
    const operation = '+';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe('6');
  });

  it('should do the multiplication operation currectly', () => {
    const numberOne = 4;
    const numberTwo = 2;
    const operation = 'x';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe('8');
  });

  it('should do the division operation currectly', () => {
    const numberOne = 4;
    const numberTwo = 4;
    const operation = '/';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe('1');
  });

  it('should do the modulo operation', () => {
    const numberOne = 4;
    const numberTwo = 2;
    const operation = '%';

    const result = operate(numberOne, numberTwo, operation);

    expect(result).toBe('0');
  });
});
