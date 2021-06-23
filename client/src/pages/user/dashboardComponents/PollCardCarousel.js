import React from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {makeStyles} from "@material-ui/core/styles";

const pollCardCarousalStyle = makeStyles({
  cardShadow:{
    boxShadow:'rgba(0,0,0,0.24) 0px 3px 8px'
  },
  cardImg:{
    maxWidth:'200px',
    maxHeight:'200px'
  },
  cardPoll:{
    maxWidth:'420px',
    margin:'10px'
  }
});

const PollCardCarousel = (props) =>{

  const poll = props.pollData;

  const classes = pollCardCarousalStyle();
  return(
    <Grid item xs={12}>
      <Box className={[classes.cardShadow,classes.cardPoll]}>
        <Card elevation="0">
          <Box pt={4} pb={1} justifyContent="center">
            <Typography variant="h6" component="h6" align="center">
              {poll.pollQuestion}
            </Typography>
            <Typography variant="subtitle1" component="h6" color="textSecondary" align="center">
              {poll.vote1+poll.vote1} Answers
            </Typography>
          </Box>
          <Box px={4}>
            <Grid container>
              {
                poll.images.map(image=>{
                  return (
                    <Grid item xs={6}>
                      <Box pr={1}>
                        <CardMedia
                          className={classes.cardImg}
                          component="img"
                          image={image}/>
                      </Box>
                    </Grid>
                  )
                })
              }
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

export default PollCardCarousel;
