import { useState } from "react";
import { AiOutlineSearch, AiOutlineReload } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../../components/Sidebar/Sidebar";

const Authentication = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tabData, setTabData] = useState([
    { id: 1, title: "Users", selected: false },
    { id: 2, title: "Sign-in method", selected: false },
    { id: 3, title: "Templates", selected: false },
    { id: 4, title: "Usage", selected: false },
  ]);

  const changeTabData = (item: any) => {
    const newTabData = tabData.map((data) =>
      data.id === item.id
        ? { ...data, selected: true }
        : { ...data, selected: false }
    );
    setTabData(newTabData);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="wrapper pb-0 bg-[#009be5] w-full h-40 flex flex-col justify-between">
        <div className="flex justify-between sm:justify-end items-center">
          <div
            className={`flex sm:hidden fixed top-0 z-50 w-screen duration-200 ease-in-out ${
              isSidebarOpen ? "left-0" : "-left-full"
            }`}
          >
            <div className="min-w-[256px] h-screen z-30">
              <Sidebar />
            </div>
            <div
              className={`w-full h-screen bg-black ease-in duration-200 fixed top-0 left-0 z-10 ${
                isSidebarOpen ? "flex opacity-50" : "hidden opacity-0"
              }`}
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          </div>

          <div
            className="sm:hidden text-white cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            <GiHamburgerMenu size="25px" />
          </div>
          <div className="flex space-x-4 items-center">
            <div>
              <p className="text-[#ffffffb2] text-base">Go to docs</p>
            </div>
            <div className="text-white">
              <IoMdNotifications size="25px" />
            </div>
            <div className="rounded-full bg-user-profile w-8 h-8 bg-no-repeat bg-cover bg-center"></div>
          </div>
        </div>
        <div className="flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">Authentication</h1>
          <div className="flex space-x-4 items-center">
            <button className="text-sm border px-2 py-1 rounded-lg font-bold">
              Web setup
            </button>
            <IoMdNotifications size="25px" />
          </div>
        </div>
        <div className="flex list-none text-base font-bold space-x-9">
          {tabData.map((item) => (
            <li
              key={item.id}
              onClick={() => changeTabData(item)}
              className={`pb-4 cursor-pointer ${
                item.selected
                  ? "border-b-2 border-white text-white"
                  : "text-[#ffffffb2]"
              }`}
            >
              {item.title}
            </li>
          ))}
        </div>
      </div>
      <div className="bg-[#eaeff1] flex-1 flex justify-center">
        <div className="wrapper w-full overflow-hidden drop-shadow-md ">
          <div className="w-[90%] mx-auto h-40 rounded-md overflow-hidden mt-7 ">
            <div className="bg-gray-200 h-[30%] flex px-8 py-3 items-center space-x-5">
              <div>
                <AiOutlineSearch size="25px" />
              </div>
              <input
                placeholder="Search by email address, phone number, or user UID"
                className="bg-transparent text-sm w-3/4 h-full outline-none shrink "
              />
              <div>
                <button className="text-sm w-28 text-white font-bold bg-blue-500 px-4 py-2 rounded-md ">
                  Add user
                </button>
              </div>
              <div>
                <AiOutlineReload size="25px" />
              </div>
            </div>
            <div className="bg-white h-[70%] flex items-center justify-center text-gray-500 ">
              No users for this project yet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
