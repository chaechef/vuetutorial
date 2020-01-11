import React, {useState, useEffect} from 'react';
import './styles.css'
import {NOW} from './DateFormat.js'

const CurrentTime = () => {
  const [date, dateSet] = useState(new Date())

  const tick = () => {
    dateSet(new Date())
  }
  
  useEffect(()=> {
    setTimeout(tick, 1000)
  },[date])

  return (
      <div className="current-time">
        <h1>{NOW(date)}</h1>
      </div>
  );
}
export default CurrentTime;