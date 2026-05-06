import BookingForm from "@/components/shared/Booking";
import { getCowDetailsById } from "../../../lib/fatchData";
import Image from "next/image";
import Link from "next/link";
import { FaGem, FaLocationDot } from "react-icons/fa6";
import { GiWeight } from "react-icons/gi";

const DeatilsPage = async ({ params }) => {
  const { id } = await params;
  const animal = await getCowDetailsById(id);

  if (!animal) {
    return <div className="text-center text-2xl mt-20"> Animal Not Found!</div>;
  }

  return (
    <div className="card bg-base-100 shadow-sm container mx-auto px-4 lg:w-[80%] xl:w-[70%] my-5">
      <figure className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
        <Image
          src={animal.image}
          alt={animal.name}
          width={1200}
          height={600}
          className="rounded-t-xl object-cover"
        />
      </figure>
      <div className="card-body p-4 md:p-8">
        <h2 className="card-title text-xl md:text-3xl font-bold">
          {animal.name}
        </h2>

        <div className="flex flex-wrap gap-2 my-2">
          <span className="badge badge-success text-white p-3">
            {animal.category}
          </span>
          <span className="badge badge-outline text-green-700 p-3">
            {animal.type}
          </span>
          <span className="badge badge-outline text-green-700 p-3">
            {animal.breed}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 bg-gray-50 p-4 rounded-lg">
          <p className="text-sm md:text-base text-gray-700 flex items-center gap-2">
            <GiWeight className="text-green-500 text-lg" />{" "}
            <span className="font-semibold">{animal.weight} kg</span>
          </p>
          <p className="text-sm md:text-base text-gray-700 flex items-center gap-2">
            {" "}
            <FaGem className="text-green-500 text-lg" />{" "}
            <span className="font-semibold">{animal.age} years</span>
          </p>
          <p className="text-sm md:text-base text-gray-700 flex items-center gap-2">
            {" "}
            <span>
              <FaLocationDot className="text-green-500 text-lg" />
            </span>{" "}
            <span className="font-semibold">{animal.location}</span>
          </p>
        </div>

        <p className="text-gray-500 text-sm">{animal.description}</p>

        <h2 className="font-bold text-2xl md:text-3xl text-green-600 mt-4">
          {animal.price.toLocaleString()} <span className="text-2xl">৳</span>
        </h2>

        <Link href="/all-animals" className="card-actions justify-end">
          <button className="btn bg-green-500 hover:bg-green-600 border-none text-white font-bold w-full md:px-8">
            Back to All-Animals
          </button>
        </Link>
      </div>
      <div className="p-4 md:p-8 border-t">
        <BookingForm />
      </div>
    </div>
  );
};

export default DeatilsPage;
