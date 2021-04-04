import { motion } from "framer-motion";
import React, { SetStateAction, useRef, useState } from "react";
//TODO: Start Here
interface Props {
  setter: React.Dispatch<SetStateAction<number>>;
}
const Slider: React.FC<Props> = ({ setter }) => {
  const constraintsRef = useRef(null);
  return (
    <div className="slider-container">
      <motion.div className="slider-track" ref={constraintsRef}>
        <motion.div
          className="slider-knob"
          drag="x"
          dragElastic={0}
          dragConstraints={constraintsRef}
          onDragEnd={(event, info) => {
            //console.log(constraintsRef)
            // console.log("delta", info.delta);
            //console.log("point", info.point);
            //console.log("offset", info.offset);
            //console.log("event", event.);
            //console.log("velocity", info.velocity);
          }}
        />
      </motion.div>
    </div>
  );
};

export default Slider;
