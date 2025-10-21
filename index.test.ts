import { evaluate } from '.';

describe('evaluate', () => {
  it('sums 2 numbers', () => {
    const result = evaluate('1 + 1');
    expect(result).toEqual(2);
  });

  it('sums 5 numbers', () => {
    const result = evaluate('1 + 2 + 3 + 4 + 5');
    expect(result).toEqual(15);
  });

  it('multiple 2 numbers', () => {
    const result = evaluate('6 * 2');
    expect(result).toEqual(12);
  });

  it('multiple 4 numbers', () => {
    const result = evaluate('6 * 2 * 2 * 2 * 2');
    expect(result).toEqual(96);
  });

  it('powers 2 numbers', () => {
    const result = evaluate('2 ^ 3');
    expect(result).toEqual(8);
  });

  it('subtracts 2 numbers', () => {
    const result = evaluate('4 - 4');
    expect(result).toEqual(0);
  });

  it('evaluates multiple operations', () => {
    const str = '3 * 4 + 2 ^ 3 - 2';
    expect(evaluate(str)).toEqual(18);
  });
});
