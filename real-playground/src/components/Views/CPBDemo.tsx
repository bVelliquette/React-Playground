import React, { useState } from "react";
import CircleProgress from "../Components/CircleProgressBar";
import Slider from "../Components/Slider";
import _ from "lodash";

const CPBDemo = () => {
  const [progress, setProgress] = useState<number>(10);
  const [potentialProgress, setpotentialProgress] = useState<number>(50);

  const [progressField, setProgressField] = useState(progress);
  const [potentialProgressField, setPotentialProgressField] = useState(
    potentialProgress
  );

  const onNumberUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
    barSetter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter(parseInt(e.target.value));
    adjustBars(e, barSetter);
  };

  const adjustBars = _.debounce(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
      setter(parseInt(e.target.value));
    },
    400
  );

  return (
    <div className="circle-progress-body">
      <Slider setter={setProgress} />
      <Slider setter={setpotentialProgress} />
      <form className="circle-progress-form">
        <label htmlFor="progress">Progress</label>
        <input
          type="number"
          name="progress"
          id="Progress"
          placeholder="Current Progress Percentage"
          value={progressField}
          onChange={(e) => onNumberUpdate(e, setProgressField, setProgress)}
        />
        <label htmlFor="potential-progress">Potential Progress</label>
        <input
          type="number"
          placeholder="Potential Progress Percentage"
          name="potential-progress"
          id="PotentialProgress"
          value={potentialProgressField}
          onChange={(e) =>
            onNumberUpdate(e, setPotentialProgressField, setpotentialProgress)
          }
        />
      </form>
      <CircleProgress
        progress={progress}
        potentialProgress={potentialProgress}
        progressLabel={`${((progress | 0) / 100) * 7.5} / 7.5`}
        potentialProgressLabel={`${
          ((progress | (0 + potentialProgress) | 0) / 100) * 7.5
        } / 7.5`}
      />
    </div>
  );
};

export default CPBDemo;
