export const getArrayFromRange = (min: number, maxExclusive: number) => {
  return [...Array(maxExclusive - min).keys()].map((value) => value + min);
};

export const wait = async (timeMs: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), timeMs));
