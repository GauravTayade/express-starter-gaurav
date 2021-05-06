import React from "react";
import {Avatar, Badge, Box, Card, CardContent, Grid, List, ListItem, Typography} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import AvatarComponent from "./AvatarComponent";

const ListComponentStyle = makeStyles(theme=>({
  avatarSm: {
    width: '35px',
    height: '35px'
  },
  btnClose:{
    paddingRight: '1rem',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  btnSettings:{
    margin:'auto',
    color:'rgba(0,0,0,0.54)'
  }
}))

const ListComponent = (props) => {

  const classes = ListComponentStyle();

  const imagPath = "/assets/photos/65338712f1d88aa91c7d53e73f1596addb4caad7.png";
  const username = "Demo User";

  return(
    <Grid item xs={3}>
      <Box boxShadow={3}>
        <Card xs={4}>
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
  )

}

export default ListComponent;
