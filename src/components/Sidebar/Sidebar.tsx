import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { SidebarContentData, QualityContentData } from "./SidebarContentData";

const Sidebar = () => {
  const [selectedPage, setSelectedPage] = useState("Authentication");

  return (
    <div className="hidden flex-col bg-[#081627] w-full h-full sm:flex ">
      <h1 className="wrapper text-2xl border-content w-full text-white ">
        Paperbase
      </h1>
      <div className="wrapper flex-content text-base text-gray-400 font-bold border-content">
        <AiFillHome />
        <p>Project Overview</p>
      </div>
      <div className="py-3 border-content">
        <h1 className="wrapper text-base text-white font-bold">Build</h1>
        <div>
          {SidebarContentData.map((item) => (
            <div
              key={item.title}
              className={`wrapper ${
                selectedPage === item.title ? "bg-blue-600" : null
              } hover:bg-blue-200   flex-content text-base text-gray-400 font-bold py-2`}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-3 border-content">
        <h1 className="wrapper text-base text-white font-bold">Quality</h1>
        <div>
          {QualityContentData.map((item) => (
            <div
              key={item.title}
              className={`wrapper ${
                selectedPage === item.title ? "bg-blue-400" : null
              } hover:bg-blue-200   flex-content text-base text-gray-400 font-bold py-2`}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
