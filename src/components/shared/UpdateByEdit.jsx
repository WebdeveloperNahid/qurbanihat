"use client";
import { useState } from "react";
import { BiEdit, BiUser } from "react-icons/bi";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";

export function UpdateByEdit() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authClient.updateUser({
      name: e.target.name.value,
      image: e.target.image.value,
    });
    toast.success("Profile Updated successfully")
    setIsOpen(false);
    router.refresh()

  };

  return (
    <>
      <button className="btn bg-green-400 text-white gap-2 mt-2" onClick={() => setIsOpen(true)}>
        <BiEdit /> Update Profile
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl mx-4">

            <div className="flex items-center gap-2 mb-4">
              <BiUser className="text-green-500 text-xl" />
              <h3 className="font-bold text-xl">Update User</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <input type="text" name="name"
                  className="input input-bordered w-full mt-1" placeholder="Enter your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Image URL</label>
                <input type="text" name="image"
                  className="input input-bordered w-full mt-1" placeholder="Enter your image URL" />
              </div>
              <div className="flex gap-3 mt-2">
                <button type="button" className="btn flex-1"
                  onClick={() => setIsOpen(false)}>Cancel</button>
                <button type="submit" className="btn bg-green-400 text-white flex-1">Save</button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  );
}

export default UpdateByEdit;