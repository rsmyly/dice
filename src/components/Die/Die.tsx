import { getRandomElementFromArray } from "helpers/random";
import { useEffect, useState } from "react";

import { ChoiceList, DieConfiguration } from "../../types";
import { useChooserWithDelay } from "../hooks/useChooser";
import styles from "./Die.module.css";

export type DieProps = DieConfiguration;

const defaultPlacholderIterationTimeMs = 75;
const DieResultPlaceholder = ({ choices }: { choices: ChoiceList }) => {
  const [placeholder, setPlaceholder] = useState("");

  const updatePlaceHolder = () => {
    let newPlaceHolder = placeholder;

    while (newPlaceHolder === placeholder) {
      newPlaceHolder = getRandomElementFromArray(choices);
    }

    setPlaceholder(newPlaceHolder);
  };

  useEffect(() => {
    let lastUpdated = new Date();

    updatePlaceHolder();
    const intervalPointer = setInterval(() => {
      if (
        new Date().getTime() - lastUpdated.getTime() >
        defaultPlacholderIterationTimeMs
      ) {
        lastUpdated = new Date();
        updatePlaceHolder();
      }
    }, defaultPlacholderIterationTimeMs / 4);

    return () => {
      clearInterval(intervalPointer);
    };

    // eslint-disable-next-line
  }, [...choices]);

  return <span>{placeholder}</span>;
};

const defaultDelayTimeMs = 1000 * 1.0;
const Die = ({ name, choices }: DieProps) => {
  const [choice, isChoicePending, choose] = useChooserWithDelay({
    choices,
    delayTimeMs: defaultDelayTimeMs,
  });

  const [isBeingPushed, setIsBeingPushed] = useState(false);

  const choiceDisplay = isChoicePending ? (
    <DieResultPlaceholder choices={choices} />
  ) : (
    choice
  );

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
