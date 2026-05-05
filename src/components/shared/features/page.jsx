import CardAnimals from "@/app/(main)/all-animals/card";
import { getFeaturedAnimals } from "../../../app/lib/fatchData";
import Image from "next/image";
import Link from "next/link";

const Features = async () => {
  const featuredAnimals = await getFeaturedAnimals();
  return (
    <div className="my-10 container mx-auto">
      <h1 className="py-5 text-2xl font-semibold ">Featured Animals</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {featuredAnimals.map((animal) => (

          <CardAnimals key={animal.id} animal={animal} ></CardAnimals>
        ))}
      </div>
    </div>
  );
};

export default Features;
