//* React & TS
import { useState } from "react";
import { TogglerResult } from "./useToggle.types";

export const useToggle = (initialValue: boolean): TogglerResult => {
  const [value, setValue] = useState(initialValue);

  const toggle = (): void => {
    setValue((prev) => !prev);
  };

  return {
    value,
    toggle,
  };
};
