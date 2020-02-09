import React, { useState, useEffect } from 'react';
import './styles.css';
import dayjs from 'dayjs';

const CurrentTime = () => {
  const [date, dateSet] = useState(86400);

  const tick = () => {
    dateSet(dayjs().hour() * 3600 + dayjs().minute() * 60 + dayjs().second());
  };

  useEffect(() => {
    setTimeout(tick, 1000);
  }, [date]);

  return (
    <div className="current-time">
      <h1>remain : {86400 - date}</h1>
    </div>
  );
};
export default CurrentTime;
