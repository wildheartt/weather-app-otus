import { sum } from './sum';

describe('sum', () => {
  it('return sum of two number', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
