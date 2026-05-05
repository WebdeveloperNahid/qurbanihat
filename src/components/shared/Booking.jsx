"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Confirmed! We will contact you soon.");
    e.target.reset();
  };

  return (
    <div className="w-[80%] md:w-[50%] mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Booking Form</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium text-gray-600">Name</label>
          <input type="text" name="name" required
            className="input input-bordered w-full mt-1" placeholder="Enter your name" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input type="email" name="email" required
            className="input input-bordered w-full mt-1" placeholder="Enter your email" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Phone</label>
          <input type="tel" name="phone" required
            className="input input-bordered w-full mt-1" placeholder="Enter your phone number" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Address</label>
          <textarea name="address" required rows={3}
            className="textarea textarea-bordered w-full mt-1" placeholder="Enter your address" />
        </div>

        <button type="submit" className="btn bg-green-400 text-white w-full mt-2">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;