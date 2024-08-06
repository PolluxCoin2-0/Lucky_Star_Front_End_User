import Logo from "../../assets/logo_lucky.png";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { verifyOtp } from "../../utils/Axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setSignup } from "../../redux/slice";

const OTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const userEmail = useSelector((state)=>state.wallet.email);
  const isUserSignUp = useSelector((state)=>state.wallet.signup);

  const handleVerifyOtp = async()=> {
    const apiData = await verifyOtp(userEmail,otp);
    if(apiData?.statusCode===200){
      dispatch(setSignup(!isUserSignUp));
      toast.success("OTP verified successfully")
       navigate("/wallet");
    }else{
      return toast.error("Invalid OTP")
    }
  }

  return (
    <div className="bg-gradient-to-r from-[#58A0A6] to-[#C89D42] text-white flex justify-center items-center min-h-screen">
      <div className="bg-black px-8 pt-4 pb-12 rounded-3xl w-[90%]  md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[30%]
      my-0 md:my-12 lg:my-0 xl:my-0 2xl:my-0">
        <div className="flex justify-center my-6">
          <img
            src={Logo}
            alt="lucky-star-logo"
            className="w-[214.35px] h-[116.27px]"
          />
        </div>
        <p className="font-bold text-2xl mb-8 text-center">Enter Code</p>

        <div className="flex justify-center mb-6">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              borderRadius: "8px",
              padding: "4px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              width: "50px",
              height: "50px",
              margin: "0 4px",
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
            }}
          />
        </div>

        <p className="text-center leading-7">
          A one time authentication code has been{" "}
        </p>
        <p className="text-center">sent to ******@gmail.com. </p>

        {/* Button */}
        <button
          type="button"
          onClick={handleVerifyOtp}
          className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none mt-8"
        >
          Verify
        </button>

        <p className="text-center mt-6">
          Expires in 9:57.{"  "}
          <span className="cursor-pointer text-[#FFB800] font-semibold">
            Resend code
          </span>
        </p>
      </div>
    </div>
  );
};

export default OTP;
