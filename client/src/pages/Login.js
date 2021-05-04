import React, {useState,useEffect} from 'react';

import {Button, Grid, Hidden, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import AlertSnackbar from "./utility/AlertSnackbar";
import Menu from "./Menu";

const loginStyle = makeStyles(theme =>({
    loginContainer:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex'
    },
    header:{
        marginBottom:'1.5rem'
    },
    label:{
        marginBottom:"0.3rem",
        display:"inline-block"
    },
    loginContent:{
        maxWidth:"450px"
    },
    loginImage:{
        background:"url('./assets/photos/f1d2e32ad77c9c983af281c12eee46567109a4f6.png')",
        backgroundPosition:"center",
        backgroundSize:"cover"
    },
    loginButton:{
        borderRadius:'50px',
        backgroundColor: 'black',
        padding: '.5rem',
        width: '8rem',
        fontSize: '1rem'
    }
}))

const LoginPage = () =>{

    const classes = loginStyle();
    const [errors,setErrors] = useState({error:''})
    const [showSnackbar,setShowSnackbar] = useState(false);
    const [loginData,setLoginData] = useState({data:{
            username:'',
            password:''
        }})

    const closeSnackbar=()=>{
        setShowSnackbar(false)
    }

    const setInput = (e) => {
        setLoginData({
            data:{
                ...loginData.data,
                [e.target.name]:e.target.value
            }
        })
    }

    const validate = () => {

        if(loginData.data.username === '' ||
            loginData.data.password ===''
        ){
            setErrors({error: 'Please enter username and password'})
            setShowSnackbar(true);
            return false;
        }else{
            return true;
        }
    }

    const authenticate = (e) =>{
        e.preventDefault();
        if(validate()){
            console.log("success")
        }else{
            console.log("failed");
        }
    }

    return(
        <>
            <Menu/>
            <Grid container style={{minHeight:"100vh"}}>
                <Grid item xs={12} md={6} className={classes.loginContainer}>
                    <Box className={classes.loginContent}>
                        <Box className={classes.header}>
                            <Typography variant="h3" component="h3">
                                Login
                            </Typography>
                        </Box>
                        <form autoComplete="off" onSubmit={authenticate}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <label className={classes.label}>EMAIL ADDRESS</label>
                                    <TextField
                                        required
                                        fullWidth
                                        name='username'
                                        id='username'
                                        type='email'
                                        variant='outlined'
                                        label='EMAIL ADDRESS'
                                        onChange={setInput}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <label className={classes.label}>PASSWORD</label>
                                    <TextField
                                        required
                                        fullWidth
                                        inputProps={{
                                            minLength:6
                                        }}
                                        name='password'
                                        id='password'
                                        type='password'
                                        variant='outlined'
                                        label='PASSWORD'
                                        onChange={setInput}/>
                                </Grid>
                                <Grid item xs={12}>
                                    Forgot password?
                                </Grid>
                                <Grid item xs={12}>
                                    <Button className={classes.loginButton} type="submit" variant="contained" color="primary">Login</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} md={6} className={classes.loginImage}>
                    </Grid>
                </Hidden>
            </Grid>
            <AlertSnackbar status={showSnackbar} message={errors.error} onclose={closeSnackbar}/>
        </>
    )
}

export default LoginPage;
