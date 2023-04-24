import './App.scss';
import DrawerAppBar from './Components/DrawerAppBar';
import { LinearProgress } from '@mui/material';
import ColorRadioButtons from './Components/ColorRadiobuttons';
import { useEffect } from 'react';

const models = [
  'Cafe.glb',
  'Cuffie.glb',
];

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
    </div>
  );
}

// <ColorRadioButtons/>

export default App;
