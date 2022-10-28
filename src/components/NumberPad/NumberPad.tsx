import React from "react";
import styles from "./NumberPad.module.scss";
import NumberButton from "../NumberButton/NumberButton";
import { buttonArray } from './data/index';

interface NumberPadProps  {
  handleClick: (num: string) => void;
};

function NumberPad({ handleClick }: NumberPadProps) {
  return (
    <div className={styles.pad}>
      <div className={styles.pad__controls}>
        <NumberButton num={"C"} handleClick={handleClick} />
        <NumberButton num={"AC"} handleClick={handleClick} />
      </div>
      <div className={styles.pad__numbers}>
        {buttonArray.map((el) => (
          <NumberButton
            key={el.element}
            num={el.element}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default NumberPad;
