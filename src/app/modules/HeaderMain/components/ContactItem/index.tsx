import React from "react";
import { AiFillStar } from "react-icons/ai";
import s from "./styles.module.scss";
import { CustomLink } from "@/app/UI";

type Props = {
  text: string;
  href: string;
};

const ContactItem = (props: Props) => {
  return (
    <li className={s.contact_item}>
      <AiFillStar color="#ffdc60" />
      <CustomLink {...props} />
    </li>
  );
};

export default ContactItem;
