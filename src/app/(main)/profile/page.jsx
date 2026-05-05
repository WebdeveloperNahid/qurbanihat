"use client";
import Image from "next/image";
import { authClient } from "../../lib/auth-client";
import userAvatar from "../../assets/avatar.png";
import { UpdateByEdit } from "@/components/shared/UpdateByEdit";


const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  if (isPending) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  const user = session?.user;
  return (
    <div className="mx-auto mt-5">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className=" mx-auto rounded-full overflow-hidden">
          <Image
            src={user?.image || userAvatar}
            alt="User avatar"
            width={100}
            height={100}
             className="w-full h-full object-cover" 
          ></Image>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.name}</h2>
          <p>
            {user?.email}
          </p>
           <UpdateByEdit></UpdateByEdit>
          
        </div>
       
      </div>
    </div>
  );
};

export default ProfilePage;
