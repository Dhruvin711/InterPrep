import Link from "next/link";

const NavLink = ({ href, text, isActive }) => (
  <Link href={href}>
    <p className={`mx-4 text-lg font-semibold ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-90'}`}>
      {text}
    </p>
  </Link>
);

const Navbar = ({ page }) => {
  return (
    <div className="w-6 flex items-center p-6">
      <div className="flex flex-none items-center cursor-pointer">
        <div className="flex-none w-6 h-6 bg-blue-500 rounded-full"></div>
        <div className="text-xl font-bold mx-3 mr-10">InternPrep.</div>
      </div>
      <NavLink href="/" text="Home" isActive={page === 'home'} />
      <NavLink href="/login" text="Login" isActive={page === 'login'} />
      <NavLink href="/signup" text="SignUp" isActive={page === 'signup'} />
    </div>
  );
};

export default Navbar;