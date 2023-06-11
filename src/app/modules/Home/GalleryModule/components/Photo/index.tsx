import React from "react";
import s from "./styles.module.scss";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  src: string;
  title: string;
};

const Photo = ({ src, title }: Props) => {
  return (
    <div className={s.photo_wrapper}>
      <FiArrowUpRight size="75%" color="white" className={s.photo_arrow} />
      <div className={s.photo_background}></div>
      <Image
        src={src}
        alt={title}
        width={200}
        height={200}
        className={s.photo}
      />
    </div>
  );
};

export default Photo;
