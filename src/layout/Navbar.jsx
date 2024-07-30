import { Link } from "react-router-dom";
import Logo from "../assets/logo_lucky.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    {/* For md, xl, 2xl Navbar */}
    <div className="bg-black py-2 flex flex-row items-center justify-between px-4 lg:px-24">
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
    
    </>
  )
}

export default Navbar