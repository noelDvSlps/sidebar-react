import { FaBars } from "react-icons/fa";
import { useSidebar } from "../providers/sidebarProvider";
import { useEffect } from "react";

export const Bars = () => {
  const { toggle } = useSidebar();
  useEffect(() => {}, []);

  return (
    <FaBars
      //   style={{
      //     marginLeft: isOpen ? "50px" : "0px",
      //   }}
      onClick={toggle}
    />
  );
};
