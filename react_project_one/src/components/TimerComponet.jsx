import React, { useEffect, useState } from 'react'

const TimerComponet = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{

        const inetrvalId = setInterval(()=>{
            console.log("set interval started");
            setSeconds(prevSeconds => prevSeconds+1);
        },1000);
        return()=>{
            console.log("time to stop")
            clearInterval(inetrvalId);
        };
    },[]);
    //it means ,it will only on first render
  return (
    <div>
        <h1>
           Seconds:{seconds}
        </h1>
    </div>
  )
}

export default TimerComponet