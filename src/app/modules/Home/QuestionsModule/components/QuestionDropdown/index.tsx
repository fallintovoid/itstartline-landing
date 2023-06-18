"use client";

import React, { useState } from "react";
import s from "./styles.module.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import cn from "classnames";

type Props = {
  question: string;
  answer: string;
};

const QuestionDropdown = ({ question, answer }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className={s.wrapper} onClick={() => setIsActive((prev) => !prev)}>
      <div className={s.question}>
        <h4>{question}</h4>
        <AiOutlineArrowUp
          transform={isActive ? "rotate(180)" : undefined}
          size={25}
          className={cn(s.icon)}
        />
      </div>
      <div
        className={cn(s.answer, {
          [s.active]: isActive,
        })}
      >
        <p className="p">{answer}</p>
      </div>
    </li>
  );
};

export default QuestionDropdown;
