import { makeNumberedDiceSet } from "./helpers/dice";

const standardDiceConfig = [
  4,
  6,
  8,
  10,
  { name: "d10x10", number: 10, suffix: "0" },
  12,
  20,
];

export const standardDice = makeNumberedDiceSet(standardDiceConfig);
export const standardDiceNames = Object.keys(standardDice);

console.dir(standardDice);
console.dir(standardDiceNames);
