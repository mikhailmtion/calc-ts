import { State } from "../types";

type handleClick = (el: string) => void;

interface useCalulatorProps {
  state: State;
  initialState: State;
  setState: (prevState: any) => void;
}

export const useCalculator = ({
  state,
  initialState,
  setState,
}: useCalulatorProps): [{ result: string; handleClick: handleClick }] => {
  
  const calculateResult = (): number| null => {
    let evalResult = null;

    function calc(fn: string) {
      const result = fn
      .split(/(\D)/g)
      .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index:number, array:any[]):any => {
        switch (value) {
          case "+": 
            return (acc = Number(acc) +  Number(array[index + 1]));
          case "-":
            return (acc = Number(acc) - Number(array[index + 1]));
          case "*":
            return (acc = Number(acc) * Number(array[index + 1]));
          case "/":
            return (acc = Number(acc) / Number(array[index + 1]));
          default:
            return Number(acc);
        }
      })
      return Number(result)
    }

    evalResult = calc(state.firstLineText);

    if (evalResult === undefined) {
      evalResult = null;
    }

    return evalResult;
  };

  const addDigit = (item: string) => {
    let firstLineText = state.firstLineText;
    const len = firstLineText.length;
    const newSymbolIsNumber = !isNaN(parseInt(item, 0));

    if (
      isNaN(parseInt(firstLineText.substring(len - 1, len), 0)) &&
      !newSymbolIsNumber
    ) {
      if (len !== 0) {
        firstLineText = firstLineText.substring(0, len - 1) + item;
      }
    } else {
      firstLineText = firstLineText.concat(item);
    }

    if (len > 7) {
      return;
    }
    setState((prevState: State) => ({
      ...prevState,
      firstLineText: firstLineText,
    }));
  };

  const showCalculatedResult = () => {
    const newResult = calculateResult();

    if (newResult !== null && newResult.toString() !== state.firstLineText) {
      let mainLineText = newResult.toString();
      if (mainLineText.length > 7 && mainLineText.indexOf(".") !== -1) {
        mainLineText = mainLineText.substring(0, 7);
      }
      setState({
        firstLineText: mainLineText,
      });
    }
  };

  const deleteLastDigit = () => {
    const last = state.firstLineText.length;
    if (last !== 0) {
      setState((prevState: State) => ({
        ...prevState,
        firstLineText: prevState.firstLineText.substring(0, last - 1),
      }));
    }
  };

  const handleClick: handleClick = (el) => {
    const value = el.toString();

    switch (value) {
      case "AC":
        setState(initialState);
        break;
      case "C":
        deleteLastDigit();
        break;
      case "=":
        showCalculatedResult();
        break;
      default:
        addDigit(value);
        break;
    }
  };

  return [{ result: state.firstLineText, handleClick }];
};
