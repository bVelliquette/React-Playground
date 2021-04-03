import React, { useState } from "react";
import CircleProgress from "../Components/CircleProgressBar";
import Slider from "../Components/Slider";

const CPBDemo = () => {
  const [progress, setProgress] = useState<number>(10);
  const [potentialProgress, setpotentialProgress] = useState<number>(50);
  return (
    <div className="circle-progress-body">
      <Slider setter={setProgress} />
      <Slider setter={setpotentialProgress} />
      <CircleProgress
        progress={progress}
        potentialProgress={potentialProgress}
        progressLabel={`${(progress / 100) * 7.5} / 7.5`}
        potentialProgressLabel={`${
          ((progress + potentialProgress) / 100) * 7.5
        } / 7.5`}
      />
    </div>
  );
};

export default CPBDemo;
