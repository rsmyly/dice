import { useState } from "react";

import { ChoiceList, DieConfiguration } from "../../types";
import { useChooserWithDelay } from "../hooks/useChooser";

export type DieProps = DieConfiguration;

const defaultDelayTimeMs = 1000 * 1.5;

const Die = ({ choices }: DieProps) => {
  const [choice, isChoicePending, choose] = useChooserWithDelay({
    choices,
    delayTimeMs: defaultDelayTimeMs,
  });

  const choiceDisplay = isChoicePending ? "rolling..." : choice;

  return (
    <div>
      <div>{choiceDisplay}</div>
      <div>
        <button type="button" onClick={choose}>
          Roll
        </button>
      </div>
    </div>
  );
};

export default Die;
