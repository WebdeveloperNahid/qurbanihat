import Image from "next/image";
import heroImg from "../../../public/hero-cow.jpg";
import NavLink from "../../components/shared/NavLink";
import Marquee from "react-fast-marquee";
import Features from "../../components/shared/features/page";
import ExtraSection from "../../components/shared/Extra-section/ExtraSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px]">
        
        <Image
          src={heroImg}
          alt="heroImg"
          fill
          className="object-cover"
          priority
        />

     
        <div className="absolute inset-0 bg-black/40" />

        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 gap-4">
          <h1 className="animate__animated animate__slideInDown text-2xl md:text-4xl lg:text-4xl font-extrabold text-center">
           
           আপনার কুরবানির জন্য দেশি ও বিদেশি জাতের <br/> গরু ও ছাগল বাছাই করে কিনুন।
          </h1>

          <div className="w-full max-w-xl">
            <Marquee direction="right">
               🐐 কুরবানির হাটে আপনাকে আন্তরিক স্বাগতম।
          
            </Marquee>
          </div>

          <NavLink href={"/all-animals"}>
            <button className="bg-green-400 hover:bg-green-500 py-2 px-6 font-bold text-white rounded-2xl border-2 border-white transition">
              All Animals
            </button>
          </NavLink>
        </div>
      </div>

      <Features />
      <ExtraSection />
    </div>
  );
}