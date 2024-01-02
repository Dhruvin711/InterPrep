import InputBox from "@/components/InputBox";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className={`bg-mountains-image bg-cover bg-fixed w-full min-h-[100vh]`}>
            <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700/70 via-gray-900 to-black bg-cover bg-fixed w-full min-h-[100vh]">
                <Navbar page='signup' />

                <div className="py-10 px-20">

                    <p className="text-base font-semibold opacity-50 items-center uppercase">Start For Free</p>
                    <h1 className="text-[2.5rem] font-semibold">Create new account.</h1>
                    <p className="mt-2">
                        <span className="opacity-50">Already A Member? </span>
                        <Link href={'/'} className="text-sky-500 font-semibold"> Log In</Link>
                    </p>

                    <div>

                        <div className="flex">
                            <InputBox name='First Name' type='text' />
                            <InputBox name='Last Name' type='text' />
                        </div>
                        <InputBox name='Email' type='email' />
                        <InputBox name='Password' type='password' />
                    </div>

                    <div className="mt-10">
                        <div className="w-[33rem] h-[3rem] bg-sky-700 items-center flex justify-center text-m font-semibold rounded-[5rem] cursor-pointer hover:font-bold ">
                            Create account
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
