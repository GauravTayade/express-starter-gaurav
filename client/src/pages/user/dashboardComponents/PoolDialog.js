import React, {useEffect, useState} from 'react';
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
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";

const dialogStyle = makeStyles(theme => ({
  label: {
    marginBottom: "0.3rem",
    display: "inline-block"
  },
  dropper: {
    height: '200px',
    width: '200px',
    border: '1px solid #e8e8e8',
    backgroundImage: "url('/assets/photos/image_placeholder.png')",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    margin: '2rem'
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
  }
}))

const PoolDialog = (props) => {

  const classes = dialogStyle();

  const dragOver = (e) => {
    e.preventDefault();
  }
  const dragEnter = (e) => {
    e.preventDefault();
  }
  const dragLeave = (e) => {
    e.preventDefault();
  }

  const handleFileDrop = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <Dialog open={props.isDialogOpen} fullWidth={true} maxWidth="md">
        <DialogTitle id="customized-dialog-title">
          <Typography variant="h4" align="center">
            Create a Poll
          </Typography>
          <CloseIcon className={classes.closeBtn} onClick={props.closeDialog}/>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={5}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <label className={classes.label}>Question:</label>
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    name='question'
                    id='question'
                    type='text'
                    variant='outlined'
                    label='Question'/>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    <label className={classes.label}>Friend List</label>
                  </Typography>
                  <FormControl variant='outlined' fullWidth>
                    <InputLabel>Friend List</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Age">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <Grid container>
                <div className={classes.dropper}
                     onDragOver={dragOver}
                     onDragEnter={dragEnter}
                     onDragLeave={dragLeave}
                     onDrop={handleFileDrop}>
                </div>
                <div className={classes.dropper}
                     onDragOver={dragOver}
                     onDragEnter={dragEnter}
                     onDragLeave={dragLeave}
                     onDrop={handleFileDrop}>
                </div>
              </Grid>
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

export default PoolDialog;
