import React from 'react';
import AvatarComponent from "./AvatarComponent";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  DialogActions,
  Button,
  Typography,
  Box,
  TextField,
  FormControl,
  ListItem,
  List
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";
import {Close} from "@material-ui/icons";

const axiosClient = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
  timeout:1000,
})

const dialogStyle = makeStyles(theme => ({
  root:{
    overflow:"hidden",
  },
  label: {
    marginBottom: "0.3rem",
    display: "inline-block"
  },
  dialogBottom: {
    justifyContent: 'center',
    marginBottom: '1.5rem'
  },
  btnBlack: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '25px',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingRight: '2rem',
    paddingLeft: '2rem'
  },
  btnCloseDialog: {
    right: '5px',
    position: 'absolute',
    top: '5px'
  },
  btnAdd:{
    marginLeft:'1rem',
    borderRadius:'1rem',
  },
  avatarSm: {
    width: '35px',
    height: '35px'
  },
  btnClose:{
    paddingRight: '1rem',
    color: 'rgba(0, 0, 0, 0.54)'
  },
}))

const DialogCreateFriendList = (props) => {

  const classes = dialogStyle();
  const imagPath = "/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png";
  const username = "Demo User";

  const addFriend = (userId) =>{
    axiosClient.post('/user/friend/add',{'userid':userId})
      .then(result => {
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
    console.log(userId);
  }

  const removeFriend = (userId) =>{
    axiosClient.post('/user/friend/remove',{'userid':userId})
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
  }

  return (
    <>
      <Dialog open={props.dialogStatus} fullWidth={true} maxWidth="md">
        <DialogTitle id="customized-dialog-title">
          <Typography variant="h4" align="center">
            Create a Friend List
          </Typography>
          <CloseIcon className={classes.btnCloseDialog} onClick={props.closeDialog}/>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <label className={classes.label}>Friend List Name:</label>
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    name='listname'
                    id='listname'
                    type='text'
                    variant='outlined'
                    label='Friend List Name'/>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <label className={classes.label}>Friends</label>
                  </Typography>
                  <FormControl variant='outlined' fullWidth>
                    <TextField
                      required
                      fullWidth
                      name='friendSearch'
                      id='friendSearch'
                      type='text'
                      variant='outlined'
                      label='Search friend by name'/>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <List>
                <ListItem>
                  <Close className={classes.btnClose} onClick={()=>removeFriend(7862763)}/>
                  <AvatarComponent imageUrl={imagPath} username={username}/>
                  <Button onClick={()=>addFriend(987897897)} className={classes.btnAdd} variant="contained" color="primary">Add</Button>
                </ListItem>
                <ListItem>
                  <Close className={classes.btnClose}/>
                  <AvatarComponent imageUrl={imagPath} username={username}/>
                  <Button className={classes.btnAdd} variant="contained" color="primary">Add</Button>
                </ListItem>
                <ListItem>
                  <Close className={classes.btnClose}/>
                  <AvatarComponent imageUrl={imagPath} username={username}/>
                  <Button className={classes.btnAdd} variant="contained" color="primary">Add</Button>
                </ListItem>
                <ListItem>
                  <Close className={classes.btnClose}/>
                  <AvatarComponent imageUrl={imagPath} username={username}/>
                  <Button className={classes.btnAdd} variant="contained" color="primary">Add</Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogBottom}>
          <Box alignItems="center">
            <Button variant="contained" className={classes.btnBlack}>CREATE</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  )

}

export default DialogCreateFriendList;
