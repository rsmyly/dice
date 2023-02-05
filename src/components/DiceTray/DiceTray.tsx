import Die from "../Die";
import { standardDiceAsList } from "../../constants";
import styles from "./DiceTray.module.css";

const DiceTray = () => {
  const dice = standardDiceAsList.map((die) => (
    <Die {...die} key={die.name}></Die>
  ));

  return (
    <>
      <h2>Tray</h2>
      <div className={styles.diceTray}>{dice}</div>
    </>
  );
};

export default DiceTray;
