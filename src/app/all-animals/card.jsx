import Image from "next/image";
import React from "react";

const CardAnimals = ({ animal }) => {
  return (
    
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image
            src={animal.image}
            alt="animal.name"
            width={400}
            height={300}
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
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
   
  );
};

export default CardAnimals;
