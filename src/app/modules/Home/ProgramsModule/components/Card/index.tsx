import React, { PropsWithChildren } from "react";
import cn from "classnames";
import s from "./styles.module.scss";
import Image from "next/image";

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
      <div className={s.heading}>
        <Image
          src={imageSrc}
          alt={title}
          width={65}
          height={65}
          className={s.image_wrapper}
        />

        <h4 className="h4">{title}</h4>
      </div>
      <p className={cn("p", s.text)}>{children}</p>
    </div>
  );
};

export default Card;
