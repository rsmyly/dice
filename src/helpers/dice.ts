import { DieConfiguration, Choice } from "../types";
import { getArrayFromRange } from "./util";

export const makeNumberedDie = ({
  dNumber,
  name,
  getDisplayStringFromNumber,
}: {
  dNumber: number;
  name?: string;
  getDisplayStringFromNumber?: (number: number) => Choice;
}): DieConfiguration => {
  const numbers = getArrayFromRange(1, dNumber + 1);

  const display = getDisplayStringFromNumber ?? ((value) => value.toString());

  const displayChoices = numbers.map((number) => display(number));

  return {
    name: name ?? `d${dNumber}`,
    choices: displayChoices,
  };
};
