import { useState, useEffect, useRef } from 'react';
import { interval, fromEvent } from 'rxjs';
import { debounceTime, map, buffer, filter } from 'rxjs/operators';
import './index.css';

function App() {
  const initTimerState = {
    hours: '00',
    minutes: '00',
    seconds: '00',
    counter: 0,
  };

  const [timerValue, setTimerValue] = useState(initTimerState);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    const timerObs = interval(1000);

    const timerSub = timerObs.subscribe(() => {
      if (timerActive) {
        setTimerValue(({ counter }) => {
          const newCounter = counter + 1;
          const secondCounter = newCounter % 60;
          const minuteCounter = Math.floor((newCounter / 60) % 60);
          const hourCounter = Math.floor(newCounter / 3600);

          const computedSecond =
            String(secondCounter).length === 1
              ? `0${secondCounter}`
              : secondCounter;
          const computedMinute =
            String(minuteCounter).length === 1
              ? `0${minuteCounter}`
              : minuteCounter;
          const computedHour =
            String(hourCounter).length === 1 ? `0${hourCounter}` : hourCounter;

          return {
            hours: computedHour,
            minutes: computedMinute,
            seconds: computedSecond,
            counter: newCounter,
          };
        });
      }
    });

    return () => timerSub.unsubscribe();
  }, [timerActive, timerValue.counter]);

  const buttonWait = useRef(null);

  useEffect(() => {
    const waitObserver = fromEvent(buttonWait.current, 'click');
    const bufferTime = waitObserver.pipe(debounceTime(300));

    const click = waitObserver.pipe(
      buffer(bufferTime),
      map(clicks => {
        return clicks.length;
      }),
      filter(clicksDone => clicksDone === 2),
    );

    const clickSub = click.subscribe(() => {
      setTimerActive(() => false);
    });

    return () => clickSub.unsubscribe();
  }, []);

  const startHandler = () => {
    setTimerActive(timerActive => !timerActive);
  };

  const resetHandler = () => {
    setTimerValue(initTimerState);
  };

  const { hours, minutes, seconds } = timerValue;

  return (
    <>
      <div className="container">
        <p className="time">{`${hours}:${minutes}:${seconds}`}</p>
        <ul className="controls">
          <li>
            <button
              className={timerActive ? 'reset' : 'start'}
              onClick={startHandler}
            >
              {timerActive ? 'Stop' : 'Start'}
            </button>
          </li>
          <li>
            <button className="wait" ref={buttonWait}>
              Wait
            </button>
          </li>
          <li>
            <button className="reset" onClick={resetHandler}>
              Reset
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
