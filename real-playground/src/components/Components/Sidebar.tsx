import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";
import { BsChevronRight } from "react-icons/bs";

const Sidebar = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const closedWidth = 2.5;
  const openWidth = 12;
  const sidebarVariants = {
    body: {
      closed: {
        width: `${closedWidth}rem`,
        transition: {},
      },
      opened: {
        width: `${openWidth}rem`,
        transition: {},
      },
    },
    toggle: {
      closed: {
        left: `${closedWidth}rem`,
        transition: {},
      },
      opened: {
        left: `${0.21}rem`,
        width: `${openWidth - 0.8}rem`,
        transition: {},
      },
    },
    toggleChevron: {
      closed: {
        rotateZ: 0,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
      opened: {
        rotateZ: -180,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    },
    container: {
      closed: {
        transition: {},
      },
      opened: {
        transition: {},
      },
    },
  };
  return (
    <>
      <div className="content">
        <motion.button
          variants={sidebarVariants.toggle}
          initial="closed"
          animate={`${sidebarActive ? "opened" : "closed"}`}
          className="content-sidebar-toggle"
          onClick={() => {
            setSidebarActive(!sidebarActive);
          }}
        >
          <motion.div
            variants={sidebarVariants.toggleChevron}
            initial="closed"
            animate={`${sidebarActive ? "opened" : "closed"}`}
            className="content-sidebar-toggle-chevron--right"
          >
            <BsChevronRight />
          </motion.div>
          <motion.div
            variants={sidebarVariants.toggleChevron}
            initial="closed"
            animate={`${sidebarActive ? "opened" : "closed"}`}
            className="content-sidebar-toggle-chevron--left"
          >
            <BsChevronRight />
          </motion.div>
          Sidebar
        </motion.button>
        <motion.div
          variants={sidebarVariants.body}
          initial="closed"
          animate={`${sidebarActive ? "opened" : "closed"}`}
          className="content-sidebar"
        >
          <div className="content-sidebar-header" />
          <motion.div
            className="content-sidebar-button-container"
            variants={sidebarVariants.container}
            initial="closed"
            animate={`${sidebarActive ? "opened" : "closed"}`}
          >
            <Button
              className="content-sidebar-button"
              route="/CPB"
              label="CPB"
              sidebarOpen={sidebarActive}
            />
            <Button
              sidebarOpen={sidebarActive}
              className="content-sidebar-button"
              route="/"
              label="HOME"
            />
          </motion.div>
        </motion.div>
        <div className="content-main">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
