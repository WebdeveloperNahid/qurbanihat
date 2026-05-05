"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message || "Login failed!");
      return;
    }
    toast.success("Login successful!");
    router.push("/");
  };

  // console.log(watch("email"))
  // by Google login
  const GoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    console.log(data);
  };

  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl mb-6">Login your account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
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

          <button className="btn w-full bg-slate-700 text-white">Login</button>

          <p className="mt-4">
            Don't have an account?{" "}
            <Link href={"/register"} className="text-blue-500">
              Register{" "}
            </Link>{" "}
          </p>
          <fieldset className="border-t">
            <legend className="mx-auto px-2 text-gray-500">or</legend>
          </fieldset>
        </form>
        <button
          onClick={GoogleSignIn}
          className="btn w-full bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
