"use client";

import React from "react";
import { HiBars3 } from "react-icons/hi2";
import s from "./styles.module.scss";

type Props = {
  openSidebar: () => void;
};

const SidebarButton = ({ openSidebar }: Props) => {
  return (
    <div className={s.button} onClick={openSidebar}>
      <HiBars3 size={35} />
    </div>
  );
};

export default SidebarButton;
