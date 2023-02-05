import { ChoiceList, Choice } from "../../types";
import { getRandomElementFromArray } from "../../helpers/random";
import { wait } from "../../helpers/util";
import { useState } from "react";

type ChooserOptions = {
  choices: ChoiceList;
  initialChoice?: Choice;
};

const emptyChoiceDisplay = "?";

export const useChooser = ({
  choices,
  initialChoice,
}: ChooserOptions): [string, () => void] => {
  const [currentChoice, setCurrentChoice] = useState(
    initialChoice ?? emptyChoiceDisplay
  );

  const choose = () => {
    const newChoice = getRandomElementFromArray(choices);
    setCurrentChoice(newChoice);
  };

  return [currentChoice, choose];
};

type ChooserWithDelayOptions = ChooserOptions & {
  delayTimeMs: number;
};

export const useChooserWithDelay = (
  options: ChooserWithDelayOptions
): [string, boolean, () => Promise<void>] => {
  const { delayTimeMs } = options;

  const [isPending, setIsPending] = useState(false);
  const [currentChoice, choose] = useChooser(options);

  const delayChoose = async () => {
    setIsPending(true);
    await wait(delayTimeMs);
    choose();
    setIsPending(false);
  };

  return [currentChoice, isPending, delayChoose];
};
