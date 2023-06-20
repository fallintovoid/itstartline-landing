"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Teacher as TeacherType } from "../types/teachers";
import Teacher from "../components/Teacher";

interface ReturnValue {
  renderTeachers: () => JSX.Element[];
  loadTeachers: () => void;
  canShowLoadMoreButton: boolean;
}

const useTeachers = (teachers: TeacherType[]): ReturnValue => {
  const [currentAmountOfTeachers, setCurrentAmountOfTeachers] = useState(8);
  const [canShowLoadMoreButton, setCanShowLoadMoreButton] = useState(true);

  useEffect(() => {
    if (currentAmountOfTeachers > teachers.length) {
      setCanShowLoadMoreButton(false);
    } else {
      setCanShowLoadMoreButton(true);
    }
  }, [currentAmountOfTeachers, teachers.length]);

  const renderTeachers = useCallback(() => {
    return teachers.slice(0, currentAmountOfTeachers).map((item) => {
      return <Teacher {...item} key={item.description} />;
    });
  }, [currentAmountOfTeachers, teachers]);

  const loadTeachers = () => {
    setCurrentAmountOfTeachers((prev) => prev + 4);
  };

  return useMemo(() => {
    return {
      loadTeachers,
      renderTeachers,
      canShowLoadMoreButton,
    };
  }, [renderTeachers, canShowLoadMoreButton]);
};

export default useTeachers;
