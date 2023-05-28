"use client";

import React, { useState } from "react";
import { Logo } from "../Logo";
import s from "./styles.module.scss";
import SidebarButton from "../SidebarButton";
import SidebarMenu from "../SIdebarMenu";
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
        <SidebarButton openSidebar={() => setIsSidebarOpen(true)} />
      </header>

      <SidebarMenu
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
