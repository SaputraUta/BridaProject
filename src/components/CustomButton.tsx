import { title } from "process";
import { MouseEventHandler } from "react";

interface Props {
  title: string;
  containerStyles?: string;
  handleclick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({title, containerStyles, handleclick}: Props) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`${containerStyles}`}
      onClick={handleclick}
    >{title}</button>
  );
};

export default CustomButton;
