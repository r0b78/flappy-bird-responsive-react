import React, { useEffect, useState } from 'react';
import './styles.css'
const TimerCountdown = (props) => {
  const [secondsCounter, setsecondsCounter] = useState(props.startTime);
  const [showCounter, setShowCounter] = useState(true);

  const setTime = () => {
    console.log(secondsCounter)
      if(secondsCounter > 1) {
        setsecondsCounter(secondsCounter=> secondsCounter-1);
      }
      else {
        setShowCounter(false);
        setsecondsCounter(0);
      }
  }
  useEffect(() => {
   
    const interval = setInterval(() => {
      setTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsCounter]);

  
  return (
    <div>
      {showCounter && <label
        id="seconds"
        className="seconds"
      >
        {secondsCounter}
      </label>
      }
    </div>
  );
}

export default TimerCountdown;