import { DieConfiguration } from "../types";
import { getArrayFromRange } from "./util";

const makeNumberedDie = (
  dNumber: number,
  name?: string,
  suffix?: string
): DieConfiguration => {
  return {
    name: name ?? `d${dNumber}`,
    choices: getArrayFromRange(1, dNumber + 1).map(
      (elem) => elem.toString() + (suffix ?? "")
    ),
  };
};

const makeNumberedDiceList = (
  setSpecification: NumberedDieSpecification[]
): DieConfiguration[] => {
  const diceConfiguration = setSpecification.map((dieSpec) => {
    const makeDieParams: any =
      typeof dieSpec === "number" ? { number: dieSpec } : dieSpec;

    return makeNumberedDie(
      makeDieParams.number,
      makeDieParams.name,
      makeDieParams.suffix
    );
  });

  return diceConfiguration;
};

const makeDiceMapFromConfigList = (
  configList: DieConfiguration[]
): Record<string, DieConfiguration> => {
  const mapping = configList.reduce(
    (accum, current) => ({
      ...accum,
      [current.name]: current,
    }),
    {}
  );

  return mapping;
};

type NumberedDieSpecification =
  | number
  | { name: string; number: number; suffix?: string };

export const makeNumberedDiceSet = (
  numberedDiceList: NumberedDieSpecification[]
) => {
  const dice = makeNumberedDiceList(numberedDiceList);
  const diceMap = makeDiceMapFromConfigList(dice);
  return diceMap;
};
