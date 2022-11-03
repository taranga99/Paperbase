import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";

const Authentication = () => {
  const [selectedLink, setSelectedLink] = useState("users");

  return (
    <div className="w-full h-full">
      <div className="bg-green-700 h-[23.9%]">
        <div className="wrapper pb-0 bg-[#009be5] space-y-4">
          <div className="flex justify-end space-x-4 items-center">
            <div>
              <p className="text-[#ffffffb2] text-base">Go to docs</p>
            </div>
            <div className="text-white">
              <IoMdNotifications size="25px" />
            </div>
            <div className="rounded-full bg-user-profile w-8 h-8 bg-no-repeat bg-cover bg-center"></div>
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
            <li
              onClick={() => setSelectedLink("users")}
              className={`pb-4 cursor-pointer ${
                selectedLink === "users"
                  ? "border-b-2 border-white text-white"
                  : "text-[#ffffffb2]"
              }`}
            >
              Users
            </li>
            <li
              onClick={() => setSelectedLink("sign-in")}
              className={`pb-4 cursor-pointer ${
                selectedLink === "sign-in"
                  ? "border-b-2 border-white text-white"
                  : "text-[#ffffffb2]"
              }`}
            >
              Sign-in method
            </li>
            <li
              onClick={() => setSelectedLink("templates")}
              className={`pb-4 cursor-pointer ${
                selectedLink === "templates"
                  ? "border-b-2 border-white text-white"
                  : "text-[#ffffffb2]"
              }`}
            >
              Templates
            </li>
            <li
              onClick={() => setSelectedLink("usage")}
              className={`pb-4 cursor-pointer ${
                selectedLink === "usage"
                  ? "border-b-2 border-white text-white"
                  : "text-[#ffffffb2]"
              }`}
            >
              Usage
            </li>
          </div>
        </div>
      </div>
      <div className="bg-[#eaeff1] h-[76.1%] flex justify-center">
        <div className="wrapper w-full overflow-hidden drop-shadow-md">
          <div className="w-[90%] mx-auto h-40 rounded-md overflow-hidden mt-7">
            <div className="bg-gray-200 h-[30%] flex px-8 py-3 items-center justify-between">
              <IoMdNotifications size="25px" />
              <input
                placeholder="Search by email address, phone number, or user UID"
                className="bg-transparent text-sm w-3/4 h-full outline-none"
              />
              <button className="text-sm text-white font-bold bg-blue-500 px-4 py-2 rounded-md">
                Add user
              </button>
              <IoMdNotifications size="25px" />
            </div>
            <div className="bg-white h-[70%] flex items-center justify-center text-gray-500">
              No users for this project yet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
