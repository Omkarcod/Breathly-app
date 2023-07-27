import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { data } from '../data/data';
import { Link } from 'react-router-dom';


const MainBox2=styled(Box)`
${'' /* border:1px solid; */}
display:flex;
flex-direction:column;
justify-content:space-around;
padding:16px;
`
const MeditationText = styled(Box)`
${'' /* border:1px solid; */}
font-size:25px;
font-weight:500;
color:#00008B;
`

function Meditation(props) {

    return (
        <MainBox2>
            <MeditationText>
                 <i class="fa-solid fa-spa" style={{fontSize:"25px ",margin:"10px 7px 10px 0px"}}></i>Meditation
            </MeditationText>
            <Divider style={{margin:"16px 0px"}}/>
            <Grid container spacing={2}>
                {data.map(item=>(
                   <Grid item  xs={6} sm={6} md={4} lg={3} xl={3}  >
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
        </MainBox2>
    );
}

export default Meditation;