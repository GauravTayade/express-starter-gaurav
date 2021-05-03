import React from 'react';
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
  Badge,
  Avatar,
  List
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";
import {Close} from "@material-ui/icons";

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
  closeBtn: {
    right: '5px',
    position: 'absolute',
    top: '5px'
  },
  avatarSm: {
    width: '35px',
    height: '35px'
  }
}))

const FriendListDialog = (props) => {

  const classes = dialogStyle();

  return (
    <>
      <Dialog open={props.dialogStatus} fullWidth={true} maxWidth="md">
        <DialogTitle id="customized-dialog-title">
          <Typography variant="h4" align="center">
            Create a Friend List
          </Typography>
          <CloseIcon className={classes.closeBtn} onClick={props.closeDialog}/>
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
                  <Close/>
                  <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                    <Avatar className={classes.avatarSm} alt="user"
                            src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
                  </Badge>
                  Demo user
                </ListItem>
                <ListItem>
                  <Close/>
                  <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                    <Avatar alt="user" className={classes.avatarSm}
                            src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
                  </Badge>
                  Demo user
                </ListItem>
                <ListItem>
                  <Close/>
                  <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                    <Avatar alt="user" className={classes.avatarSm}
                            src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
                  </Badge>
                  Demo user
                </ListItem>
                <ListItem>
                  <Close/>
                  <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                    <Avatar alt="user" className={classes.avatarSm}
                            src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
                  </Badge>
                  Demo user
                </ListItem>
                <ListItem>
                  <Close/>
                  <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                    <Avatar alt="user" className={classes.avatarSm}
                            src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
                  </Badge>
                  Demo user
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

export default FriendListDialog;
