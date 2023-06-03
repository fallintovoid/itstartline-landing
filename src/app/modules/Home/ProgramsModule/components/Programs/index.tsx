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
      <h1 className={cn("h1", s.title)}>Обучающие мероприятия</h1>
      <div className={s.cards_wrapper}>
        <Card
          title="Курсы"
          backgroundColor="#ffdc60"
          imageSrc="/images/programs/brain.png"
        >
          Последовательные, взаимосвязанные занятия (офлайн и онлайн) в группах
          с преподавателем на регулярной основе - 2 раза в неделю на протяжении
          2 месяцев.
        </Card>
        <Card
          title="Воркшопы"
          backgroundColor="rgba(130,132,253,.9)"
          imageSrc="/images/programs/book.png"
        >
          Оффлайн и онлайн занятия в группах с преподавателем с упором на
          практику. (Могут быть небольшие серии последовательных занятий.)
        </Card>
        <Card
          title="Митапы"
          backgroundColor="hsla(0,100%,84%,.9)"
          imageSrc="/images/programs/chat.png"
        >
          Приглашенные специалисты из ИТ-сферы, рассказывают доклады, выступают
          с лекциями, делятся опытом и отвечают на вопросы аудитории.
        </Card>
      </div>

      <h2 className={cn("h2", s.subtitle)}>
        Мы – специалисты из разных областей IT, которые объединились, чтобы
        сделать, востребованные знания,{" "}
        <span className={s.text_yellow}>доступными</span>, а процесс обучения{" "}
        <span className={s.text_yellow}>эффективным</span> и{" "}
        <span className={s.text_yellow}>интересным</span>.
      </h2>
      <div className={s.text_wrapper}>
        <p className={cn("p", s.text)}>
          На сегодняшний день система образования (в любой стране) не успевает
          за развитием технологий, особенно в сфере IT. Компаниям постоянно
          нужны сотрудники, имеющие опыт работы с современными методологиями и
          инструментами разработки на современном технологическом стеке.
        </p>
        <p className={cn("p", s.text)}>
          Спрос на рынке туда сильно превышает предложение, поэтому работников в
          сфере IT (программистов, дизайнеров, менеджеров, тестировщиков и др.)
          такие высокие зарплаты и комфортные условия труда
        </p>
        <p className={cn("p", s.text)}>
          Мы хотим помочь подросткам &quot;войти в IT&quot;, попробовать себя в
          разных направлениях, найти &quot;свое&quot;, социализироваться и
          получить практику. Кому как не нам, в конце концов, людям из IT этим
          заниматься? :)
        </p>
      </div>
    </section>
  );
};

export default Programs;
