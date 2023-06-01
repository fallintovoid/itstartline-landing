import Image from "next/image";
import Link from "next/link";
import s from "./styles.module.scss";

const LOGO = "/images/logo/logo-white.png";
export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={LOGO}
        alt="IT Start Line"
        width={150}
        height={150}
        className={s.logo}
      />
    </Link>
  );
};
