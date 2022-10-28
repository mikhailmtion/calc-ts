import React from "react";
import styles from "./Toggler.module.scss";

interface TogglerProps {
  toggle: boolean;
  handleClickToggle: () => void;
};

function Toggler({ toggle, handleClickToggle }: TogglerProps) {
  return (
    <div className={`${styles.toggler} ${toggle ? `${styles.toggler__toggle}` : ""}`} onClick={handleClickToggle}>
      <img src="../buttonToggle.png" alt="toggle"/>
    </div>
  );
}

export default Toggler;
