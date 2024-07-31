import Logo from "../../assets/logo_lucky.png";
import { connectWallet } from "../../utils/Axios";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();

   // Connect polink wallet
async function getPolinkweb() {
  return new Promise((resolve, reject) => {
    const obj = setInterval(async () => {
      if (window.pox) {
        clearInterval(obj);
        try {
          const detailsData = JSON.stringify(await window.pox.getDetails());
          const parsedDetailsObject = JSON.parse(detailsData);
          sessionStorage.setItem("balanceUSDX",parsedDetailsObject[1]?.data?.USDX)
          sessionStorage.setItem("walletAddress",parsedDetailsObject[1]?.data?.wallet_address)
          resolve(parsedDetailsObject[1]?.data?.wallet_address);
        } catch (error) {
          reject(error);
        }
      }
    }, 1000);
  });
}

const handleLogin = async () => {
  try {
    const walletAddress = await getPolinkweb();
    if (walletAddress) {
      const apiData = await connectWallet(walletAddress);
      if(apiData?.statusCode==200){
        sessionStorage.setItem("token", apiData?.data?.token);
        navigate("/")
      }
      console.log(apiData);
    } else {
      console.error("Failed to get wallet address");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

  return (
    <div className="bg-gradient-to-r from-[#58A0A6] to-[#C89D42] text-white flex justify-center items-center min-h-screen">
      <div className="bg-black px-8 pt-4 pb-12 rounded-3xl w-[90%]  md:w-[60%] lg:w-[50%] xl:w-[30%] 2xl:w-[30%]">
       
        <div className="flex justify-center my-6">
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
          onClick={handleLogin}
          className="bg-gradient-to-r from-[#FF4B00] to-[#CFC800] py-3 px-4 w-full text-center font-bold rounded-lg text-white focus:outline-none mt-8"
        >
          Connect wallet
        </button>
      </div>
    </div>
  );
};

export default Wallet;
