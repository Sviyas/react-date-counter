/* eslint-disable react/prop-types */
import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className='App'>
      <Steps />
    </div>
  );
}

function Counter({ getStepsCounter = 1 }) {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(() => count + getStepsCounter);
  };

  const decrementHandler = () => {
    setCount(() => count - getStepsCounter);
  };

  const getDates = getFilterFutureDate(count);

  return (
    <>
      <div className='counter'>
        <button className='b1' onClick={decrementHandler}>
          -
        </button>
        <label htmlFor='counter'>{getDates}</label>
        <button className='b2' onClick={incrementHandler}>
          +
        </button>
      </div>
    </>
  );
}

function Steps() {
  const [steps, setSteps] = useState(0);

  const increaseStep = () => {
    setSteps(() => steps + 1);
  };

  const decreaseStep = () => {
    setSteps(() => steps - 1);
  };
  return (
    <>
      <div className='steps'>
        <button className='b3' onClick={decreaseStep}>
          -
        </button>
        <p>The current step is : {steps}</p>
        <button className='b4' onClick={increaseStep}>
          +
        </button>
      </div>
      <Counter getStepsCounter={steps} />
    </>
  );
}

export const getFilterFutureDate = futDate => {
  const getCurDate = new Date();

  // ? set full year
  getCurDate.setFullYear(2027);

  // ? set users Future Date
  getCurDate.setDate(futDate);

  const [day, date, month, year] = getCurDate.toDateString().split(' ').splice(0, 4);

  const [pureDay] = day.split(',').splice(0, 1);

  return `${day} days from today is ${pureDay} ${month} ${date} ${year}`;
};

