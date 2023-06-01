import React from "react";
import s from "./styles.module.scss";

type Props = {
  colorDot: string;
  colorText: string;
  text: string;
};

const Subtitle = ({ colorDot, colorText, text }: Props) => {
  return (
    <div className={s.subtitle}>
      <div className={s.dot} style={{ backgroundColor: colorDot }}></div>
      <h5 className={s.text} style={{ color: colorText }}>
        {text}
      </h5>
    </div>
  );
};

export default Subtitle;
