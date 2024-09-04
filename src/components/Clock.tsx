import useCurrentDate from '../hooks/useCurrentDate';
import "../styles/Clock.css";

const MONTH_BASE = 1;
const FINAL_STRING_LENGTH = 2;
const ZERO_PADDING_CHAR = "0";
const WEEK_DAYS = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];


function Clock() {
  const date = useCurrentDate();

  const year = date.getFullYear();
  const month = String(date.getMonth() + MONTH_BASE).padStart(
    FINAL_STRING_LENGTH,
    ZERO_PADDING_CHAR
  );
  const day = String(date.getDate()).padStart(
    FINAL_STRING_LENGTH,
    ZERO_PADDING_CHAR
  );
  const weekDay = WEEK_DAYS[date.getDay()];

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <div className="clock-wrap">
      <p>
        {formattedDate} <small>{weekDay}</small>
      </p>
    </div>
  );
}

export default Clock;
