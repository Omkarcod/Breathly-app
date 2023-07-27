import React from 'react';

import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, styled,Typography } from '@mui/material';
import { data } from '../data/data';
import Option from './Option';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 25px;
  color: #00008b;
  padding:8px 16px;
`;
function MeditationComponent(props) {
    return (
        <div>
           
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
      <Box style={{margin:"8px 16px"}}>
        <Grid container spacing={2} >
        {data.map(item=>(
                   <Grid item   xs={6} sm={6} md={4} lg={3} xl={3}  >
                   <Link to={`/songs/${item.id}`} style={{textDecoration:"none"}}> <Card sx={{maxWidth:340}}>
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

export default MeditationComponent;