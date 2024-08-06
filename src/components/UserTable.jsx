import { useState } from "react";
import Pagination from "./Pagination";

const data = Array(10).fill({
  code: "PR58ATVJNmiGkG9KshdfjhgshjdfhhjhcKVrBga45jrjk",
  value1: "8020",
  value2: "5 USDX",
  value3: "10 USDX",
});

const UserTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full bg-white mt-6 rounded-lg overflow-hidden">
      <div className="w-full overflow-x-auto">
        {/* Table Header */}
        <div className="w-full flex items-center justify-between text-black py-3 bg-gray-200">
          <p className="w-full sm:w-[50%] pl-8 font-semibold text-center sm:text-left">
            User Address
          </p>
          <p className="w-full sm:w-[50%] text-center font-semibold">
            Winning Amount
          </p>
        </div>

        {/* Table Data */}
        <div className="w-full text-black">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-full flex items-center justify-between py-3 ${
                index % 2 !== 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <p className="w-full sm:w-[50%] pl-8 text-center sm:text-left truncate">
                {item.code}
              </p>
              <p className="w-full sm:w-[50%] text-center">{item.value3}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Uncomment and adjust Pagination component as needed */}
      {/* <Pagination totalPages="10" onPageChange={handlePageChange} /> */}
    </div>
  );
};

export default UserTable;
