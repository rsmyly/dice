export const getRandomIntegerInRangeInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomElementFromArray = <T>(list: T[]): T => {
  return list[getRandomIntegerInRangeInclusive(0, list.length - 1)];
};
