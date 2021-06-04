import React, {useState} from "react";
import {Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import AvatarComponent from "./AvatarComponent";
import DialogCreateFriendList from "./DialogCreateFriendList";

const ListComponentStyle = makeStyles(theme => ({
  avatarSm: {
    width: '35px',
    height: '35px'
  },
  btnClose: {
    paddingRight: '1rem',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  btnSettings: {
    margin: 'auto',
    color: 'rgba(0,0,0,0.54)'
  },
  btnRounded:{
    border: '1px solid #e8e8e8',
    borderRadius: '25px',
    padding: '0.5rem 1rem'
  },
  cardShadow:{
    boxShadow:'rgba(0,0,0,0.24) 0px 3px 8px'
  }
}))

const ListComponent = (props) => {

  const classes = ListComponentStyle();

  const [friendListDialogStatus,setFriendListDialogStatus] = useState(false);

  const openFriendListDialog = () =>{
    setFriendListDialogStatus(true)
  }

  const closeFriendListDialog = () => {
    setFriendListDialogStatus(false)
  }

  const imagPath = "/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png";
  const username = "Demo User";

  return (
    <>
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
              <Button onClick={openFriendListDialog} className={classes.btnRounded} >Create List</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>

          <Grid item xs={3}>
            <Box className={classes.cardShadow}>
              <Card xs={4} elevation="0">
                <Box px={3} py={1} borderBottom={1}>
                  <Grid container>
                    <Grid item xs={11}>
                      <Typography variant="h5" component="h5">
                        Fashion
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="h6">
                        14 friends
                      </Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.btnSettings}>
                      <SettingsIcon/>
                    </Grid>
                  </Grid>
                </Box>
                <CardContent>
                  <List>
                    <ListItem>
                      <Close className={classes.btnClose}/>
                      <AvatarComponent imageUrl={imagPath} username={username}/>
                    </ListItem>
                    <ListItem>
                      <Close className={classes.btnClose}/>
                      <AvatarComponent imageUrl={imagPath} username={username}/>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  <DialogCreateFriendList
    dialogStatus={friendListDialogStatus}
    closeDialog={closeFriendListDialog}/>
  </>
  )

}

export default ListComponent;
