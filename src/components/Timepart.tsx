import React from "react";
import { useState } from "react";
import { DateTime } from "luxon";

const Timepart = () => {
  const [myTime, setMyTime] = useState(
    DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
  );

  var timerID = setInterval(() => tick(), 1000);
  function tick() {
    setMyTime(
      DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
    );
  }
  return (
    <>
      <div>{myTime}</div>
    </>
  );
};

export default Timepart;
