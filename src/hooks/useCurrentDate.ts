import { useState, useEffect } from "react";

const ONE_SECOND = 1000;

function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, ONE_SECOND);

    return () => clearInterval(timer); // 컴포넌트가 언마운트되면 타이머를 정리
  }, []);

  return currentDate;
}

export default useCurrentDate;
