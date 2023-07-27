import React from 'react';

import { Box, Button, Paper, styled,Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding:8px 16px;
`;

const Favourite = () => {
  return (
    <div>
             <Paper elevation={20}>
        <Component>
          <i class="fa-solid fa-arrow-left"></i>
          <Typography style={{ fontSize: 25, fontWeight: 600, color: "#00008B" }}>Relax</Typography>
          <i class="fa-solid fa-stopwatch-20"></i>
        </Component>
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to='/relax'>  <Button  style={{color:'black',fontSize:'18px'}}>All</Button>  </Link>
        <Link to='/fav'>  <Button style={{color:'black',fontSize:'18px'}}>Favorite</Button></Link>
        <Link to='/bigginer'>  <Button style={{color:'black',fontSize:'18px'}}>Bigginers</Button></Link>
        <Link to='/self'>  <Button style={{color:'black',fontSize:'18px'}}>self-Calm</Button></Link>
        </Box>   
      </Paper>
      <Typography align='center' style={{marginTop:'30px' ,fontSize:'30px'}} >Favourite Works!</Typography>
    </div>
  )
}

export default Favourite;