import React, { useContext } from 'react'
import {
  TextField,
  IconButton,
  InputAdornment,
  Paper,
  Button,
  Typography
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useStyles } from './loginForm.style'
import { request } from '../../helpers/request'
import { AuthorizationContext } from '../../contexts/Authorization'

export default function LoginForm() {
  const classes = useStyles()
  const history = useHistory()
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false
  })

  const { setIsLoggedIn, isLoggedIn } = useContext(AuthorizationContext)

  if (isLoggedIn) {
    history.replace('/home')
  }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const data = {
      email: values.email,
      password: values.password
    }
    request('/auth/login', 'POST', data).then(
      ({ statusCode, JSONResponse }) => {
        if (statusCode === 200) {
          toast.success(JSONResponse.data.message)
          localStorage.token = JSONResponse.data.token
          setIsLoggedIn(true)
          history.replace('/home')
        } else if (statusCode === 404) {
          toast.error(JSONResponse.message)
        } else {
          toast.error(JSONResponse.message)
        }
      }
    )
  }

  return (
    <Paper className={classes.container}>
      <Typography variant="h4" className={classes.header}>
        Welcome
      </Typography>
      <form onSubmit={handleSubmitForm} className={classes.loginForm}>
        <TextField
          name="email"
          // type='email'
          className={classes.emailAndPass}
          required
          label="Email or mobile number"
          onChange={handleChange('email')}
          value={values.email}
          fullWidth
        />
        <TextField
          name="password"
          className={classes.emailAndPass}
          required
          label="Password"
          fullWidth
          value={values.password}
          onChange={handleChange('password')}
          type={values.showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button
          type="submit"
          className={classes.logInBtn}
          variant="contained"
          color="primary"
          fullWidth
        >
          Log In
        </Button>

        <div className={classes.textBottom}>
          Don&apos;t have an account?
          <span className={classes.signup}>
            <Link to="/registerForm">Sign UP</Link>
          </span>
        </div>
      </form>
    </Paper>
  )
}
