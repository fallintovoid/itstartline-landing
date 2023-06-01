"use client";

import React, { useState } from "react";
import { Logo } from "../Logo";
import s from "./styles.module.scss";
import DrawerButton from "../DrawerButton";
import Drawer from "../DrawerMenu";
import NavList from "../NavList";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <header className={s.header}>
        <div className={s.navigation}>
          <div className={s.logo}>
            <Logo />
          </div>
          <NavList />
        </div>
        <DrawerButton openSidebar={() => setIsSidebarOpen(true)} />
      </header>

      <Drawer
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
