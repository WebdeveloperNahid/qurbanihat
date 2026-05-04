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
          <div key={animal.id} className="card bg-base-100  shadow-sm">
            <figure>
              <Image
                src={animal.image}
                alt="featuredAnimals.name"
                width={600}
                height={400}
              ></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl"> {animal.name} </h2>
              <p className="font-semibold text-[18px]">
                Categories: {animal.category}
              </p>
              <h2 className="font-semibold text-[16px] text-green-400">
                Price: {animal.price} <span className="text-2xl">৳</span>
              </h2>
              <Link
                href={`all-animals/${animal.id}`}
                className="card-actions justify-end"
              >
                <button className="btn bg-green-400 text-white font-extrabold">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
