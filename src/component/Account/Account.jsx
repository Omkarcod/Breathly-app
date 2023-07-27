import React from 'react'
import { Typography, Box, ListItem, List } from "@mui/material";
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import Dam from './Dam'



const Account = () => {
  return (
  <> <Box
  style={{
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    marginLeft: "20px",
    color: "gray",
    marginBottom: "10px",
  }}
>
  <Link to="/settings">
    {" "}
    <ArrowBackIosIcon
      style={{ fontSize: "25px", textDecoration: "none", color: "gray" }}
    />
  </Link>
  <Typography style={{ fontSize: "20px", fontWeight: "bolder" }}>
  Account
  </Typography>
</Box>

<List>
          <ListItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  boxShadow: " 0 0 4px 0 #000",
                  borderRadius: "50%",
                  width: 30,
                }}
              >
                <Person2OutlinedIcon
                  style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
                />
              </Box>
              <Link to="/account" style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  style={{ marginLeft: 12, color: "black" ,fontSize:"18px"}}
                  component="span"
                >
               Your Name
                </Typography>
              </Link>
            </Box>
           <Typography style={{marginLeft:"80%",fontSize:"18px"}}> User</Typography>
            <KeyboardArrowRightOutlinedIcon
              style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
            />
           
          </ListItem>
        </List>



        <List>
          <ListItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  boxShadow: " 0 0 4px 0 #000",
                  borderRadius: "50%",
                  width: 34,
                }}
              >
                <LoginOutlinedIcon
                  style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
                />
              </Box>
              <Link to="/account" style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  style={{ marginLeft: 12, color: "black" ,fontSize:"18px"}}
                  component="span"
                >
              You'r signed in as
                </Typography>
              </Link>
            </Box>
           <Typography style={{marginLeft:"75%",fontSize:"18px"}}>{<Dam/>} </Typography>
            <KeyboardArrowRightOutlinedIcon
              style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
            />
           
          </ListItem>
        </List>


        <List>
          <ListItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  boxShadow: " 0 0 4px 0 #000",
                  borderRadius: "50%",
                  width: 30,
                }}
              >
                <LockOpenOutlinedIcon
                  style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
                />
              </Box>
              <Link to="/account" style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  style={{ marginLeft: 12, color: "black" ,fontSize:"18px"}}
                  component="span"
                >
              Change your password

                </Typography>
              </Link>
            </Box>
    
            <KeyboardArrowRightOutlinedIcon
              style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
            />
           
          </ListItem>
        </List>

        <List>
          <ListItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  boxShadow: " 0 0 4px 0 #000",
                  borderRadius: "50%",
                  width: 30,
                }}
              >
                <AutorenewOutlinedIcon
                  style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
                />
              </Box>
              <Link to="/account" style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  style={{ marginLeft: 12, color: "black" ,fontSize:"18px"}}
                  component="span"
                >
              Sync with Google Fit
                </Typography>
              </Link>
            </Box>
        
            <KeyboardArrowRightOutlinedIcon
              style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
            />
           
          </ListItem>
        </List>
  </>

    


  )
}

export default Account