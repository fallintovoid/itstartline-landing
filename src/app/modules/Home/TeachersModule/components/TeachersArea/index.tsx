"use client";

import React from "react";
import s from "./styles.module.scss";
import { Button, Subtitle } from "@/UI";
import Teacher from "../Teacher";
import cn from "classnames";
import { Teacher as TeacherType } from "../../types/teachers";
import useTeachers from "../../hooks/useTeachers";

type Props = {
  teachers: TeacherType[];
};

const TeachersArea = ({ teachers }: Props) => {
  const { loadTeachers, renderTeachers, canShowLoadMoreButton } =
    useTeachers(teachers);
  return (
    <section className={s.teachers}>
      <Subtitle text="Команда" colorText="white" colorDot="#ffdc60" />
      <h1 className={cn("h1", s.title)}>Наши преподаватели</h1>
      <ul className={s.teachers_list}>{renderTeachers()}</ul>
      {canShowLoadMoreButton && (
        <Button clickHandler={loadTeachers}>Хочу больше!</Button>
      )}
    </section>
  );
};

export default TeachersArea;
