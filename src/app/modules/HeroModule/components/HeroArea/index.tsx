"use client";

import React from "react";
import s from "./styles.module.scss";
import Image from "next/image";
import { Button } from "@/app/UI";
import { BsTelegram, BsDiscord, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";

const HeroArea = () => {
  return (
    <section className={s.hero}>
      <div className={s.information}>
        <div className={s.text}>
          <h1 className="h1">Обучаем IT</h1>
          <h3 className="h3">
            Подростков <span className={s.yellow}>в возрасте 14-17 лет</span> в
            Берлине
          </h3>
          <ul className={s.list}>
            <li>Даем знания и навыки, необходимые при устройстве на работу</li>
            <li>Бесплатно помогаем малоимущим и беженцам</li>
            <li>Создаем комьюнити и социализируем</li>
          </ul>
          <Button clickHandler={() => console.log("")}>Начать учиться</Button>
          <ul className={s.contact_list}>
            <Link href="/">
              <li className={s.contact_item}>
                <BsTelegram className={s.icon} />
                <span className={s.contact_text}>Телеграм</span>
              </li>
            </Link>
            <Link href="/">
              <li className={s.contact_item}>
                <BsDiscord className={s.icon} />
                <span className={s.contact_text}>Дискорд</span>
              </li>
            </Link>
            <Link href="/">
              <li className={s.contact_item}>
                <BsInstagram className={s.icon} />
                <span className={s.contact_text}>Инстаграм</span>
              </li>
            </Link>
            <Link href="/">
              <li className={s.contact_item}>
                <BsYoutube className={s.icon} />
                <span className={s.contact_text}>Youtube</span>
              </li>
            </Link>
          </ul>
        </div>
        <Image
          src="/images/hero/cat.png"
          alt="Cat"
          width={200}
          height={200}
          className={s.image}
        />
      </div>
    </section>
  );
};

export default HeroArea;
