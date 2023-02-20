import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './Components/DrawerAppBar';
import { LinearProgress } from '@mui/material';
import { useState, useEffect } from 'react';

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

function App() {
  const [progress, setProgress] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      setProgress(getScrollPercent());
    })
  }, [])

  return (
    <div className="App">
      <DrawerAppBar />
      <LinearProgress variant="determinate" value={progress} style={{transform: "rotate(90deg)"}}/>
    </div>
  );
}

export default App;
