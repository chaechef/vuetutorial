import React, {useState, useEffect} from 'react';
import './styles.css'
import dayjs from 'dayjs'

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
        <h1>{dayjs().format('YYYY MM-DD HH:mm:ss')}</h1>
      </div>
  );
}
export default CurrentTime;