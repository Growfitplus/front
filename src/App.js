import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"

// import TimerComponent from "./components/TimerComponent"

// styles
import './resources/css/App.css';
import "./resources/css/preLoading.css";

export default function App() {
  
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState('stopped');
  const [intervalo, setIntervalo] = useState(1500);

  const [loading, setloading] = useState(true);
  const [completed, setcompleted] = useState(false);

  useEffect(() => {
    console.log("status: ", status);

    if (status==='started') {
      if (time === 100) {
        
        if (loading || !completed) {
          setTimeout(() => {
            setloading(false);
            setcompleted(true);
          }, 1000);
        }

      } else {
  
        setTimeout(() => {
          setTime(time + 1);
        }, intervalo);

      }
    }
  }, [completed, intervalo, loading, status, time])

  useEffect(() => {
    setTimeout(async () => {
      setStatus('started');

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {

          console.log('ready!');
          setIntervalo(50);

        }).catch((error) => {

          console.log('error!');
          setIntervalo(50);
          
        });
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <span className={time===100?'contador-complete':'contador'}>{time}%</span>
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