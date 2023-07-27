import React from 'react';

import { Box, Button,  Paper, styled,Typography } from '@mui/material';



import { Link } from 'react-router-dom';

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding:8px 16px;
`;



const Musical = () => {
  return (
   <>
    <Paper elevation={20}>
        <Component>
          <i class="fa-solid fa-arrow-left"></i>
          <Typography style={{ fontSize: 25, fontWeight: 600, color: "#00008B" }}>Meditation</Typography>
          <i class="fa-solid fa-stopwatch-20"></i>
        </Component>
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
         <Link to='/meditation'> <Button style={{color:'black',fontSize:'18px'}}>All</Button>   </Link>
         <Link to='/nature' > <Button style={{color:'black',fontSize:'18px'}}>Nature</Button></Link>
         <Link to='/musical' > <Button style={{color:'black',fontSize:'18px'}}>Musical</Button></Link>
         <Link to='/category'> <Button style={{color:'black',fontSize:'18px'}}>Category</Button></Link>
        </Box>   
      </Paper>
      <Typography align='center' style={{marginTop:'30px' ,fontSize:'30px'}} >Musical Works</Typography>


   </>
  )
}

export default Musical