import { getAllfatch } from "../../lib/fatchData";
import AllAnimalsClient from "./AllAnimalsClient";

const AllAnimals = async () => {
  const allAnimals = await getAllfatch();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6"> Sort by price</h1>
      <AllAnimalsClient animals={allAnimals}></AllAnimalsClient>
    </div>
  );
};

export default AllAnimals;
