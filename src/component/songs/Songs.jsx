import { Box, Typography, styled } from "@mui/material";
import React from "react";

import { useParams } from "react-router-dom";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {data} from "../../data/data"

const Container = styled(Box)`
height: 100vh;
  background-image: linear-gradient(
    64.3deg,
    rgba(254, 122, 152, 0.81) 17.7%,
    rgba(255, 206, 134, 1) 64.7%,
    rgba(172, 253, 163, 0.64) 112.1%
  );
  text-align: center;
`;
const Wrapper = styled(Box)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Icons = styled(Box)`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Songs = () => {
   const {id} = useParams();
   const itemId = parseInt(id)
   const item = data.find((item)=> item.id === itemId)
    
  return (
    <Container>
    
      <Wrapper>
        <Box style={{ color: "blue", fontWeight: "bolder",marginTop:"20px" }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
       
            <SelfImprovementOutlinedIcon style={{ fontSize: 30 }} />
            {item.title}
          </Typography>
        </Box>

        <Box style={{marginTop:'10px'}}>
          <img
            style={{ width: 200, height: 200, borderRadius: "70%" }}
            src={item.image}
            alt="vgg"
          />

          <Typography style={{ color: "black",marginTop:'10px' }}>Live From Space</Typography>
          <Typography style={{ color: "gray",marginTop:'10px' }}>Mr.Udhav Jadhav</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
            {
                item.audio.map((song)=>(

                    <audio style={{ marginTop: "20px" }} controls src={song}></audio>
                ))
            }
          
        </Box>

        <Icons style={{marginTop:"30px"}} >
          <FavoriteBorderOutlinedIcon />
          <PlaylistAddOutlinedIcon />
          <AccessAlarmsOutlinedIcon />
          <MoreVertOutlinedIcon />
        </Icons>
      </Wrapper>
    </Container>
  );
};

export default Songs;
