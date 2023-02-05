import { getArrayFromRange } from "./util";

describe("getArrayFromRange", () => {
  it("returns array starting at 0", () => {
    const array = getArrayFromRange(0, 10);
    expect(array.length).toEqual(10);
    expect(array[0]).toBe(0);
    expect(array[array.length - 1]).toBe(9);
  });

  it("returns array with non 0 start", () => {
    const array = getArrayFromRange(5, 10);
    expect(array.length).toEqual(5);
    expect(array[0]).toBe(5);
    expect(array[array.length - 1]).toBe(9);
  });
});
