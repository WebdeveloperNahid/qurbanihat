import Image from "next/image";

import heroImg from "../../../public/hero-cow.jpg";
import NavLink from "@/components/shared/NavLink";
import Marquee from "react-fast-marquee";

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
        <div className="absolute -mt-15  container text-white  mx-auto">
          <Marquee className="w-50 -[50%]">কোরবানির হাটে আপনাকে স্বাগতম</Marquee>
          <Marquee direction="right" >আপনার কোরবানির জন্য 🐐 সেরা মানের পশু কিনুন</Marquee>
        </div>
        <button  className="absolute -mt-[32%]  ml-[40%] bg-green-400 py-2 px-3 font-bold text-white rounded-2xl border-2 border-yellow-white "><NavLink href={"/all-animals"}>All Animals</NavLink></button>
      </div>
    </div>
  );
}
