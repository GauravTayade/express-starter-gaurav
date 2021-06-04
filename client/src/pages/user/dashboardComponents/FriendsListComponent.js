import React from "react";
import {Box, List, ListItem, Typography, Grid} from "@material-ui/core";
import AvatarComponent from "./AvatarComponent";
import {makeStyles} from "@material-ui/core/styles";

const avatarStyle = makeStyles(theme => ({
  avatarItem: {
    marginLeft: '0px',
    paddingLeft: '0px'
  }
}));

const FriendsListComponent = (props) => {

  const classes = avatarStyle();

  const imagPath = "/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png";
  const username = "Demo User";

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
            <AvatarComponent imageUrl={imagPath} username={username}/>
          </ListItem>
        </List>
      </Grid>
    </Box>
  )

}

export default FriendsListComponent;
