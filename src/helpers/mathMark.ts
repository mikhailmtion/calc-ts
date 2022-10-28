export const mathMark = (num: string): string => {
  let value: string;

  switch (num) {
    case "Sum":
      value = "+";
      break;
    case "Div":
      value = "/";
      break;
    case "Mult":
      value = "*";
      break;
    case "Sub":
      value = "-";
      break;
    case "Equals":
      value = "=";
      break;
    case "Dot":
      value = ".";
      break;
    default:
      value = num;
      break;
  }

  return value;
};
