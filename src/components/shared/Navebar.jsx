"use client";

import Image from "next/image";
import logo from "../../../public/qurbaniHat-logo.png";
import userAvatar from "../../app/assets/avatar.png";

import NavLink from "./NavLink";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { MdMenu } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
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
      <div className="w-full px-3 mx-auto flex items-center justify-between my-2 sm:container sm:px-6 ">
        <div className="flex items-center gap-3">
          <div className="md:hidden relative">
            <button
              className="text-2xl text-green-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <MdMenu />}
            </button>
            {isOpen && (
              <div className="absolute top-8 left-0 mt-1 list-none text-green-500 font-bold flex flex-col gap-1 bg-green-200 py-2 w-36 px-3 z-20 rounded shadow-md">
                {Links}{" "}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            <div className="rounded-full overflow-hidden border-2 border-green-400">
              <Image src={logo}alt="QurbaniHat Logo" width={50} height={50}></Image>
            </div>
            <h1 className="text-green-500 font-bold text-base sm:text-lg md:text-x">QurbaniHat</h1>
          </div>
        </div>

        <ul className=" hidden md:flex justify-items-center gap-4 text-green-400 font-semibold ">
          {Links}
        </ul>

        {isPending ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : user ? (
          <div className="flex gap-2">
            <h2 className="hidden sm:block font-semibold text-sm">
              {" "}
              <span className="text-green-500">Hello!_</span> {user?.name}
            </h2>
            <div className=" rounded-full overflow-hidden w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src={user?.image || userAvatar}
                alt="User avatar"
                width={50}
                height={50}
              ></Image>
            </div>
            <button
              onClick={async () => await authClient.signOut()}
              className="btn bg-blue-400  text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-1 sm:gap-2">
            {" "}
            <Link href="/login">
              <button className="btn btn-sm bg-green-400 text-white text-xs px-2 sm:px-3">Login</button>
            </Link>
            <Link href="/register">
              <button className="btn btn-sm bg-blue-400 text-white text-xs px-2 sm:px-3">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navebar;
