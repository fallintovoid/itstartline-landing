import { use } from "react";
import { Gallery, fetchPhotos } from "@/modules/Home/GalleryModule";
import { Header } from "@/modules/Home/HeaderMain";
import { HeroArea } from "@/modules/Home/HeroModule";
import { Programs } from "@/modules/Home/ProgramsModule";
import { Questions } from "@/modules/Home/QuestionsModule";
import { TeachersArea, fetchTeachers } from "@/modules/Home/TeachersModule";

export default function Home() {
  const teachers = use(fetchTeachers());
  const pictures = use(fetchPhotos());
  return (
    <>
      <Header />
      <HeroArea />
      <Programs />
      <Gallery pictures={pictures} />
      <Questions />
      <TeachersArea teachers={teachers} />
    </>
  );
}
