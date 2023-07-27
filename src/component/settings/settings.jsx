import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, Box, ListItem, List } from "@mui/material";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "20px",
          color: "gray",
          marginBottom: "10px",
        }}
      >
        <Link to="/">
          {" "}
          <ArrowBackIosIcon
            style={{ fontSize: "25px", textDecoration: "none", color: "gray" }}
          />
        </Link>
        <Typography style={{ fontSize: "20px", fontWeight: "bolder" }}>
          Settings
        </Typography>
      </Box>

      <Box>
        <List style={{lineHeight:"22px"}}>
          <ListItem
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Box
                style={{
                  boxShadow: " 0 0 10px 0 #000",
                  borderRadius: "50%",
                  width: 30,
                }}
              >
                <Person2OutlinedIcon
                  style={{ color: "rgb(2, 136, 209)",padding:"3px"}}
                />
              </Box>
              <Link to="/account" style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  style={{ marginLeft: 12, color: "black" }}
                  component="span"
                >
                  Account
                </Typography>
              </Link>
            </Box>
            <KeyboardArrowRightOutlinedIcon
              style={{ color: "gray", marginRight: "20px", fontSize: "26px" ,display:'flex',padding: "0px"}}
            />
          </ListItem>
        

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <VideoLibraryOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "26px",padding:"3px",marginLeft:"-2px" }}
              />
            </Box>
            <Link to='/Subscription' style={{textDecoration:"none"}}>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Manage Subscription
            </Typography></Link>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <CalendarMonthOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Reminders
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <DownloadOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Download over cellular
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <DarkModeOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Enable Dark Mode
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <BlockOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "26px",marginLeft:"2px",marginTop:"2px" }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Do not disturb
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <NotificationsActiveOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Push Notification
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <SupportAgentOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Support
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <InfoOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "24px",marginLeft:'4px',marginTop:'2px' }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              About
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <LockOpenOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "29px" }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Privacy Policy
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>

        <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box
              style={{
                boxShadow: " 0 0 10px 0 #000",
                borderRadius: "50%",
                width: 30,
              }}
            >
              <GavelOutlinedIcon
                style={{ color: "rgb(2, 136, 209)", fontSize: "26px",marginLeft:'2px' }}
              />
            </Box>
            <Typography
              style={{ marginLeft: 12, color: "black" }}
              component="span"
            >
              Terms & Condition
            </Typography>
          </Box>
          <KeyboardArrowRightOutlinedIcon
            style={{ color: "gray", marginRight: "20px", fontSize: "25px" }}
          />
        </ListItem>
        </List>
      </Box>

      <Typography style={{ textAlign: "center", color: "blue" }}>
        version 1.0
      </Typography>
    </>
  );
};

export default Settings;
