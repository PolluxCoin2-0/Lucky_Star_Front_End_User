import UserImg from "../../assets/Group.png";
import UserGraphImg from "../../assets/UserGraph.png";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import DailyUserGraph from "../../assets/DailyUserGraph.png"
import BidGraph from "../../assets/BidGraph.png";
import BidImage from "../../assets/BidImg.png";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import LineChartComp from "../../components/LineChartComp";

const DashboardPage = () => {
    const [isShow, setIsShow] = useState(false);
    const toggleDropdown = () => {
        setIsShow(!isShow);
      };
    
  return (
    <div  className=" bg-black min-h-screen">

        <div className="flex flex-row mt-10 space-x-12">
            <div className="bg-white h-auto p-5 rounded-xl shadow-xl px-5">
                <div className="flex flex-row justify-between space-x-10 items-center">
                    <div>
                        <img src={UserImg} 
                        alt="user image" />
                        <p className="text-2xl font-semibold pt-2">100000</p>
                    </div>
                    <div>
                        <img src={UserGraphImg} alt="user graph" />
                    </div>
                </div>
                <p className="text-[#808080] font-semibold mt-2">Total User</p>
                <div className="flex flex-row mt-2" >
                    <p className="pt-1 text-[#2E8626]"><FaArrowUpLong  size={14}/></p>
                    <p> <span className="text-[#2E8626]  font-semibold">46%</span> <span className="text-[#B5B5B5]"> increase in today</span> </p>
                </div>
            </div>


            <div className="bg-white h-auto p-5 rounded-xl shadow-xl px-5">
                <div className="flex flex-row justify-between space-x-10 items-center">
                    <div>
                        <img src={UserImg} alt="daily user " />
                        <p className="text-2xl font-semibold pt-2">1000</p>
                    </div>
                    <div>
                        <img src={DailyUserGraph} alt="" />
                    </div>
                </div>

                <p  className="text-[#808080] font-semibold mt-2">Daily New User</p>
                <div className="flex flex-row mt-2">
                    <p  className="pt-1 text-[#2E8626]"><FaArrowUpLong   size={14}/></p>
                    <p> <span className="text-[#2E8626] font-semibold">16%</span> <span  className="text-[#B5B5B5]"> increase in today </span> </p>
                </div>
            </div>


            <div className="bg-white h-auto p-5 rounded-xl shadow-xl px-4">
                <div className="flex flex-row justify-between space-x-10 items-center">
                    <div>
                        <img src={BidImage} 
                        alt="user image" />
                        <p className="text-2xl font-semibold pt-2">100000</p>
                    </div>
                    <div>
                        <img src={BidGraph} alt="user graph" />
                    </div>
                </div>
                <p  className="text-[#808080] font-semibold mt-2">Total User</p>
                <div className="flex flex-row mt-2">
                    <p  className="pt-1 text-[#DC2430]"><FaArrowDownLong  size={14}/></p>
                    <p> <span className="text-[#DC2430]  font-semibold">46%</span> <span className="text-[#B5B5B5]">increase in today</span> </p>
                </div>
            </div>
        </div>

        {/* Graph  */}
        <div>
            <div className="flex flex-row relative justify-between mt-10">
                <p className="text-white text-2xl font-semibold">Total User</p>
                <div>
                <button
                type="button"
                className="inline-flex justify-center items-center px-8 rounded-xl py-2 bg-white text-md text-[#808080] font-medium text-light-gray hover:bg-gray-50 focus:outline-none focus:ring-2  focus:border-transparent"
                onClick={toggleDropdown}
              >
                Daily{" "}
                <HiOutlineChevronDown
                  className="-mr-1 ml-2 h-4 w-4"
                  aria-hidden="true"
                />
              </button>
                </div>

                {isShow && (
              <div
                className="origin-top-right absolute right-0 top-10 mt-2 w-40 rounded-md shadow-lg
               bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Daily
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Weekly
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Monthly
                  </a>
                </div>
              </div>
            )}
            </div>


            <div className="bg-white rounded-xl shadow-xl mt-6 h-[610px] w-full">
                <div className=" flex items-center px-16 py-10 h-[600px] pt-16">
                <LineChartComp />
                </div>
1           
            </div>
        </div>
      
    </div>
  )
}

export default DashboardPage
