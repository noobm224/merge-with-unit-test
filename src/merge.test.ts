import { merge } from "./merge";

describe("merge", () => {
  it("should merge two sorted collections", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should merge collections with different lengths", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8, 9, 10];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should handle empty collections", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([]);
  });

  it("should handle one empty collection", () => {
    const collection1: number[] = [];
    const collection2 = [1, 2, 3];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3]);
  });

  it("should handle both collections with a single element", () => {
    const collection1 = [1];
    const collection2 = [2];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2]);
  });
});
