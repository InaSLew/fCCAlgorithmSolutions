import { getSymmetricDiff } from "../src/symmetricDiff";

describe("getSymmetricDiff", () => {
  it("should return [3,4,5] when called with ([1, 2, 3], [5, 2, 1, 4])", () => {
    const result = getSymmetricDiff([1, 2, 3], [5, 2, 1, 4]);
    expect(result).toEqual([3, 4, 5]);
  });
  it("should return an array of three elements when called with ([1, 2, 3], [5, 2, 1, 4])", () => {
    const result = getSymmetricDiff([1, 2, 3], [5, 2, 1, 4]).length;
    expect(result).toBe(3);
  });
  it("should return [3,4,5] when called with ([1, 2, 3, 3], [5, 2, 1, 4])", () => {
    const result = getSymmetricDiff([1, 2, 3, 3], [5, 2, 1, 4]);
    expect(result).toEqual([3, 4, 5]);
  });
  it("should return an array of three elements when called with ([1, 2, 3, 3], [5, 2, 1, 4])", () => {
    const result = getSymmetricDiff([1, 2, 3, 3], [5, 2, 1, 4]).length;
    expect(result).toBe(3);
  });
  it("should return [3,4,5] when called with ([1, 2, 3], [5, 2, 1, 4, 5])", () => {
    const result = getSymmetricDiff([1, 2, 3], [5, 2, 1, 4, 5]);
    expect(result).toEqual([3, 4, 5]);
  });
  it("should return an array of three elements when called with ([1, 2, 3], [5, 2, 1, 4, 5])", () => {
    const result = getSymmetricDiff([1, 2, 3], [5, 2, 1, 4, 5]).length;
    expect(result).toBe(3);
  });
  it("should return [1,4,5] when called with ([1, 2, 5], [2, 3, 5], [3, 4, 5])", () => {
    const result = getSymmetricDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]);
    expect(result).toEqual([1, 4, 5]);
  });
  it("should return an array of three elements when called with ([1, 2, 5], [2, 3, 5], [3, 4, 5])", () => {
    const result = getSymmetricDiff([1, 2, 5], [2, 3, 5], [3, 4, 5]).length;
    expect(result).toBe(3);
  });
  it("should return [1, 4, 5] when called with ([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])", () => {
    const result = getSymmetricDiff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
    expect(result).toEqual([1, 4, 5]);
  });
  it("should return an array of 3 elements when called with ([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])", () => {
    const result = getSymmetricDiff(
      [1, 1, 2, 5],
      [2, 2, 3, 5],
      [3, 4, 5, 5]
    ).length;
    expect(result).toBe(3);
  });
  it("should return [2, 3, 4, 6, 7] when called with ([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])", () => {
    const result = getSymmetricDiff(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3]
    );
    expect(result).toEqual([2, 3, 4, 6, 7]);
  });
  it("should return an array of five elements when called with ([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])", () => {
    const result = getSymmetricDiff(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3]
    ).length;
    expect(result).toBe(5);
  });

  it("should return [1, 2, 4, 5, 6, 7, 8, 9] when called with ([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])", () => {
    const result = getSymmetricDiff(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3],
      [5, 3, 9, 8],
      [1]
    );
    expect(result).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });
  it("should return an array of eight elements when called with ([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])", () => {
    const result = getSymmetricDiff(
      [3, 3, 3, 2, 5],
      [2, 1, 5, 7],
      [3, 4, 6, 6],
      [1, 2, 3],
      [5, 3, 9, 8],
      [1]
    ).length;
    expect(result).toBe(8);
  });
});
