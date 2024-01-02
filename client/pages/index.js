import Navbar from "@/components/Navbar";
import { useState } from "react";


export default function Home() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  return (
    <div className={`bg-mountains-image bg-cover bg-fixed w-full min-h-[100vh]`}>
      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700/70 via-gray-900 to-black bg-cover bg-fixed w-full min-h-[100vh]">
        <Navbar page='home' />

        Home Page
        
      </div>
    </div>
  )
}
