import Link from "next/link";
import React from "react";
import cn from "classnames";
import s from "./styles.module.scss";

type Props = {
  href: string;
  text: string;
  textClassname?: string;
  linkClassname?: string;
};

const CustomLink = ({ href, text, textClassname, linkClassname }: Props) => {
  return (
    <Link href={href} className={cn(s.link, linkClassname)}>
      <h5 className={cn("h5", textClassname)}>{text}</h5>
    </Link>
  );
};

export default CustomLink;
