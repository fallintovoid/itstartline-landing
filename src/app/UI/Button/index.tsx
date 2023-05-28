"use client";

import React, { PropsWithChildren } from "react";
import s from "./styles.module.scss";

type Props = {
  clickHandler: () => void;
};

const Button = ({ clickHandler, children }: PropsWithChildren<Props>) => {
  return (
    <button onClick={clickHandler} className={s.yellow_button}>
      {children}
    </button>
  );
};

export default Button;
