import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardAnimals = ({ animal }) => {
  return (
    <div className="card bg-base-100 shadow-sm h-full flex flex-col">
      <figure className="h-[180px] md:h-[220px] overflow-hidden">
        <Image
          src={animal.image}
          alt={animal.name}
          width={600}
          height={400}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        ></Image>
      </figure>
      <div className="card-body p-4 md:p-6 flex-grow">
        <h2 className="card-title text-xl md:text-2xl"> {animal.name} </h2>
        <p className="font-semibold text-sm md:text-[18px]">
          Categories: {animal.category}
        </p>
        <h2 className="font-semibold text-sm md:text-[16px] text-green-400">
          Price: {animal.price} <span className="text-2xl">৳</span>
        </h2>
        <div className="card-actions justify-end mt-auto">
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
    </div>
  );
};

export default CardAnimals;
