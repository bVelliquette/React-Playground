import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./Button";

const Sidebar = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const closedWidth = 1.5;
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
        left: `${0.01}rem`,
        width: `${openWidth - 0.5}rem`,
        transition: {},
      },
    },
    container: {
      closed: {
        margin: ".5rem .1rem",
        transition: {},
      },
      opened: {
        margin: ".5rem 1rem",
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
            className="content-button-container"
            variants={sidebarVariants.container}
            initial="closed"
            animate={`${sidebarActive ? "opened" : "closed"}`}
          >
            <Button
              className="content-sidebar-button"
              route="/CPB"
              label="CPB"
            />
            <Button className="content-sidebar-button" route="/" label="HOME" />
          </motion.div>
        </motion.div>
        <div className="content-main">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
