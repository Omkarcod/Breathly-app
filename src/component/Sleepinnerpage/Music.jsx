import React from 'react'
import { Link } from "react-router-dom";
import { Box, Button, Paper, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding:8px 16px;
`;
const Music = () => {
  return (
  <>
   <Paper elevation={20}>
        <Component>
          <i class="fa-solid fa-arrow-left"></i>
          <Typography style={{ fontSize: 25, fontWeight: 600, color: "#00008B" }}>sleep</Typography>
          <i class="fa-solid fa-stopwatch-20"></i>
        </Component>
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to='/sleep'> <Button style={{color:'black',fontSize:'18px'}}>All</Button></Link>
       <Link to='/myfav'>   <Button style={{color:'black',fontSize:'18px'}}>MyFavorite</Button></Link>
         <Link to='/stories'><Button style={{color:'black',fontSize:'18px'}}>Stories</Button></Link> 
         <Link to='/music'><Button style={{color:'black',fontSize:'18px'}}>Music</Button></Link> 
        </Box>   
      </Paper>
      <Typography align='center' style={{marginTop:'30px' ,fontSize:'30px'}} >Music</Typography>
  </>
  )
}

export default Music;