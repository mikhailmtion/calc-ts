import React from "react";
import styles from "./NumberButton.module.scss";
import { mathMark } from './../../helpers/mathMark';

interface NumberButtonProps {
  num: string;
  handleClick: (num: string) => void;
};

function NumberButton({ num, handleClick }: NumberButtonProps) {
  const pathSrc = `./button${num}.png`;

  return (
    <div className={styles.button} onClick={() => handleClick(mathMark(num))}>
      <img src={pathSrc} alt={num}/>
    </div>
  );
}

export default NumberButton;
