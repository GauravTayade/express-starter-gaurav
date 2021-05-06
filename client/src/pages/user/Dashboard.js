import React, {useEffect, useState} from 'react';

import MenuPage from './Menu';
import PoolDialog from "./dashboardComponents/PoolDialog";
import PoolComponent from "./dashboardComponents/PoolComponent";
import ListComponent from "./dashboardComponents/ListComponent";

import {
  Box,
  Grid,
  Typography,
  Button
} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";
import FriendListDialog from "./dashboardComponents/FriendListDialog";
import FriendsComponent from "./dashboardComponents/FriendsComponent";

const dashStyle = makeStyles(theme => ({

  friendsContainer:{
    borderRight: 'solid 0.5px #e8e8e8'
  },
  contentContainer:{
    paddingLeft:'1rem'
  },
  btnRounded:{
    border: '1px solid #e8e8e8',
    borderRadius: '25px',
    padding: '0.5rem 1rem'
  }
}));

const DashboardPage = (props) => {

  const classes = dashStyle();
  const [dialogStatus,setDialogStatus] = useState(false);
  const [friendListDialogStatus,setFriendListDialogStatus] = useState(false);

  const closeDialog = () =>{
    setDialogStatus(false)
  }

  const openDialog= () =>{
    setDialogStatus(true)
  }

  const openFriendListDialog = () =>{
    setFriendListDialogStatus(true)
  }

  const closeFriendListDialog = () => {
    setFriendListDialogStatus(false)
  }

  return (
    <>
      <MenuPage openDialog={openDialog}/>
      <Grid container style={{minHeight:'100vh'}}>
        <Grid item xs={2} className={classes.friendsContainer}>
          <FriendsComponent/>
        </Grid >
        <Grid item xs={10} className={classes.contentContainer}>
          <Box pt={4} pb={2}>
          <Grid container>
          <Grid item xs={10}>
            <Typography variant="h4">
              Pools
            </Typography>
          </Grid>
          <Grid container xs={2} justify="center">
            <Box display="flex" justifyContent="flex-end">
              <Button onClick={openDialog} className={classes.btnRounded}>Create Pool</Button>
            </Box>
          </Grid>
          </Grid>
          </Box>
          <Grid container>
            <PoolComponent/>
            <Grid item xs={12}>
              <Box pt={4} pb={2}>
              <Grid container>
                <Grid item xs={10}>
                  <Typography variant="h4">
                    Friend List
                  </Typography>
                </Grid>
                <Grid item container xs={2} justify="center">
                  <Box display="flex" justifyContent="flex-end">
                    <Button className={classes.btnRounded} onClick={openFriendListDialog}>Create List</Button>
                  </Box>
                </Grid>
              </Grid>
              </Box>
              <Box>
                <Grid container>
                  <ListComponent/>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <PoolDialog
        dialogStatus={dialogStatus}
        closeDialog={closeDialog}/>
      <FriendListDialog
        dialogStatus={friendListDialogStatus}
        closeDialog={closeFriendListDialog}/>
    </>
  )

}

export default DashboardPage;
