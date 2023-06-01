"use client";

import React from "react";
import s from "./styles.module.scss";
import Image from "next/image";
import { Button } from "@/app/UI";
import { BsTelegram, BsDiscord, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { Blob } from "@/app/UI";

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
        <div className={s.image_wrapper}>
          <Image
            src="/images/hero/cat.png"
            alt="Cat"
            width={200}
            height={200}
            className={s.image}
          />
          <div className={s.blob_under_image}>
            <Blob size={500} color="#57c9da" opacity={0.3} duration={20000} />
          </div>
        </div>
      </div>
      <div className={s.blob_top_left}>
        <Blob size={433} color="#FFD84E" opacity={1} duration={20000} />
      </div>
      <div className={s.blob_right}>
        <Blob size={990} color="#5956E9" opacity={0.5} duration={40000} />
      </div>
    </section>
  );
};

export default HeroArea;
