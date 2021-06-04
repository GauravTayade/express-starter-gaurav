import React, {useEffect, useState} from 'react'
import {
  Box,
  Grid,
  Typography,
  Button
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

import PollCardComponent from "./dashboardComponents/PollCardComponenet";
import AlertSnackbar from "../utility/AlertSnackbar";

const profileStyle = makeStyles(theme => ({
  profilePicture: {
    height: '256px',
    width: '256px',
    border: '5px solid white',
    borderRadius: '1rem',
    position: 'absolute',
    bottom: '2rem',
    transitionProperty: 'bottom',
    transitionDuration: '0.4s',
    transitionTimingFunction: 'ease-in',
    '&:hover': {
      bottom: '2.5rem',
    }
  },
  profileHeader: {
    minHeight: '35rem',
    position: 'relative',
    // backgroundImage:'url("https://w.wallhaven.cc/full/k7/wallhaven-k78l1d.jpg")',
    backgroundImage: 'url("/assets/images/profile-background.jpg")',
    backgroundPosition: 'center top',
    backgroundAttachment: 'fixed',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  btnCommon: {
    marginTop: '1rem',
    padding: '0.5rem 1rem'
  },
  pollCard: {
    maxWidth: '345px',
    boxShadow: 'rgba(0,0,0,0.24) 0px 3px 8px'
  }
}))

const ProfilePage = (props) => {

  const classes = profileStyle();
  const [polls, setPolls] = useState();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [deleteResponse, setDeleteResponse] = useState('');

  const auth = true;

  const closeSnackbar = () => {
    setShowSnackbar(false)
  }

  const deletePoll = (pollid) => {
    axios.post(process.env.REACT_APP_API_URL + '/poll/delete', {'pollId': pollid})
      .then(response => {
        if (response.data.status === 1) {
          setDeleteResponse(response.data)
          setShowSnackbar(true);
          getPolls();
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getPolls = () => {
    axios.get(process.env.REACT_APP_API_URL + '/poll/all')
      .then(response => {
        setPolls(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getPolls();
  }, [])

  return (
    <>
      {auth ?
        <Box>
          <Grid container>
            <Grid container xs={12} className={classes.profileHeader} justify="center">
              <img alt="profile" className={classes.profilePicture}
                   src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"/>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Typography variant="h2" component="h2" align="center">
                Jhon Doe
              </Typography>
              <Typography variant="h5" component="h5" align="center">
                Oakville, ON
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid container xs={12} justify="center">
              <Button className={classes.btnCommon} variant="contained" color="primary">Send Message</Button>
            </Grid>
            {polls ?
              polls.polls.map(poll => {
                return <PollCardComponent poll={poll} deletePoll={deletePoll}/>
              })
              :
              'no polls'
            }
          </Grid>
        </Box>
        :
        <Box>
          <Grid container>
            <Grid item container xs={12} className={classes.profileHeader} justify="center">
              <img alt="profile" className={classes.profilePicture}
                   src="https://www.pearsoncollege.ca/wp-content/uploads/2019/12/placeholder-profile.jpg"/>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Typography variant="h2" component="h2" align="center">
                ----
              </Typography>
              <Typography variant="h5" component="h5" align="center">
                ----
              </Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item container xs={12} justify="center">
              <Button className={classes.btnCommon} variant="contained" color="primary">Send Friend Request</Button>
            </Grid>
          </Grid>
        </Box>
      }
      <AlertSnackbar status={showSnackbar} message={deleteResponse.message} onclose={closeSnackbar}/>
    </>
  )
}

export default ProfilePage;
