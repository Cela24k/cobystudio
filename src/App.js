import './App.css';
import DrawerAppBar from './Components/DrawerAppBar';
import { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';

// TODO: file del logo con il computer; foto dell'avatar; file in gltf; 

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

// <div className="App">
//       <DrawerAppBar />
//       <LinearProgress variant="determinate" value={progress} style={{top: '64px',left:0, width:'100vw', position:'fixed'}}/>
//   </div>

export default App;
