import Pagination from "../../components/Pagination";
import { ManageUserData } from "../../data/ManageUserData";

const ManageUsersPage = () => {
  return (
    <div className="pb-12">
      <div className="flex flex-row justify-around items-center w-full p-5 bg-[#FFBE2E] rounded-t-xl mt-10">
        <p className="text-black text-lg font-bold w-[20%]  text-center   ">#</p>
        <p className="text-black text-lg font-bold  w-[20%] text-center ">Phone Number</p>
        <p className="text-black text-lg font-bold  w-[20%] text-center ">Email</p>
        <p className="text-black text-lg font-bold  w-[20%] text-center  ">Action</p>
        <p className="text-black text-lg font-bold  w-[20%] text-center   ">Account Status</p>
      </div>

      {ManageUserData.map((data, index) => {
        return (
          <div
            key={index}
            className={`flex flex-row justify-around items-center p-5  ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <p className="text-black w-[20%] text-center  ">{data?.SNo}</p>
            <p className="text-black  w-[20%] text-center ">{data?.PhoneNumber}</p>
            <p className="text-black  w-[20%] text-center  ">{data?.Email}</p>
            <p className="text-black  w-[20%] text-center  ">{data?.Action}</p>
            <p className="text-black w-[20%] text-center ">{data?.AccountStatus}</p>
          </div>
        );
      })}

      <div className="bg-white rounded-b-xl">
        <Pagination />
      </div>
    </div>
  );
};

export default ManageUsersPage;
