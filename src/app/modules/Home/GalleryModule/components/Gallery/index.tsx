"use client";

import React from "react";
import s from "./styles.module.scss";
import { Button, Subtitle } from "@/UI";
import { useGallery } from "../../hooks/useGallery";
import { Photo } from "../../types/photo";

type Props = {
  pictures: Photo[];
};

const Gallery = ({ pictures }: Props) => {
  const { renderPhotos, loadPhotos, canShowLoadMoreButton } =
    useGallery(pictures);
  return (
    <section className={s.gallery}>
      <Subtitle
        text="Как выглядят наши мероприятия"
        colorDot="rgba(41, 41, 48, 0.6)"
        colorText="rgba(41, 41, 48, 0.6)"
      />
      <h1 className="h1">Галерея</h1>
      <ul className={s.photo_grid}>{renderPhotos()}</ul>
      {canShowLoadMoreButton && (
        <Button clickHandler={loadPhotos}>Хочу ещё фотографий!</Button>
      )}
    </section>
  );
};

export default Gallery;
