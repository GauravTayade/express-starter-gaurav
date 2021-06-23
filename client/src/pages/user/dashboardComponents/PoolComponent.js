import React from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const PoolComponent = () => {

  return(
    <Grid item xs={3}>
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
  )
}

export default PoolComponent;


