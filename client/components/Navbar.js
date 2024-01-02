import Link from "next/link"

const Navbar = ({page}) => {
    return (
        <div className=' w-6 flex items-center p-6'>
            <div className="flex flex-none items-center cursor-pointer">
                <div className="flex-none w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="text-xl font-bold mx-3 mr-10">InternPrep.</div>
            </div>
            <Link href='/' className={`flex-inital mx-10 text-lg items-center cursor-pointer font-semibold opacity-40 hover:opacity-90 ${page === 'home' ? 'opacity-100' : null}`}>
                Home
            </Link>  
            <Link href='/login' className={`flex-inital mx-10 text-lg items-center cursor-pointer font-semibold opacity-40 hover:opacity-90 ${page === 'login' ? 'opacity-100' : null}`}>
                Login
            </Link>  
            <Link href='/signup' className={`flex-inital mx-10 text-lg items-center cursor-pointer font-semibold opacity-40 hover:opacity-90 ${page === 'signup' ? 'opacity-100' : null}`}>
                SignUp
            </Link>  
        </div>
    )
}

export default Navbar