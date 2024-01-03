import InputBox from "@/components/InputBox";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-mountains-image bg-cover bg-fixed w-full min-h-[100vh]">
      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700/70 via-gray-900 to-black bg-cover bg-fixed w-full min-h-[100vh]">
        <Navbar page="login" />

        <div className="py-10 px-20">
          <p className="text-base font-semibold opacity-50 items-center uppercase">
            Welcome Back
          </p>
          <h1 className="text-[2.5rem] font-semibold">Login to your Account</h1>
          <p className="mt-2">
            <span className="opacity-50">New Member? </span>
            <Link href={"/signup"} className="text-sky-500 font-semibold">
              Sign Up
            </Link>
          </p>

          <InputBox name="Email" type="email" />
          <InputBox name="Password" type="password" />

          <div className="mt-10">
            <div className="w-[33rem] h-[3rem] bg-sky-700 items-center flex justify-center text-m font-semibold rounded-[5rem] cursor-pointer hover:font-bold">
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
