import styled from 'styled-components';
import { months } from '../utils/helper';

interface Props {
  day: string;
  month: number;
  year: string;
}

const DateCard = ({ day, month, year }: Props) => {
  return (
    <Wrapper>
      <div className="day">{day}</div>
      <div>
        <div className="month">{months[month]}</div>
        <div className="year">{year}</div>
      </div>
    </Wrapper>
  );
};

export default DateCard;

const Wrapper = styled.div`
  border: 1px solid #ddd;
  width: 200px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .day {
    font-size: 48px;
    margin: 0px 10px;
    color: #2ab6b6;
  }

  .month {
    font-weight: bold;
  }
`;
