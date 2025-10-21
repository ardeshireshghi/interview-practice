import { mergeSort } from './merge-sort';

describe('#mergeSort', () => {
  it('sorts an empty list correctly', () => {
    const list = [];
    expect(mergeSort(list)).toEqual([]);
  });

  it('sorts list of 1 items correctly', () => {
    const list = [1];
    expect(mergeSort(list)).toEqual([1]);
  });

  it('sorts list of 2 items correctly', () => {
    const list = [5, 1];
    expect(mergeSort(list)).toEqual([1, 5]);
  });

  it('sorts list of 3 items correctly', () => {
    const list = [1, 3, 2];
    expect(mergeSort(list)).toEqual([1, 2, 3]);
  });

  it('sorts list of 4 items correctly', () => {
    const list = [1, 3, 2, 4];
    expect(mergeSort(list)).toEqual([1, 2, 3, 4]);
  });

  it('sorts list of 500 items correctly', () => {
    const randomList: Set<number> = new Set();

    for (let i = 0; i < 100; i++) {
      randomList.add(Math.floor(Math.random() * 1000));
    }
    const arrayNumber = Array.from(randomList);
    console.log(randomList);
    const sorted = mergeSort(arrayNumber);
    console.log(sorted)
    expect(sorted).toEqual(arrayNumber.sort((a, b) => a < b ? -1 : 1))
  });
});
