import Image from "next/image";

import heroImg from "../../../public/hero-cow.jpg";
import NavLink from "@/components/shared/NavLink";

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
        <button  className="absolute -mt-[30%]  ml-[40%] bg-green-400 py-2 px-3 font-bold text-white rounded-2xl border-2 border-yellow-white "><NavLink href={"/all-animals"}>All Animals</NavLink></button>
      </div>
    </div>
  );
}
