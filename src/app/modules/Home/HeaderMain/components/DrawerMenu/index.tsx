import React from "react";
import cn from "classnames";
import s from "./styles.module.scss";
import { Logo } from "../Logo";
import ContactItem from "../ContactItem";
import { linkItems } from "../../constants/navItems";
import { CloseButton } from "@/UI";
import DrawerNavList from "../DrawerNavList";

type Props = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const SidebarMenu = ({ isOpen, closeSidebar }: Props) => {
  return (
    <div
      className={cn(s.sidebar, {
        [s.is_open]: isOpen,
      })}
    >
      <div className={s.navigation}>
        <div className={s.logo_wrapper}>
          <Logo />
        </div>
        <CloseButton onClick={closeSidebar} />
      </div>
      <h3 className="h3">Делаем процесс обучения интересным и эффективным</h3>
      <DrawerNavList />
      <div className={s.contacts}>
        <h3 className={s.h3}>свяжитесь с нами</h3>
        <ul className={s.contact_list}>
          {linkItems.map((item) => {
            return <ContactItem {...item} key={item.text} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
