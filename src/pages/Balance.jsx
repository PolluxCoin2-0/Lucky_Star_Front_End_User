import Search from "../components/Search";
import UserTable from "../components/UserTable";

const Balance = () => {
  const balanceUSDX = sessionStorage.getItem("balanceUSDX");
  return (
    <div className="bgimage px-24 bg-black min-h-screen text-white pb-12">
      <Search />
      <p className="font-bold text-xl">Balance USDX</p>
      <div className="flex flex-row items-center space-x-12 bg-white pt-4 pb-6 px-6 rounded-xl mt-6 mb-8">
        <div className="flex flex-col">
          <label className="text-[#858484] font-semibold text-lg mb-2">
            Total Balance
          </label>
          <span
            className="bg-[#F3F3F3] border-2 border-[#DBDBDB] focus:outline-gray-400 rounded-md py-2 px-4 w-64 font-semibold text-gray-500"
            placeholder="1020 USDX"
          >{balanceUSDX}</span>
        </div>

        <div className="flex flex-col">
          <label className="text-[#858484] font-semibold text-lg mb-2">
            Winning Balance
          </label>
          <span
            className="bg-[#F3F3F3] border-2 border-[#DBDBDB] focus:outline-gray-400 rounded-md py-2 px-4 w-64 font-semibold text-gray-500"
            placeholder="1020 USDX"
          >{balanceUSDX}</span>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-4">
        <button
          type="button"
          className="bg-[#FBBE2F] py-2 px-8 text-center whitespace-nowrap font-bold rounded-md text-black focus:outline-none"
        >
          All
        </button>

        <button
          type="button"
          className="bg-white py-2 px-6 text-center whitespace-nowrap font-bold rounded-xl text-black focus:outline-none"
        >
          Winning
        </button>

        <button
          type="button"
          className="bg-white py-2 px-6 text-center whitespace-nowrap font-bold rounded-xl text-black focus:outline-none"
        >
          Loose
        </button>
      </div>
      <UserTable />
    </div>
  );
};

export default Balance;
