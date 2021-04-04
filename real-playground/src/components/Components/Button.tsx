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
  const hoveredShift = 4;
  const slideDistance = 100;
  let tapped = false;
  const pressDistance = 5;

  return (
    <motion.div
      className={`button-container ${className}`}
      whileHover={{
        translateY: `${sidebarOpen ? -hoveredShift : 0}px`,
        translateX: `${sidebarOpen ? -hoveredShift : slideDistance}px`,
        transition: { duration: 0.1 },
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
