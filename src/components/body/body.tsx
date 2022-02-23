import React, { FC } from "react";
import "./Body.css";
export interface IAppProps {}

const Body: FC = (props: IAppProps) => {
  return (
    <div className="container">
      <div className="timer-types">
        <button className="pomodoro">Pomodoro</button>
        <button className="shortBreak">Short Break</button>
        <button className="longBreak">Long Break</button>
      </div>
      <div className="timer-area"><div className='timer'>00:00</div></div>
      <div className="controlButtons">
        <button className="start">Start</button>
        <button className="stop">Stop</button>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
};

export default Body;
