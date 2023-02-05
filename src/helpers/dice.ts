import { DieConfiguration, Choice } from "../types";
import { getArrayFromRange } from "./util";

export const makeNumberedDie = ({
  dNumber,
  name,
  choiceModifier,
}: {
  dNumber: number;
  name?: string;
  choiceModifier?: (choice: Choice) => Choice;
}): DieConfiguration => {
  const numbers = getArrayFromRange(1, dNumber + 1).map((elem) =>
    elem.toString()
  );

  const finalChoices = choiceModifier ? numbers.map(choiceModifier) : numbers;

  return {
    name: name ?? `d${dNumber}`,
    choices: finalChoices,
  };
};
