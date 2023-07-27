// import { Padding } from "@mui/icons-material";
// import { Box, Divider, Grid, Typography, styled } from "@mui/material";
// import React from "react";

// const Footer = styled(Box)`
//   background: #002244;
//   padding:30px 70px;
//   margin: 5px 32px  5px 16px;
// `;
// const Col1 = styled(Typography)`
//   color: white;
//   font-weight: 500;
//   font-size: 20px;
//   & > p {
//     padding:8px;

//   }
// `
// function Option(props) {
//   return (
//     <Footer>
//       <Box style={{ display: "flex", justifyContent: "space-around" }}>
//         <Col1>
//           <Typography style={{fontWeight:700}}>Daily Meditation</Typography>
//           <Divider style={{ background: "blue", width:300,marginLeft:8}} />
//           <Typography>Sleep</Typography>
//           <Typography>Relax</Typography>
//           <Typography>calm</Typography>
//           <Typography>Mental Health</Typography>
//         </Col1>
//         <Col1>
//           <Typography style={{fontWeight:700}}>Sleep Meditation</Typography>
//           <Divider style={{ background: "blue", width:300,marginLeft:8}} />
//           <Typography>Peaceful Sleep</Typography>
//           <Typography>Gratitude sleep</Typography>
//           <Typography>Night Gratitude</Typography>
//           <Typography>Deep Sleep</Typography>
//         </Col1>
//         <Col1>
//           <Typography style={{fontWeight:700}}>Relax Meditation</Typography>
//           <Divider style={{ background: "blue", width:300,marginLeft:8}}/>
//           <Typography>Sleep Realaxation</Typography>
//           <Typography>Mental Relax</Typography>
//           <Typography>Nature Relax</Typography>
//           <Typography>Sky Walk</Typography>
//         </Col1>
//         <Col1>
//           <Typography style={{fontWeight:700}}>Calm Meditation</Typography>
//           <Divider style={{ background: "blue", width:300,marginLeft:8}}/>
//           <Typography>Mental Health</Typography>
//           <Typography>Mind Therapy</Typography>
//           <Typography>Heaven</Typography>
//           <Typography>Mental Relax</Typography>
//         </Col1>
//       </Box>
//       <Divider style={{ background:"blue",marginTop:15}}/>
//       <Box style={{marginTop:15,}}>
//         <Typography style={{color:"white",textAlign:"center"}}>@2023 Breathings. All Rights Reversed!</Typography>
//         <Typography style={{color:"white" ,margin:"15px 0px 20px 0px",textAlign:"center" }}>
//           Privcy Policy  Cookie Policy
//         </Typography>
//       </Box>
//     </Footer>
//   );
// }

// export default Option;

import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const FooterContainer = styled(Box)`
  width: 100%;
  background-color: #26262d;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  // padding: 10px 20px;
  color: white;
`;
const FooterHeading = styled(Box)`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;
const ListItem = styled("li")`
  margin: 20px 0;
  padding: 0;
  text-align: start;
  font-size: 18px;
`;
const FooterMainContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

`;

const FooterBottom = styled(Box)`
  text-align: center;
  margin: 20px 0px;
`;

const Footer = () => {
  return (
    <Box style={{ padding: " 0px 10px" }}>
      <FooterContainer>
        
        <FooterMainContainer>
          <Box>
            <FooterHeading>Daily Meditation</FooterHeading>
            <Divider color="white" />
            <Box>
              <ul style={{ listStyle: "none",padding:0 }}>
                <ListItem>Sleep</ListItem>
                <ListItem>Relax</ListItem>
                <ListItem>Calm</ListItem>
                <ListItem>Mental Health</ListItem>
              </ul>
            </Box>
          </Box>
          <Box>
            <FooterHeading>Sleep Meditation</FooterHeading>
            <Divider color="white" />
            <Box>
              <ul style={{ listStyle: "none",padding:0 }}>
              


                <ListItem>Peaceful Sleep</ListItem>
                <ListItem>Gratitude sleep</ListItem>
                <ListItem>Night Gratitude</ListItem>
                <ListItem>Deep Sleep</ListItem>
              </ul>
            </Box>
          </Box>
          <Box>
            <FooterHeading>Relax Meditation</FooterHeading>
            <Divider color="white" />
            <Box>
              <ul style={{ listStyle: "none" ,padding:0}}>
                <ListItem>Sleep Relaxation</ListItem>
                <ListItem>Mental Relax</ListItem>
                <ListItem>Nature Relax</ListItem>
                <ListItem>Sky Walk</ListItem>
              </ul>
            </Box>
          </Box>
          <Box>
            <FooterHeading>Calm Meditation</FooterHeading>
            <Divider color="white" />
            <Box>
              <ul style={{ listStyle: "none",padding:0 }}>
              <ListItem >Mental Health</ListItem>
                <ListItem >Mind Therapy</ListItem>
                <ListItem >Heaven</ListItem>
                <ListItem >Mentally Relax</ListItem>
             
              </ul>
            </Box>
          </Box>
        </FooterMainContainer>
        <Divider variant="middle" color="white" />
        <FooterBottom>
          <Typography style={{ marginBottom: "10px" }}>
            © 2023 Breathings. All Rights Reserved!
          </Typography>
          <Typography style={{ margin: "20px 0px" }}>
            Privacy Policy Cookie Policy
          </Typography>
        </FooterBottom>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
