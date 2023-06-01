import React, { PropsWithChildren } from "react";
import s from "./styles.module.scss";

type Props = {
  backgroundColor: string;
  imageSrc: string;
  title: string;
};

const Card = ({
  backgroundColor,
  imageSrc,
  children,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <div className={s.card} style={{ backgroundColor }}>
      <p className="p">{children}</p>
    </div>
  );
};

export default Card;
