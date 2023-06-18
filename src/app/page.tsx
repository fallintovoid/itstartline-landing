import { Gallery } from "@/modules/Home/GalleryModule";
import { Header } from "@/modules/Home/HeaderMain";
import { HeroArea } from "@/modules/Home/HeroModule";
import { Programs } from "@/modules/Home/ProgramsModule";
import { Questions } from "@/modules/Home/QuestionsModule";
import { TeachersArea } from "@/modules/Home/TeachersModule";

export default function Home() {
  return (
    <>
      <Header />
      <HeroArea />
      <Programs />
      <Gallery />
      <Questions />
      <TeachersArea />
    </>
  );
}
