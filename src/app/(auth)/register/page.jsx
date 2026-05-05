"use client";
import { createAuthClient } from "better-auth/react";

import React from "react";
import { useForm } from "react-hook-form";

const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    console.log(data);
    const { email, name, photo, password } = data;
    console.log(name, photo);

  const { data:res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    console.log(res,error)
  };
  // console.log(watch("email"))
  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl mb-6">Register your account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type your name"
              {...register("name", { required: "name field is required" })}
            />
            {errors.name && (
              <p className="text-red-500"> {errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Type your Photo URL"
              {...register("photo", { required: "photo field is required" })}
            />
            {errors.photo && (
              <p className="text-red-500"> {errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type your email"
              {...register("email", { required: "email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500"> {errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type your password"
              {...register("password", {
                required: "password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500"> {errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-700 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
