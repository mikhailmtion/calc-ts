import React from "react";
import styles from "./Display.module.scss";

interface DisplayProps {
  result: string;
  toggle: boolean;
};

function Display({ toggle, result }: DisplayProps) {
  return (
    <div className={styles.display}>
      {toggle && <div className={styles.display__light}></div>}
      <div className={styles.display__result}>{result}</div>
    </div>
  );
}

export default Display;
