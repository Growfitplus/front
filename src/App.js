/* eslint-disable no-loop-func */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"

// import TimerComponent from "./components/TimerComponent"

// styles
import './resources/css/App.css';
import "./resources/css/preLoading.css";

export default function App() {

  const [time, setTime] = useState(0);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    let newTime = 0;
    let interval;

    interval = setInterval(() => {
      newTime = (newTime + 1);

      if (newTime <= 100) {
        setTime(newTime);
      } else {
        setloading(false);
        clearInterval(interval);
      }
    }, 80);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <span className={time === 100 ? 'contador-complete' : 'contador'}>{time}%</span>
          {/* <div className="half-spinner"></div> */}
        </div>
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="*" Component={HomePage} />
            </Routes>
          </Router>
        </>
      )}
    </>
  )
}