import React, {useState} from 'react';

import MenuPage from './Menu';
import FriendsComponent from "./dashboardComponents/FriendsComponent";
import PoolComponent from "./dashboardComponents/PoolComponent";
import ListComponent from "./dashboardComponents/ListComponent";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const dashStyle = makeStyles(theme => ({
  friendsContainer: {
    borderRight: 'solid 0.5px #e8e8e8'
  },
  contentContainer: {
    paddingLeft: '1rem'
  },
  btnRounded: {
    border: '1px solid #e8e8e8',
    borderRadius: '25px',
    padding: '0.5rem 1rem'
  }
}));

const DashboardPage = () => {

  const classes = dashStyle();

  const [dialogStatus,setDialogStatus] = useState(false);

  const closeDialog = () =>{
    setDialogStatus(false)
  }

  const openDialog= () =>{
    setDialogStatus(true)
  }

  return (
    <>
      <MenuPage openDialog={openDialog} dialogStatus={dialogStatus} closeDialog={closeDialog}/>
      <Grid container style={{minHeight: '100vh'}}>
        <Grid item xs={2} className={classes.friendsContainer}>
          <FriendsComponent/>
        </Grid>
        <Grid item xs={10} className={classes.contentContainer}>
          <PoolComponent openDialog={openDialog} dialogStatus={dialogStatus} closeDialog={closeDialog}/>
          <ListComponent/>
        </Grid>
      </Grid>

    </>
  )

}

export default DashboardPage;
