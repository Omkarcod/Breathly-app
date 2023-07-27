import React from "react";

import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, Typography, styled } from "@mui/material";
import { sleepData } from "../data/data";
import Option from "./Option";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding:8px 16px;
`;
function Sleep(props) {
  return (
    <div>
      
      <Paper elevation={20}>
        <Component>
          <i class="fa-solid fa-arrow-left"></i>
          <Typography style={{ fontSize: 25, fontWeight: 600, color: "#00008B" }}>Sleep</Typography>
          <i class="fa-solid fa-stopwatch-20"></i>
        </Component>
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to='/'> <Button style={{color:'black',fontSize:'18px'}}>All</Button></Link>
       <Link to='/myfav'>   <Button style={{color:'black',fontSize:'18px'}}>MyFavorite</Button></Link>
         <Link to='/stories'><Button style={{color:'black',fontSize:'18px'}}>Stories</Button></Link> 
         <Link to='/music'><Button style={{color:'black',fontSize:'18px'}}>Music</Button></Link> 
        </Box>   
      </Paper>
      <Box style={{margin:"8px 16px"}}>
        <Grid container spacing={2} >
                {sleepData.map(item=>(
                   <Grid item  xs={6} sm={6} md={4} lg={3} xl={3}   >
                   <Link to={`/sleepsong/${item.id}`} style={{textDecoration:"none"}}>
                   <Card sx={{maxWidth:340}}>
                        <CardMedia image={item.image} sx={{height:165}}/>
                        <CardContent>
                            <Typography style={{fontSize:20}}>{item.title}</Typography>
                            <Typography style={{fontSize:14,color:"gray"}}>{item.subTitle}</Typography>
                        </CardContent>
                    </Card>
                   </Link>
                    </Grid>
                ))} 
            </Grid>
        </Box>
        <Option/>
        <Footer/>
    </div>
  );
}

export default Sleep;
