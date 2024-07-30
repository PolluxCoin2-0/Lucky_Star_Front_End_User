import { RxCross2 } from "react-icons/rx";
import Logo from "../../assets/logo_lucky.png";

const Wallet = () => {
  return (
    <div className="bg-gradient-to-r from-[#58A0A6] to-[#C89D42] text-white flex justify-center items-center min-h-screen">
      <div className="bg-black px-8 pt-4 pb-12 rounded-3xl w-[90%]  md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[30%]">
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
        <p className="font-bold text-2xl mb-2 text-center">Login with wallet</p>

        {/* Button */}
        <button
          type="button"
          className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none mt-8"
        >
          Connect wallet
        </button>
      </div>
    </div>
  );
};

export default Wallet;
