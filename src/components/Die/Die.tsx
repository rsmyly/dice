import { useEffect, useState } from "react";

import { DieConfiguration } from "../../types";
import { useChooserWithDelay } from "../hooks/useChooser";
import styles from "./Die.module.css";

export type DieProps = DieConfiguration;

// TODO: this whole placeholder thing has become a mess
const defaultPlacholderTimePerFrameMs = 340;
const maxDotCount = 3;
const DieResultPlaceholder = () => {
  const [currentDotCount, setCurrentDotCount] = useState(0);

  useEffect(() => {
    const intervalPointer = setInterval(() => {
      setCurrentDotCount((count) => (count + 1) % maxDotCount);
    }, defaultPlacholderTimePerFrameMs);

    return () => clearInterval(intervalPointer);
  });

  const displayString = ".".repeat(currentDotCount + 1);

  return (
    <span style={{ textAlign: "left", width: "4em" }}>{displayString}</span>
  );
};

const defaultDelayTimeMs = 1000 * 1.0;
const Die = ({ name, choices }: DieProps) => {
  const [choice, isChoicePending, choose] = useChooserWithDelay({
    choices,
    delayTimeMs: defaultDelayTimeMs,
  });

  const [isBeingPushed, setIsBeingPushed] = useState(false);

  const choiceDisplay = isChoicePending ? <DieResultPlaceholder /> : choice;

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
