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

  useEffect(() => {
    async function preloadModels() {
      const promises = models.map(async (model) => {
        const response = await fetch(model);
        const buffer = await response.arrayBuffer();
        const url = URL.createObjectURL(new Blob([buffer]));
        return url;
      });
      await Promise.all(promises);
    }
    preloadModels();
  }, [])

  return (
    <div className="App">
      <DrawerAppBar />
    </div>
  );
}

// <ColorRadioButtons/>

export default App;
