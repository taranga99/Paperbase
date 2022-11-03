import { AiFillHome, AiFillDatabase } from "react-icons/ai";
import { BsFillImageFill, BsPhone } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { SiAzurefunctions } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";

export const SidebarContentData = [
  {
    icon: <AiFillHome />,
    title: "Authentication",
  },
  {
    icon: <AiFillDatabase />,
    title: "Database",
  },
  {
    icon: <BsFillImageFill />,
    title: "Storage",
  },
  {
    icon: <GiEarthAmerica />,
    title: "Hosting",
  },
  {
    icon: <SiAzurefunctions />,
    title: "Functions",
  },
  {
    icon: <FaNetworkWired />,
    title: "Machine leaning",
  },
];

export const QualityContentData = [
  {
    icon: <IoIosSettings />,
    title: "Analytics",
  },
  {
    icon: <MdOutlineTimer />,
    title: "Performance",
  },
  {
    icon: <BsPhone />,
    title: "Test Lab",
  },
];
