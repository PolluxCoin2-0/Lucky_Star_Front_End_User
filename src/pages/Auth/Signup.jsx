import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Logo from "../../assets/logo_lucky.png";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Signup = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="bg-gradient-to-r from-[#58A0A6] to-[#C89D42] text-white flex justify-center items-center min-h-screen">
      <div className="bg-black px-8 pt-4 pb-12 rounded-3xl w-[30%]">
        <div className="flex justify-end cursor-pointer">
          <RxCross2 color="white" size={20} />
        </div>
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="lucky-star-logo"
            className="w-[214.35px] h-[116.27px]"
          />
        </div>
        <p className="font-bold text-2xl mb-8">Signup</p>

        {/* Email */}
        <div className="relative w-full mb-6">
          <input
            type="Email"
            id="input"
            className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm
            placeholder:text-white placeholder:text-opacity-40"
            placeholder="xyz@gmail.com"
            required
          />
          <label
            htmlFor="input"
            className="absolute top-0 left-3 px-4 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3
        scale-75 origin-top-left text-white"
          >
            Email
          </label>
        </div>

        {/* Phone Number */}
        <div className="relative w-full mb-6">
          <PhoneInput country="US" value={phone} onChange={setPhone} />
        </div>

        {/* City and Country */}
        <div className="flex items-center justify-between space-x-4 mb-6">
          {/* City Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              id="input"
              className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm
              placeholder:text-white placeholder:text-opacity-40"
              placeholder="New york"
              required
            />
            <label
              htmlFor="input"
              className="absolute top-0 left-3 px-2 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3
        scale-75 origin-top-left text-white"
            >
              City
            </label>
          </div>

          {/* Country/State Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              id="input"
              className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm
              placeholder:text-white placeholder:text-opacity-40"
              placeholder="USA"
              required
            />
            <label
              htmlFor="input"
              className="absolute top-0 left-3 px-2 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3
        scale-75 origin-top-left text-white"
            >
              Country/State
            </label>
          </div>
        </div>

        {/* Pincode and Referral */}
        <div className="flex items-center justify-between space-x-4 mb-6">
          {/* Pincode Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              id="input"
              className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm placeholder:text-white placeholder:text-opacity-40"
              placeholder="214578"
              required
            />
            <label
              htmlFor="input"
              className="absolute top-0 left-3 px-2 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3
        scale-75 origin-top-left text-white"
            >
              Pincode
            </label>
          </div>

          {/* Referral Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              id="input"
              className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm placeholder:text-white placeholder:text-opacity-40"
              placeholder="LUCKY123"
              required
            />
            <label
              htmlFor="input"
              className="absolute top-0 left-3 px-2 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3 
        scale-75 origin-top-left text-white"
            >
              Referral
            </label>
          </div>
        </div>

        {/* Wallet Address */}
        <div className="relative w-full mb-6">
          <input
            type="text"
            id="input"
            className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm placeholder:text-white placeholder:text-opacity-40"
            placeholder="PR58ATVJNmiGkG9KKEiiUcfdrytryrtytyu"
            required
          />
          <label
            htmlFor="input"
            className="absolute top-0 left-3 px-2 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3
        scale-75 origin-top-left text-white"
          >
            Email
          </label>
        </div>

        {/* Button */}
        <button
          type="button"
          className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none mb-6"
        >
          Register
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/wallet">
            <span className="cursor-pointer underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
