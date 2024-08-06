import { useSelector } from "react-redux";
import Search from "../../components/Search";
import UserTable from "../../components/UserTable";
import { useEffect } from "react";
import { getWinningBalance } from "../../utils/Axios";

const Balance = () => {
  const balanceUSDX = useSelector((state)=>state.wallet.balanceUSDX);
  const walletAddress = useSelector((state)=>state.wallet.address)
  const token = useSelector((state)=>state.wallet.token);

  useEffect(()=>{
    const fetchData = async()=>{
      const apiData = await getWinningBalance(walletAddress, token);
      console.log(apiData);
    }

    fetchData();
  },[])
  return (
    <div className="bgimage px-4 md:px-4 lg:px-4 xl:px-4 2xl:px-24 bg-black min-h-screen text-white pb-12">
      <Search />
      <p className="font-bold text-xl">Balance USDX</p>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start
       md:items-center lg:items-center xl:items-center 2xl:items-center
      space-x-0 md:space-x-12 lg:space-x-12 xl:space-x-12 2xl:space-x-12 bg-white pt-4 pb-6 
      px-6 rounded-xl mt-6 mb-8">
        <div className="flex flex-col">
          <label className="text-[#858484] font-semibold text-lg mb-2">
            Total Balance
          </label>
          <span
            className="bg-[#F3F3F3] border-2 border-[#DBDBDB] focus:outline-gray-400 rounded-md py-2 px-4 w-64 font-semibold text-gray-500"
            >
              {Number(balanceUSDX).toFixed(6)}
              </span>
        </div>

        <div className="flex flex-col">
          <label className="text-[#858484] font-semibold text-lg mb-2">
            Winning Balance
          </label>
          <span
            className="bg-[#F3F3F3] border-2 border-[#DBDBDB] focus:outline-gray-400 rounded-md py-2 px-4 w-64 font-semibold text-gray-500"
            
          >
                         {Number(balanceUSDX).toFixed(6)}
            </span>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-4">
        <button
          type="button"
          className="bg-[#FBBE2F] py-2 px-8 text-center whitespace-nowrap font-bold rounded-md text-black focus:outline-none"
        >
          My Winning Bids
        </button>

        
      </div>
      <UserTable />
    </div>
  );
};

export default Balance;
