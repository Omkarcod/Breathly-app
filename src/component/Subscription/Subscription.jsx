import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, Box, Button } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs centered value={value} aria-label="basic tabs example">
          <Tab
            sx={{ pl: { sm: 0, md: 20 }, pr: { sm: 2, md: 20 },fontWeight:'bolder'  }}
            onClick={() => handleChange(0)}
            label=" Community
          
            "
            {...a11yProps(0)}
          />
          <Tab
            sx={{ pl: { sm: 2, md: 20 }, pr: { sm: 2, md: 20 },fontWeight:'bolder'  }}
            onClick={() => handleChange(1)}
            label="  Pro
           "
            {...a11yProps(1)}
          />
          <Tab 
            sx={{ pl: { sm: 2, md: 20 }, pr: { sm: 2, md: 20 },fontWeight:'bolder' }}
            onClick={() => handleChange(2)}
            label=" Premium"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
            <Box style={{display: 'flex',alignItems:"center",textalign:"center",flexDirection: 'column'}}>
            <Typography align="center" style={{marginTop:'20px'}}>
          Get started with community. Enjoy free meditation at zero cost.
        </Typography>
        <Typography color="green" align="center" style={{marginTop:'20px'}}>
         <span style={{fontSize:'40px'}}> $0 </span>－ Free forever
        </Typography>
        <Button variant="contained" style={{marginTop:'20px'}}>EXPOLRE NOW</Button>
            </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
    <Box style={{display: 'flex',alignItems:"center",textalign:"center",flexDirection: 'column'}}>
    <Typography align="center" style={{marginTop:'20px'}}>
          Get started with breathly pro and enjoy lots of more features of
          meditation.
        </Typography>
        <Typography color="primary" align="center" style={{marginTop:'20px'}}>
        <span style={{fontSize:'40px'}}> $15  </span> / month
        </Typography>
        <Button m='auto' width='100%' variant="contained" style={{marginTop:'20px'}}>BUY PRO</Button>
    </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box style={{display: 'flex',alignItems:"center",textalign:"center",flexDirection: 'column'}}>
            <Typography align="center" style={{marginTop:'20px'}}>
            Get started with breathly premium & enjoy the most advanced features of meditation, as well as the highest priority for support.        </Typography>
        <Typography color="primary" align="center" style={{marginTop:'20px'}}>
        <span style={{fontSize:'40px'}}>  $25  </span> / month
        </Typography>
        <Button variant="contained" style={{marginTop:'20px'}}>BUY PRIMIUM</Button>
            </Box>
      </TabPanel>
    </Box>
  );
}
