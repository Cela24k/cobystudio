import './App.scss';
import DrawerAppBar from './Components/DrawerAppBar';
import { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import ColorRadioButtons from './Components/ColorRadiobuttons';

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
    </div>
  );
}

// <ColorRadioButtons/>

export default App;
