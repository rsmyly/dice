import { useState } from "react";

import { DieConfiguration } from "../../types";
import { useChooserWithDelay } from "../hooks/useChooser";
import styles from "./Die.module.css";

export type DieProps = DieConfiguration;

const defaultDelayTimeMs = 1000 * 1.0;

const Die = ({ name, choices }: DieProps) => {
  const [choice, isChoicePending, choose] = useChooserWithDelay({
    choices,
    delayTimeMs: defaultDelayTimeMs,
  });

  const choiceDisplay = isChoicePending ? "rolling..." : choice;

  return (
    <div className={styles.die}>
      <div className={styles.dieName}>{name}</div>
      <div className={styles.choiceDisplay}>{choiceDisplay}</div>
      <div className={styles.rollButtonContainer}>
        <button type="button" onClick={choose}>
          Roll
        </button>
      </div>
    </div>
  );
};

export default Die;
