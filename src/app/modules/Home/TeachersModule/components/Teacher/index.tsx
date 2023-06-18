import React from "react";
import s from "./styles.module.scss";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  image: string;
};

const Teacher = ({ name, description, image }: Props) => {
  const slicedDescription =
    description.length > 70 ? description.slice(0, 71) + "..." : description;
  return (
    <li className={s.teacher}>
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className={s.photo}
      />
      <div className={s.information}>
        <h4 className={s.name}>{name}</h4>
        <p className={s.description}>{slicedDescription}</p>
      </div>
    </li>
  );
};

export default Teacher;
