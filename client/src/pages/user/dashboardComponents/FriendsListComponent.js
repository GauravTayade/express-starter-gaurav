import React, {useContext, useEffect} from "react";
import {Box, List, ListItem, Typography, Grid} from "@material-ui/core";
import axios  from "axios";

import AvatarComponent from "./AvatarComponent";
import {makeStyles} from "@material-ui/core/styles";
import UserContext from "../../../contexts/UserContext";

const avatarStyle = makeStyles(theme => ({
  avatarItem: {
    marginLeft: '0px',
    paddingLeft: '0px'
  }
}));

const axiosClient = axios.create({
  baseURL:process.env.REACT_APP_API_URL
})

const FriendsListComponent = (props) => {

  const classes = avatarStyle();
  const imagPath = "/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png";

  const user = useContext(UserContext);

  useEffect(()=>{
    axiosClient.get(`/friend/all?userid=${user.userInfo.id}`)
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })
  },[])
  
  return (
    <Box ml={6}>
      <Grid container justify="left">
        <Box pt={3} pb={2}>
          <Typography variant="h4">
            Friends
          </Typography>
        </Box>
      </Grid>
      <Grid container justify="left">
        <List>
          <ListItem className={classes.avatarItem}>
            <AvatarComponent imageUrl={imagPath} username=''/>
          </ListItem>
        </List>
      </Grid>
    </Box>
  )

}

export default FriendsListComponent;
