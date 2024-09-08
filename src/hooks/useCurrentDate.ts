import { useState, useEffect } from "react";

const ONE_DAY = 86400000;
const NEXT_DAY = 1;
const HOURS = 0;
const MINUTES = 0;
const SECONDS = 0;

function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => setCurrentDate(new Date());

    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + NEXT_DAY,
      HOURS,
      MINUTES,
      SECONDS
    );
    const timeToMidnight = nextMidnight.getTime() - now.getTime();

    const timer = setTimeout(() => {
      updateDate();
      setInterval(updateDate, ONE_DAY);
    }, timeToMidnight);

    updateDate();

    return () => clearInterval(timer);
  }, []);

  return currentDate;
}

export default useCurrentDate;
