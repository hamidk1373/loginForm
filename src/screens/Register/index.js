import React, { useState } from 'react'
import {
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
  TextField,
  // Divider,
  Checkbox,
  Radio,
  Divider,
  FormControlLabel,
  RadioGroup
} from '@material-ui/core'
import { toast } from 'react-toastify'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { request } from '../../helpers/request'
import { useStyles } from './registerForm.style'

// import { ThemeProvider  } from '@material-ui/core/styles'
// import {Theme} from './registerForm.style'

export default function RegisterForm() {
  const classes = useStyles()
  const history = useHistory()
  const [emailError, setEmailError] = useState(false)
  const [emailErrorText, setEmailErrorText] = useState('')
  const [firstNameErrorText, setFirstNameErrorText] = useState('')
  const [fNameErr, setfNameErr] = useState(false)
  const [lastNameErrorText, setLastNameErrorText] = useState('')
  const [lastNameErr, setLastNameErr] = useState(false)
  const [userNameErrorText, setUserNameErrorText] = useState('')
  const [userNameError, setUserNameError] = useState(false)
  const [passErrorText, setPassErrorText] = useState('')
  const [passError, setPassError] = useState(false)
  const [repeatPassErrorText, setRepeatPassErrorText] = useState('')
  const [repeatPassError, setRepeatPassError] = useState(false)
  const [streetErr, setstreetErr] = useState(false)
  const [streetErrorText, setStreetErrorText] = useState('')
  const [streetNumberErr, setstreetNumberErr] = useState(false)
  const [streetNumberErrorText, setStreetNumberErrorText] = useState('')
  // const [additionalAddressErr, setadditionalAddressErr] = useState(false)
  // const [additionalAddressErrorText, setadditionalAddressErrorText] = useState("")
  const [postCodeErr, setPostCodeErr] = useState(false)
  const [postCodeErrorText, setPostCodeErrorText] = useState('')
  const [cityErr, setCityErr] = useState(false)
  const [cityErrorText, setCityErrorText] = useState('')
  const [phoneErr, setPhoneErr] = useState(false)
  const [phoneErrorText, setPhoneErrorText] = useState('')
  const [birthdayErr, setBirthdayErr] = useState(false)
  const [birthdayErrorText, setBirthdayErrorText] = useState('')
  // const [gender, setGender] = useState("")

  const [values, setValues] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    street: '',
    streetNumber: '',
    additionalAddress: '',
    postCode: '',
    city: '',
    email: '',
    phone: '',
    birthday: null,
    userName: '',
    password: '',
    repeatPass: '',
    showPassword: false,
    showRepeatPass: false,
    agreeterm: false,
    agreetermtext: false
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleChangeDate = (date) => {
    setValues({ ...values, birthday: date })
  }

  const handleFirstName = (event) => {
    const firstNameValue = event.target.value

    if (firstNameValue === '') {
      setfNameErr(true)
      setFirstNameErrorText('*required field')
    } else {
      setfNameErr(false)
      setFirstNameErrorText('')
    }
    if (/[^a-zA-Z]/.test(firstNameValue)) {
      setfNameErr(true)
      setFirstNameErrorText('Invalid characters')
    }

    // if(firstNameValue.lenght>10){
    //       setfNameErr(true)
    //       setFirstNameErrorText('Invalid characters');
    //     }
  }

  const handleLastName = (event) => {
    const lastNameValue = event.target.value
    if (lastNameValue === '') {
      setLastNameErr(true)
      setLastNameErrorText('*required field')
    } else {
      setLastNameErr(false)
      setLastNameErrorText('')
    }
  }

  const handleStreet = (event) => {
    const streetValue = event.target.value
    if (streetValue === '') {
      setstreetErr(true)
      setStreetErrorText('*required field')
    } else {
      setstreetErr(false)
      setStreetErrorText('')
    }
  }
  const handleStreetNumber = (event) => {
    const streetNumberValue = event.target.value
    if (streetNumberValue === '') {
      setstreetNumberErr(true)
      setStreetNumberErrorText('*required field')
    } else {
      setstreetNumberErr(false)
      setStreetNumberErrorText('')
    }
  }
  // const handleadditionalAddress=(event)=>{
  //     const additionalAddressValue = event.target.value
  //     if(!additionalAddressValue){
  //         setadditionalAddressErr(true)
  //         setadditionalAddressErrorText('*required field')
  //     }else{
  //         setadditionalAddressErr(false)
  //         setadditionalAddressErrorText('')
  //     }
  // }

  const handlePostCode = (event) => {
    const postCodeValue = event.target.value
    if (!postCodeValue) {
      setPostCodeErr(true)
      setPostCodeErrorText('*required field in format number')
    } else {
      setPostCodeErr(false)
      setPostCodeErrorText('')
    }
  }

  const handleCity = (event) => {
    const cityValue = event.target.value
    if (!cityValue) {
      setCityErr(true)
      setCityErrorText('*required field')
    } else {
      setCityErr(false)
      setCityErrorText('')
    }
  }

  const handlePhone = (event) => {
    const phoneValue = event.target.value
    if (!phoneValue) {
      setPhoneErr(true)
      setPhoneErrorText('*required field')
    } else {
      setPhoneErr(false)
      setPhoneErrorText('')
    }
  }
  const handleBirthday = (event) => {
    const birthdayValue = event.target.value
    if (!birthdayValue) {
      setBirthdayErr(true)
      setBirthdayErrorText('*required field')
    } else {
      setBirthdayErr(false)
      setBirthdayErrorText('')
    }
  }

  const handleChangeEmail = (event) => {
    const { value } = event.target
    if (value === '') {
      setEmailError(true)
      setEmailErrorText('*required field')
    } else if (value) {
      const regex = /^[a-zA-Z0-9_]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

      setEmailError(!regex.test(value))
      if (!regex.test(value)) {
        setEmailErrorText('The Email format isnot correct !')
      } else {
        setEmailErrorText('')
      }
    }
  }

  const handleUserName = (event) => {
    const userNameValue = event.target.value
    if (!userNameValue) {
      setUserNameError(true)
      setUserNameErrorText('*required field')
    } else {
      setUserNameError(false)
      setUserNameErrorText('')
    }
  }

  const handlePassword = (event) => {
    const passValue = event.target.value
    if (!passValue) {
      setPassError(true)
      setPassErrorText('*required field')
    } else {
      setPassError(false)
      setPassErrorText('')
    }
  }

  const handleRepeatPassword = (event) => {
    const repeatPassValue = event.target.value
    if (!repeatPassValue) {
      setRepeatPassError(true)
      setRepeatPassErrorText('*required field')
    } else {
      setRepeatPassError(false)
      setRepeatPassErrorText('')
    }
    if (repeatPassValue !== values.password) {
      setRepeatPassError(true)
      setRepeatPassErrorText("password doesn't match")
    }
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleShowRepeatPass = () => {
    setValues({ ...values, showRepeatPass: !values.showRepeatPass })
  }
  // const [checked, setchecked] = useState({
  //   woman: true,
  //   man: true,
  // })
  // const handleChangeChecked = (event)=>{
  //   setchecked({...checked, [event.target.name]:event.target.checked})
  // }
  // console.log(checked)

  const handleSubmitForm = (event) => {
    event.preventDefault()

    const data = {
      gender: values.gender,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      birthday: values.birthday,
      street: values.street,
      streetNumber: values.streetNumber,
      additionalAddress: values.additionalAddress,
      postCode: values.postCode,
      city: values.city,
      email: values.email,
      userName: values.userName,
      password: values.password
    }
    request('/auth/register', 'POST', data).then(
      ({ statusCode, JSONResponse }) => {
        if (statusCode === 200) {
          toast.success(JSONResponse.data.message)
          localStorage.token = JSONResponse.data.token
          history.replace('/loginForm')
        } else if (statusCode === 404) {
          toast.error(JSONResponse.message)
        } else {
          toast.error(JSONResponse.message)
        }
      }
    )
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper className={classes.container}>
        <Typography variant="h4" className={classes.header}>
          Sign Up{' '}
        </Typography>

        <form onSubmit={handleSubmitForm} className={classes.registerForm}>
          <div className={classes.gender}>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={values.gender}
              onChange={handleChange('gender')}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
            </RadioGroup>
          </div>
          <Divider variant="fullWidth" />

          <TextField
            variant="outlined"
            name="firstName"
            className={classes.textfieldInfoRegister}
            required
            label="First name"
            value={values.name}
            onChange={handleChange('firstName')}
            onBlur={handleFirstName}
            fullWidth
            error={fNameErr}
            helperText={firstNameErrorText}
            // InputProps={{
            //     classes: {
            //       input: classes.resize,
            //     },
            //   }}
          />

          <TextField
            variant="outlined"
            name="lastName"
            className={classes.textfieldInfoRegister}
            required
            label="Last name"
            value={values.lastName}
            onChange={handleChange('lastName')}
            onBlur={handleLastName}
            fullWidth
            error={lastNameErr}
            helperText={lastNameErrorText}
          />
          <div>
            <TextField
              variant="outlined"
              name="phone"
              className={classes.phone}
              required
              label="Phone"
              value={values.phone}
              onChange={handleChange('phone')}
              onBlur={handlePhone}
              error={phoneErr}
              helperText={phoneErrorText}
              fullWidth
            />
            <KeyboardDatePicker
              name="birthday"
              format="dd/MM/yyyy"
              value={values.birthday}
              inputVariant="outlined"
              onChange={handleChangeDate}
              label="Birthday"
              onBlur={handleBirthday}
              className={classes.birthday}
              required
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              error={birthdayErr}
              helperText={birthdayErrorText}
              fullWidth
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              name="street"
              className={classes.street}
              required
              label="Street"
              value={values.street}
              onChange={handleChange('street')}
              onBlur={handleStreet}
              error={streetErr}
              helperText={streetErrorText}
            />
            <TextField
              variant="outlined"
              name="streetNumber"
              className={classes.streetNumber}
              required
              label="Nr"
              value={values.streetNumber}
              onChange={handleChange('streetNumber')}
              onBlur={handleStreetNumber}
              error={streetNumberErr}
              helperText={streetNumberErrorText}
            />
          </div>

          <TextField
            variant="outlined"
            name="additionalAddress"
            className={classes.textfieldInfoRegister}
            label="Additional address"
            value={values.additionalAddress}
            onChange={handleChange('additionalAddress')}
            // onBlur = { handleadditionalAddress}
            // error = { additionalAddressErr }
            // helperText = { additionalAddressErrorText }

            fullWidth
          />

          <div>
            <TextField
              variant="outlined"
              name="postCode"
              className={classes.postCode}
              required
              label="ZIP"
              value={values.postCode}
              onChange={handleChange('postCode')}
              onBlur={handlePostCode}
              error={postCodeErr}
              helperText={postCodeErrorText}
            />
            <TextField
              variant="outlined"
              name="city"
              className={classes.city}
              required
              label="City"
              value={values.city}
              onChange={handleChange('city')}
              onBlur={handleCity}
              error={cityErr}
              helperText={cityErrorText}
            />
          </div>
          <TextField
            variant="outlined"
            name="email"
            required
            className={classes.textfieldInfoRegister}
            label="Email"
            value={values.email}
            onChange={handleChange('email')}
            onBlur={handleChangeEmail}
            fullWidth
            error={emailError}
            helperText={emailErrorText}
          />

          <TextField
            variant="outlined"
            name="userName"
            className={classes.textfieldInfoRegister}
            required
            label="User name"
            value={values.username}
            onChange={handleChange('userName')}
            onBlur={handleUserName}
            fullWidth
            error={userNameError}
            helperText={userNameErrorText}
          />

          <TextField
            variant="outlined"
            name="password"
            className={classes.textfieldInfoRegister}
            required
            label="Password"
            fullWidth
            value={values.password}
            onChange={handleChange('password')}
            onBlur={handlePassword}
            error={passError}
            helperText={passErrorText}
            type={values.showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {' '}
                    {values.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}{' '}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <TextField
            variant="outlined"
            name="repeatPass"
            className={classes.textfieldInfoRegister}
            required
            label="Repeat Password"
            fullWidth
            value={values.repeatPass}
            onChange={handleChange('repeatPass')}
            onBlur={handleRepeatPassword}
            error={repeatPassError}
            helperText={repeatPassErrorText}
            type={values.showRepeatPass ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowRepeatPass}>
                    {' '}
                    {values.showRepeatPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>{' '}
                </InputAdornment>
              )
            }}
          />

          <Button
            type="submit"
            className={classes.signUpButton}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign Up
          </Button>
          <FormControlLabel
            className={classes.agreeTerm}
            control={
              <Checkbox
                checked={values.agreetrm}
                onChange={handleChange('agreeterm')}
                color="primary"
                required
              />
            }
            label="I agree to the Terms of Users"
          />
          <div className={classes.textHaveAccount}>
            Do you have an account ?
            <span className={classes.signIn}>
              <Link to="/loginForm"> Sign In </Link>
            </span>
          </div>
        </form>
      </Paper>
    </MuiPickersUtilsProvider>
  )
}
