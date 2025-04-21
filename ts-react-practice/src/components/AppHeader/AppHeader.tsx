import styles from "./AppHeader.module.css";

import { HeaderProps } from "./AppHeader.types";

const AppHeader = ({ title, color }: HeaderProps) => {
  return <h1 style={(color = { color })}>{title}</h1>;
};

export default AppHeader;
