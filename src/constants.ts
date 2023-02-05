import { makeNumberedDie } from "./helpers/dice";
import { DieConfiguration } from "./types";

export const standardDice = {
  d4: makeNumberedDie({ dNumber: 4 }),
  d6: makeNumberedDie({ dNumber: 6 }),
  d8: makeNumberedDie({ dNumber: 8 }),
  d10x10: makeNumberedDie({
    dNumber: 10,
    name: "d10x10",
    getDisplayStringFromNumber: (choice) => `${choice - 1}0`,
  }),
  d10: makeNumberedDie({
    dNumber: 10,
    getDisplayStringFromNumber: (choice) => (choice - 1).toString(),
  }),
  d12: makeNumberedDie({ dNumber: 12 }),
  d20: makeNumberedDie({ dNumber: 20 }),
  d100: makeNumberedDie({ dNumber: 100 }),
};

export const standardDiceNames = Object.keys(standardDice);
export const standardDiceAsList = standardDiceNames.map(
  (dName) => (standardDice as Record<string, DieConfiguration>)[dName]
);
