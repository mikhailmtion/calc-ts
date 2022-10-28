import React, { useState, useEffect } from "react";
import Body from "../Body/Body";
import Display from "../Display/Display";
import NumberPad from "../NumberPad/NumberPad";
import Toggler from "../Toggler/Toggler";
import styles from "./App.module.scss";
import { useCalculator } from "../../hooks/useCalculator";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { State } from "../../types";

const initialState: State = {
  firstLineText: "",
};

function App() {
  const [state, setState] = useState(initialState);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("light");
  const [{ result, handleClick }] = useCalculator({state, initialState, setState});

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [toggle, theme]);

  const handleClickToggle = () => {
    setToggle(!toggle);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Header />
      <div className={styles.app}>
        <Body />
        <Toggler toggle={toggle} handleClickToggle={handleClickToggle} />
        <Display toggle={toggle} result={result} />
        <NumberPad handleClick={handleClick} />
      </div>
      <Footer toggle={toggle}/>
    </>
  );
}

export default App;
