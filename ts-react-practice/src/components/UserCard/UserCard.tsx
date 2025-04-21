//* Libraries
import style from "./UserCard.module.css";
import { FaUserCircle } from "react-icons/fa";

//* TS
import { UserCardProps } from "./UserCard.types";
import { useToggle } from "../../hooks/useToggle/useToggle";
import { useEffect } from "react";

const UserCard = ({ name, age }: UserCardProps) => {
  const { value, toggle } = useToggle(true);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className={style.cardWrapper}>
      <FaUserCircle className={style.iconWrapper} />

      <h2 className={style.userNameTitle}>{name}</h2>
      <p>Age: {age}</p>
      {value ? <p>Status: User is online</p> : <p>Status: Offline</p>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default UserCard;
