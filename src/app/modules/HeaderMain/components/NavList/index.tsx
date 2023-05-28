import React, { useEffect } from "react";
import NavItem from "../NavItem";
import { navItems } from "../../constants/navItems";

import s from "./styles.module.scss";

const NavList = () => {
  return (
    <ul className={s.nav_items}>
      {navItems.map((item) => (
        <NavItem {...item} key={item.text} />
      ))}
    </ul>
  );
};

export default NavList;
