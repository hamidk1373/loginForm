import React from "react";
import { useStyles } from "./loginForm.style";
import {
  TextField,
  IconButton,
  InputAdornment,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const data = {
      email: values.email,
      password: values.password,
    };
    let statusCode;
    fetch("http://localhost:11111/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        statusCode = response.status;
        return response.json();
      })
      .then((JSONResponse) => {
        if (statusCode === 200) {
          toast.success(JSONResponse.data.message);
          localStorage.token = JSONResponse.data.token;
          history.push("/home");
        } else if (statusCode === 404) {
          toast.error(JSONResponse.message);
        } else {
          toast.error(JSONResponse.message);
        }
      })
      .catch((error) => {
        toast.error("Server error!!!");
      });
  };

  return (
    <Paper className={classes.container}>
      <Typography variant='h4' className={classes.header}>
        Welcome
      </Typography>
      <form onSubmit={handleSubmitForm} className={classes.loginForm}>
        <TextField
          name='email'
          // type='email'
          className={classes.emailAndPass}
          required
          label='Email or mobile number'
          onChange={handleChange("email")}
          value={values.email}
          fullWidth
        />
        <TextField
          name='password'
          className={classes.emailAndPass}
          required
          label='Password'
          fullWidth
          value={values.password}
          onChange={handleChange("password")}
          type={values.showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleClickShowPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type='submit'
          className={classes.logInBtn}
          variant='contained'
          color='primary'
          fullWidth
        >
          Log In
        </Button>

        <div className={classes.textBottom}>
          Don't have an account?
          <span className={classes.signup}>
            <Link to='/registerForm'>Sign UP</Link>
          </span>
        </div>
      </form>
    </Paper>
  );
}
