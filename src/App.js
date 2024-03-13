import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BtnComponent from './component/BtnComponent';
import DisplayComponent from './component/DisplayComponent';


function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  var updatedMs = time.ms,
    updatedS = time.s,
    upadatedM = time.m,
    upadtedH = time.h;
  const run = () => {
    if (upadatedM === 60) {
      upadtedH++;
      upadatedM = 0;
    }
    if ( updatedS === 60) {
      upadatedM++;
      updatedS = 0;
    }
    if (updatedMs === 60) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: upadatedM, h: upadtedH });
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  const resume = () => start();
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
