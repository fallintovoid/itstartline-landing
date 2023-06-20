"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Photo from "../components/Photo";
import { Photo as PhotoType } from "../types/photo";
import { fetchPhotos } from "../utils/fetchPhotos";

interface ReturnValue {
  renderPhotos: () => JSX.Element[];
  loadPhotos: () => void;
  canShowLoadMoreButton: boolean;
}

export const useGallery = (pictures: PhotoType[]): ReturnValue => {
  const [currentAmountOfPhotos, setCurrentAmountOfPhotos] = useState(12);
  const [canShowLoadMoreButton, setCanShowLoadMoreButton] = useState(true);

  useEffect(() => {
    if (currentAmountOfPhotos > pictures.length) {
      setCanShowLoadMoreButton(false);
    } else {
      setCanShowLoadMoreButton(true);
    }
  }, [currentAmountOfPhotos, pictures.length]);

  const renderPhotos = useCallback(() => {
    return pictures.slice(0, currentAmountOfPhotos).map((item) => {
      return <Photo {...item} key={item.src} />;
    });
  }, [currentAmountOfPhotos, pictures]);

  const loadPhotos = () => {
    setCurrentAmountOfPhotos((prev) => prev + 12);
  };

  return useMemo(() => {
    return {
      loadPhotos,
      renderPhotos,
      canShowLoadMoreButton,
    };
  }, [renderPhotos, canShowLoadMoreButton]);
};
