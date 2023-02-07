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

  const [isBeingPushed, setIsBeingPushed] = useState(false);

  const choiceDisplay = isChoicePending ? "rolling..." : choice;

  return (
    <div
      className={styles.die + (isBeingPushed ? " " + styles.pushed : "")}
      onPointerDown={() => setIsBeingPushed(true)}
      onPointerUp={() => {
        if (isBeingPushed) {
          choose();
        }
        setIsBeingPushed(false);
      }}
      onPointerOut={() => setIsBeingPushed(false)}
    >
      <div className={styles.dieName}>{name}</div>
      <div className={styles.choiceDisplay}>{choiceDisplay}</div>
    </div>
  );
};

export default Die;
