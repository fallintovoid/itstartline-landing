import React from "react";
import cn from "classnames";
import s from "./styles.module.scss";
import { Subtitle } from "@/app/UI";
import Card from "../Card";

type Props = {};

const Programs = (props: Props) => {
  return (
    <section className={s.programs}>
      <Subtitle text="Мы проводим" colorText="#ABA8A8" colorDot="#ffdc60" />
      <h1 className="h1">Обучающие мероприятия</h1>
      <div className={s.cards_wrapper}>
        <Card title="Chop" backgroundColor="#ffdc60" imageSrc="/">
          New text
        </Card>
        <Card title="Chop" backgroundColor="#ffdc60" imageSrc="/">
          New text
        </Card>
        <Card title="Chop" backgroundColor="#ffdc60" imageSrc="/">
          New text
        </Card>
      </div>
    </section>
  );
};

export default Programs;
