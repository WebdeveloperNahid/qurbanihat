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
    <div className="card bg-base-100 shadow-sm container mx-auto lg:w-[80%] xl:w-[70%]">
      <figure>
        <Image
          src={animal.image}
          alt={animal.name}
          width={1200}
          height={600}
          className="w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{animal.name}</h2>

        <div className="flex flex-wrap gap-2 my-1">
          <span className="badge badge-success text-white">
            {animal.category}
          </span>
          <span className="badge badge-outline text-green-700">
            {animal.type}
          </span>
          <span className="badge badge-outline text-green-700">
            {animal.breed}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-2">
          <p className="text-sm text-green-400 flex items-center gap-1">
            <GiWeight />{" "}
            <span className="font-semibold">{animal.weight} kg</span>
          </p>
          <p className="text-sm text-green-400 flex items-center gap-1">
            {" "}
            <FaGem /> <span className="font-semibold">{animal.age} years</span>
          </p>
          <p className="text-sm text-green-400 flex items-center gap-1">
            {" "}
            <span>
              <FaLocationDot />
            </span>{" "}
            <span className="font-semibold">{animal.location}</span>
          </p>
        </div>

        <p className="text-gray-500 text-sm">{animal.description}</p>

        <h2 className="font-bold text-[18px] text-green-500 mt-1">
          {animal.price.toLocaleString()} <span className="text-2xl">৳</span>
        </h2>

        <Link href="/all-animals" className="card-actions justify-end">
          <button className="btn bg-green-400 text-white font-extrabold">
            Back to All-Animals
          </button>
        </Link>
      </div>
      <BookingForm></BookingForm>
    </div>
  );
};

export default DeatilsPage;
