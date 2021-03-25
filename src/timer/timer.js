import React, { useState, useEffect } from 'react';
import './timer.css'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minute , setminute] = useState(0);
  const [hour,setHour] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [show ,setShow] = useState(false);
  const [time , setTime] = useState(['', ''])
  
  function toggle() {
    setShow(true)
    setIsActive(!isActive);
  }

  useEffect(()=>{
    if(time[0]===''){
      const temp = [...time]
      temp[0] = new Date().toLocaleTimeString()
      setTime(temp)
    }
  },[])

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      },1000);
      if(seconds===60){
        setminute(minute+1)
        setSeconds(0)
      }
      if(minute===60){
        setHour(hour=>hour+1);
        setminute(0)
      }
      
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
      const temp = [...time]
      temp[1] = new Date().toLocaleTimeString()
      setTime(temp)
    }
    return () => clearInterval(interval);
  }
  , [isActive, seconds]);
  
  return (
    <div className="timerDiv">
      <div className = "startstopDiv">
          <button className="Start" onClick={toggle}>{!isActive?"Start":"Stop"}</button>
          {time[1]!==''?<p className="showTime">{time[0]} to {time[1]}</p>:null}
      </div>
          <div>{show?<p className="time">{hour+':'+minute+':'+seconds}</p>:null}</div>
    </div>
  );
};

export default Timer;