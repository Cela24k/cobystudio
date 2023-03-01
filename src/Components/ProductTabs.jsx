import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';

export default function ProductTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{height:'10vh',bgcolor:'transparent' }}
      >
        <Tab icon={<Avatar alt="test avatar" src="/Bomber.webp"/>} />
        <Tab icon={<Avatar alt="test avatar" src="/logo512.png"/>} />
        <Tab icon={<Avatar alt="test avatar" src="/pc.png"/>} />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}