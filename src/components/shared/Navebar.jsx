"use client";

import Image from "next/image";
import logo from "../../../public/qurbaniHat-logo.png";
import userAvatar from "../../app/assets/avatar.png";

import NavLink from "./NavLink";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";

const Navebar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState();
  const Links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/all-animals"}>All Animals</NavLink>
      </li>
      <li>
        <NavLink href={"/profile"}>Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-100 ">
      <div className="flex items-center justify-between my-2 container mx-auto">
        <div className="flex items-center gap-3">
          <div className="md:hidden relative">
            <button
              className="text-3xl text-green-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <MdMenu />}
            </button>
            {isOpen && (
              <div className="absolute mt-6 list-none text-green-400 font-bold flex flex-col gap-1 border-none bg-green-200 py-2 w-35 px-3 z-20 transition duration-300">
                {Links}{" "}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            <div className="border-3  rounded-[50%] text-green-400">
              <Image src={logo} alt={logo} width={70} height={70}></Image>
            </div>
            <h1 className="text-green-500 font-bold text-[20px]">QurbaniHat</h1>
          </div>
        </div>

        <ul className=" hidden md:flex justify-items-center gap-4 text-green-400 font-semibold ">
          {Links}
        </ul>

        { isPending? (<span className="loading loading-spinner loading-md"></span>) : user ? (
          <div className="flex gap-2">
            <h2>Hello! {user?.name}</h2>
            <Image
              src={user?.image || userAvatar}
              alt="User avatar"
              width={60}
              height={60}
            ></Image>
            <button onClick={async ()=> await authClient.signOut()} className="btn bg-blue-400  text-white">Logout</button>
          </div>
        ) : (
          <div>
            {" "}
            <Link href="/login">
              <button className="btn bg-green-400 text-white">Login</button>
            </Link>
            <Link href="/register">
              <button className="btn bg-blue-400 text-white">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navebar;
