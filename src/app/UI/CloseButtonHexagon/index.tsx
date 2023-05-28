import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import cn from "classnames";
import s from "./styles.module.scss";

type Props = {
  onClick: () => void;
  className?: string;
};

const CloseButton = ({ onClick, className }: Props) => {
  return (
    <AiOutlineCloseSquare
      className={cn(s.close_button, className)}
      onClick={onClick}
    />
  );
};

export default CloseButton;
