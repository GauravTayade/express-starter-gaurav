import React, {useEffect, useState} from 'react';

import MenuPage from './Menu';
import PoolDialog from "./dashboardComponents/PoolDialog";

import {
  Avatar,
  Box,
  Card,
  Badge,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
  Button
} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import {makeStyles} from "@material-ui/core/styles";
import {Close} from "@material-ui/icons";

const dashStyle = makeStyles(theme => ({
  avatarSm: {
    width: '35px',
    height: '35px'
  },
  friendsContainer:{
    borderRight: 'solid 0.5px #e8e8e8'
  },
  contentContainer:{
    paddingLeft:'1rem'
  }
}));

const DashboardPage = (props) => {

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
      <MenuPage openDialog={openDialog}/>
      <Grid container style={{minHeight:'100vh'}}>
        <Grid item xs={3} className={classes.friendsContainer}>
          <Box mx={2} pt={4} pb={1}>
          <Typography variant="h4">
            Friends
          </Typography>
          </Box>
          <List>
            <ListItem>
              <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="user" src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
              </Badge>
              Demo user
            </ListItem>
            <ListItem>
              <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="user" src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
              </Badge>
              Demo user
            </ListItem>
            <ListItem>
              <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="user" src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
              </Badge>
              Demo user
            </ListItem>
            <ListItem>
              <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="user" src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
              </Badge>
              Demo user
            </ListItem>
            <ListItem>
              <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="user" src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
              </Badge>
              Demo user
            </ListItem>
            <ListItem>
              <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="user" src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
              </Badge>
              Demo user
            </ListItem>
            <ListItem>
              <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="user" src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
              </Badge>
              Demo user
            </ListItem>
            <ListItem>
              <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="user" src="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
              </Badge>
              Demo user
            </ListItem>
          </List>
        </Grid >
        <Grid item xs={9} className={classes.contentContainer}>
          <Box pt={4} pb={2}>
          <Grid container>
          <Grid item xs={6}>
            <Typography variant="h4">
              Pools
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <Button onClick={openDialog}>Create Pool</Button>
            </Box>
          </Grid>
          </Grid>
          </Box>
          <Grid container>
            <Grid item xs={4}>
              <Box boxShadow={3}>
              <Card>
                <Box pt={4} pb={1} justifyContent="center">
                  <Typography variant="h6" component="h6" align="center">
                    Which one is better?
                  </Typography>
                  <Typography variant="subtitle1" component="h6" color="textSecondary" align="center">
                    24 answers
                  </Typography>
                </Box>
                <Box px={4}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box pr={1}>
                        <CardMedia
                          component="img"
                          image="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box pl={1}>
                        <CardMedia
                          component="img"
                          image="/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png"/>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box display="flex" justifyContent="center">
                        <FavoriteBorderIcon/>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box display="flex" justifyContent="center">
                        <FavoriteBorderIcon/>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box pt={4} pb={2}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h4">
                    Friend List
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button>Create List</Button>
                  </Box>
                </Grid>
              </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item xs={4}>
                    <Box boxShadow={3}>
                    <Card xs={4}>
                      <Box px={3} py={1} borderBottom={1}>
                        <Grid container>
                          <Grid item xs={10}>
                            <Typography variant="h6" component="h6">
                              Fashion
                            </Typography>
                            <Typography variant="subtitle1" component="h6">
                              14 friends
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <SettingsIcon/>
                          </Grid>
                        </Grid>
                      </Box>
                      <CardContent>
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
                      </CardContent>
                    </Card>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <PoolDialog dialogStatus={dialogStatus} closeDialog={closeDialog}/>
    </>
  )

}

export default DashboardPage;
