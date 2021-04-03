import { motion } from "framer-motion";
import React, { useContext } from "react";

const ProgressBar = ({
  progress,
  className,
  rotate = 0,
  initialFull = false,
  unchanging = false,
}: {
  progress: number;
  className: string;
  rotate?: number;
  initialFull?: boolean;
  unchanging?: boolean;
}) => {
  const z = 135;
  const pathVariants = {
    initial: initialFull
      ? { pathLength: 270 / 360, rotateZ: z }
      : { pathLength: 0, rotateZ: z },
    opened: unchanging
      ? {}
      : {
          pathLength: (progress * 3) / 400,
          rotateZ: z + rotate,
          transition: { duration: 2 },
        },
  };
  return (
    <>
      <motion.path
        className={className}
        variants={pathVariants}
        initial="initial"
        animate="opened"
        fill="transparent"
        stroke="black"
        d="M25,100A75,75 0 1 1175,100A75,75 0 1 125,100M100,100
        "
      />
    </>
  );
};

const CircleProgressBar = ({
  progress,
  potentialProgress,
  progressLabel = "",
  potentialProgressLabel = "",
}: {
  progress: number;
  potentialProgress: number;
  progressLabel?: string;
  potentialProgressLabel?: string;
}) => {
  return (
    <>
      <div className="circle-progress-container">
        <motion.svg className="circle-progress-svg" viewBox="0 0 200 200">
          <ProgressBar
            className="circle-progress-base"
            progress={40}
            rotate={2.7 * (progress + potentialProgress)}
            initialFull={true}
            unchanging={true}
          />
          <ProgressBar
            progress={potentialProgress}
            rotate={2.7 * progress}
            className="circle-progress-potential"
          />
          <ProgressBar
            progress={progress}
            rotate={0}
            className="circle-progress-meter"
          />
        </motion.svg>
        <div className="circle-progress-center-button-wrapper">
          <div className="circle-progress-center-button-container">
            {potentialProgressLabel !== "" && (
              <div className="circle-progress-center-button">
                <p className="circle-progress-center-button-text">
                  {potentialProgressLabel}
                </p>
              </div>
            )}
            {progressLabel !== "" && (
              <div className="circle-progress-center-button">
                <p className="circle-progress-center-button-text">
                  {progressLabel}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CircleProgressBar;
