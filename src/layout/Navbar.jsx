import { Link } from "react-router-dom";
import Logo from "../assets/logo_lucky.png";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
    {/* For md, xl, 2xl Navbar */}
    <div className="hidden md:flex bg-black py-2 flex-row items-center justify-between px-4 lg:px-24">
      <Link to="/">
      <div>
        <img src={Logo} alt="lucky-star-logo" className="w-[127.6px] h-[69.21px]" />
      </div>
      </Link>
      <div className="flex flex-row items-center space-x-8">
        <Link to="/balance"><p className="text-white font-bold cursor-pointer">Balance</p></Link>
     <Link to="/faqs"><p className="text-white font-bold cursor-pointer">FAQ's</p></Link>
     <Link to="/signup">
        <button
          type="button"
          className="bg-white py-2 px-4 w-full text-center font-bold rounded-xl text-black focus:outline-none"
        >
         Signup
        </button>
        </Link>
        <Link to="/wallet">
        <button
          type="button"
          className="bg-[#FBBE2F] py-2 px-4 w-full text-center whitespace-nowrap font-bold rounded-xl text-black focus:outline-none"
        >
         Connect Wallet
        </button>
        </Link>
        <Link to="/user">
        <div className="cursor-pointer">
        <FaUserCircle color="white" size={28} />
        </div>
        </Link>
      </div>
    </div>

  {/* For mobile screen */}
<div className="md:hidden bg-black py-2 flex flex-row items-center justify-between px-4">
  <Link to="/">
    <img src={Logo} alt="lucky-star-logo" className="w-[127.6px] h-[69.21px]" />
  </Link>

  <div className="cursor-pointer relative" onClick={() => setShowNavbar(!showNavbar)}>
    <HiMenu color="white" size={24} />
  </div>

  {showNavbar && (
    <div className="flex flex-col w-[200px] bg-white text-black py-4 space-y-4 absolute top-16 right-4 z-20 rounded-lg shadow-lg">
        <Link to="/user" className="px-4 py-2  hover:bg-gray-200 rounded-lg transition">
        <FaUserCircle size={28} />
      </Link>
      <Link to="/balance" className="px-4 py-2 font-semibold hover:bg-gray-200 rounded-lg transition">Balance</Link>
      <Link to="/faqs" className="px-4 py-2 font-semibold hover:bg-gray-200 rounded-lg transition">FAQ's</Link>
      <Link to="/signup" className="px-4 py-2 font-semibold hover:bg-gray-200 rounded-lg transition">Signup</Link>
      <Link to="/wallet" className="px-4 py-2 font-semibold hover:bg-gray-200 rounded-lg transition">Connect Wallet</Link>
    
    </div>
  )}
</div>

    </>
  )
}

export default Navbar