import { useState } from "react";
import { Search } from "../../components"
import DashboardPage from "./DashboardPage";
import ManageUsersPage from "./ManageUsersPage";
import ManageFAQPage from "./ManageFAQPage";
import AboutUsPage from "./AboutUsPage";


const Dashboard = () => {
    const [isRender, setIsRender] = useState("Dashboard");

    const renderItemComponent = () => {
      switch (isRender) {
        case "Dashboard":
          return <DashboardPage />;
        case "Manage User":
          return <ManageUsersPage/>;
          case "Transactions":
            return <ManageUsersPage/>;
        case "Manage FAQ's":
            return <ManageFAQPage/>;
        case "About Us":
            return <AboutUsPage />;
  
        default:
          return null;
      }
    };
  return (
    <div  className="px-24 bg-black min-h-screen ">
      <div>
        <Search />
      </div>

      <div className="flex flex-row space-x-5">
        <p className={`  px-10 py-3 rounded-lg font-semibold
        ${isRender === "Dashboard"
        ? "bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-white"
        : "bg-white text-slate-500"}`}
          onClick={() => setIsRender("Dashboard")}>Dashboard
          </p>

        <p className={`  px-10 py-3 rounded-lg font-semibold
        ${isRender === "Manage User"
        ? "bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-white "
        : "bg-white text-slate-500"}`}
          onClick={() => setIsRender("Manage User")}>Manage User</p>

        <p className={`  px-10 py-3 rounded-lg font-semibold
        ${isRender === "Transactions"
        ? "bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-white"
        : "bg-white text-slate-500"}`}
          onClick={() => setIsRender("Transactions")}>Transactions</p>

        <p  className={`  px-10 py-3 rounded-lg font-semibold
        ${isRender === "Manage FAQ's"
        ? "bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-white"
        : "bg-white text-slate-500"}`}
          onClick={() => setIsRender("Manage FAQ's")}>Manage FAQ's</p>

        <p className={`  px-10 py-3 rounded-lg font-semibold
        ${isRender === "About Us"
        ? "bg-gradient-to-r from-[#FF4B00] to-[#CFC800] text-white"
        : "bg-white text-slate-500"}`}
          onClick={() => setIsRender("About Us")}>About Us</p>
      </div>

      <div>{renderItemComponent()}</div>
    </div>
  )
}

export default Dashboard
