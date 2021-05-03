import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import UserContext from "../../contexts/UserContext";

import {
  Toolbar,
  AppBar,
  Button,
  IconButton,
  Box,
  Container,
  Avatar,
  Menu,
  MenuItem
} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

const menuStyle = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    width:'100%',
  },
  iconImage: {
    width: '68px',
    height: '68px'
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent:"space-between"
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#000"
  },
  menuOptions:{
    alignItems:"center",
    justifyContent:"end",
    display:"inline-flex"
  },
  linkStyle:{
    textDecoration: 'none',
    color: '#000'
  }
}));

const MenuPage = (props) => {

  const classes = menuStyle();
  const userContext = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar fluid position="static" className={classes.appBar}>
        <Toolbar>
          <Container maxWidth="false" className={classes.navDisplayFlex}>
            <IconButton edge="start">
              <img alt="logo" className={classes.iconImage} src="/assets/photos/icon.jpg"/>
            </IconButton>
            <Box className={classes.menuOptions}>
            <Button>
              <Link className={classes.linkStyle} to='/user/friends'>Friends</Link>
            </Button>
            <Button>
              <Link className={classes.linkStyle} to='/user/friends_pool'>Friends Pool</Link>
            </Button>
            <Button onClick={props.openDialog}>
              Create Pool
            </Button>
            <Button>
              <Link className={classes.linkStyle} to='/user/opinion'>Opinion</Link>
            </Button>
            <div p={2}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar alt={userContext.userInfo.name}
                        src="/assets/photos/610f7a940f59d5cef71f3de7754a70a1411d8bb8.png"/>
                {userContext.userInfo.name}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )

}

export default MenuPage;
