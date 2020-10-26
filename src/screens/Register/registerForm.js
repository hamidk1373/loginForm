import React from 'react'
import {useStyles} from './registerForm.style'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import { ThemeProvider  } from '@material-ui/core/styles'
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import clsx from 'clsx';
// import {Theme} from './registerForm.style'
import Checkbox from '@material-ui/core/Checkbox'
import {Link} from 'react-router-dom'




 

export default function RegisterForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,

    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <>
         
                <div className={classes.container}>
                    <p
                    className={classes.header}>
                    Sign Up
                   
                    </p> 
                    <div className={classes.transition}>
                    <form action="/signin" className={classes.loginForm}>
                        <TextField className={classes.fullName}
                            required
                            label="Full name"
                            placeholder=""
                            multiline   
                        />
                         
                        <TextField 
                            required
                            className={classes.address}
                            label="Email Address"
                            placeholder=""
                            multiline 
                            />
                            <TextField 
                            required
                            className={classes.username}
                            
                            label="Username"
                            placeholder=""
                            multiline 
                            />

                            <FormControl className={clsx(classes.password, classes.textField)} >
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input 
                                        id="standard-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                            </FormControl>
                            <FormControl className={clsx(classes.password, classes.textField)} >
                                    <InputLabel>Repeat Password</InputLabel>
                                    <Input 
                                        id="standard-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                            </FormControl>
                    <div className={classes.agreeTerm}>
                    
                            <Checkbox></Checkbox>
                            I agree to the Terms of Users 
                    </div>
                    <div>
                        <Button className={classes.signUpButton} variant="contained" color="primary">
                            Sign Up
                        </Button>
                    </div>
                         {/* <ThemeProvider theme={Theme}>  
                            <Button>Sign Up</Button>
                        </ThemeProvider> */}
                        <div className={classes.textBottom}>Do you have an account?</div> 
                    <div className={classes.signInUp}>
                    
                        <Link to='/loginForm'>
                            Sign In
                        </Link>
                    </div>
                    </form>   
                    
                   
                    </div>
                    
                    
                                
                </div>
           
        
        
        </>
    )
}
