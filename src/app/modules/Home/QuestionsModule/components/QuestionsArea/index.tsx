import React, { use } from "react";
import s from "./styles.module.scss";
import { Subtitle } from "@/UI";
import cn from "classnames";
import QuestionDropdown from "../QuestionDropdown";
import { fetchQuestions } from "../../utlis/fetchQuestions";

type Props = {};

const QuestionsArea = () => {
  const questions = use(fetchQuestions());
  return (
    <section className={s.questions_area}>
      <div className={s.inner_wrapper}>
        <Subtitle
          colorDot="rgba(41, 41, 48, 0.6)"
          colorText="rgba(41, 41, 48, 0.6)"
          text="Частые вопросы и ответы на них"
        />
        <h1 className={cn("h1", s.title)}>
          ЧаВо? Или Что? Когда? Где? Сколько стоит?
        </h1>
        <p className={cn("p", s.text)}>
          Mы собрали ответы на самые часто задаваемые вопросы, пожалуйста,
          ознакомьтесь с ними, возможно ваш ответ уже есть тут, если, вдруг,
          нет, то напишите пожалуйста на почту{" "}
          <a className={s.link} href="mailto:denis.malyshock@itstartline.com">
            denis.malyshock@itstartline.com
          </a>
        </p>
        <ul className={s.questions_list}>
          {questions.map((item) => {
            return <QuestionDropdown {...item} key={item.question} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default QuestionsArea;
