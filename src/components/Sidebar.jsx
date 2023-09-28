/* eslint-disable react/prop-types */
import Background from "../assets/images/react.jpg";
import { FaComment, FaRegChartBar, FaTh, FaUserAlt } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useSidebar } from "../providers/sidebarProvider";
import { useEffect } from "react";
import { Bars } from "./Bars";
export const Sidebar = ({ children }) => {
  const { isOpen, setIsOpen, windowWidth, setWindowWidth } = useSidebar();

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
    {
      path: "/comment",
      name: "comment",
      icon: <FaComment />,
    },
    {
      path: "/product",
      name: "product",
      icon: <FaRegChartBar />,
    },
    {
      path: "/contact",
      name: "contact",
      icon: <MdOutlineContactMail />,
    },
  ];
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      // if (window.innerWidth > 767) {
      //   setIsOpen(false);
      // }
    }

    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="container">
      <div
        style={{
          width: windowWidth > 767 ? "100%" : isOpen ? "100%" : "45px",
          transition: "all 0.5s",
        }}
        className="sidebar"
      >
        <div className="top_section ">
          {(isOpen || windowWidth > 767) && <h1 className="logo">Logo</h1>}
          {windowWidth <= 767 && <Bars />}
        </div>
        <div className="link-container">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={"link"}
              onClick={() => setIsOpen(false)}
            >
              <div className="icon" style={{ fontSize: "20px" }}>
                {item.icon}
              </div>
              <div
                style={{
                  display:
                    windowWidth > 767 ? "block" : isOpen ? "block" : "none",
                  transition: "all 0.5s",
                }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      {!isOpen && (
        <main
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ flex: 1 }}>{children}</div>
        </main>
      )}
    </div>
  );
};
