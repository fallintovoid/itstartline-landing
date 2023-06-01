import React from "react";
import s from "./styles.module.scss";
import { CustomLink } from "@/app/UI";

type Props = {
  text: string;
  href: string;
};

const NavItem = ({ text, href }: Props) => {
  return (
    <li className={s.nav_item}>
      <CustomLink text={text} href={href} />
    </li>
  );
};

export default NavItem;
