import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaDatabase,
  FaCog,
  FaBars,
  FaChartLine,
  FaTools,
  FaProjectDiagram,
  FaFileAlt,
  FaAward,
  FaGlobe,
} from "react-icons/fa";
import { ReactComponent as MongoLeaf } from "../assets/mongo-leaf.svg";
import { useTheme } from '../App';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useTheme();

  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      if (location.pathname === "/admin/cv") {
        setActiveItem("CV");
      } else if (location.pathname === "/admin/certificates") {
        setActiveItem("Certificates");
      } else if (location.pathname === "/admin/social-media") {
        setActiveItem("Social Media");
      } else {
        setActiveItem("Admin");
      }
      setIsDropdownOpen(true);
    } else if (location.pathname === "/databases") {
      setActiveItem("Databases");
    } else if (location.pathname === "/performance") {
      setActiveItem("Performance");
    } else if (location.pathname === "/skills") {
      setActiveItem("Skills");
    } else if (location.pathname === "/projects") {
      setActiveItem("Projects");
    } else if (location.pathname === "/settings") {
      setActiveItem("Settings");
    }
  }, [location]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsDropdownOpen(false); 
    }
  };

  const handleItemClick = (item, path) => {
    if (item === "Admin") {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setActiveItem(item);
      setIsDropdownOpen(false);
      navigate(path);
    }
  };

  const handleDropdownItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  const navItemClasses = (item) =>
    `flex items-center ${isOpen ? 'justify-start' : 'justify-center'} p-2 rounded-md cursor-pointer ${
      activeItem === item
        ? darkMode
          ? "bg-[#051E2C] text-[#4CAF50]"
          : "bg-[#E3FCF7] text-[#1D684A]"
        : darkMode
          ? "bg-[#112733] text-white hover:bg-[#1C3A4B] hover:text-white"
          : "bg-[#F9FBFA] text-[#1c2d39] hover:bg-[#efefef] hover:text-[#1D684A]"
    } ${isOpen ? 'text-base' : 'text-lg'}`;


  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } ${darkMode ? 'bg-[#112733]' : 'bg-[#F9FBFA]'} h-screen transition-width duration-300`}
    >
      <div className="flex justify-between items-center bg-[#1d684a] h-16">
        <div className={`flex items-center ${isOpen ? 'justify-start' : 'justify-center'} ml-2`}>
          <MongoLeaf className={`${isOpen ? 'w-8 h-8' : 'w-12 h-12'} transition-all duration-300`} />
          <h1 className={`text-white text-xl font-bold ml-2 ${isOpen ? "block" : "hidden"}`}>
            ReddyDB
          </h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none mr-4"
        >
          <FaBars />
        </button>
      </div>
      <nav className="mt-4">
        <ul>
          <li
            className={navItemClasses("Databases")}
            onClick={() => handleItemClick("Databases", "/databases")}
          >
            <FaDatabase className={`mr-2 ${!isOpen && 'text-xl'}`} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Databases</span>
          </li>
          <li
            className={navItemClasses("Performance")}
            onClick={() => handleItemClick("Performance", "/performance")}
          >
            <FaChartLine className={`mr-2 ${!isOpen && 'text-xl'}`} />
            <span className={`${isOpen ? "block" : "hidden"}`}>
              Performance
            </span>
          </li>

          <li
            className={navItemClasses("Admin")}
            onClick={() => handleItemClick("Admin")}
          >
            <span
              className={`${
                isOpen && !isDropdownOpen ? "block" : "hidden"
              } mr-2 text-sm`}
            >
              ▼
            </span>
            <span
              className={`${
                isOpen && isDropdownOpen ? "block" : "hidden"
              } mr-2 text-sm`}
            >
              ►
            </span>
            <span className={`${isOpen ? "block" : "hidden"}`}>Admin</span>
          </li>

          {isDropdownOpen && (
            <ul className={`pl-8 ${!isOpen && "hidden"}`}>
              <li
                className={navItemClasses("CV")}
                onClick={() => handleDropdownItemClick("CV", "/admin/cv")}
              >
                <FaFileAlt className="mr-2" />
                <span className={`${isOpen ? "block" : "hidden"}`}>CV</span>
              </li>
              <li
                className={navItemClasses("Certificates")}
                onClick={() => handleDropdownItemClick("Certificates", "/admin/certificates")}
              >
                <FaAward className="mr-2" />
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  Certificates
                </span>
              </li>
              <li
                className={navItemClasses("Social Media")}
                onClick={() => handleDropdownItemClick("Social Media", "/admin/social-media")}
              >
                <FaGlobe className="mr-2" />
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  Social Media
                </span>
              </li>
            </ul>
          )}

          <li
            className={navItemClasses("Skills")}
            onClick={() => handleItemClick("Skills", "/skills")}
          >
            <FaTools className={`mr-2 ${!isOpen && 'text-xl'}`} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Skills</span>
          </li>
          <li
            className={navItemClasses("Projects")}
            onClick={() => handleItemClick("Projects", "/projects")}
          >
            <FaProjectDiagram className={`mr-2 ${!isOpen && 'text-xl'}`} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Projects</span>
          </li>
          <li
            className={navItemClasses("Settings")}
            onClick={() => handleItemClick("Settings", "/settings")}
          >
            <FaCog className={`mr-2 ${!isOpen && 'text-xl'}`} />
            <span className={`${isOpen ? "block" : "hidden"}`}>Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
