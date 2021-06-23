import React from 'react';
import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {makeStyles} from "@material-ui/core/styles";

const poolStyle = makeStyles(theme=>({
  btnRounded:{
    border: '1px solid #e8e8e8',
    borderRadius: '25px',
    padding: '0.5rem 1rem'
  }
}));

const PoolComponent = (props) => {

  const classes = poolStyle();

  return(
    <>
    <Box pt={4} pb={2}>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h4">
            Pools
          </Typography>
        </Grid>
        <Grid container xs={2} justify="center">
          <Box display="flex" justifyContent="flex-end">
            <Button onClick={props.openDialog} className={classes.btnRounded}>Create Pool</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
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
    </>
  )
}

export default PoolComponent;


