"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { pictures } from "../utils/constants";
import Photo from "../components/Photo";

interface ReturnValue {
  renderPhotos: () => JSX.Element[];
  loadPhotos: () => void;
  canShowLoadMoreButton: boolean;
}

export const useGallery = (): ReturnValue => {
  const [currentAmountOfPhotos, setCurrentAmountOfPhotos] = useState(12);
  const [canShowLoadMoreButton, setCanShowLoadMoreButton] = useState(true);

  useEffect(() => {
    if (currentAmountOfPhotos > pictures.length) {
      setCanShowLoadMoreButton(false);
    }
  }, [currentAmountOfPhotos]);

  const renderPhotos = useCallback(() => {
    return pictures.slice(0, currentAmountOfPhotos).map((item) => {
      return <Photo {...item} key={item.src} />;
    });
  }, [currentAmountOfPhotos]);

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
