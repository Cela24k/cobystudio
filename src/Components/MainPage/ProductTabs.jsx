import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';

export default function ProductTabs(props) {
  const [value, setValue] = React.useState(0);
  const tabs = ['models/gltf/cube_robot/scene.gltf','models/gltf/coffee/scene.gltf','models/gltf/headphones/scene.gltf'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.tabEvent(tabs[newValue]);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'transparent'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs"
        sx={{height:'100%',bgcolor:'transparent' }}
      >
        <Tab icon={<Avatar alt="Bomber avatar" src="/Bomber.webp"/>} />
        <Tab icon={<Avatar alt="Cafe avatar" src="/Cafe.webp"/>} />
        <Tab icon={<Avatar alt="Headphones avatar" src="/Cuffie.webp"/>} />
      </Tabs>
    </Box>
  );
}