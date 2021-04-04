import { EventInfo, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

interface Props {
  route: string;
  label: string;
  className?: string;
  sidebarOpen: boolean;
}

const Button: React.FC<Props> = ({ route, label, className, sidebarOpen }) => {
  const [sweetNum, setSweetNum] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  const hoveredShift = 4;
  const slideDistance = 100;
  let tapped = false;
  const pressDistance = 5;

  return (
    <motion.div
      className={`button-container ${className}`}
      onHoverStart={(event, info) => {
        setSweetNum(100);
        setHovered(true);
      }}
      onHoverEnd={(event, info) => {
        setSweetNum(0);
        setHovered(false);
      }}
      whileTap={{
        translateY: "-1px",
        translateX: "-1px",
        transition: { duration: 0.1 },
      }}
      initial={{
        right: 0,
      }}
      animate={{
        translateX: `${
          (sidebarOpen ? 0 : 1) * (hovered ? 1 : 0) * slideDistance +
          (hovered ? 1 : 0) * -hoveredShift
        }px`,
        translateY: `${
          (sidebarOpen ? 1 : 0) * (hovered ? -hoveredShift : 0)
        }px`,
        transition: sidebarOpen
          ? {
              duration: 0.1,
            }
          : {
              type: "spring",
              stiffness: 200,
              damping: 50,
            },
      }}
    >
      <Link to={route}>
        <button className="button-content">
          <p className="button-text">{label}</p>
        </button>
      </Link>
    </motion.div>
  );
};

export default Button;
