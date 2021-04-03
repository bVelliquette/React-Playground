import React, { SetStateAction, useState } from "react";
//TODO: Start Here
interface Props {
  setter: React.Dispatch<SetStateAction<number>>;
}
const Slider: React.FC<Props> = ({ setter }) => {
  return <div className="slider-container"></div>;
};

export default Slider;
