import { Search, UserTable } from "../../components";

const Winner = () => {
  return (
    <div className="bgimage bg-black min-h-screen px-4 lg:px-24 text-white">
      <Search />
      <p className="text-2xl font-semibold">Today's Winners</p>
   <UserTable/>
    </div>
  );
};

export default Winner;
