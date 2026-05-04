import Image from "next/image";

import heroImg from "../../../public/hero-cow.jpg";
import NavLink from "../../components/shared/NavLink";
import Marquee from "react-fast-marquee";
import Features from "../../components/shared/features/page";
import ExtraSection from "../../components/shared/Extra-section/ExtraSection";

export default function Home() {
  return (
    <div className="relative">
      <div className="container mx-auto ">
        <Image
          src={heroImg}
          alt="heroImg"
          height={600}
          width={1920}
          className="w-full h-auto"
        ></Image>
        <div className="absolute -mt-17  container text-white  mx-auto">
          <h1 className="animate__animated animate__slideInDown text-5xl md:text-2xl font-extrabold text-center">
            কোরবানির হাটে আপনাকে স্বাগতম
          </h1>

          <Marquee direction="right">
            আপনার কোরবানির জন্য 🐐 সেরা মানের পশু কিনুন
          </Marquee>
        </div>
        <button className="absolute -mt-[32%]  ml-[40%] bg-green-400 py-2 px-3 font-bold text-white rounded-2xl border-2 border-yellow-white ">
          <NavLink href={"/all-animals"}>All Animals</NavLink>
        </button>
      </div>

      <Features></Features>
      <ExtraSection></ExtraSection>
    </div>
  );
}
