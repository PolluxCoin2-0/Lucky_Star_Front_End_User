import { useState } from "react";
import Logo from "../../assets/logo_lucky.png";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { postSignup } from "../../utils/Axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setEmail } from "../../redux/slice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    countryCode: "",
    city: "",
    state: "",
    zipCode: "",
    referral: "",
    walletAddress: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePhoneChange = (value, data) => {
    setFormData({
      ...formData,
      phone: value,
      countryCode: data.countryCode ? `+${data.dialCode}` : ""
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   const apiData = await postSignup(formData);
   if(apiData?.data==="Invalid Referral Code"){
    return toast.error(`Invalid Referral Code`);
   } else if(apiData?.data==="WalletAddress Already Exist"){
    return toast.error(`WalletAddress Already Exist`); 
   }  else if(apiData?.statusCode===200){
    dispatch(setEmail(formData.email))
    toast.success("OTP sent successfully")
     navigate("/otp");
   }
  };

  return (
    <div className="bg-gradient-to-r from-[#58A0A6] to-[#C89D42] text-white flex justify-center items-center min-h-screen">
      <div className="bg-black px-8 pt-4 pb-12 rounded-3xl w-[90%]  md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[30%]
      my-0 md:my-12 lg:my-12 xl:my-12 2xl:my-0">
        <div className="flex justify-center my-6">
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
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm
            placeholder:text-white placeholder:text-opacity-40"
            placeholder="xyz@gmail.com"
            required
          />
          <label
            htmlFor="email"
            className="absolute top-0 left-3 px-4 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3
        scale-75 origin-top-left text-white"
          >
            Email
          </label>
        </div>

        {/* Phone Number */}
        <div className="relative w-full mb-6">
        <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={handlePhoneChange}
          />
        </div>

        {/* City and Country */}
        <div className="flex items-center justify-between space-x-4 mb-6">
          {/* City Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm
              placeholder:text-white placeholder:text-opacity-40"
              placeholder="New york"
              required
            />
            <label
               htmlFor="city"
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
           id="state"
           value={formData.country}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm
              placeholder:text-white placeholder:text-opacity-40"
              placeholder="USA"
              required
            />
            <label
                   htmlFor="state"
              className="absolute top-0 left-3 px-2 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3
        scale-75 origin-top-left text-white"
            >
              State
            </label>
          </div>
        </div>

        {/* Pincode and Referral */}
        <div className="flex items-center justify-between space-x-4 mb-6">
          {/* Pincode Input */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              id="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm placeholder:text-white placeholder:text-opacity-40"
              placeholder="214578"
              required
            />
            <label
              htmlFor="zipCode"
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
              id="referral"
              value={formData.referral}
              onChange={handleChange}
              className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-xs placeholder:text-white placeholder:text-opacity-40"
              placeholder="LUCKY (OPTIONAL)"
              required
            />
            <label
                    htmlFor="referral"
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
            id="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            className="block w-full px-4 py-3 bg-black border border-white border-opacity-30 focus:border-opacity-100 rounded-lg text-white focus:outline-none placeholder:text-sm placeholder:text-white placeholder:text-opacity-40"
            placeholder="PR58ATVJNmiGkG9KKEiiUcfdrytryrtytyu"
            required
          />
          <label
            htmlFor="walletAddress"
            className="absolute top-0 left-3 px-2 py-1 font-semibold text-base tracking-wider bg-black inline-block  transition-all duration-300 transform -translate-y-3
        scale-75 origin-top-left text-white"
          >
           Wallet Address
          </label>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none mb-6"
        >
          Register
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/wallet">
            <span className="cursor-pointer underline text-yellow-500">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
