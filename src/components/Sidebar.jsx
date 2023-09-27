/* eslint-disable react/prop-types */
import { FaBars, FaRegChartBar, FaTh, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useState } from "react";
export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/",
      name: "dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "about",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "analytics",
      icon: <FaRegChartBar />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className={"link"}>
            <div className="icon">{item.icon}</div>
            <div
              style={{
                display: isOpen ? "block" : "none",
                transition: "all 0.5s",
              }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};
