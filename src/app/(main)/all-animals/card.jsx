import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardAnimals = ({ animal }) => {
  return (
    
      <div className="card bg-base-100  shadow-sm">
        <figure className="h-[220px] overflow-hidden">
          <Image
            src={animal.image}
            alt="animal.name"
            width={600}
            height={400}
            className="w-full h-full object-cover"
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
          <Link href={`all-animals/${animal.id}`}
           className="card-actions justify-end">
            <button className="btn bg-green-400 text-white font-extrabold">Details</button>
          </Link>
          
        </div>
      </div>
   
  );
};

export default CardAnimals;
