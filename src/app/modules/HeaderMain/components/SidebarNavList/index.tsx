import React from "react";
import { navItems } from "../../constants/navItems";
import { CustomLink } from "@/app/UI";

import s from "./styles.module.scss";

const NavList = () => {
  return (
    <ul className={s.nav_list}>
      {navItems.map((item) => {
        return (
          <li key={item.text}>
            <CustomLink {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
