import React, { use } from "react";
import s from "./styles.module.scss";
import { Subtitle } from "@/UI";
import { fetchTeachers } from "../../utlis/fetchTeachers";
import Teacher from "../Teacher";
import cn from "classnames";

type Props = {};

const TeachersArea = (props: Props) => {
  const teachers = use(fetchTeachers());
  return (
    <section className={s.teachers}>
      <Subtitle text="Команда" colorText="white" colorDot="#ffdc60" />
      <h1 className={cn("h1", s.title)}>Наши преподаватели</h1>
      <ul className={s.teachers_list}>
        {teachers.map((item) => (
          <Teacher {...item} key={item.description} />
        ))}
      </ul>
    </section>
  );
};

export default TeachersArea;
